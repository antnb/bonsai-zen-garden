
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import ProductShowcase from '../components/home/ProductShowcase';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Contact from '../components/home/Contact';

const Index = () => {
  // Intersection Observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.opacity-0');
          elements.forEach(element => {
            if (element instanceof HTMLElement) {
              if (element.style.animationDelay === '') {
                element.style.animationDelay = '0.2s';
              }
            }
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
