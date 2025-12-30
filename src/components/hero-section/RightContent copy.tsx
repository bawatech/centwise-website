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
      x: y * -6,
      y: x * 8
    });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  /* ---------------- Carousel Functions ---------------- */
  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p + 1) % 3); // 3 screens total
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
    <div className="relative">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative mx-auto max-w-[95%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl perspective-[1400px]"
      >
        <div
          className="relative transition-transform duration-300 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          }}
        >
          {/* ================= SCREEN LID ================= */}
          <ScreenContent
            currentScreen={currentScreen}
            isAutoPlaying={isAutoPlaying}
            isAnimating={isAnimating}
            onPrev={prevScreen}
            onNext={nextScreen}
            onToggleAutoPlay={toggleAutoPlay}
          />

          {/* ================= HINGE ================= */}
          <div className="mx-auto w-[88%] h-[14px] bg-gradient-to-b from-neutral-500 to-neutral-600 rounded-b-xl shadow-inner" />

          {/* ================= BASE ================= */}
          <div className="relative mx-auto w-full h-[26px] bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-b-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-[140px] h-[10px] bg-neutral-200 rounded shadow-inner" />
          </div>
        </div>
      </div>
    </div>
  );
}