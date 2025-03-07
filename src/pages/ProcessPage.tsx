
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Process from '../components/home/Process';

const ProcessPage = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <main>
        <div className="container-custom mx-auto py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-bonsai-dark-green mb-4">Our Process</h1>
          <p className="text-gray-600 max-w-3xl">
            Learn about our comprehensive journey from local farm partnerships to secure delivery. 
            We've established a sustainable supply chain that ensures quality at every step, 
            supporting local communities while delivering exceptional plants to our customers.
          </p>
        </div>
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;
