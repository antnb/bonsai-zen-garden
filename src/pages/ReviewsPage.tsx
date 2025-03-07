
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Reviews from '../components/home/Reviews';

const ReviewsPage = () => {
  return (
    <div className="pt-24">
      <Navbar />
      <main>
        <div className="container-custom mx-auto py-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-bonsai-dark-green mb-4">Customer Reviews</h1>
          <p className="text-gray-600 max-w-3xl">
            Don't just take our word for it. See what our customers from around the world have to say about 
            their experience with Indo Cipanas Bonsai. We're proud to maintain our reputation for excellence and customer satisfaction.
          </p>
        </div>
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
