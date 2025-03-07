
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhyChooseUs from '../components/home/WhyChooseUs';

const WhyChooseUsPage = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <main>
        <div className="container-custom mx-auto py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-bonsai-dark-green mb-4">Why Choose Us</h1>
          <p className="text-gray-600 max-w-3xl">
            At Indo Cipanas Bonsai, we pride ourselves on exceptional quality, expert craftsmanship, and sustainable practices.
            Discover the unique advantages that set us apart as Indonesia's premier bonsai and tropical plant supplier.
          </p>
        </div>
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
