// components/ScreenContent.tsx
'use client';

import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

interface ScreenContentProps {
  currentScreen: number;
  isAutoPlaying: boolean;
  isAnimating: boolean;
  onPrev: () => void;
  onNext: () => void;
  onToggleAutoPlay: () => void;
}

const screens = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Monitor all client accounts at a glance",
    color: "bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300"
  },
  {
    id: 2,
    title: "Employee Management",
    description: "Manage employees and payroll processing",
    color: "bg-gradient-to-br from-green-500 via-green-400 to-green-300"
  },
  {
    id: 3,
    title: "Add Employee",
    description: "Add new employees to your business",
    color: "bg-gradient-to-br from-purple-500 via-purple-400 to-purple-300"
  }
];

export default function ScreenContent({
  currentScreen,
  isAutoPlaying,
  isAnimating,
  onPrev,
  onNext,
  onToggleAutoPlay,
}: ScreenContentProps) {
  const screen = screens[currentScreen];

  return (
    <div className="relative bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-[24px] p-[10px] shadow-2xl w-full">
      {/* Webcam */}
      <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-neutral-600 ring-2 ring-neutral-900 z-20" />

      {/* Screen Bezel */}
      <div className="rounded-[18px] bg-neutral-900 overflow-hidden border-2 border-neutral-800">
        {/* ================= SCREEN CONTENT ================= */}
        <div className="bg-neutral-900 rounded-[14px] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-800 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 base-gradient rounded-lg flex items-center justify-center text-white font-bold text-sm">
                CW
              </div>
              <div className="hidden sm:block">
                <div className="text-xs font-bold text-white">
                  Cent<span className="text-transparent bg-clip-text base-gradient">vise</span>
                </div>
                <div className="text-[10px] text-neutral-400">
                  For Accountants, By Accountants
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-medium text-white">{screen.title}</div>
                <div className="text-[10px] text-neutral-400">{screen.description}</div>
              </div>
              <button
                onClick={onToggleAutoPlay}
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800 border border-neutral-700 shadow-sm hover:bg-neutral-700 transition"
                disabled={isAnimating}
              >
                {isAutoPlaying ? 
                  <Pause size={14} className="text-neutral-300" /> : 
                  <Play size={14} className="text-neutral-300" />
                }
              </button>
            </div>
          </div>

          {/* Fixed Size Screen Area - Maintains aspect ratio */}
          <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
            {screens.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === currentScreen
                    ? 'opacity-100 translate-x-0'
                    : i < currentScreen
                    ? '-translate-x-full opacity-0'
                    : 'translate-x-full opacity-0'
                }`}
              >
                {/* Simple gradient placeholder */}
                <div className={`w-full h-full ${s.color} flex flex-col items-center justify-center p-4 sm:p-6 md:p-8`}>
                  <div className="text-center max-w-md">
                    <div className="inline-block p-3 sm:p-4 bg-white/10 rounded-xl backdrop-blur-sm mb-4 sm:mb-6">
                      <div className="text-2xl sm:text-3xl font-bold text-white">{s.title.charAt(0)}</div>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3">{s.title}</h3>
                    <p className="text-white/80 text-sm sm:text-base mb-4">{s.description}</p>
                    <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/60">
                      <div className="inline-block px-3 py-1.5 bg-white/10 rounded-lg">
                        Replace with your screenshot
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-3 right-3 flex gap-2 z-10">
            <button 
              onClick={onPrev} 
              className="p-1.5 sm:p-2 bg-neutral-800 rounded-lg shadow-lg hover:bg-neutral-700 transition disabled:opacity-50 border border-neutral-700"
              disabled={isAnimating}
            >
              <ChevronLeft size={16} className="text-neutral-300" />
            </button>
            <button 
              onClick={onNext} 
              className="p-1.5 sm:p-2 bg-neutral-800 rounded-lg shadow-lg hover:bg-neutral-700 transition disabled:opacity-50 border border-neutral-700"
              disabled={isAnimating}
            >
              <ChevronRight size={16} className="text-neutral-300" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => !isAnimating && onNext()}
                className={`transition-all duration-300 ${
                  i === currentScreen 
                    ? 'w-6 h-1.5 bg-white rounded' 
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50 rounded-full'
                }`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}