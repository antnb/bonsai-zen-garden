
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight } from 'lucide-react';

const CookiePolicyPage = () => {
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
              <span className="text-bonsai-dark-green font-medium">Cookie Policy</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle subtitle="LEGAL" title="Cookie Policy" />
          
          <div className="prose max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
            <p className="date-text">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <div className="content-section">
              <h2 className="section-heading">1. What Are Cookies</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">2. How We Use Cookies</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">3. Types of Cookies We Use</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              
              <div className="pl-4 border-l-3 border-bonsai-beige">
                <h3 className="subsection-heading">3.1 Essential Cookies</h3>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                
                <h3 className="subsection-heading">3.2 Performance Cookies</h3>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
                
                <h3 className="subsection-heading">3.3 Functionality Cookies</h3>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
                
                <h3 className="subsection-heading">3.4 Targeting/Advertising Cookies</h3>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                </p>
              </div>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">4. Managing Cookies</h2>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">5. Changes to This Cookie Policy</h2>
              <p>
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
              </p>
            </div>
            
            <div className="content-section">
              <h2 className="section-heading">6. Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please contact us at:
              </p>
              <ul className="my-4">
                <li><strong>Email:</strong> privacy@indocipanasbonsai.com</li>
                <li><strong>Phone:</strong> +62 812 3456 7890</li>
                <li><strong>Address:</strong> Jl. Raya Cipanas No. 123, Bogor, West Java, Indonesia</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
