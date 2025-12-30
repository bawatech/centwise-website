// components/RightContent.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function RightContent() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 }); // Start from center
  const [showCursor, setShowCursor] = useState(true);
  const [showClickEffect, setShowClickEffect] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorClicking, setCursorClicking] = useState(false);
  
  const screenContainerRef = useRef<HTMLDivElement>(null);
  const cursorAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const clickAnimationRef = useRef<NodeJS.Timeout | null>(null);
  const slideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const blinkIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const cycleRef = useRef<number>(0);
  const lastClickPosition = useRef({ x: 50, y: 50 }); // Track last click position

  /* ---------------- Image Slides ---------------- */
  const screenshots = [
    {
      id: 1,
      title: "Dashboard",
      image: "/screenshots/dashboard.png",
      fallbackColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      clickPoint: { x: 230, y: 380 },
      cursorStart: { x: 50, y: 50 } // Start from center for first screen
    },
    {
      id: 2,
      title: "Employee Management", 
      image: "/screenshots/employees.png",
      fallbackColor: "bg-gradient-to-br from-green-500 to-green-700",
      clickPoint: { x: 1700, y: 250 },
      cursorStart: null // Will use previous click position
    },
    {
      id: 3,
      title: "Add Employee",
      image: "/screenshots/add-employee.png",
      fallbackColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      clickPoint: { x: 750, y: 720 },
      cursorStart: null // Will use previous click position
    },
    {
      id: 4,
      title: "Add Employee Form",
      image: "/screenshots/add-employee-form.png",
      fallbackColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      clickPoint: null, // No click on 4th screen
      cursorStart: null
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

  /* ---------------- Handle Image Error ---------------- */
  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  /* ---------------- Cursor Blink Effect ---------------- */
  useEffect(() => {
    // Cursor blinking effect
    blinkIntervalRef.current = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 800);

    return () => {
      if (blinkIntervalRef.current) clearInterval(blinkIntervalRef.current);
    };
  }, []);

  /* ---------------- Animation Functions ---------------- */
  const animateCursorMove = (startX: number, startY: number, endX: number, endY: number, duration: number = 1200) => {
    return new Promise<void>((resolve) => {
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for natural movement
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        
        const currentX = startX + (endX - startX) * easeOutCubic;
        const currentY = startY + (endY - startY) * easeOutCubic;
        
        setCursorPosition({ x: currentX, y: currentY });
        
        if (progress < 1) {
          cursorAnimationRef.current = setTimeout(animate, 16); // ~60fps
        } else {
          resolve();
        }
      };
      
      animate();
    });
  };

  const startCursorAnimation = async (screenIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowCursor(true);
    setCursorVisible(true);
    
    const screenData = screenshots[screenIndex];
    
    // Check if this screen has a click point
    if (!screenData.clickPoint) {
      // For 4th screen (no click), just wait and restart cycle
      slideTimeoutRef.current = setTimeout(() => {
        // Wait 2 seconds on 4th screen, then restart
        setCurrentScreen(0);
        setIsAnimating(false);
        setShowCursor(false);
        
        // Reset to starting position for next cycle
        lastClickPosition.current = { x: 50, y: 50 };
        setCursorPosition({ x: 50, y: 50 });
        
        // Start next cycle after delay
        setTimeout(() => {
          cycleRef.current++;
          if (cycleRef.current < 10) { // Prevent infinite loops during dev
            startCursorAnimation(0);
          }
        }, 1000);
      }, 2000);
      return;
    }
    
    const clickPoint = screenData.clickPoint;
    
    // Calculate percentage positions based on 1920x1080 coordinates
    const targetX = (clickPoint.x / 1920) * 100;
    const targetY = (clickPoint.y / 1080) * 100;
    
    // Determine starting position
    let startX, startY;
    if (screenData.cursorStart) {
      startX = screenData.cursorStart.x;
      startY = screenData.cursorStart.y;
    } else {
      startX = lastClickPosition.current.x;
      startY = lastClickPosition.current.y;
    }
    
    // Set cursor to starting position
    setCursorPosition({ x: startX, y: startY });
    
    // Pause briefly before moving
    await new Promise(resolve => setTimeout(resolve, 300));
    
    try {
      // Animate cursor to click position with natural movement
      await animateCursorMove(startX, startY, targetX, targetY);
      
      // Pause briefly at target (like human hesitation)
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Show click animation
      setCursorClicking(true);
      setShowClickEffect(true);
      setClickPosition({ x: targetX, y: targetY });
      
      // Store this click position for next movement
      lastClickPosition.current = { x: targetX, y: targetY };
      
      // Wait for click animation
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Stop clicking state
      setCursorClicking(false);
      setShowClickEffect(false);
      
      // Pause before transition
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Move to next screen
      const nextScreenIndex = screenIndex + 1;
      setCurrentScreen(nextScreenIndex);
      
      // Start next animation after delay
      setTimeout(() => {
        startCursorAnimation(nextScreenIndex);
      }, 500);
      
    } finally {
      setIsAnimating(false);
    }
  };

  /* ---------------- Start Animation Sequence ---------------- */
  useEffect(() => {
    // Start first animation after initial delay
    const startDelay = setTimeout(() => {
      startCursorAnimation(0);
    }, 1000);
    
    return () => {
      if (cursorAnimationRef.current) clearTimeout(cursorAnimationRef.current);
      if (clickAnimationRef.current) clearTimeout(clickAnimationRef.current);
      if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current);
      clearTimeout(startDelay);
    };
  }, []);

  /* ---------------- Reset Animation ---------------- */
  const resetAnimation = () => {
    cycleRef.current = 0;
    setCurrentScreen(0);
    lastClickPosition.current = { x: 50, y: 50 };
    setCursorPosition({ x: 50, y: 50 });
    setShowClickEffect(false);
    setShowCursor(false);
    setCursorClicking(false);
    setIsAnimating(false);
    
    if (cursorAnimationRef.current) clearTimeout(cursorAnimationRef.current);
    if (clickAnimationRef.current) clearTimeout(clickAnimationRef.current);
    if (slideTimeoutRef.current) clearTimeout(slideTimeoutRef.current);
    
    // Restart animation
    setTimeout(() => {
      startCursorAnimation(0);
    }, 500);
  };

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] perspective-[1200px]"
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
                ref={screenContainerRef}
                className="relative overflow-hidden bg-black"
                style={{
                  aspectRatio: '16/9' // 1920x1080 = 16:9
                }}
              >
                {screenshots.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentScreen
                        ? 'opacity-100 z-10'
                        : 'opacity-0 z-0'
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

                {/* Realistic Cursor */}
                {showCursor && screenshots[currentScreen]?.clickPoint && (
                  <div 
                    className="absolute z-30 pointer-events-none"
                    style={{
                      left: `${cursorPosition.x}%`,
                      top: `${cursorPosition.y}%`,
                      transform: 'translate(-50%, -50%)',
                      filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))'
                    }}
                  >
                    {/* Realistic Mouse Pointer */}
                    <svg 
                      width="32" 
                      height="32" 
                      viewBox="0 0 32 32" 
                      fill="none"
                      className={`transition-transform duration-150 ${cursorClicking ? 'scale-90' : 'scale-100'}`}
                    >
                      {/* Cursor shadow */}
                      <path 
                        d="M4 4L12 20L14.5 17L24 24L18 12L21 9L4 4Z" 
                        fill="rgba(0,0,0,0.3)"
                        transform="translate(1, 1)"
                      />
                      {/* Cursor body */}
                      <path 
                        d="M4 4L12 20L14.5 17L24 24L18 12L21 9L4 4Z" 
                        fill="white"
                        stroke="#333"
                        strokeWidth="0.5"
                      />
                      {/* Cursor tip highlight */}
                      <path 
                        d="M4 4L7 7L5.5 5.5L4 4Z" 
                        fill="#3B82F6"
                      />
                      {/* Blinking cursor dot (when not moving) */}
                      {cursorVisible && !isAnimating && (
                        <circle 
                          cx="5" 
                          cy="5" 
                          r="1.5" 
                          fill="#3B82F6"
                          className="opacity-70"
                        />
                      )}
                    </svg>
                  </div>
                )}

                {/* Enhanced Click Effect */}
                {showClickEffect && (
                  <div 
                    className="absolute z-20 pointer-events-none"
                    style={{
                      left: `${clickPosition.x}%`,
                      top: `${clickPosition.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {/* Multiple ripple waves for realistic effect */}
                    <div className="relative">
                      {/* First wave - fast and small */}
                      <div className="absolute rounded-full bg-blue-400/40"
                        style={{
                          width: '30px',
                          height: '30px',
                          animation: 'ripple1 0.6s ease-out forwards',
                        }}
                      />
                      
                      {/* Second wave - slower and larger */}
                      <div className="absolute rounded-full bg-blue-500/30"
                        style={{
                          width: '30px',
                          height: '30px',
                          animation: 'ripple2 0.8s ease-out 0.1s forwards',
                        }}
                      />
                      
                      {/* Third wave - slowest and largest */}
                      <div className="absolute rounded-full bg-blue-600/20"
                        style={{
                          width: '30px',
                          height: '30px',
                          animation: 'ripple3 1s ease-out 0.2s forwards',
                        }}
                      />
                      
                      {/* Center dot */}
                      <div className="relative w-3 h-3 rounded-full bg-white shadow-lg"
                        style={{
                          animation: 'clickDot 0.3s ease-out'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Debug: Show click points (development only) */}
                {process.env.NODE_ENV === 'development' && screenshots[currentScreen]?.clickPoint && (
                  <div className="absolute pointer-events-none">
                    <div
                      className="absolute w-2 h-2 rounded-full bg-green-500/50 border border-white"
                      style={{
                        left: `${(screenshots[currentScreen].clickPoint!.x / 1920) * 100}%`,
                        top: `${(screenshots[currentScreen].clickPoint!.y / 1080) * 100}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  </div>
                )}
              </div>
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

        {/* Cycle Counter & Restart Button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Cycle: {cycleRef.current + 1} | Screen: {currentScreen + 1} of {screenshots.length}</span>
          </div>
          <button
            onClick={resetAnimation}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors text-sm flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Restart Demo
          </button>
        </div>
      </div>

      {/* Add CSS for enhanced animations */}
      <style jsx>{`
        @keyframes ripple1 {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes ripple2 {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
        
        @keyframes ripple3 {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(3.5);
            opacity: 0;
          }
        }
        
        @keyframes clickDot {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
        }
        
        .cursor-blink {
          animation: cursorBlink 1s infinite;
        }
        
        @keyframes cursorBlink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}