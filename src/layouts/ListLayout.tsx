
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// This acts like Hugo's list.html template
interface ListLayoutProps {
  children: React.ReactNode;
  section: string;
}

const ListLayout: React.FC<ListLayoutProps> = ({ children, section }) => {
  // Format section name for display (capitalize, replace hyphens)
  const formatSectionName = (section: string) => {
    return section
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="pt-24">
      <Navbar />
      <div className="bg-bonsai-beige/50 py-3">
        <div className="container-custom mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-bonsai-dark-green font-medium">{formatSectionName(section)}</span>
          </div>
        </div>
      </div>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ListLayout;
