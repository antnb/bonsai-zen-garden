
import React, { useEffect } from 'react';

// This component generates an XML sitemap for search engines
const XmlSitemapPage = () => {
  const baseUrl = window.location.origin;
  const today = new Date().toISOString().split('T')[0];
  
  // List of all routes in the application
  const routes = [
    '/',
    '/services',
    '/services-catalog',
    '/about',
    '/contact',
    '/export-process',
    '/sustainability',
    '/faq',
    '/testimonials',
    '/blog',
    '/partners',
    '/press',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-policy',
    '/accessibility',
    '/return-policy',
    '/sitemap'
  ];
  
  // Generate XML sitemap content
  const generateSitemapXml = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    routes.forEach(route => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${route}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      
      // Set priority based on route importance
      let priority = '0.5';
      if (route === '/') priority = '1.0';
      else if (route === '/services' || route === '/about' || route === '/contact') priority = '0.8';
      
      xml += `    <priority>${priority}</priority>\n`;
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    
    return xml;
  };
  
  useEffect(() => {
    const xmlContent = generateSitemapXml();
    
    // Create a blob with the XML content
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Set document content type and display XML
    document.title = 'Sitemap XML - Indo Cipanas Bonsai';
    
    // Create a pre element and set its content to the XML
    const pre = document.createElement('pre');
    pre.textContent = xmlContent;
    pre.style.margin = '20px';
    pre.style.padding = '20px';
    pre.style.backgroundColor = '#f5f5f5';
    pre.style.borderRadius = '5px';
    pre.style.overflowX = 'auto';
    pre.style.fontFamily = 'monospace';
    
    // Clear the body and append the pre element
    const root = document.getElementById('root');
    if (root) {
      while (root.firstChild) {
        root.removeChild(root.firstChild);
      }
      root.appendChild(pre);
    }
    
    // Clean up on unmount
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);
  
  return null;
};

export default XmlSitemapPage;
