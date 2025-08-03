import { NextRequest, NextResponse } from 'next/server'
import { insertContactSubmission, insertSubscriber } from '@/lib/supabase'
import { emailService } from '@/lib/email'
import { mailchimpService } from '@/lib/mailchimp'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, message, service, source = 'contact_form' } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !service) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, message, service' },
        { status: 400 }
      )
    }

    // Validate service type
    if (!['software', 'tvc'].includes(service)) {
      return NextResponse.json(
        { error: 'Invalid service type. Must be "software" or "tvc"' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to Supabase
    const contactSubmission = await insertContactSubmission({
      first_name: firstName,
      last_name: lastName,
      email,
      phone: phone || null,
      company: company || null,
      message,
      source: `${source}_${service}`,
      status: 'new'
    })

    // Add to Mailchimp (optional - continue even if fails)
    try {
      await mailchimpService.addSubscriber({
        email,
        firstName,
        lastName,
        tags: [source, service, 'website_contact'],
        mergeFields: {
          COMPANY: company || '',
          PHONE: phone || '',
          SOURCE: source,
          SERVICE: service
        }
      })

      // Save subscriber to Supabase
      await insertSubscriber({
        email,
        first_name: firstName,
        last_name: lastName,
        source: `${source}_${service}`,
        tags: [source, service, 'website_contact'],
        status: 'subscribed'
      })
    } catch (mailchimpError) {
      console.error('Mailchimp error (non-blocking):', mailchimpError)
    }

    // Send service-specific welcome email to customer
    try {
      await emailService.sendServiceWelcomeEmail(email, service as 'software' | 'tvc', firstName, lastName)
    } catch (emailError) {
      console.error('Welcome email error (non-blocking):', emailError)
    }

    // Send service-specific notification email to admin
    try {
      await emailService.sendAdminNotification({
        firstName,
        lastName,
        email,
        phone: phone || 'Không cung cấp',
        company: company || 'Không cung cấp',
        message,
        source: `${source}_${service}`
      }, service as 'software' | 'tvc')
    } catch (adminEmailError) {
      console.error('Admin notification error (non-blocking):', adminEmailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      id: contactSubmission.id
    })

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'Failed to submit contact form'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    // This endpoint could be used for admin dashboard to fetch contact submissions
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = parseInt(searchParams.get('offset') || '0')

    // For now, return a simple response
    // In a real app, you'd want authentication here
    return NextResponse.json({
      message: 'Contact API endpoint is working',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Contact GET error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}