# Mailchimp Integration Guide

## Overview
This document explains the enhanced Mailchimp integration with robust error handling, validation, and fallback mechanisms.

## Key Improvements

### 1. Configuration Validation
```typescript
// Automatic detection of missing credentials
const isMailchimpConfigured = validateMailchimpConfig()

// Graceful fallback when not configured
if (!isMailchimpConfigured) {
  console.log('⚠️ Mailchimp not configured - operating in fallback mode')
}
```

### 2. Enhanced Error Handling
- **Non-blocking errors**: Mailchimp failures don't break form submissions
- **Detailed logging**: Clear error messages with context
- **Smart fallbacks**: Returns null instead of throwing for non-critical errors
- **Retry logic**: Automatically updates existing subscribers if add fails

### 3. Input Validation
```typescript
// Email validation
private validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Contact validation
private validateContact(contact: MailchimpContact): void {
  if (!contact.email) throw new Error('Email is required')
  if (!this.validateEmail(contact.email)) throw new Error('Invalid email format')
}
```

### 4. Smart Configuration Detection
```typescript
// Checks all required environment variables
MAILCHIMP_API_KEY
MAILCHIMP_SERVER_PREFIX  
MAILCHIMP_AUDIENCE_ID

// Only configures if all are present
// Operates in fallback mode if any are missing
```

## Methods

### Core Subscriber Management

#### `addSubscriber(contact: MailchimpContact)`
- ✅ Validates email format
- ✅ Handles "Member Exists" errors gracefully
- ✅ Auto-retries with update if subscriber exists
- ✅ Non-blocking: logs errors but continues execution

#### `updateSubscriber(contact: MailchimpContact)`
- ✅ Updates existing subscriber data
- ✅ Handles tag addition failures gracefully
- ✅ Detailed error logging

#### `addTagsToSubscriber(email: string, tags: string[])`
- ✅ Validates email and tags
- ✅ Trims whitespace from tags
- ✅ Skips empty tag arrays

### Campaign Management

#### `createCampaign(campaign: MailchimpCampaign)`
- ✅ Validates required campaign fields
- ✅ Sets content if provided
- ✅ Throws errors for critical failures

#### `sendCampaign(campaignId: string)`
- ✅ Validates campaign ID
- ✅ Detailed success/error logging

#### `getCampaignStats(campaignId: string)`
- ✅ Returns default stats if failed
- ✅ Non-blocking error handling

### Health & Monitoring

#### `getListStats()`
- ✅ Returns audience statistics
- ✅ Fallback to zero stats if failed

#### `isHealthy()`
- ✅ Quick health check
- ✅ Returns boolean status

## Usage Examples

### Basic Contact Form Integration
```typescript
import { mailchimpService } from '@/lib/mailchimp'

// In your API route
try {
  await mailchimpService.addSubscriber({
    email: 'user@example.com',
    firstName: 'John',
    lastName: 'Doe',
    tags: ['contact_form', 'software'],
    mergeFields: {
      COMPANY: 'Tech Corp',
      SOURCE: 'website'
    }
  })
} catch (error) {
  // Form submission continues even if Mailchimp fails
  console.warn('Mailchimp subscription failed:', error)
}
```

### Service-Specific Tagging
```typescript
// Software service
await mailchimpService.addSubscriber({
  email: formData.email,
  firstName: formData.firstName,
  lastName: formData.lastName,
  tags: ['software', 'website_contact'],
  mergeFields: {
    SERVICE: 'software',
    SOURCE: 'contact_form'
  }
})

// TVC service  
await mailchimpService.addSubscriber({
  email: formData.email,
  firstName: formData.firstName,
  lastName: formData.lastName,
  tags: ['tvc', 'high_priority'],
  mergeFields: {
    SERVICE: 'tvc',
    SOURCE: 'tvc_page'
  }
})
```

### Campaign Creation
```typescript
const campaign = await mailchimpService.createCampaign({
  listId: 'your_audience_id',
  subject: 'Welcome to Minova Solutions',
  fromName: 'Minova Solutions',
  fromEmail: 'info@minova.vn',
  content: {
    html: '<h1>Welcome!</h1><p>Thank you for subscribing.</p>',
    text: 'Welcome! Thank you for subscribing.'
  }
})
```

## Error Handling Strategy

### Non-Critical Errors (Logged but not thrown)
- Subscriber already exists → Auto-update
- Tag addition failures → Continue without tags
- Stats retrieval failures → Return empty stats

### Critical Errors (Thrown)
- Missing configuration → Throws immediately
- Invalid email format → Validation error
- Campaign creation failures → Stops execution

## Configuration

### Environment Variables
```env
MAILCHIMP_API_KEY=your_api_key_here
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_AUDIENCE_ID=your_audience_id
```

### Fallback Mode
When any required environment variable is missing:
- Service logs warning message
- All methods return null or default values
- No API calls are made to Mailchimp
- Form submissions continue normally

## Monitoring

### Console Output
```
✅ Mailchimp configured successfully
📧 Adding subscriber to Mailchimp: user@example.com
✅ Successfully added subscriber to Mailchimp: abc123
🏷️ Adding tags to subscriber user@example.com: ['software', 'contact_form']
✅ Successfully added tags to subscriber: ['software', 'contact_form']
```

### Error Logs
```
❌ Mailchimp API error: {
  status: 400,
  title: "Invalid Resource",
  detail: "The email address is invalid",
  email: "invalid-email"
}
⚠️ Continuing without Mailchimp subscription for: invalid-email
```

## Best Practices

1. **Always use try-catch** around Mailchimp calls
2. **Don't block form submissions** on Mailchimp failures
3. **Log errors with context** for debugging
4. **Use meaningful tags** for segmentation
5. **Validate inputs** before API calls
6. **Test in fallback mode** without credentials

## Testing

### Health Check
```typescript
const isHealthy = await mailchimpService.isHealthy()
console.log('Mailchimp status:', isHealthy ? 'Healthy' : 'Unavailable')
```

### Error Simulation
```typescript
// Test with invalid email
await mailchimpService.addSubscriber({
  email: 'invalid-email',
  firstName: 'Test'
})
// Should log error but not throw
```

## Production Checklist

- [ ] All environment variables configured
- [ ] API key has proper permissions
- [ ] Audience ID is correct
- [ ] Server prefix matches region
- [ ] Error logging is monitored
- [ ] Fallback mode tested
- [ ] Health check passes

This enhanced integration ensures reliable operation even when Mailchimp is unavailable or misconfigured.