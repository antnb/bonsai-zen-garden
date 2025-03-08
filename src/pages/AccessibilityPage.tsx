
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight } from 'lucide-react';

const AccessibilityPage = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-bonsai-beige/50 py-3">
          <div className="container-custom mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-bonsai-dark-green font-medium">Accessibility</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle subtitle="INCLUSIVITY" title="Accessibility Statement" />
          
          <div className="prose max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <p className="date-text">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="content-section">
              <h2 className="section-heading">Our Commitment to Accessibility</h2>
              <p className="mb-6">
                At Indo Cipanas Bonsai, we are committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
              </p>
              <p className="mb-6">
                We strive to ensure that our website is accessible to all users, regardless of technology or ability. We aim to comply with WCAG 2.1 Level AA standards as a baseline for our accessibility goals.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Conformance Status</h2>
              <p className="mb-6">
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
              </p>
              <p className="mb-6">
                Indo Cipanas Bonsai's website is partially conformant with WCAG 2.1 level AA. Partially conformant means that some parts of the content do not fully conform to the accessibility standard.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Accessibility Features</h2>
              <p className="mb-6">
                We have implemented the following accessibility features throughout our website:
              </p>
              
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Semantic HTML5 markup</strong> for improved screen reader compatibility</li>
                <li><strong>ARIA landmarks</strong> to identify regions of the page</li>
                <li><strong>Sufficient color contrast ratios</strong> for better readability</li>
                <li><strong>Text resizing</strong> without loss of content or functionality</li>
                <li><strong>Keyboard accessibility</strong> for all interactive elements</li>
                <li><strong>Alternative text</strong> for all informative images</li>
              </ul>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Limitations and Alternatives</h2>
              <p className="mb-6">
                Despite our best efforts to ensure accessibility of Indo Cipanas Bonsai, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.
              </p>
              <p className="mb-6">
                Known limitations for our website:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Comments from users:</strong> User-generated content may not be properly structured and labeled for screen readers. We monitor these contributions and try to fix issues as soon as they are reported.</li>
                <li><strong>Uploaded images:</strong> Some user-uploaded images may lack alt text. We strive to provide alt text for all product images we control directly.</li>
              </ul>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Feedback and Contact Information</h2>
              <p className="mb-6">
                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers on our website.
              </p>
              
              <p className="mb-6">
                We welcome your feedback on the accessibility of our website. Please contact us at:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li><strong>Email:</strong> <a href="mailto:accessibility@indocipanasbonsai.com" className="text-bonsai-olive hover:underline">accessibility@indocipanasbonsai.com</a></li>
                <li><strong>Phone:</strong> +62 812 3456 7890</li>
                <li><strong>Address:</strong> Jl. Raya Cipanas No. 123, Bogor, West Java, Indonesia</li>
              </ul>
              <p className="mb-6">
                We try to respond to feedback within 5 business days.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Continuous Improvement</h2>
              <p className="mb-6">
                At Indo Cipanas Bonsai, we're committed to making our website accessible to all users. This accessibility statement was created on [Date] and was last updated on [Date]. We will continue to review and update this statement as our website evolves.
              </p>
              <p className="mb-6">
                If you would like to learn more about our commitment to accessibility, please visit our <Link to="/about" className="text-bonsai-olive hover:underline">About Us</Link> page or <Link to="/contact" className="text-bonsai-olive hover:underline">contact us</Link> directly.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityPage;
