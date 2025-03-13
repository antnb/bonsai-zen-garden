
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// This acts like Hugo's baseof.html template
const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
