
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckSquare, Square, Settings } from 'lucide-react';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookieSettings, setCookieSettings] = useState<CookieSettings>({
    essential: true, // Essential cookies are always required
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven) {
      setShowBanner(true);
    }

    // Load saved preferences if available
    const savedSettings = localStorage.getItem('cookieSettings');
    if (savedSettings) {
      setCookieSettings(JSON.parse(savedSettings));
    }
  }, []);

  const saveCookieSettings = () => {
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieSettings', JSON.stringify(cookieSettings));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setCookieSettings(allAccepted);
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieSettings', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const rejectNonEssentialCookies = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setCookieSettings(essentialOnly);
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookieSettings', JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const toggleCookiePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const toggleCookieSetting = (setting: keyof CookieSettings) => {
    if (setting === 'essential') return; // Cannot toggle essential cookies
    setCookieSettings({
      ...cookieSettings,
      [setting]: !cookieSettings[setting],
    });
  };

  const openCookieBanner = () => {
    setShowBanner(true);
    setShowPreferences(false);
  };

  if (!showBanner) {
    return (
      <button 
        onClick={openCookieBanner}
        className="fixed bottom-4 left-4 z-50 p-2 bg-bonsai-dark-green text-white rounded-full shadow-lg hover:bg-bonsai-olive transition-colors"
        aria-label="Cookie Settings"
      >
        <Settings size={20} />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 animate-fade-in-up`}>
      <div className="bg-white border-t border-gray-200 shadow-lg p-4 md:p-6">
        <div className="container-custom mx-auto">
          {!showPreferences ? (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-bonsai-dark-green">Cookie Consent</h2>
                <button 
                  onClick={() => setShowBanner(false)} 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              
              <p className="text-gray-700">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                By clicking "Accept All", you consent to our use of cookies. Visit our 
                <Link to="/cookie-policy" className="text-bonsai-olive hover:underline mx-1">Cookie Policy</Link>
                to learn more.
              </p>
              
              <div className="flex flex-wrap gap-3 md:justify-between">
                <div className="space-x-2">
                  <button
                    onClick={rejectNonEssentialCookies}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
                  >
                    Essential Only
                  </button>
                  <button
                    onClick={acceptAllCookies}
                    className="px-4 py-2 bg-bonsai-dark-green hover:bg-bonsai-olive text-white rounded-md transition-colors"
                  >
                    Accept All
                  </button>
                </div>
                <button
                  onClick={toggleCookiePreferences}
                  className="px-4 py-2 border border-bonsai-dark-green text-bonsai-dark-green hover:bg-bonsai-beige rounded-md transition-colors"
                >
                  Cookie Preferences
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-lg font-bold text-bonsai-dark-green">Cookie Preferences</h2>
                <button 
                  onClick={() => setShowPreferences(false)} 
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="Back"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 border rounded-md flex items-start gap-3 bg-gray-100">
                  <div className="mt-0.5">
                    <CheckSquare size={20} className="text-bonsai-dark-green" />
                  </div>
                  <div>
                    <h3 className="font-medium text-bonsai-dark-green">Essential Cookies</h3>
                    <p className="text-sm text-gray-600">
                      These cookies are necessary for the website to function and cannot be switched off.
                    </p>
                  </div>
                </div>
                
                <div 
                  className="p-3 border rounded-md flex items-start gap-3 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleCookieSetting('analytics')}
                >
                  <div className="mt-0.5">
                    {cookieSettings.analytics ? (
                      <CheckSquare size={20} className="text-bonsai-dark-green" />
                    ) : (
                      <Square size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Analytics Cookies</h3>
                    <p className="text-sm text-gray-600">
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
                    </p>
                  </div>
                </div>
                
                <div 
                  className="p-3 border rounded-md flex items-start gap-3 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleCookieSetting('marketing')}
                >
                  <div className="mt-0.5">
                    {cookieSettings.marketing ? (
                      <CheckSquare size={20} className="text-bonsai-dark-green" />
                    ) : (
                      <Square size={20} className="text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Marketing Cookies</h3>
                    <p className="text-sm text-gray-600">
                      These cookies may be set through our site by our advertising partners to build a profile of your interests.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={saveCookieSettings}
                  className="px-4 py-2 bg-bonsai-dark-green hover:bg-bonsai-olive text-white rounded-md transition-colors"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
