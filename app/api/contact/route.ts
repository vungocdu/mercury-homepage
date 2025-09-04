import { NextRequest, NextResponse } from 'next/server'
import { resendEmailService } from '@/lib/resend-service'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { firstName, lastName, email, message } = body
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, message' },
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

    console.log('📨 Processing contact form submission via API route:', {
      name: `${firstName} ${lastName}`,
      email,
      service: body.service || 'General'
    })

    // Process contact form submission (Supabase + Resend emails)
    const result = await resendEmailService.handleContactFormSubmission({
      firstName,
      lastName,
      email,
      phone: body.phone,
      company: body.company,
      message,
      service: body.service
    })

    console.log('✅ Contact form processed successfully:', result)

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        submissionId: result.submissionId,
        adminEmailId: result.adminEmailId,
        customerEmailId: result.customerEmailId
      }
    })

  } catch (error) {
    console.error('❌ API route error:', error)

    // Return specific error messages
    if (error instanceof Error) {
      if (error.message.includes('RESEND_API_KEY')) {
        return NextResponse.json(
          { error: 'Email service configuration error' },
          { status: 500 }
        )
      }
      
      if (error.message.includes('Database error')) {
        return NextResponse.json(
          { error: 'Failed to save submission to database' },
          { status: 500 }
        )
      }

      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}