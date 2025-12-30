// components/RightContent.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

export default function RightContent() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [showControls, setShowControls] = useState(false);

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
      x: y * -5,
      y: x * 6
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  /* ---------------- Carousel Functions ---------------- */
  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p + 1) % screenshots.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p - 1 + screenshots.length) % screenshots.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToScreen = (index: number) => {
    if (isAnimating || index === currentScreen) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen(index);
      setIsAnimating(false);
    }, 300);
  };

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextScreen, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isAnimating]);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={()=>{resetTilt();setShowControls(false)}}
        className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] perspective-[1200px]"
        onMouseEnter={() => setShowControls(true)}
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* ================= LAPTOP SCREEN LID ================= */}
          <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[24px] p-3 shadow-2xl">
            {/* Webcam */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gray-700 z-20" />
            
            {/* Screen Bezel */}
            <div className="rounded-[16px] bg-black overflow-hidden border-2 border-gray-800">
              {/* Screen Content - 16:9 Aspect Ratio */}
              <div 
                className="relative overflow-hidden bg-black"
                style={{
                  aspectRatio: '16/9' // 1920x1080 = 16:9
                }}
              >
                {screenshots.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`absolute inset-0 transition-all duration-300 ${
                      index === currentScreen
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    {/* Image or Fallback */}
                    <div className="relative w-full h-full">
                      {!imageErrors[screen.id] ? (
                        <Image
                          src={screen.image}
                          alt={`${screen.title} screenshot`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 600px"
                          priority={index === 0}
                          quality={90}
                          onError={() => handleImageError(screen.id)}
                        />
                      ) : (
                        <div className={`w-full h-full ${screen.fallbackColor} flex items-center justify-center`}>
                          <div className="text-center text-white p-6">
                            <h3 className="text-2xl font-bold mb-3">{screen.title}</h3>
                            <p className="text-white/80">1920×1080 screenshot</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Overlay Controls (Show on Hover) */}
                <div className={`absolute inset-0 bg-black/0 transition-all duration-300 ${
                  showControls ? 'bg-black/10' : ''
                }`}>
                  {/* Left Arrow */}
                  <button
                    onClick={prevScreen}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full transition-all duration-300 ${
                      showControls ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    disabled={isAnimating}
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextScreen}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/60 backdrop-blur-sm rounded-full transition-all duration-300 ${
                      showControls ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    disabled={isAnimating}
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Bottom Indicators */}
              {/* <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
              </div> */}
            </div>
          </div>

          {/* ================= HINGE ================= */}
          <div className="mx-auto w-[92%] h-2.5 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-md shadow-inner" />

          {/* ================= BASE ================= */}
          <div className="relative mx-auto w-[96%] h-8 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-2xl shadow-xl">
            {/* Trackpad indicator */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1/2 h-1.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
          </div>
        </div>

        {/* External Controls */}
        {/* <div className="mt-6 flex justify-center items-center gap-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-lg transition-colors"
          >
            {isAutoPlaying ? 
              <Pause size={20} className="text-white" /> : 
              <Play size={20} className="text-white" />
            }
          </button>
          
          <div className="text-sm text-gray-600 font-medium">
            {currentScreen + 1} / {screenshots.length}
          </div>
        </div> */}
      </div>
    </div>
  );
}