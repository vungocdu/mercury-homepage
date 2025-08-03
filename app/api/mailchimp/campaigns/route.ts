import { NextRequest, NextResponse } from 'next/server'
import { mailchimpService } from '@/lib/mailchimp'
import { supabase } from '@/lib/supabase'

// Create new email campaign
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      subject, 
      fromName = 'Mercury Solutions', 
      fromEmail = 'info@mercurysolutions.vn',
      templateId,
      content 
    } = body

    // Validate required fields
    if (!name || !subject) {
      return NextResponse.json(
        { error: 'Missing required fields: name, subject' },
        { status: 400 }
      )
    }

    // Create campaign in Mailchimp
    const campaign = await mailchimpService.createCampaign({
      listId: process.env.MAILCHIMP_AUDIENCE_ID!,
      subject,
      fromName,
      fromEmail,
      templateId,
      content
    })

    // Save campaign to Supabase
    const { data: savedCampaign, error } = await supabase
      .from('email_campaigns')
      .insert([{
        name,
        subject,
        template: templateId ? `template_${templateId}` : 'custom',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mailchimp_campaign_id: (campaign as any).id,
        status: 'draft'
      }])
      .select()
      .single()

    if (error) {
      console.error('Error saving campaign to Supabase:', error)
      // Continue even if Supabase save fails
    }

    return NextResponse.json({
      success: true,
      campaign: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: (campaign as any).id,
        name,
        subject,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status: (campaign as any).status,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        web_id: (campaign as any).web_id,
        supabase_id: savedCampaign?.id
      }
    })

  } catch (error) {
    console.error('Campaign creation error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to create campaign',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

// Get campaign list
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    // Get campaigns from Supabase
    const { data: campaigns, error } = await supabase
      .from('email_campaigns')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      throw error
    }

    // Get detailed stats from Mailchimp for each campaign
    const campaignsWithStats = await Promise.all(
      campaigns.map(async (campaign) => {
        if (campaign.mailchimp_campaign_id && campaign.status === 'sent') {
          try {
            const stats = await mailchimpService.getCampaignStats(campaign.mailchimp_campaign_id)
            return {
              ...campaign,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              sent_count: (stats as any)?.emails_sent || 0,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              open_rate: (stats as any)?.open_rate || 0,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              click_rate: (stats as any)?.click_rate || 0,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              opens: (stats as any)?.opens?.opens_total || 0,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              clicks: (stats as any)?.clicks?.clicks_total || 0
            }
          } catch (statsError) {
            console.error('Error getting campaign stats:', statsError)
            return campaign
          }
        }
        return campaign
      })
    )

    return NextResponse.json({
      success: true,
      campaigns: campaignsWithStats
    })

  } catch (error) {
    console.error('Campaign list error:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch campaigns',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}