// components/ScreenContent.tsx
'use client';

import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import DashboardScreen from '../screens/DashboardScreen';
import EmployeeManagementScreen from '../screens/EmployeeManagementScreen';
import AddEmployeeScreen from '../screens/AddEmployeeScreen';

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
    component: <DashboardScreen />
  },
  {
    id: 2,
    title: "Employee Management",
    description: "Manage employees and payroll processing",
    component: <EmployeeManagementScreen />
  },
  {
    id: 3,
    title: "Add Employee",
    description: "Add new employees to your business",
    component: <AddEmployeeScreen />
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
    <div className="relative bg-gradient-to-b from-neutral-600 to-neutral-500 rounded-[28px] p-[10px] shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
      {/* Webcam */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neutral-600 ring-2 ring-neutral-800" />

      {/* Screen Bezel */}
      <div className="rounded-[22px] bg-neutral-950 overflow-hidden">
        {/* ================= SCREEN CONTENT ================= */}
        <div className="bg-gradient-to-br from-white to-neutral-50 rounded-[18px] overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-neutral-100 bg-gradient-to-r from-primary-50 to-secondary-50">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 base-gradient rounded-lg flex items-center justify-center text-white font-bold">
                CW
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-neutral-900">
                  Cent<span className="text-transparent bg-clip-text base-gradient">wise</span>
                </div>
                <div className="text-xs text-neutral-500">
                  For Accountants, By Accountants
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-neutral-700">{screen.title}</div>
                <div className="text-xs text-neutral-500">{screen.description}</div>
              </div>
              <button
                onClick={onToggleAutoPlay}
                className="p-2 rounded-lg bg-white border shadow-sm"
                disabled={isAnimating}
              >
                {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
            </div>
          </div>

          {/* Screen Content Area */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] overflow-hidden">
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
                {s.component}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button 
              onClick={onPrev} 
              className="p-2 bg-white rounded shadow"
              disabled={isAnimating}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={onNext} 
              className="p-2 bg-white rounded shadow"
              disabled={isAnimating}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => i !== currentScreen && onNext()} // For simplicity, using onNext
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentScreen 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}