import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Animate = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      easing: 'ease-in-out',
      mirror: false,
    });
  }, []);

  return <>{children}</>;
};

export default Animate;
