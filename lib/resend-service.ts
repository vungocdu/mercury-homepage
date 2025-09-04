import { Resend } from 'resend'
import { getSupabaseClient } from './supabase-client'

// Initialize Resend client with error handling
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey) {
    console.error('❌ RESEND_API_KEY is not configured in environment variables')
    throw new Error('RESEND_API_KEY is not configured. Please add it to your .env.local file.')
  }

  console.log('✅ Resend API key found, initializing client...')
  return new Resend(apiKey)
}

export interface ResendEmailOptions {
  to: string | string[]
  subject: string
  html: string
  text?: string
  from?: string
  replyTo?: string
  cc?: string | string[]
  bcc?: string | string[]
}

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
}

export class ResendEmailService {
  private fromEmail = process.env.SMTP_FROM_EMAIL || 'info@minova.vn'
  private fromName = process.env.SMTP_FROM_NAME || 'Minova Solutions'
  private adminEmail = process.env.ADMIN_EMAIL || 'du.vu@minova.vn'

  /**
   * Send email using Resend
   */
  async sendEmail(options: ResendEmailOptions) {
    try {
      const resend = getResendClient()

      const emailData = {
        from: options.from || `${this.fromName} <${this.fromEmail}>`,
        to: Array.isArray(options.to) ? options.to : [options.to],
        subject: options.subject,
        html: options.html,
        text: options.text,
        reply_to: options.replyTo,
        cc: options.cc ? (Array.isArray(options.cc) ? options.cc : [options.cc]) : undefined,
        bcc: options.bcc ? (Array.isArray(options.bcc) ? options.bcc : [options.bcc]) : undefined,
      }

      console.log('📧 Sending email via Resend to:', options.to)
      
      const result = await resend.emails.send(emailData)
      
      console.log('✅ Email sent successfully via Resend:', {
        id: result.data?.id,
        to: options.to,
        subject: options.subject
      })

      return result
    } catch (error) {
      console.error('❌ Error sending email via Resend:', error)
      throw error
    }
  }

  /**
   * Send contact form notification email to admin
   */
  async sendContactFormNotification(formData: ContactFormData) {
    const subject = `New Contact Form Submission - ${formData.service || 'General'}`
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">New Contact Form Submission</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f8fafc;">
          <h2 style="color: #1e40af; margin-top: 0;">Contact Information</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0;">${formData.phone}</td>
            </tr>
            ` : ''}
            ${formData.company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Company:</td>
              <td style="padding: 8px 0;">${formData.company}</td>
            </tr>
            ` : ''}
            ${formData.service ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Service:</td>
              <td style="padding: 8px 0;">${formData.service}</td>
            </tr>
            ` : ''}
          </table>
          
          <h3 style="color: #1e40af; margin-top: 20px;">Message</h3>
          <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #1e40af;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e0f2fe; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #0369a1;">
              <strong>Quick Actions:</strong><br>
              • Reply to customer: <a href="mailto:${formData.email}?subject=Re: ${formData.service || 'Your inquiry'}">${formData.email}</a><br>
              • View in CRM: <a href="https://dhtmdfbzcglagzgyxdbs.supabase.co">Supabase Dashboard</a>
            </p>
          </div>
        </div>
        
        <div style="background-color: #64748b; color: white; padding: 15px; text-align: center; font-size: 12px;">
          <p style="margin: 0;">This email was sent from the Mercury Solution Homepage contact form</p>
          <p style="margin: 5px 0 0 0;">Minova Solutions | <a href="https://minova.vn" style="color: #93c5fd;">minova.vn</a></p>
        </div>
      </div>
    `

    const text = `
New Contact Form Submission - ${formData.service || 'General'}

Contact Information:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.company ? `Company: ${formData.company}` : ''}
${formData.service ? `Service: ${formData.service}` : ''}

Message:
${formData.message}

Reply to customer: ${formData.email}
    `

    return this.sendEmail({
      to: this.adminEmail,
      subject,
      html,
      text,
      replyTo: formData.email
    })
  }

