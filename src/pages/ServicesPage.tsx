
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Services from '../components/home/Services';

const ServicesPage = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <main>
        <div className="container-custom mx-auto py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-bonsai-dark-green mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-3xl">
            Discover our comprehensive range of bonsai and plant services. From premium semi-mature bonsai to rare tropical plants, 
            we offer expert solutions for collectors, nurseries, and landscape professionals around the world.
          </p>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
