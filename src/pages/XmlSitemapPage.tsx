
import React, { useEffect, useState } from 'react';

// This component generates an XML sitemap for search engines
const XmlSitemapPage = () => {
  const [routes, setRoutes] = useState<string[]>([]);
  const baseUrl = window.location.origin;
  const today = new Date().toISOString().split('T')[0];
  
  useEffect(() => {
    // Fetch and parse the Markdown file - using a relative path that works in both dev and production
    fetch('./src/data/sitemap.md')
      .then(response => {
        if (!response.ok) {
          // Try alternate path if first attempt fails
          return fetch('/src/data/sitemap.md');
        }
        return response;
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch sitemap markdown');
        }
        return response.text();
      })
      .then(markdown => {
        // Extract routes from the markdown content
        // Skip lines that are headers (starting with #), empty lines, or comments
        const extractedRoutes = markdown
          .split('\n')
          .filter(line => line.trim() && !line.startsWith('#') && !line.startsWith('//'))
          .map(line => line.trim());
        
        setRoutes(extractedRoutes);
      })
      .catch(error => {
        console.error('Error loading sitemap paths:', error);
        // Fallback to a minimal set of routes if the markdown fails to load
        setRoutes([
          '/',
          '/services',
          '/about',
          '/contact',
          '/sitemap'
        ]);
      });
  }, []);
  
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
    if (routes.length === 0) return;
    
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
  }, [routes]);
  
  return null;
};

export default XmlSitemapPage;
