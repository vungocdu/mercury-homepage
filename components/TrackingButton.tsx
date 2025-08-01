'use client';

import { ReactNode } from 'react';
import { trackTVCEvent, trackConversion, getStoredUTMParams } from '@/lib/analytics';

interface TrackingButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  trackingAction: 'click_cta' | 'view_portfolio' | 'contact_form' | 'view_tvc_page';
  trackingLabel?: string;
  conversionType?: 'lead' | 'contact' | 'portfolio_view';
  conversionValue?: number;
}

export default function TrackingButton({
  children,
  href,
  onClick,
  className = '',
  trackingAction,
  trackingLabel,
  conversionType,
  conversionValue,
}: TrackingButtonProps) {
  const handleClick = () => {
    // Track the click event
    trackTVCEvent(trackingAction, {
      button_text: typeof children === 'string' ? children : trackingLabel,
      utm_params: getStoredUTMParams(),
    });

    // Track conversion if specified
    if (conversionType) {
      trackConversion(conversionType, conversionValue);
    }

    // Call original onClick if provided
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
} 