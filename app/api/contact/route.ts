import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { ContactFormRequest, ApiResponse, ContactSubmission, ContactConfirmationEmailData } from '@/lib/types'

// Validate environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const resendApiKey = process.env.RESEND_API_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase configuration')
}

if (!resendApiKey) {
  console.error('Missing Resend API key')
}

const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

const resend = resendApiKey ? new Resend(resendApiKey) : null

// Email template for contact form confirmation
function generateConfirmationEmailHTML(data: ContactConfirmationEmailData): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Confirmation - Mercury Solutions</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header p { margin: 10px 0 0; font-size: 16px; opacity: 0.9; }
        .content { padding: 40px; }
        .greeting { font-size: 18px; margin-bottom: 25px; color: #1e40af; }
        .message-box { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0; }
        .info-grid { display: grid; gap: 15px; margin: 25px 0; }
        .info-item { padding: 15px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; }
        .info-label { font-weight: 600; color: #374151; margin-bottom: 5px; }
        .info-value { color: #6b7280; }
        .next-steps { background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 20px; margin: 25px 0; }
        .next-steps h3 { color: #059669; margin: 0 0 15px; }
        .next-steps ul { margin: 10px 0; padding-left: 20px; }
        .next-steps li { margin: 8px 0; color: #374151; }
        .footer { background: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb; }
        .footer p { margin: 5px 0; color: #6b7280; font-size: 14px; }
        .contact-info { margin: 20px 0; }
        .contact-info a { color: #3b82f6; text-decoration: none; }
        .social-links { margin: 20px 0; }
        .social-links a { display: inline-block; margin: 0 10px; color: #6b7280; text-decoration: none; }
        @media (max-width: 600px) {
            .content { padding: 20px; }
            .header { padding: 20px; }
            .header h1 { font-size: 24px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Mercury Solutions</h1>
            <p>Digital Innovation • Technology Excellence</p>
        </div>
        
        <div class="content">
            <div class="greeting">
                Dear ${data.firstName} ${data.lastName},
            </div>
            
            <p>Thank you for reaching out to Mercury Solutions! We have successfully received your inquiry and are excited about the opportunity to work with you.</p>
            
            <div class="message-box">
                <strong>Your submission details:</strong>
            </div>
            
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Full Name:</div>
                    <div class="info-value">${data.firstName} ${data.lastName}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Email:</div>
                    <div class="info-value">${data.email}</div>
                </div>
                ${data.company ? `
                <div class="info-item">
                    <div class="info-label">Company:</div>
                    <div class="info-value">${data.company}</div>
                </div>
                ` : ''}
                <div class="info-item">
                    <div class="info-label">Service Interest:</div>
                    <div class="info-value">${data.service === 'software' ? '💻 Software Development (Web/Mobile App, AI)' : '🎬 TVC Production (Advertising & Corporate Videos)'}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Message:</div>
                    <div class="info-value">${data.message}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Submitted:</div>
                    <div class="info-value">${data.submittedAt}</div>
                </div>
            </div>
            
            <div class="next-steps">
                <h3>What's Next?</h3>
                <ul>
                    <li><strong>Initial Review:</strong> Our team will review your requirements within 8 business hours</li>
                    <li><strong>Personal Response:</strong> A project consultant will reach out to discuss your needs in detail</li>
                    <li><strong>Solution Proposal:</strong> We'll prepare a customized solution proposal tailored to your project</li>
                    <li><strong>Project Kickoff:</strong> Once approved, we'll begin your digital transformation journey</li>
                </ul>
            </div>
            
            <p>In the meantime, feel free to explore our portfolio and learn more about our successful projects with leading companies across various industries.</p>
            
            <p>If you have any immediate questions or need urgent assistance, don't hesitate to contact us directly.</p>
            
            <p>Best regards,<br>
            <strong>The Mercury Solutions Team</strong><br>
            Digital Innovation Specialists</p>
        </div>
        
        <div class="footer">
            <div class="contact-info">
                <p><strong>Contact Information</strong></p>
                <p>📧 Email: <a href="mailto:info@mercury-solutions.vn">info@mercury-solutions.vn</a></p>
                <p>📞 Phone: <a href="tel:+84241234567">+84 24 1234 5678</a></p>
                <p>📍 Address: 33 Ng. 41 P. Thai Ha, Trung Liet, Dong Da, Hanoi, Vietnam</p>
            </div>
            
            <div class="social-links">
                <p>Follow us for updates:</p>
                <a href="#">LinkedIn</a> |
                <a href="#">Facebook</a> |
                <a href="#">Twitter</a> |
                <a href="#">YouTube</a>
            </div>
            
            <p>&copy; ${new Date().getFullYear()} Mercury Solutions. All rights reserved.</p>
            <p>This email was sent because you contacted us through our website. If you have any concerns, please contact us directly.</p>
        </div>
    </div>
</body>
</html>`
}

// Validation function
function validateFormData(data: any): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {}
  
  // Required fields validation
  if (!data.first_name?.trim()) {
    errors.firstName = 'First name is required'
  }
  
  if (!data.last_name?.trim()) {
    errors.lastName = 'Last name is required'
  }
  
  if (!data.email?.trim()) {
    errors.email = 'Email is required'
  } else {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address'
    }
  }
  
  if (!data.message?.trim()) {
    errors.message = 'Message is required'
  }
  
  if (!data.service?.trim()) {
    errors.service = 'Please select a service'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json() as ContactFormRequest
    
    // Validate form data
    const validation = validateFormData(body)
    if (!validation.isValid) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: 'Validation failed',
        error: 'Please correct the errors in your form',
        data: { errors: validation.errors }
      }, { status: 400 })
    }
    
    // Check if Supabase is available
    if (!supabase) {
      return NextResponse.json<ApiResponse>({
        success: false,
        message: 'Database service unavailable',
        error: 'Contact form is not configured. Please contact us directly via email: info@mercury-solutions.vn'
      }, { status: 503 })
    }
    
    // Prepare data for database insertion
    const contactSubmission: Omit<ContactSubmission, 'id' | 'created_at' | 'updated_at'> = {
      first_name: body.first_name.trim(),
      last_name: body.last_name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone?.trim() || null,
      company: body.company?.trim() || null,
      message: body.message.trim(),
      source: body.service ? `contact_form_${body.service}` : 'contact_form',
      status: 'new'
    }
    
    // Insert into Supabase
    const { data: insertedData, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([contactSubmission])
      .select()
      .single()
    
    if (dbError) {
      console.error('Database insertion error:', dbError)
      return NextResponse.json<ApiResponse>({
        success: false,
        message: 'Failed to save contact submission',
        error: 'Database error occurred. Please try again or contact us directly.'
      }, { status: 500 })
    }
    
    // Send confirmation email if Resend is configured
    let emailSent = false
    if (resend) {
      try {
        const emailData: ContactConfirmationEmailData = {
          firstName: body.first_name,
          lastName: body.last_name,
          email: body.email,
          company: body.company || undefined,
          service: body.service,
          message: body.message,
          submittedAt: new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'short'
          })
        }
        
        const { error: emailError } = await resend.emails.send({
          from: 'Mercury Solutions <noreply@mercury-solutions.vn>',
          to: [body.email],
          bcc: ['info@mercury-solutions.vn'], // Internal notification
          subject: 'Thank you for contacting Mercury Solutions!',
          html: generateConfirmationEmailHTML(emailData)
        })
        
        if (emailError) {
          console.error('Email sending error:', emailError)
        } else {
          emailSent = true
        }
      } catch (emailErr) {
        console.error('Email service error:', emailErr)
      }
    }
    
    return NextResponse.json<ApiResponse>({
      success: true,
      message: emailSent 
        ? 'Your message has been sent successfully! Please check your email for confirmation.'
        : 'Your message has been sent successfully! We will respond as soon as possible.',
      data: { 
        id: insertedData.id, 
        emailSent,
        submittedAt: insertedData.created_at 
      }
    }, { status: 200 })
    
  } catch (error) {
    console.error('Contact form API error:', error)
    
    return NextResponse.json<ApiResponse>({
      success: false,
      message: 'Internal server error',
      error: 'An unexpected error occurred. Please try again later.'
    }, { status: 500 })
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json<ApiResponse>({
    success: false,
    message: 'Method not allowed',
    error: 'This endpoint only accepts POST requests'
  }, { status: 405 })
}