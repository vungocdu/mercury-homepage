import mailchimp from '@mailchimp/mailchimp_marketing'
import crypto from 'crypto'

// Validate Mailchimp configuration
const validateMailchimpConfig = () => {
  const apiKey = process.env.MAILCHIMP_API_KEY
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID

  if (!apiKey) {
    console.warn('⚠️ MAILCHIMP_API_KEY not found - Mailchimp features will be disabled')
    return false
  }
  if (!serverPrefix) {
    console.warn('⚠️ MAILCHIMP_SERVER_PREFIX not found - Mailchimp features will be disabled')
    return false
  }
  if (!audienceId) {
    console.warn('⚠️ MAILCHIMP_AUDIENCE_ID not found - Mailchimp features will be disabled')
    return false
  }

  return true
}

// Configure Mailchimp only if credentials are available
const isMailchimpConfigured = validateMailchimpConfig()

if (isMailchimpConfigured) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY!,
    server: process.env.MAILCHIMP_SERVER_PREFIX!, // e.g., 'us1'
  })
  console.log('✅ Mailchimp configured successfully')
} else {
  console.log('⚠️ Mailchimp not configured - operating in fallback mode')
}

export interface MailchimpContact {
  email: string
  firstName?: string
  lastName?: string
  tags?: string[]
  mergeFields?: Record<string, unknown>
}

export interface MailchimpCampaign {
  listId: string
  subject: string
  fromName: string
  fromEmail: string
  templateId?: number
  content?: {
    html?: string
    text?: string
  }
}

interface MailchimpError {
  status: number
  response?: {
    body?: {
      title?: string
      detail?: string
    }
  }
}

class MailchimpService {
  private listId = process.env.MAILCHIMP_AUDIENCE_ID || ''
  private isConfigured = isMailchimpConfigured

  // Validate email format
  private validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validate contact data
  private validateContact(contact: MailchimpContact): void {
    if (!contact.email) {
      throw new Error('Email is required for Mailchimp contact')
    }
    if (!this.validateEmail(contact.email)) {
      throw new Error('Invalid email format for Mailchimp contact')
    }
  }

  // Check if service is available
  private ensureConfigured(): void {
    if (!this.isConfigured) {
      throw new Error('Mailchimp is not configured. Please check environment variables.')
    }
  }

