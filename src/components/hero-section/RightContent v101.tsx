// components/RightContent.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import ScreenContent from './ScreenContent';

export default function RightContent() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  /* ---------------- Parallax Hover ---------------- */
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      x: y * -6, // Reduced for better appearance
      y: x * 8
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  /* ---------------- Carousel Functions ---------------- */
  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p + 1) % 3);
      setIsAnimating(false);
    }, 400);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p - 1 + 3) % 3);
      setIsAnimating(false);
    }, 400);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToScreen = (index: number) => {
    if (isAnimating || index === currentScreen) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen(index);
      setIsAnimating(false);
    }, 400);
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
        onMouseLeave={resetTilt}
        className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] perspective-[1400px]"
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* ================= SCREEN LID (Fixed Height) ================= */}
          <div className="relative">
            <ScreenContent
              currentScreen={currentScreen}
              isAutoPlaying={isAutoPlaying}
              isAnimating={isAnimating}
              onPrev={prevScreen}
              onNext={nextScreen}
              onToggleAutoPlay={toggleAutoPlay}
            />
          </div>

          {/* ================= HINGE ================= */}
          <div className="mx-auto w-[92%] h-3 bg-gradient-to-b from-neutral-500 to-neutral-600 rounded-b-lg shadow-inner" />

          {/* ================= BASE (Properly Attached) ================= */}
          <div className="relative mx-auto w-[95%] h-8 bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-b-2xl shadow-lg">
            {/* Base Detail */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3/5 h-3 bg-neutral-200 rounded shadow-inner" />
          </div>
        </div>
      </div>
    </div>
  );
}