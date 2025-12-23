// src/components/hero-section/RightContent.tsx (Enhanced)
'use client';

import { useState, useEffect } from 'react';
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

  const nextScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((prev) => (prev + 1) % screenshots.length);
      setIsAnimating(false);
    }, 400);
  };

  const prevScreen = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentScreen((prev) => (prev - 1 + screenshots.length) % screenshots.length);
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
      {/* Laptop Screen Container */}
      <div className="relative mx-auto max-w-2xl">
        {/* Laptop Screen */}
        <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-3 shadow-2xl">
          {/* Screen Bezel */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-full" />
          
          {/* Screen Camera */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-r from-neutral-700 to-neutral-600 rounded-full" />
          
          {/* Screen Content */}
          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl overflow-hidden shadow-inner">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl base-gradient flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PP</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-neutral-900">PayrollPro</div>
                  <div className="text-xs text-neutral-500">CRM for Accountants</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-neutral-700">{screen.title}</div>
                  <div className="text-xs text-neutral-500">{screen.description}</div>
                </div>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                >
                  {isAutoPlaying ? 
                    <Pause className="w-4 h-4 text-neutral-700" /> : 
                    <Play className="w-4 h-4 text-neutral-700" />
                  }
                </button>
              </div>
            </div>

            {/* Carousel Area */}
            <div className="relative h-[420px] overflow-hidden">
              {screenshots.map((screenshot, index) => (
                <div
                  key={screenshot.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                    index === currentScreen
                      ? 'opacity-100 translate-x-0'
                      : index < currentScreen
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Mock Application Screen */}
                  <div className="p-6 h-full">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {/* Left Column - Stats */}
                      <div className="space-y-4">
                        {screenshot.stats.map((stat, i) => (
                          <div key={i} className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
                            <div className="text-xs text-neutral-500 mb-1">{stat.label}</div>
                            <div className="flex items-end justify-between">
                              <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                              <div className={`px-2 py-1 rounded-lg text-xs font-medium ${
                                stat.change.includes('↑') ? 'bg-primary-50 text-primary-700' :
                                stat.change.includes('-') ? 'bg-neutral-100 text-neutral-700' :
                                'bg-accent-50 text-accent-700'
                              }`}>
                                {stat.change}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Center Column - Main Content */}
                      <div className="col-span-2 space-y-4">
                        {/* Chart Area */}
                        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100 h-40">
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-neutral-700">Monthly Performance</div>
                            <div className="text-xs text-primary-600 font-medium">Current Month</div>
                          </div>
                          <div className="flex items-end justify-between h-24 px-4">
                            {[65, 80, 60, 90, 75, 85, 70].map((height, i) => (
                              <div key={i} className="flex flex-col items-center">
                                <div 
                                  className={`w-8 rounded-t-lg transition-all duration-1000 ease-out ${
                                    index === currentScreen ? `bg-gradient-to-t ${screenshot.gradient}` : 'bg-neutral-200'
                                  }`}
                                  style={{ 
                                    height: `${height}%`,
                                    transitionDelay: `${i * 100}ms`,
                                    opacity: index === currentScreen ? 1 : 0.5
                                  }}
                                />
                                <div className="text-xs text-neutral-500 mt-2">Week {i+1}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Quick Actions Grid */}
                        <div className="grid grid-cols-3 gap-4">
                          {['Run Payroll', 'Generate Report', 'Send Reminder', 'Add Client', 'Tax Filing', 'Export Data'].map((action, i) => (
                            <button
                              key={i}
                              className="p-3 bg-gradient-to-r from-primary-50 to-secondary-50 hover:from-primary-100 hover:to-secondary-100 rounded-lg text-sm font-medium text-neutral-700 transition-all hover:shadow-md border border-primary-100"
                            >
                              {action}
                            </button>
                          ))}
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white rounded-xl p-4 shadow-soft border border-neutral-100">
                          <div className="text-sm font-medium text-neutral-700 mb-3">Recent Activity</div>
                          <div className="space-y-2">
                            {[
                              { user: 'Alex Morgan', action: 'processed payroll', time: '2 min ago' },
                              { user: 'Sarah Chen', action: 'added new client', time: '15 min ago' },
                              { user: 'Mike Johnson', action: 'generated Q3 report', time: '1 hour ago' }
                            ].map((activity, i) => (
                              <div key={i} className="flex items-center justify-between py-2 border-b border-neutral-50 last:border-0">
                                <div className="flex items-center gap-3">
                                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${
                                    i === 0 ? 'bg-primary-500' : 
                                    i === 1 ? 'bg-secondary-500' : 
                                    'bg-accent-500'
                                  }`}>
                                    {activity.user.charAt(0)}
                                  </div>
                                  <div>
                                    <div className="text-sm text-neutral-700">
                                      <span className="font-medium">{activity.user}</span> {activity.action}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-xs text-neutral-500">{activity.time}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={prevScreen}
                className="p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-neutral-700" />
              </button>
              
              <div className="flex gap-1">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToScreen(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentScreen
                        ? `w-6 bg-gradient-to-r ${screen.gradient}`
                        : 'bg-neutral-300 hover:bg-neutral-400'
                    }`}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextScreen}
                className="p-2 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-neutral-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl base-gradient opacity-20 blur-xl" />
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 opacity-20 blur-xl" />
      </div>
    </div>
  );
}