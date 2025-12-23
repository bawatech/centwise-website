'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const screenshots = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Monitor all client accounts at a glance",
    gradient: "from-primary-500 to-secondary-500",
    stats: [
      { label: "Active Clients", value: "42", change: "+3" },
      { label: "Pending Tasks", value: "18", change: "-5" },
      { label: "This Month", value: "$42.8k", change: "↑12%" }
    ]
  },
  {
    id: 2,
    title: "Payroll Processing",
    description: "Batch process payrolls with one click",
    gradient: "from-secondary-500 to-accent-500",
    stats: [
      { label: "Processing", value: "8", change: "Running" },
      { label: "Completed", value: "156", change: "This month" },
      { label: "Accuracy", value: "99.9%", change: "Rate" }
    ]
  },
  {
    id: 3,
    title: "Client Management",
    description: "Organize and communicate with all clients",
    gradient: "from-accent-500 to-primary-500",
    stats: [
      { label: "Total Clients", value: "84", change: "↑8%" },
      { label: "Active", value: "76", change: "Online" },
      { label: "Response Time", value: "<2h", change: "Avg" }
    ]
  },
  {
    id: 4,
    title: "Reports & Analytics",
    description: "Generate insights and share reports",
    gradient: "from-primary-600 to-secondary-600",
    stats: [
      { label: "Reports", value: "248", change: "Generated" },
      { label: "Exports", value: "1.2k", change: "This year" },
      { label: "Satisfaction", value: "98%", change: "Client rating" }
    ]
  }
];

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

  /* ---------------- Carousel ---------------- */
  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p + 1) % screenshots.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((p) => (p - 1 + screenshots.length) % screenshots.length);
      setIsAnimating(false);
    }, 400);
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
  }, [isAutoPlaying]);

  const screen = screenshots[currentScreen];

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
          {/* <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-800 rounded-[28px] p-[10px] shadow-[0_50px_140px_rgba(0,0,0,0.6)]"> */}
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
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="p-2 rounded-lg bg-white border shadow-sm"
                    >
                      {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                  </div>
                </div>

                {/* Carousel */}
                <div className="relative h-[300px] sm:h-[380px] lg:h-[420px] overflow-hidden">
                  {screenshots.map((s, i) => (
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
                      <div className="p-4 sm:p-6 h-full grid grid-cols-3 gap-4">
                        <div className="space-y-4">
                          {s.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-3 shadow border">
                              <div className="text-xs text-neutral-500">{stat.label}</div>
                              <div className="flex justify-between items-end">
                                <div className="text-xl font-bold">{stat.value}</div>
                                <div className="text-xs px-2 py-1 rounded bg-neutral-100">
                                  {stat.change}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="col-span-2 bg-white rounded-xl p-4 shadow border">
                          <div className="text-sm font-medium mb-2">Monthly Performance</div>
                          <div className="flex items-end gap-2 h-32">
                            {[65, 80, 60, 90, 75, 85, 70].map((h, idx) => (
                              <div
                                key={idx}
                                className={`w-6 rounded-t bg-gradient-to-t ${s.gradient}`}
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  <button onClick={prevScreen} className="p-2 bg-white rounded shadow">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={nextScreen} className="p-2 bg-white rounded shadow">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

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
