# Analytics Setup Guide for Email Marketing Tracking

## Overview
This guide explains how to set up analytics tracking for email marketing campaigns, specifically for tracking traffic from Mailchimp campaigns to the TVC services page.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Analytics 4 Configuration
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Mailchimp Configuration (Optional - for advanced integration)
MAILCHIMP_API_KEY=your_mailchimp_api_key
MAILCHIMP_LIST_ID=your_mailchimp_list_id
MAILCHIMP_SERVER_PREFIX=us1

# Vercel Analytics (Optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_vercel_analytics_id
```

## Google Analytics 4 Setup

1. **Create GA4 Property**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new GA4 property
   - Get your Measurement ID (format: G-XXXXXXXXXX)

2. **Configure Custom Dimensions**
   - Go to Admin > Custom Definitions > Custom Dimensions
   - Add the following custom dimensions:
     - `utm_source` (User scope)
     - `utm_medium` (User scope)
     - `utm_campaign` (User scope)
     - `utm_content` (User scope)
     - `utm_term` (User scope)

3. **Configure Custom Events**
   - Go to Admin > Events > Custom Events
   - The following events are automatically tracked:
     - `view_tvc_page` - When users visit the TVC page
     - `click_cta` - When users click CTA buttons
     - `view_portfolio` - When users view portfolio
     - `contact_form` - When users contact via phone/email
     - `conversion` - When users complete a conversion action

## Mailchimp Integration

### UTM Parameters for Email Campaigns

When creating email campaigns in Mailchimp, use these UTM parameters:

```
https://www.mercurysolutions.vn/tvc?utm_source=mailchimp&utm_medium=email&utm_campaign=YOUR_CAMPAIGN_NAME&utm_content=YOUR_EMAIL_CONTENT&utm_term=YOUR_KEYWORD
```

### Campaign Naming Convention

Use consistent naming for better tracking:
- Campaign: `tvc_services_2024_q1`
- Content: `hero_cta`, `portfolio_link`, `contact_form`
- Term: `video_production`, `tvc_services`, `digital_art`

## Tracking Implementation

### 1. Automatic Page View Tracking
- All page views are automatically tracked with UTM parameters
- TVC page views are specifically tracked with `view_tvc_page` event

### 2. Button Click Tracking
- CTA buttons use `TrackingButton` component
- Tracks button text, UTM parameters, and conversion value
- Automatically stores UTM parameters in session storage

### 3. Conversion Tracking
- Lead generation: 100 points
- Contact form: 200 points
- Portfolio views: 50 points

## Analytics Dashboard Setup

### Google Analytics 4 Reports

1. **Acquisition Report**
   - Source/Medium: Filter by `mailchimp / email`
   - Campaign: Filter by your campaign names

2. **Custom Reports**
   - Create custom report for TVC page performance
   - Filter by page path: `/tvc`
   - Add UTM parameters as secondary dimensions

3. **Conversion Tracking**
   - Set up goals for:
     - TVC page views
     - CTA button clicks
     - Contact form submissions

### Mailchimp Analytics

1. **Campaign Performance**
   - Track open rates and click-through rates
   - Compare with website analytics data

2. **A/B Testing**
   - Test different UTM parameters
   - Monitor conversion rates

## Testing

### 1. Test UTM Parameters
```
https://www.mercurysolutions.vn/tvc?utm_source=mailchimp&utm_medium=email&utm_campaign=test_campaign&utm_content=test_content&utm_term=test_term
```

### 2. Verify Tracking
- Check Google Analytics Real-Time reports
- Verify events are firing correctly
- Confirm UTM parameters are captured

### 3. Debug Mode
- Open browser console
- Check for analytics events
- Verify UTM parameter storage

## Best Practices

1. **Consistent Naming**
   - Use consistent campaign names
   - Standardize UTM parameters
   - Document all campaigns

2. **Regular Monitoring**
   - Check analytics weekly
   - Monitor conversion rates
   - Optimize based on data

3. **Data Cleanup**
   - Archive old campaigns
   - Clean up test data
   - Maintain data accuracy

## Troubleshooting

### Common Issues

1. **Events Not Tracking**
   - Check GA4 configuration
   - Verify environment variables
   - Check browser console for errors

2. **UTM Parameters Missing**
   - Verify URL parameters
   - Check session storage
   - Confirm parameter parsing

3. **Conversion Tracking Issues**
   - Verify conversion setup
   - Check event parameters
   - Confirm goal configuration

### Debug Commands

```javascript
// Check UTM parameters
console.log('UTM Params:', new URLSearchParams(window.location.search));

// Check stored UTM parameters
console.log('Stored UTM:', sessionStorage.getItem('utm_params'));

// Test analytics event
gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'test_label'
});
```

## Support

For technical support or questions about analytics setup, contact the development team. 