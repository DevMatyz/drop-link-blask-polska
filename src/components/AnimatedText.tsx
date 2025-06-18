
import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const texts = [
    "Dobre API",
    "Japuszko zatwierdzi", 
    "Zrobione w Polsce"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl md:text-7xl font-bold glow-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-shift bg-300%">
        DropLink 3.0
      </h1>
      
      <div className="relative h-20 flex items-center justify-center">
        <p className="text-2xl md:text-3xl text-gray-300">
          DropLink 3.0 jest dobry ponieważ{" "}
          <span 
            className={`inline-block transition-all duration-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            } font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-text`}
          >
            {texts[currentIndex]}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AnimatedText;
