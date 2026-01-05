// components/RightContent.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

export default function RightContent() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageError, setImageError] = useState(false);

  /* ---------------- Image Slides ---------------- */
  const screenshots = [
    {
      id: 1,
      title: "Dashboard",
      image: "/screenshots/dashboard.png",
      fallbackColor: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      id: 2,
      title: "Employee Management", 
      image: "/screenshots/employees.png",
      fallbackColor: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: 3,
      title: "Add Employee",
      image: "/screenshots/add-employee.png",
      fallbackColor: "bg-gradient-to-br from-purple-500 to-purple-700"
    }
  ];

  /* ---------------- Parallax Hover ---------------- */
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -6,
      y: x * 8
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  /* ---------------- Carousel Functions ---------------- */
  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setImageError(false);
    setTimeout(() => {
      setCurrentScreen((p) => (p + 1) % screenshots.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setImageError(false);
    setTimeout(() => {
      setCurrentScreen((p) => (p - 1 + screenshots.length) % screenshots.length);
      setIsAnimating(false);
    }, 400);
  };

  const goToScreen = (index: number) => {
    if (isAnimating || index === currentScreen) return;
    setIsAnimating(true);
    setImageError(false);
    setTimeout(() => {
      setCurrentScreen(index);
      setIsAnimating(false);
    }, 400);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextScreen, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isAnimating]);

  const currentScreenshot = screenshots[currentScreen];

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] perspective-[1200px]"
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* ================= LAPTOP SCREEN LID ================= */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[20px] p-2 shadow-2xl">
            {/* Webcam */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-700 z-20" />
            
            {/* Screen Bezel */}
            <div className="rounded-[14px] bg-black overflow-hidden border border-gray-800">
              {/* Screen Content */}
              <div className="bg-black">
                {/* Simple Status Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-gray-900">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CW</span>
                    </div>
                    <span className="text-white text-xs font-medium">Centvise</span>
                  </div>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-1 rounded bg-gray-800 hover:bg-gray-700 transition"
                  >
                    {isAutoPlaying ? 
                      <Pause size={12} className="text-gray-300" /> : 
                      <Play size={12} className="text-gray-300" />
                    }
                  </button>
                </div>

                {/* Image Slides Container - Fixed Size */}
                <div className="relative h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
                  {screenshots.map((screen, index) => (
                    <div
                      key={screen.id}
                      className={`absolute inset-0 transition-all duration-500 ${
                        index === currentScreen
                          ? 'opacity-100 translate-x-0'
                          : index < currentScreen
                          ? '-translate-x-full opacity-0'
                          : 'translate-x-full opacity-0'
                      }`}
                    >
                      {/* Image or Fallback */}
                      <div className="relative w-full h-full">
                        {!imageError ? (
                          <div className="relative w-full h-full">
                            {/* This is where you'd use your actual images */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              {/* Placeholder for image - Replace with actual Image component */}
                              <div className={`w-full h-full ${screen.fallbackColor} flex flex-col items-center justify-center`}>
                                <div className="text-center p-4">
                                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl font-bold">{screen.title.charAt(0)}</span>
                                  </div>
                                  <h3 className="text-white text-xl font-bold mb-2">{screen.title}</h3>
                                  <p className="text-white/70 text-sm">
                                    Place your screenshot here
                                  </p>
                                  <p className="text-white/50 text-xs mt-4">
                                    /screenshots/{screen.title.toLowerCase().replace(' ', '-')}.png
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Fallback if image fails to load
                          <div className={`w-full h-full ${screen.fallbackColor} flex items-center justify-center`}>
                            <div className="text-center text-white">
                              <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                              <p className="text-sm opacity-75">Screenshot not available</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button
                    onClick={prevScreen}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition"
                    disabled={isAnimating}
                  >
                    <ChevronLeft size={16} className="text-white" />
                  </button>
                  <button
                    onClick={nextScreen}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition"
                    disabled={isAnimating}
                  >
                    <ChevronRight size={16} className="text-white" />
                  </button>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToScreen(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentScreen
                          ? 'bg-white w-6'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      disabled={isAnimating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ================= HINGE ================= */}
          <div className="mx-auto w-[92%] h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-md" />

          {/* ================= BASE ================= */}
          <div className="relative mx-auto w-[96%] h-7 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl shadow-xl">
            {/* Trackpad indicator */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
            {/* Bottom edge */}
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-300/30 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}