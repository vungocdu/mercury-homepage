'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { 
  initGA, 
  trackPageView, 
  parseUTMParams, 
  storeUTMParams,
  trackTVCEvent 
} from '@/lib/analytics';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
  }, []);

  useEffect(() => {
    // Track page views and UTM parameters
    const utmParams = parseUTMParams();
    storeUTMParams();
    
    // Track page view with UTM parameters
    trackPageView(pathname, utmParams);
    
    // Track specific events for TVC page
    if (pathname === '/tvc') {
      trackTVCEvent('view_tvc_page', {
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_content: utmParams.utm_content,
        utm_term: utmParams.utm_term,
      });
    }
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
} 