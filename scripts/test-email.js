/**
 * Email Test Script for Lark Suite SMTP Configuration
 * 
 * Usage: node scripts/test-email.js
 * Make sure to have .env.local configured with Lark Suite SMTP settings
 */

const nodemailer = require('nodemailer')
require('dotenv').config({ path: '.env.local' })

async function testEmailConfiguration() {
  console.log('🧪 Testing Email Configuration...\n')
  
  // Display current configuration
  console.log('📋 Current SMTP Configuration:')
  console.log(`   Host: ${process.env.SMTP_HOST}`)
  console.log(`   Port: ${process.env.SMTP_PORT}`)
  console.log(`   User: ${process.env.SMTP_USER}`)
  console.log(`   Secure: ${process.env.SMTP_PORT === '465' ? 'SSL' : 'TLS'}`)
  console.log(`   From: ${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`)
  console.log(`   Admin: ${process.env.ADMIN_EMAIL}\n`)

  // Create transporter
  const smtpPort = parseInt(process.env.SMTP_PORT || '587')
  const isSSL = smtpPort === 465 || process.env.SMTP_SECURE === 'true'

  const transporter = nodemailer.createTransporter({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: isSSL,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    // Test connection
    console.log('🔗 Testing SMTP connection...')
    await transporter.verify()
    console.log('✅ SMTP connection successful!\n')

    // Send test email
    console.log('📧 Sending test email...')
    const testEmail = {
      from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: '🧪 Test Email from Minova Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 30px; text-align: center; color: white; border-radius: 10px;">
            <h1>✅ SMTP Configuration Test</h1>
            <p>Congratulations! Your Lark Suite SMTP is working correctly.</p>
          </div>
          
          <div style="padding: 30px; background: #f8fafc; border-radius: 10px; margin-top: 20px;">
            <h2>📋 Configuration Details:</h2>
            <ul style="list-style: none; padding: 0;">
              <li><strong>SMTP Host:</strong> ${process.env.SMTP_HOST}</li>
              <li><strong>Port:</strong> ${process.env.SMTP_PORT} (${isSSL ? 'SSL' : 'TLS'})</li>
              <li><strong>From:</strong> ${process.env.SMTP_FROM_EMAIL}</li>
              <li><strong>Test Time:</strong> ${new Date().toISOString()}</li>
            </ul>
            
            <div style="margin-top: 20px; padding: 15px; background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px;">
              <p style="margin: 0; color: #065f46;">
                <strong>🎉 Your email system is ready!</strong><br>
                Contact forms and notifications will now work properly.
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 14px;">
            <p>© 2024 Minova Solutions. All rights reserved.</p>
          </div>
        </div>
      `,
      text: `
        SMTP Configuration Test - SUCCESS!
        
        Your Lark Suite SMTP is working correctly.
        
        Configuration Details:
        - SMTP Host: ${process.env.SMTP_HOST}
        - Port: ${process.env.SMTP_PORT} (${isSSL ? 'SSL' : 'TLS'})
        - From: ${process.env.SMTP_FROM_EMAIL}
        - Test Time: ${new Date().toISOString()}
        
        Your email system is ready! Contact forms and notifications will now work properly.
        
        © 2024 Minova Solutions. All rights reserved.
      `
    }

    const result = await transporter.sendMail(testEmail)
    console.log('✅ Test email sent successfully!')
    console.log(`   Message ID: ${result.messageId}`)
    console.log(`   To: ${process.env.ADMIN_EMAIL}`)
    console.log('\n🎉 All tests passed! Your email configuration is working correctly.')
    
  } catch (error) {
    console.error('❌ Email test failed:', error.message)
    console.log('\n🔧 Troubleshooting tips:')
    console.log('1. Check your SMTP credentials in .env.local')
    console.log('2. Verify info@minova.vn account has SMTP enabled in Lark Suite')
    console.log('3. Generate a new app-specific password if using 2FA')
    console.log('4. Check firewall settings for port 465')
    console.log('5. Verify domain DNS settings')
    process.exit(1)
  }
}

// Run the test
testEmailConfiguration().catch(console.error)