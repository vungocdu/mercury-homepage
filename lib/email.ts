import nodemailer from 'nodemailer'

// Email configuration - Smart SMTP detection
const smtpPort = parseInt(process.env.SMTP_PORT || '587')
const isSSL = smtpPort === 465 || process.env.SMTP_SECURE === 'true'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: smtpPort,
  secure: isSSL, // true for 465 (SSL), false for 587 (TLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // Additional options for better compatibility
  tls: {
    rejectUnauthorized: false
  }
})

export interface EmailTemplate {
  subject: string
  html: string
  text?: string
}

export interface EmailOptions {
  to: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  replyTo?: string
  template: EmailTemplate
  variables?: Record<string, unknown>
}

class EmailService {
  private fromEmail = process.env.SMTP_FROM_EMAIL || 'info@minova.vn'
  private fromName = process.env.SMTP_FROM_NAME || 'Minova Solutions'

  // Replace template variables with actual values
  private replaceVariables(template: string, variables: Record<string, unknown> = {}): string {
    let result = template
    
    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g')
      result = result.replace(regex, String(value))
    })

    return result
  }

  // Send email
  async sendEmail(options: EmailOptions): Promise<unknown> {
    try {
      const { to, cc, bcc, replyTo, template, variables } = options

      // Validate required fields
      if (!to || (Array.isArray(to) && to.length === 0)) {
        throw new Error('Email recipient (to) is required')
      }

      const html = this.replaceVariables(template.html, variables)
      const text = template.text ? this.replaceVariables(template.text, variables) : undefined
      const subject = this.replaceVariables(template.subject, variables)

      const mailOptions = {
        from: `${this.fromName} <${this.fromEmail}>`,
        to: Array.isArray(to) ? to.join(', ') : to,
        cc: cc ? (Array.isArray(cc) ? cc.join(', ') : cc) : undefined,
        bcc: bcc ? (Array.isArray(bcc) ? bcc.join(', ') : bcc) : undefined,
        replyTo: replyTo || this.fromEmail,
        subject,
        html,
        text,
      }

      console.log(`📧 Sending email via ${process.env.SMTP_HOST}:${process.env.SMTP_PORT} (SSL: ${isSSL}) to:`, to)
      
      const result = await transporter.sendMail(mailOptions)
      console.log('✅ Email sent successfully:', {
        messageId: result.messageId,
        to: mailOptions.to,
        subject: mailOptions.subject,
        smtpHost: process.env.SMTP_HOST
      })
      return result
    } catch (error) {
      console.error('❌ Error sending email:', {
        error: error instanceof Error ? error.message : error,
        smtpHost: process.env.SMTP_HOST,
        smtpPort: process.env.SMTP_PORT,
        smtpUser: process.env.SMTP_USER,
        to: options.to
      })
      throw error
    }
  }

  // Send service-specific welcome email
  async sendServiceWelcomeEmail(email: string, service: 'software' | 'tvc', firstName?: string, lastName?: string): Promise<unknown> {
    const isService = service === 'software'
    const serviceIcon = isService ? '💻' : '🎬'
    const serviceTitle = isService ? 'Phát triển phần mềm' : 'Sản xuất TVC'
    const serviceFeatures = isService 
      ? [
          '🚀 <strong>Ứng dụng Web/Mobile:</strong> React, Next.js, React Native',
          '🤖 <strong>AI & Machine Learning:</strong> Chatbot, Computer Vision, NLP',
          '☁️ <strong>Cloud Solutions:</strong> AWS, Azure, Google Cloud',
          '📊 <strong>Data Analytics:</strong> Dashboard, BI, Real-time monitoring'
        ]
      : [
          '🎥 <strong>TVC Chất lượng điện ảnh:</strong> 4K-6K RAW, Sony FX Cinema Line',
          '🚁 <strong>Drone FPV chuyên nghiệp:</strong> Góc quay độc đáo, ấn tượng',
          '⚡ <strong>Giao hàng nhanh:</strong> 1-2 tuần từ ý tưởng đến thành phẩm',
          '🏭 <strong>Chuyên biệt:</strong> Nhà máy, khu công nghiệp, quy trình sản xuất'
        ]

    const template: EmailTemplate = {
      subject: `${serviceIcon} Chào mừng bạn đến với Minova Solutions - ${serviceTitle}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Chào mừng đến với Minova Solutions</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 40px 30px; text-align: center; }
            .content { padding: 40px 30px; background: #ffffff; }
            .service-highlight { background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
            .features { background: #f1f5f9; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .cta-section { text-align: center; margin: 30px 0; }
            .btn { display: inline-block; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
            .contact-info { background: #1e40af; color: white; padding: 20px; border-radius: 10px; margin: 20px 0; }
            .footer { text-align: center; padding: 20px; background: #f8fafc; color: #666; font-size: 14px; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            ul { padding-left: 0; list-style: none; }
            li { margin: 10px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">${serviceIcon} MINOVA SOLUTIONS</div>
              <h1>Chào mừng {{ firstName }}!</h1>
              <p>Cảm ơn bạn đã quan tâm đến dịch vụ <strong>${serviceTitle}</strong></p>
            </div>
            
            <div class="content">
              <h2>Xin chào {{ firstName }} {{ lastName }},</h2>
              
              <div class="service-highlight">
                <h3>${serviceIcon} Dịch vụ ${serviceTitle} của Minova Solutions</h3>
                <p>Chúng tôi đã nhận được yêu cầu tư vấn của bạn và sẽ liên hệ lại trong vòng <strong>2-4 giờ làm việc</strong>.</p>
              </div>

              <div class="features">
                <h3>🌟 Tại sao chọn Minova Solutions?</h3>
                <ul>
                  ${serviceFeatures.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
              </div>

              ${isService ? `
                <h3>💼 Dịch vụ phát triển phần mềm:</h3>
                <ul>
                  <li>🌐 <strong>Website & Web App:</strong> Landing page, CMS, E-commerce</li>
                  <li>📱 <strong>Mobile App:</strong> iOS, Android, Cross-platform</li>
                  <li>🏢 <strong>Enterprise Software:</strong> ERP, CRM, HRM</li>
                  <li>🔗 <strong>API & Integration:</strong> Third-party services, Payment gateway</li>
                </ul>
              ` : `
                <h3>🎬 Dịch vụ sản xuất TVC:</h3>
                <ul>
                  <li>🏭 <strong>TVC Nhà máy:</strong> Giới thiệu dây chuyền sản xuất, công nghệ</li>
                  <li>⚙️ <strong>TVC Quy trình:</strong> Thể hiện quy trình chất lượng, tiêu chuẩn</li>
                  <li>🏢 <strong>TVC Doanh nghiệp:</strong> Văn hóa công ty, thành tựu</li>
                  <li>📺 <strong>TVC Quảng cáo:</strong> Sản phẩm, dịch vụ cho TV, Digital</li>
                </ul>
              `}

              <div class="cta-section">
                <a href="${isService ? 'https://minova.vn/software' : 'https://minova.vn/tvc'}" class="btn">
                  ${isService ? 'Xem Portfolio Phần mềm' : 'Xem Portfolio TVC'}
                </a>
              </div>

              <div class="contact-info">
                <h3>📞 Thông tin liên hệ:</h3>
                <p>
                  📧 <strong>Email:</strong> info@minova.vn<br>
                  📱 <strong>Hotline:</strong> +84 (0)24 3xxx xxxx<br>
                  🌐 <strong>Website:</strong> www.minova.vn<br>
                  📍 <strong>Địa chỉ:</strong> Hà Nội, Việt Nam
                </p>
              </div>

              <p><strong>Lưu ý:</strong> Để tư vấn chính xác nhất, vui lòng chuẩn bị:</p>
              <ul>
                ${isService ? `
                  <li>📋 Mô tả chi tiết dự án và yêu cầu chức năng</li>
                  <li>🎯 Mục tiêu kinh doanh và đối tượng người dùng</li>
                  <li>⏰ Timeline và ngân sách dự kiến</li>
                  <li>🔧 Yêu cầu kỹ thuật đặc biệt (nếu có)</li>
                ` : `
                  <li>🎯 Mục đích sử dụng TVC (quảng cáo, giới thiệu, nội bộ)</li>
                  <li>📺 Kênh phát sóng (TV, Digital, Social Media)</li>
                  <li>⏱️ Thời lượng mong muốn (30s, 60s, 90s, dài hơn)</li>
                  <li>💰 Ngân sách và timeline thực hiện</li>
                `}
              </ul>
            </div>

            <div class="footer">
              <p><strong>© 2024 Minova Solutions.</strong> All rights reserved.</p>
              <p>Công ty công nghệ hàng đầu Việt Nam về ${serviceTitle}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        ${serviceIcon} Chào mừng {{ firstName }}!

        Cảm ơn bạn đã quan tâm đến dịch vụ ${serviceTitle} của Minova Solutions.

        Chúng tôi sẽ liên hệ lại trong vòng 2-4 giờ làm việc.

        Tại sao chọn Minova Solutions?
        ${serviceFeatures.map(feature => `- ${feature.replace(/<[^>]*>/g, '')}`).join('\n        ')}

        Liên hệ:
        📧 Email: info@minova.vn
        📱 Hotline: +84 (0)24 3xxx xxxx
        🌐 Website: www.minova.vn

        Trân trọng,
        Đội ngũ Minova Solutions
      `
    }

    return this.sendEmail({
      to: email,
      template,
      variables: {
        firstName: firstName || 'Bạn',
        lastName: lastName || '',
      }
    })
  }

  // Send service-specific admin notification
  async sendAdminNotification(contactData: Record<string, unknown>, service: 'software' | 'tvc'): Promise<unknown> {
    const adminEmail = process.env.ADMIN_EMAIL || 'du.vu@minova.vn'
    
    const serviceIcon = service === 'software' ? '💻' : '🎬'
    const serviceTitle = service === 'software' ? 'Phát triển phần mềm' : 'Sản xuất TVC'
    const priorityLevel = service === 'tvc' ? 'HIGH PRIORITY' : 'NORMAL'
    const priorityColor = service === 'tvc' ? '#dc2626' : '#1e3a8a'

    const template: EmailTemplate = {
      subject: `${serviceIcon} [${priorityLevel}] Liên hệ ${serviceTitle} - {{ firstName }} {{ lastName }}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Liên hệ mới từ website Minova</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
            .header { background: ${priorityColor}; color: white; padding: 30px 20px; text-align: center; }
            .priority { background: ${service === 'tvc' ? '#fef2f2' : '#f1f5f9'}; border: 2px solid ${priorityColor}; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            .content { padding: 30px 20px; }
            .info-section { background: #f8fafc; border-radius: 10px; padding: 20px; margin: 20px 0; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid ${priorityColor}; }
            .label { font-weight: bold; color: ${priorityColor}; font-size: 14px; text-transform: uppercase; }
            .value { font-size: 16px; margin-top: 5px; }
            .message-box { background: #fffbeb; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .next-steps { background: #ecfdf5; border: 1px solid #10b981; border-radius: 8px; padding: 20px; margin: 20px 0; }
            .service-notes { background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 15px; margin: 15px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>${serviceIcon} MINOVA SOLUTIONS</h1>
              <h2>Liên hệ mới từ website</h2>
              <p>Dịch vụ: <strong>${serviceTitle}</strong></p>
            </div>
            
            <div class="content">
              <div class="priority">
                <h3 style="color: ${priorityColor}; margin: 0;">
                  ⚡ ${priorityLevel} - ${serviceTitle.toUpperCase()}
                </h3>
                ${service === 'tvc' ? '<p style="margin: 5px 0; color: #dc2626;"><strong>Yêu cầu phản hồi trong 2-4 giờ làm việc</strong></p>' : '<p style="margin: 5px 0;">Liên hệ dịch vụ phần mềm</p>'}
              </div>

              <div class="info-section">
                <h3>👤 Thông tin khách hàng:</h3>
                
                <div class="info-row">
                  <div class="label">Họ tên:</div>
                  <div class="value"><strong>{{ firstName }} {{ lastName }}</strong></div>
                </div>
                
                <div class="info-row">
                  <div class="label">📧 Email:</div>
                  <div class="value"><a href="mailto:{{ email }}">{{ email }}</a></div>
                </div>
                
                <div class="info-row">
                  <div class="label">📱 Điện thoại:</div>
                  <div class="value"><a href="tel:{{ phone }}">{{ phone }}</a></div>
                </div>
                
                <div class="info-row">
                  <div class="label">🏢 Công ty:</div>
                  <div class="value">{{ company }}</div>
                </div>
                
                <div class="info-row">
                  <div class="label">🌐 Nguồn:</div>
                  <div class="value">{{ source }}</div>
                </div>
                
                <div class="info-row">
                  <div class="label">⏰ Thời gian:</div>
                  <div class="value">{{ timestamp }}</div>
                </div>
              </div>

              <div class="message-box">
                <h3>💬 Tin nhắn từ khách hàng:</h3>
                <p style="font-style: italic; font-size: 16px; line-height: 1.6;">{{ message }}</p>
              </div>

              ${service === 'software' ? `
                <div class="service-notes">
                  <h4>💻 Lưu ý cho dịch vụ Phần mềm:</h4>
                  <ul>
                    <li>🔍 Xác định loại dự án: Web App, Mobile App, Desktop, hay Enterprise Software</li>
                    <li>📋 Thu thập yêu cầu chức năng chi tiết</li>
                    <li>🎯 Xác định mục tiêu kinh doanh và ROI mong đợi</li>
                    <li>⏰ Timeline và ngân sách dự kiến</li>
                    <li>🔧 Công nghệ stack và integration requirements</li>
                  </ul>
                </div>
              ` : `
                <div class="service-notes">
                  <h4>🎬 Lưu ý cho dịch vụ TVC:</h4>
                  <ul>
                    <li>🎯 Xác định mục đích: Quảng cáo, giới thiệu công ty, hay nội bộ</li>
                    <li>📺 Kênh phát sóng: TV, Digital, Social Media</li>
                    <li>⏱️ Thời lượng: 30s, 60s, 90s, hay dài hơn</li>
                    <li>🏭 Đặc thù ngành: Nhà máy, sản xuất, dịch vụ</li>
                    <li>📅 Ngày quay và deadline giao hàng</li>
                  </ul>
                </div>
              `}

              <div class="next-steps">
                <h3>✅ Các bước tiếp theo:</h3>
                <ol>
                  <li><strong>Gọi điện cho khách hàng trong vòng ${service === 'tvc' ? '2-4 giờ' : '4-8 giờ'}</strong></li>
                  <li>Tư vấn chi tiết và báo giá sơ bộ</li>
                  <li>Lên lịch họp/khảo sát (nếu cần)</li>
                  <li>Gửi proposal chính thức</li>
                  ${service === 'tvc' ? '<li>Lên kế hoạch pre-production và location scouting</li>' : '<li>Technical discovery và project planning</li>'}
                </ol>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <p><strong>📞 Liên hệ ngay:</strong></p>
                <p>
                  <a href="tel:{{ phone }}" style="background: ${priorityColor}; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                    📱 Gọi {{ phone }}
                  </a>
                </p>
                <p>
                  <a href="mailto:{{ email }}" style="background: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 5px;">
                    📧 Email {{ email }}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        ${serviceIcon} [${priorityLevel}] Liên hệ ${serviceTitle}

        THÔNG TIN KHÁCH HÀNG:
        Họ tên: {{ firstName }} {{ lastName }}
        Email: {{ email }}
        Điện thoại: {{ phone }}
        Công ty: {{ company }}
        Nguồn: {{ source }}
        Thời gian: {{ timestamp }}

        TIN NHẮN:
        {{ message }}

        HÀNH ĐỘNG TIẾP THEO:
        ${service === 'tvc' ? '🚨 HIGH PRIORITY - Liên hệ trong 2-4 giờ làm việc' : '📋 NORMAL - Liên hệ trong 4-8 giờ làm việc'}
        1. Gọi điện cho khách hàng: {{ phone }}
        2. Tư vấn chi tiết về dịch vụ ${serviceTitle}
        3. Báo giá và lên proposal

        ---
        Minova Solutions - ${serviceTitle}
      `
    }

    return this.sendEmail({
      to: adminEmail,
      template,
      variables: {
        ...contactData,
        timestamp: new Date().toLocaleString('vi-VN'),
      }
    })
  }

  // Send follow-up email
  async sendFollowUpEmail(email: string, firstName?: string): Promise<unknown> {
    const template: EmailTemplate = {
      subject: 'Mercury Solutions - Cảm ơn sự quan tâm của bạn',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Follow-up từ Mercury Solutions</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; }
            .content { background: #f8fafc; padding: 30px; }
            .cta { text-align: center; margin: 30px 0; }
            .btn { display: inline-block; background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Cảm ơn sự quan tâm của {{ firstName }}!</h1>
            </div>
            <div class="content">
              <p>Xin chào {{ firstName }},</p>
              
              <p>Chúng tôi hy vọng bạn đã có thời gian tìm hiểu về các dịch vụ của Mercury Solutions. Chúng tôi rất mong được hợp tác cùng bạn.</p>

              <h3>Tại sao chọn Mercury Solutions?</h3>
              <ul>
                <li>✅ <strong>Chuyên môn cao:</strong> Đội ngũ kỹ sư giàu kinh nghiệm</li>
                <li>✅ <strong>Công nghệ tiên tiến:</strong> AI, IoT, Cloud Computing</li>
                <li>✅ <strong>Hỗ trợ 24/7:</strong> Luôn sẵn sàng hỗ trợ khách hàng</li>
                <li>✅ <strong>Giá cả cạnh tranh:</strong> Chi phí hợp lý, chất lượng cao</li>
              </ul>

              <div class="cta">
                <a href="tel:+84283xxxxxx" class="btn">Gọi ngay để tư vấn</a>
              </div>

              <p>Hoặc bạn có thể reply email này để đặt lịch tư vấn miễn phí.</p>

              <p>Trân trọng,<br>
              Đội ngũ Mercury Solutions</p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    return this.sendEmail({
      to: email,
      template,
      variables: {
        firstName: firstName || 'Bạn',
      }
    })
  }
}

export const emailService = new EmailService()
export default emailService