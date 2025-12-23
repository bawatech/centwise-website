// src/components/HeroSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Users } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-primary-50 to-white pt-20 pb-32 section-padding">
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary-200 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-secondary-500 blur-3xl" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-5 animate-slow-float opacity-20">
        <div className="w-16 h-16 rounded-2xl bg-accent-500 rotate-12" />
      </div>
      <div className="absolute bottom-40 right-10 animate-slow-float opacity-20 animation-delay-1000">
        <div className="w-24 h-24 rounded-3xl bg-primary-300 -rotate-12" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 mb-6 animate-slide-in">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 500+ Accounting Firms</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-neutral-900 block">Streamline Your</span>
              <span className="text-transparent bg-clip-text base-gradient block">
                Payroll Management
              </span>
            </h1>

            <p className="text-lg text-neutral-600 mb-8 max-w-lg">
              The only CRM built exclusively for accountants to manage client payrolls efficiently.
              Automate processes, ensure compliance, and grow your accounting practice.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                <BarChart3 className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-soft">
                <Users className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium">Multi-client Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold rounded-xl base-gradient hover:shadow-primary transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center px-8 py-3.5 font-semibold rounded-xl border-2 border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors"
              >
                Book a Demo
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-neutral-100">
              <p className="text-sm text-neutral-500 mb-4">Join leading accounting firms</p>
              <div className="flex items-center gap-8 opacity-70">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-20 bg-gradient-to-r from-neutral-200 to-neutral-100 rounded-lg animate-pulse-soft" />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Animated SVG */}
          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              {/* Main SVG Container */}
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-neutral-100">
                {/* Floating papers animation */}
                <div className="absolute -top-4 left-1/4 animate-slow-float">
                  <PaperSheet />
                </div>
                <div className="absolute -bottom-2 right-1/4 animate-slow-float animation-delay-500">
                  <PaperSheet />
                </div>

                {/* Animated Accountant Office Scene */}
                <svg
                  viewBox="0 0 800 600"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Office background */}
                  <rect x="50" y="100" width="700" height="400" rx="20" fill="rgb(var(--primary-50))" />
                  
                  {/* Desk */}
                  <rect x="100" y="350" width="600" height="20" fill="rgb(var(--primary-800))" />
                  <rect x="100" y="370" width="600" height="30" fill="rgb(var(--primary-900))" />
                  
                  {/* Computer screens */}
                  <g className="animate-pulse-soft">
                    <rect x="150" y="250" width="200" height="120" rx="8" fill="white" />
                    <rect x="155" y="255" width="190" height="110" rx="4" fill="rgb(var(--primary-100))" />
                    {/* Graph animation */}
                    <path
                      d="M160 300 L210 280 L260 320 L310 290 L340 310"
                      stroke="rgb(var(--primary-500))"
                      strokeWidth="3"
                      fill="none"
                      className="animate-line-flow"
                      strokeDasharray="10"
                    />
                  </g>
                  
                  <g className="animate-pulse-soft animation-delay-700">
                    <rect x="450" y="250" width="200" height="120" rx="8" fill="white" />
                    <rect x="455" y="255" width="190" height="110" rx="4" fill="rgb(var(--primary-100))" />
                    {/* Bar chart */}
                    {[0, 1, 2, 3].map((i) => (
                      <rect
                        key={i}
                        x={475 + i * 40}
                        y={320 - i * 15}
                        width="20"
                        height={i * 15}
                        fill="rgb(var(--primary-500))"
                        className="animate-slide-in"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </g>
                  
                  {/* Accountant characters */}
                  <g className="animate-slow-float">
                    {/* Left accountant */}
                    <circle cx="250" cy="420" r="20" fill="rgb(var(--neutral-200))" />
                    <rect x="230" y="440" width="40" height="60" fill="rgb(var(--secondary-500))" />
                    
                    {/* Right accountant */}
                    <circle cx="550" cy="420" r="20" fill="rgb(var(--neutral-200))" />
                    <rect x="530" y="440" width="40" height="60" fill="rgb(var(--primary-500))" />
                  </g>
                  
                  {/* Floating numbers/data points */}
                  <g>
                    {[
                      { x: 200, y: 180, delay: 0 },
                      { x: 600, y: 150, delay: 300 },
                      { x: 300, y: 100, delay: 600 },
                      { x: 500, y: 200, delay: 900 }
                    ].map((point, i) => (
                      <g key={i} className="animate-slow-float" style={{ animationDelay: `${point.delay}ms` }}>
                        <circle cx={point.x} cy={point.y} r="12" fill="rgb(var(--accent-500))" opacity="0.9" />
                        <text
                          x={point.x}
                          y={point.y}
                          textAnchor="middle"
                          dy=".3em"
                          className="text-xs font-bold fill-neutral-900"
                        >
                          $
                        </text>
                      </g>
                    ))}
                  </g>
                  
                  {/* Connection lines */}
                  <path
                    d="M250 420 Q 400 300 550 420"
                    stroke="rgb(var(--primary-300))"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    className="animate-line-flow"
                  />
                </svg>
              </div>
              
              {/* Stats floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-slide-in">
                <div className="text-2xl font-bold text-primary-700">99.9%</div>
                <div className="text-sm text-neutral-600">Accuracy Rate</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-slide-in animation-delay-300">
                <div className="text-2xl font-bold text-primary-700">40%</div>
                <div className="text-sm text-neutral-600">Time Saved</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0,40 C240,100 480,0 720,40 960,80 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="white"
            className="animate-wave"
          />
        </svg>
      </div>
    </section>
  );
}

function PaperSheet() {
  return (
    <svg width="40" height="50" viewBox="0 0 40 50" className="rotate-12">
      <rect width="40" height="50" rx="4" fill="white" className="shadow-soft" />
      <line x1="8" y1="15" x2="32" y2="15" stroke="rgb(var(--neutral-200))" strokeWidth="1" />
      <line x1="8" y1="20" x2="28" y2="20" stroke="rgb(var(--neutral-200))" strokeWidth="1" />
      <line x1="8" y1="25" x2="24" y2="25" stroke="rgb(var(--neutral-200))" strokeWidth="1" />
      <circle cx="32" cy="35" r="4" fill="rgb(var(--primary-500))" opacity="0.7" />
    </svg>
  );
}