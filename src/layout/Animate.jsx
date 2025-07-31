import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({ children }) => {
  useEffect(() => {
    const isMdOrLarger = window.innerWidth >= 768; 

    AOS.init({
      duration: 2000,
      once: !isMdOrLarger, 
      easing: 'ease-in-out',
      mirror: false,
    });
  }, []);

  return <>{children}</>;
};

export default Animate;