  // Add subscriber to Mailchimp list
  async addSubscriber(contact: MailchimpContact): Promise<unknown> {
    try {
      this.ensureConfigured()
      this.validateContact(contact)

      console.log(`📧 Adding subscriber to Mailchimp: ${contact.email}`)

      const response = await mailchimp.lists.addListMember(this.listId, {
        email_address: contact.email,
        status: 'subscribed',
        merge_fields: {
          FNAME: contact.firstName || '',
          LNAME: contact.lastName || '',
          ...contact.mergeFields,
        },
        tags: contact.tags || [],
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const subscriberId = (response as any).id
      console.log('✅ Successfully added subscriber to Mailchimp:', subscriberId)
      return response
    } catch (error: unknown) {
      // Handle specific Mailchimp errors
      if (this.isMailchimpError(error)) {
        const mailchimpError = error as MailchimpError
        
        // If subscriber already exists, update them instead
        if (mailchimpError.status === 400 && 
            mailchimpError.response?.body?.title === 'Member Exists') {
          console.log('👤 Subscriber exists, updating instead...')
          return this.updateSubscriber(contact)
        }
        
        console.error('❌ Mailchimp API error:', {
          status: mailchimpError.status,
          title: mailchimpError.response?.body?.title,
          detail: mailchimpError.response?.body?.detail,
          email: contact.email
        })
      } else {
        console.error('❌ Unexpected error adding subscriber to Mailchimp:', error)
      }
      
      // Don't throw for non-critical Mailchimp errors - just log them
      console.warn('⚠️ Continuing without Mailchimp subscription for:', contact.email)
      return null
    }
  }

  // Type guard for Mailchimp errors
  private isMailchimpError(error: unknown): error is MailchimpError {
    return typeof error === 'object' && 
           error !== null && 
           'status' in error && 
           'response' in error
  }

  // Update existing subscriber
  async updateSubscriber(contact: MailchimpContact): Promise<unknown> {
    try {
      this.ensureConfigured()
      this.validateContact(contact)

      const subscriberHash = crypto.createHash('md5').update(contact.email.toLowerCase()).digest('hex')
      
      console.log(`🔄 Updating subscriber in Mailchimp: ${contact.email}`)

      const response = await mailchimp.lists.updateListMember(
        this.listId,
        subscriberHash,
        {
          email_address: contact.email,
          status: 'subscribed',
          merge_fields: {
            FNAME: contact.firstName || '',
            LNAME: contact.lastName || '',
            ...contact.mergeFields,
          },
        }
      )

      // Add tags if provided
      if (contact.tags && contact.tags.length > 0) {
        try {
          await this.addTagsToSubscriber(contact.email, contact.tags)
        } catch (tagError) {
          console.warn('⚠️ Failed to add tags, but subscriber updated:', tagError)
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const subscriberId = (response as any).id
      console.log('✅ Successfully updated subscriber in Mailchimp:', subscriberId)
      return response
    } catch (error) {
      console.error('❌ Error updating subscriber in Mailchimp:', {
        email: contact.email,
        error: error instanceof Error ? error.message : error
      })
      // Don't throw - return null to indicate failure but continue
      return null
    }
  }

  // Add tags to subscriber
  async addTagsToSubscriber(email: string, tags: string[]): Promise<unknown> {
    try {
      this.ensureConfigured()
      
      if (!email || !this.validateEmail(email)) {
        throw new Error('Valid email is required for adding tags')
      }
      
      if (!tags || tags.length === 0) {
        console.log('📌 No tags to add for:', email)
        return null
      }

      const subscriberHash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex')
      
      console.log(`🏷️ Adding tags to subscriber ${email}:`, tags)

      const response = await mailchimp.lists.updateListMemberTags(
        this.listId,
        subscriberHash,
        {
          tags: tags.map(tag => ({ name: tag.trim(), status: 'active' }))
        }
      )

      console.log('✅ Successfully added tags to subscriber:', tags)
      return response
    } catch (error) {
      console.error('❌ Error adding tags to subscriber:', {
        email,
        tags,
        error: error instanceof Error ? error.message : error
      })
      // Don't throw - just log the error
      return null
    }
  }

  // Create email campaign
  async createCampaign(campaign: MailchimpCampaign): Promise<unknown> {
    try {
      this.ensureConfigured()
      
      // Validate campaign data
      if (!campaign.subject || !campaign.fromName || !campaign.fromEmail) {
        throw new Error('Campaign subject, fromName, and fromEmail are required')
      }

      console.log('📧 Creating Mailchimp campaign:', campaign.subject)

      const response = await mailchimp.campaigns.create({
        type: 'regular',
        recipients: {
          list_id: campaign.listId || this.listId,
        },
        settings: {
          subject_line: campaign.subject,
          from_name: campaign.fromName,
          reply_to: campaign.fromEmail,
          template_id: campaign.templateId,
        },
      })

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const campaignId = (response as any).id

      // Set campaign content if provided
      if (campaign.content) {
        try {
          await mailchimp.campaigns.setContent(campaignId, campaign.content)
          console.log('✅ Campaign content set successfully')
        } catch (contentError) {
          console.error('❌ Failed to set campaign content:', contentError)
          throw contentError
        }
      }

      console.log('✅ Successfully created Mailchimp campaign:', campaignId)
      return response
    } catch (error) {
      console.error('❌ Error creating Mailchimp campaign:', {
        subject: campaign.subject,
        error: error instanceof Error ? error.message : error
      })
      throw error
    }
  }

  // Send campaign
  async sendCampaign(campaignId: string): Promise<unknown> {
    try {
      this.ensureConfigured()
      
      if (!campaignId) {
        throw new Error('Campaign ID is required')
      }

      console.log('🚀 Sending Mailchimp campaign:', campaignId)

      const response = await mailchimp.campaigns.send(campaignId)
      console.log('✅ Successfully sent Mailchimp campaign:', campaignId)
      return response
    } catch (error) {
      console.error('❌ Error sending Mailchimp campaign:', {
        campaignId,
        error: error instanceof Error ? error.message : error
      })
      throw error
    }
  }

  // Get campaign stats
  async getCampaignStats(campaignId: string): Promise<unknown> {
    try {
      this.ensureConfigured()
      
      if (!campaignId) {
        throw new Error('Campaign ID is required')
      }

      console.log('📊 Getting campaign stats for:', campaignId)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (mailchimp as any).reports.getCampaignReport(campaignId)
      
      console.log('✅ Successfully retrieved campaign stats')
      return response
    } catch (error) {
      console.error('❌ Error getting campaign stats:', {
        campaignId,
        error: error instanceof Error ? error.message : error
      })
      // Don't throw - return empty stats
      return {
        emails_sent: 0,
        opens: { unique_opens: 0 },
        clicks: { unique_clicks: 0 }
      }
    }
  }

  // Get list statistics
  async getListStats(): Promise<unknown> {
    try {
      this.ensureConfigured()
      
      console.log('📊 Getting list stats for audience:', this.listId)

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (mailchimp as any).lists.getList(this.listId)
      
      const stats = {
        memberCount: response.stats?.member_count || 0,
        unsubscribeCount: response.stats?.unsubscribe_count || 0,
        cleanedCount: response.stats?.cleaned_count || 0,
        openRate: response.stats?.open_rate || 0,
        clickRate: response.stats?.click_rate || 0,
      }

      console.log('✅ Successfully retrieved list stats:', stats)
      return stats
    } catch (error) {
      console.error('❌ Error getting list stats:', {
        listId: this.listId,
        error: error instanceof Error ? error.message : error
      })
      // Return default stats instead of throwing
      return {
        memberCount: 0,
        unsubscribeCount: 0,
        cleanedCount: 0,
        openRate: 0,
        clickRate: 0,
      }
    }
  }

  // Health check method
  async isHealthy(): Promise<boolean> {
    try {
      if (!this.isConfigured) {
        return false
      }
      
      // Simple ping to verify connection
      await this.getListStats()
      return true
    } catch {
      return false
    }
  }
}

export const mailchimpService = new MailchimpService()
export default mailchimpService