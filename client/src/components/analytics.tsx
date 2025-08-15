import { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  userId?: string;
}

export default function Analytics({ trackingId, userId }: AnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4 Integration
    if (trackingId && typeof window !== 'undefined') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };
      
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        user_id: userId,
      });

      // Track page views on route changes
      const handleRouteChange = () => {
        gtag('config', trackingId, {
          page_title: document.title,
          page_location: window.location.href,
        });
      };

      // Listen for navigation events (for SPA routing)
      window.addEventListener('popstate', handleRouteChange);
      
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [trackingId, userId]);

  useEffect(() => {
    // Simple analytics tracking for development/demo purposes
    if (!trackingId && typeof window !== 'undefined') {
      console.log('Analytics: Page view', {
        url: window.location.href,
        title: document.title,
        timestamp: new Date().toISOString(),
        userId: userId,
      });
    }
  }, [trackingId, userId]);

  return null;
}

// Utility functions for custom event tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  } else {
    console.log('Analytics: Event', { eventName, properties });
  }
};

export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.VITE_GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  } else {
    console.log('Analytics: Page view', { page });
  }
};

export const trackContactForm = (formData: Record<string, any>) => {
  trackEvent('contact_form_submit', {
    form_type: 'contact',
    company_size: formData.companySize,
    industry: formData.industry,
    inquiry_type: formData.inquiryType,
  });
};

export const trackDemoRequest = (source: string) => {
  trackEvent('demo_request', {
    source: source,
    timestamp: new Date().toISOString(),
  });
};

export const trackPricingView = (plan?: string) => {
  trackEvent('pricing_view', {
    plan: plan,
    timestamp: new Date().toISOString(),
  });
};

// Declare global gtag function for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}