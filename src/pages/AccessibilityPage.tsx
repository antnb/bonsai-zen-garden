
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
          
          <div className="prose max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <p className="date-text">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="content-section">
              <h2 className="section-heading">Our Commitment to Accessibility</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Conformance Status</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Accessibility Features</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              
              <ul className="my-4">
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
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Feedback and Contact Information</h2>
              <p>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
              </p>
              
              <p>
                We welcome your feedback on the accessibility of our website. Please contact us at:
              </p>
              <ul className="my-4">
                <li><strong>Email:</strong> accessibility@indocipanasbonsai.com</li>
                <li><strong>Phone:</strong> +62 812 3456 7890</li>
                <li><strong>Address:</strong> Jl. Raya Cipanas No. 123, Bogor, West Java, Indonesia</li>
              </ul>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">Continuous Improvement</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
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
