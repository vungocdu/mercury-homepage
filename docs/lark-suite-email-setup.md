# Lark Suite Email Configuration Guide

## Overview
This guide explains how to configure Lark Suite SMTP for the Minova Solutions website email system.

## Prerequisites
- Lark Suite account with admin access
- Domain `minova.vn` configured in Lark Suite
- Email account `info@minova.vn` created

## Step 1: Enable SMTP in Lark Suite

1. **Login to Lark Suite Admin Console**
   - Go to [https://admin.larksuite.com](https://admin.larksuite.com)
   - Login with admin credentials

2. **Navigate to Email Settings**
   - Go to `Workspace Settings` > `Email & Calendar`
   - Click on `SMTP Settings`

3. **Enable SMTP for info@minova.vn**
   - Find the `info@minova.vn` user
   - Enable SMTP access
   - Generate app-specific password (if 2FA is enabled)

## Step 2: Configure Environment Variables

Copy the Lark Suite configuration:

```bash
cp env.larksuite.example .env.local
```

Update `.env.local` with your credentials:

```env
# Lark Suite SMTP Configuration
SMTP_HOST=smtp.larksuite.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@minova.vn
SMTP_PASSWORD=your_app_specific_password
SMTP_FROM_EMAIL=info@minova.vn
SMTP_FROM_NAME=Minova Solutions
ADMIN_EMAIL=du.vu@minova.vn
```

## Step 3: Test Email Configuration

Run the email test script:

```bash
npm run test:email
```

Expected output:
```
🧪 Testing Email Configuration...

📋 Current SMTP Configuration:
   Host: smtp.larksuite.com
   Port: 465
   User: info@minova.vn
   Secure: SSL
   From: Minova Solutions <info@minova.vn>
   Admin: du.vu@minova.vn

🔗 Testing SMTP connection...
✅ SMTP connection successful!

📧 Sending test email...
✅ Test email sent successfully!
   Message ID: <...>
   To: du.vu@minova.vn

🎉 All tests passed! Your email configuration is working correctly.
```

## Step 4: Verify Email Templates

The system will automatically send:

### Customer Welcome Emails:
- **Software Service**: Professional template with development focus
- **TVC Service**: Creative template with video production focus

### Admin Notifications:
- **Software**: Normal priority (4-8 hour response)
- **TVC**: High priority (2-4 hour response)

## Troubleshooting

### Common Issues:

1. **"Authentication failed"**
   - Verify username/password
   - Check if 2FA requires app-specific password
   - Ensure SMTP is enabled for the account

2. **"Connection timeout"**
   - Check firewall settings for port 465
   - Verify network connectivity

3. **"Certificate error"**
   - Update `tls.rejectUnauthorized: false` in code (already configured)

4. **"Domain not verified"**
   - Ensure `minova.vn` domain is properly configured in Lark Suite
   - Check DNS records

### Debug Steps:

1. **Check configuration**:
   ```bash
   npm run test:email
   ```

2. **Review logs**:
   - Check console output for detailed error messages
   - Look for SMTP connection details

3. **Test manually**:
   ```bash
   # Test SMTP connection with telnet
   telnet smtp.larksuite.com 465
   ```

## Email Flow

```mermaid
graph TD
    A[User submits form] --> B{Service Type}
    B -->|Software| C[Software Welcome Email]
    B -->|TVC| D[TVC Welcome Email]
    C --> E[Normal Priority Admin Alert]
    D --> F[High Priority Admin Alert]
    E --> G[du.vu@minova.vn]
    F --> G
```

## Security Considerations

1. **App-Specific Passwords**: Use dedicated passwords for SMTP
2. **Environment Variables**: Never commit `.env.local` to git
3. **SSL/TLS**: Always use encrypted connections (port 465)
4. **Rate Limiting**: Lark Suite may have sending limits

## Production Checklist

- [ ] Lark Suite domain verified
- [ ] SMTP enabled for info@minova.vn
- [ ] Environment variables configured
- [ ] Email test passed
- [ ] Admin notifications working
- [ ] Customer welcome emails working
- [ ] Mailchimp integration tested

## Support

For issues with Lark Suite configuration:
- Lark Suite Support: [https://www.larksuite.com/support](https://www.larksuite.com/support)
- Documentation: [https://open.larksuite.com/document](https://open.larksuite.com/document)

For Minova Solutions technical issues:
- Contact: du.vu@minova.vn
- Check logs in application console