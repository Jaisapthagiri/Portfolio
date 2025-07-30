import React from "react";

const CustomAnimate = () => {
  return (
    <div className="absolute inset-0 -mt-20 z-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient
            id="gradientStroke"
            cx="0.5"
            cy="0.5"
            r="0.5"
            fx="0.5"
            fy="0.5"
          >
            <stop offset="0%" stopColor="#13ADC7" />
            <stop offset="100%" stopColor="#945DD6" />
          </radialGradient>
        </defs>

        {/* Orbit Path */}
        <path
          id="orbitPath"
          d="M100,300 a200,200 0 1,0 400,0 a200,200 0 1,0 -400,0"
          stroke="url(#gradientStroke)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />

        {[0, 2, 4, 6, 8].map((delay, index) => (
          <circle
            key={index}
            r="6"
            fill="#13ADC7"
            filter="url(#glow)"
            opacity="0.9"
          >
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              rotate="auto"
              begin={`${delay}s`}
            >
              <mpath href="#orbitPath" />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default CustomAnimate;
