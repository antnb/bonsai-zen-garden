
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Process from '../components/home/Process';
import Reviews from '../components/home/Reviews';
import Contact from '../components/home/Contact';
import { useEffect } from 'react';

// This acts like Hugo's index.html template
const HomePage = () => {
  // Animation observer (kept from original)
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
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <About />
      <Reviews />
      <Contact />
    </>
  );
};

export default HomePage;