  /**
   * Send welcome email to customer
   */
  async sendWelcomeEmail(customerEmail: string, firstName: string, service?: string) {
    const subject = `Welcome to Minova Solutions${service ? ` - ${service}` : ''}`
    
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0;">Welcome to Minova Solutions!</h1>
        </div>
        
        <div style="padding: 20px;">
          <h2 style="color: #1e40af;">Hello ${firstName}!</h2>
          
          <p>Thank you for reaching out to us. We have received your inquiry and our team will get back to you within 24 hours.</p>
          
          ${service ? `<p>We noticed you're interested in our <strong>${service}</strong> services. We're excited to discuss how we can help you achieve your goals.</p>` : ''}
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">What happens next?</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Our team will review your inquiry</li>
              <li>We'll prepare a personalized response</li>
              <li>You'll hear from us within 24 hours</li>
              <li>We'll schedule a consultation if needed</li>
            </ul>
          </div>
          
          <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0369a1;">Our Services</h3>
            <p style="margin: 0;">
              🚀 <strong>Software Development:</strong> Custom solutions for your business<br>
              📺 <strong>TVC Production:</strong> Professional video content creation<br>
              💡 <strong>Digital Transformation:</strong> Modernizing your business processes
            </p>
          </div>
          
          <p>If you have any urgent questions, feel free to reply to this email or contact us directly at <a href="mailto:${this.fromEmail}">${this.fromEmail}</a>.</p>
          
          <p>Best regards,<br>
          <strong>The Minova Solutions Team</strong></p>
        </div>
        
        <div style="background-color: #64748b; color: white; padding: 15px; text-align: center;">
          <p style="margin: 0 0 10px 0;"><strong>Minova Solutions</strong></p>
          <p style="margin: 0; font-size: 14px;">
            Website: <a href="https://minova.vn" style="color: #93c5fd;">minova.vn</a> | 
            Email: <a href="mailto:${this.fromEmail}" style="color: #93c5fd;">${this.fromEmail}</a>
          </p>
        </div>
      </div>
    `

    const text = `
Welcome to Minova Solutions!

Hello ${firstName}!

Thank you for reaching out to us. We have received your inquiry and our team will get back to you within 24 hours.

${service ? `We noticed you're interested in our ${service} services. We're excited to discuss how we can help you achieve your goals.` : ''}

What happens next?
- Our team will review your inquiry
- We'll prepare a personalized response
- You'll hear from us within 24 hours
- We'll schedule a consultation if needed

Our Services:
🚀 Software Development: Custom solutions for your business
📺 TVC Production: Professional video content creation
💡 Digital Transformation: Modernizing your business processes

If you have any urgent questions, feel free to reply to this email or contact us directly at ${this.fromEmail}.

Best regards,
The Minova Solutions Team

Minova Solutions
Website: https://minova.vn
Email: ${this.fromEmail}
    `

    return this.sendEmail({
      to: customerEmail,
      subject,
      html,
      text
    })
  }

  /**
   * Handle complete contact form submission with Supabase integration
   */
  async handleContactFormSubmission(formData: ContactFormData) {
    try {
      // 1. Save to Supabase
      const supabase = getSupabaseClient()
      const { data: submission, error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          company: formData.company || null,
          message: formData.message,
          source: formData.service ? `contact_form_${formData.service}` : 'contact_form',
          status: 'new'
        })
        .select()
        .single()

      if (supabaseError) {
        console.error('❌ Supabase error:', supabaseError)
        throw new Error(`Database error: ${supabaseError.message}`)
      }

      console.log('✅ Contact submission saved to Supabase:', submission?.id)

      // 2. Send notification email to admin
      const adminEmailResult = await this.sendContactFormNotification(formData)
      console.log('✅ Admin notification email sent:', adminEmailResult.data?.id)

      // 3. Send welcome email to customer
      const customerEmailResult = await this.sendWelcomeEmail(
        formData.email, 
        formData.firstName, 
        formData.service
      )
      console.log('✅ Customer welcome email sent:', customerEmailResult.data?.id)

      return {
        success: true,
        submissionId: submission?.id,
        adminEmailId: adminEmailResult.data?.id,
        customerEmailId: customerEmailResult.data?.id,
        message: 'Contact form submitted successfully and emails sent'
      }

    } catch (error) {
      console.error('❌ Error in contact form submission:', error)
      throw error
    }
  }
}

// Export singleton instance
export const resendEmailService = new ResendEmailService()
export default resendEmailService