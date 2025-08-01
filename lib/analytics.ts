// Analytics utility for tracking email marketing traffic
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
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
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    const gtag = (...args: any[]) => {
      (window as any).dataLayer.push(args);
    };
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    (window as any).gtag = gtag;
  }
};

// Track page views with UTM parameters
export const trackPageView = (url: string, utmParams?: UTMParams) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const gtag = (window as any).gtag;
    
    // Track page view
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: url,
      custom_map: {
        'custom_parameter_1': 'utm_source',
        'custom_parameter_2': 'utm_medium',
        'custom_parameter_3': 'utm_campaign',
        'custom_parameter_4': 'utm_content',
        'custom_parameter_5': 'utm_term',
      },
      utm_source: utmParams?.utm_source,
      utm_medium: utmParams?.utm_medium,
      utm_campaign: utmParams?.utm_campaign,
      utm_content: utmParams?.utm_content,
      utm_term: utmParams?.utm_term,
    });
  }
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const gtag = (window as any).gtag;
    
    gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      ...event.customParameters,
    });
  }
};

// Track email marketing specific events
export const trackEmailMarketingEvent = (
  action: string,
  campaign: string,
  content?: string,
  additionalParams?: Record<string, any>
) => {
  trackEvent({
    action,
    category: 'email_marketing',
    label: campaign,
    customParameters: {
      campaign_name: campaign,
      content_type: content || 'email',
      source: 'mailchimp',
      ...additionalParams,
    },
  });
};

// Parse UTM parameters from URL
export const parseUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
  };
};

// Track TVC page specific events
export const trackTVCEvent = (
  action: 'view_tvc_page' | 'click_cta' | 'view_portfolio' | 'contact_form',
  additionalParams?: Record<string, any>
) => {
  const utmParams = parseUTMParams();
  
  trackEvent({
    action,
    category: 'tvc_services',
    label: action,
    customParameters: {
      page: '/tvc',
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_term: utmParams.utm_term,
      ...additionalParams,
    },
  });
};

// Store UTM parameters in session storage for cross-page tracking
export const storeUTMParams = () => {
  if (typeof window === 'undefined') return;
  
  const utmParams = parseUTMParams();
  const hasUTMParams = Object.values(utmParams).some(param => param);
  
  if (hasUTMParams) {
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
  }
};

// Get stored UTM parameters
export const getStoredUTMParams = (): UTMParams => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

// Track conversion events
export const trackConversion = (
  conversionType: 'lead' | 'contact' | 'portfolio_view',
  value?: number
) => {
  const utmParams = getStoredUTMParams();
  
  trackEvent({
    action: 'conversion',
    category: 'tvc_services',
    label: conversionType,
    value,
    customParameters: {
      conversion_type: conversionType,
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
      utm_content: utmParams.utm_content,
      utm_term: utmParams.utm_term,
    },
  });
}; 