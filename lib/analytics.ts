// Analytics utility for tracking email marketing traffic
// Temporarily disabled due to TypeScript issues

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, unknown>;
}

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  console.log('Analytics disabled for now');
};

// Track page views with UTM parameters
export const trackPageView = (url: string, utmParams?: UTMParams) => {
  console.log('Analytics disabled for now');
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
  console.log('Analytics disabled for now');
};

// Track email marketing specific events
export const trackEmailMarketingEvent = (
  action: string,
  campaign: string,
  content?: string,
  additionalParams?: Record<string, unknown>
) => {
  console.log('Analytics disabled for now');
};

// Parse UTM parameters from URL
export const parseUTMParams = (): UTMParams => {
  return {};
};

// Track TVC page specific events
export const trackTVCEvent = (
  action: 'view_tvc_page' | 'click_cta' | 'view_portfolio' | 'contact_form',
  additionalParams?: Record<string, unknown>
) => {
  console.log('Analytics disabled for now');
};

// Store UTM parameters in session storage for cross-page tracking
export const storeUTMParams = () => {
  console.log('Analytics disabled for now');
};

// Get stored UTM parameters
export const getStoredUTMParams = (): UTMParams => {
  return {};
};

// Track conversion events
export const trackConversion = (
  conversionType: 'lead' | 'contact' | 'portfolio_view',
  value?: number
) => {
  console.log('Analytics disabled for now');
}; 