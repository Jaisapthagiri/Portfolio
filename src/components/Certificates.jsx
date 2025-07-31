import React, { useEffect, useRef, useState } from 'react';
import SS1 from '../assets/SS1.png';
import SS2 from '../assets/SS2.png';
import SS3 from '../assets/SS3.png';

const Certificates = () => {

    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [SS1, SS2, SS3];
    const totalSlides = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 3000);
        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div>
            <div className="flex flex-col mt-5 items-center" data-aos="fade-right">
                <div className="w-full max-w-2xl overflow-hidden relative p-3 rounded-2xl">
                    <div
                        ref={containerRef}
                        className="flex transition-transform duration-500 ease-in-out "
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <img
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full max-h-[400px] object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center mt-8 space-x-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${currentSlide === i ? 'bg-red-400' : 'bg-amber-200'}`}
                            onClick={() => setCurrentSlide(i)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
