import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({ children }) => {
  useEffect(() => {
    const isSmallScreen = window.innerWidth > 640; 

    AOS.init({
      duration: 2000,
      once: !isSmallScreen, 
      easing: 'ease-in-out',
      mirror: false,
    });
  }, []);

  return <>{children}</>;
};

export default Animate;
