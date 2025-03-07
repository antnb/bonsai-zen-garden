
/**
 * Utility functions to manage cookie consent throughout the application
 */

// Check if a specific cookie type is allowed
export const isCookieAllowed = (cookieType: 'essential' | 'analytics' | 'marketing'): boolean => {
  // Essential cookies are always allowed
  if (cookieType === 'essential') return true;
  
  // Check if user has given consent
  const consentGiven = localStorage.getItem('cookieConsentGiven');
  if (!consentGiven) return false;
  
  // Check specific cookie type
  const cookieSettings = localStorage.getItem('cookieSettings');
  if (!cookieSettings) return false;
  
  try {
    const settings = JSON.parse(cookieSettings);
    return settings[cookieType] === true;
  } catch (error) {
    console.error('Error parsing cookie settings:', error);
    return false;
  }
};

// Example implementation of applying cookie preferences to third-party services
export const applyAnalyticsCookies = (): void => {
  if (isCookieAllowed('analytics')) {
    // Initialize analytics services here
    console.log('Analytics cookies applied');
    // Example: window.gtag = function() { ... }
  }
};

export const applyMarketingCookies = (): void => {
  if (isCookieAllowed('marketing')) {
    // Initialize marketing/advertising services here
    console.log('Marketing cookies applied');
    // Example: window.fbq = function() { ... }
  }
};

// Apply all cookie preferences
export const applyCookiePreferences = (): void => {
  applyAnalyticsCookies();
  applyMarketingCookies();
};
