
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { applyCookiePreferences } from './utils/cookieConsent.ts'

// Apply cookie preferences on app initialization
applyCookiePreferences();

createRoot(document.getElementById("root")!).render(<App />);
