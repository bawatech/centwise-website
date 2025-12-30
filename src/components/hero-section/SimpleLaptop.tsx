// components/SimpleLaptop.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SimpleLaptop() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Image slides (replace these paths with your actual screenshot paths)
  const slides = [
    "/screenshots/dashboard.png",
    "/screenshots/employees.png",
    "/screenshots/add-employee.png"
  ];

  // Fallback colors for each slide
  const fallbackColors = [
    "bg-gradient-to-br from-blue-600 to-blue-800",
    "bg-gradient-to-br from-green-600 to-green-800",
    "bg-gradient-to-br from-purple-600 to-purple-800"
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -4, y: x * 5 });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(p => (p + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(p => (p - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="relative w-full flex justify-center items-center p-4">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative w-full max-w-md perspective-[1000px]"
      >
        {/* Laptop Container */}
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* Screen Lid */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-2 shadow-2xl">
            {/* Webcam */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-700" />
            
            {/* Screen */}
            <div className="rounded-lg bg-black overflow-hidden border border-gray-800">
              {/* Screen Content Area */}
              <div className="relative h-[240px] sm:h-[300px] md:h-[340px] overflow-hidden">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-300 ${
                      index === currentSlide
                        ? 'opacity-100 translate-x-0'
                        : index < currentSlide
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                    }`}
                  >
                    {/* Replace this div with your actual Image component */}
                    <div className={`w-full h-full ${fallbackColors[index]} flex items-center justify-center`}>
                      <div className="text-center text-white p-4">
                        <div className="text-2xl font-bold mb-2">
                          {index === 0 ? 'Dashboard' : index === 1 ? 'Employees' : 'Add Employee'}
                        </div>
                        <p className="opacity-80">Screenshot {index + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hinge */}
          <div className="h-2 w-[94%] mx-auto bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-sm" />

          {/* Base */}
          <div className="bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-xl h-7 shadow-lg">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3/5 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-800 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          </div>

          {/* Slide Dots */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-gray-800 w-4' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}