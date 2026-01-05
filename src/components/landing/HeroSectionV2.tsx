'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSectionV2() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: 'Payroll Made Simple',
      subtitle: 'for Canadian Accountants',
      description: 'CRA-compliant payroll management designed exclusively for accounting professionals',
      accent: 'Trusted by 500+ Firms',
      stats: { value: '500+', label: 'Active Clients' },
      image: {
        primary: '#059669',
        secondary: '#10B981',
        type: 'dashboard'
      }
    },
    {
      title: 'Automate Everything',
      subtitle: 'Save Time, Reduce Errors',
      description: 'Intelligent automation handles calculations, deductions, and compliance automatically',
      accent: '99.9% Accuracy Rate',
      stats: { value: '50K+', label: 'Payrolls Processed' },
      image: {
        primary: '#3B82F6',
        secondary: '#60A5FA',
        type: 'automation'
      }
    },
    {
      title: 'Enterprise Security',
      subtitle: 'Bank-Level Protection',
      description: 'SOC 2 certified infrastructure with 256-bit encryption protecting your data 24/7',
      accent: 'SOC 2 Certified',
      stats: { value: '99.9%', label: 'Uptime' },
      image: {
        primary: '#8B5CF6',
        secondary: '#A78BFA',
        type: 'security'
      }
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 animate-pulse-soft"
          style={{ 
            background: `radial-gradient(circle, ${currentSlideData.image.primary}20, transparent)` 
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-3xl transition-all duration-1000 animate-pulse-soft"
          style={{ 
            background: `radial-gradient(circle, ${currentSlideData.image.secondary}15, transparent)`,
            animationDelay: '1s'
          }}
        ></div>
      </div>

      <div className="container-custom pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-block transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="bg-gradient-to-r from-primary-100 to-primary-50 border border-primary-200 px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-soft">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                </span>
                <span className="text-primary-700">{currentSlideData.accent}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <h1 className="text-6xl lg:text-7xl font-bold text-neutral-900 leading-tight">
                {currentSlideData.title}
                <span className="block text-primary-600 text-5xl lg:text-6xl mt-2">
                  {currentSlideData.subtitle}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className={`text-xl text-neutral-600 leading-relaxed transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {currentSlideData.description}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 delay-200 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <a
                href="https://app.Centvise.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all font-bold text-lg shadow-primary hover:shadow-xl transform hover:-translate-y-1 text-center relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Access Payroll App
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
              <Link
                href="/contact"
                className="group border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-xl hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-all font-bold text-lg text-center"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Stats Bar */}
            <div className={`flex items-center gap-8 pt-6 transition-all duration-500 delay-300 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">{currentSlideData.stats.value}</div>
                <div className="text-sm text-neutral-600 font-medium">{currentSlideData.stats.label}</div>
              </div>
              <div className="h-12 w-px bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">24/7</div>
                <div className="text-sm text-neutral-600 font-medium">Support</div>
              </div>
              <div className="h-12 w-px bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm text-neutral-600 font-medium">CRA Compliant</div>
              </div>
            </div>
          </div>

          {/* Right - Dynamic Visual */}
          <div className={`relative transition-all duration-700 ${isAnimating ? 'opacity-0 scale-95 rotate-3' : 'opacity-100 scale-100 rotate-0'}`}>
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform perspective-1000">
              {/* Dashboard View */}
              {currentSlideData.image.type === 'dashboard' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-neutral-900 text-lg">Payroll Overview</div>
                        <div className="text-sm text-neutral-500">December 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-primary-50 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-primary-700">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-5 rounded-2xl border border-primary-200">
                      <div className="text-xs text-neutral-600 mb-2 font-semibold uppercase tracking-wide">Total Payroll</div>
                      <div className="text-3xl font-bold text-neutral-900 mb-2">$847,290</div>
                      <div className="flex items-center text-xs text-primary-600 font-semibold">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        12% increase
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl border border-blue-200">
                      <div className="text-xs text-neutral-600 mb-2 font-semibold uppercase tracking-wide">Employees</div>
                      <div className="text-3xl font-bold text-neutral-900 mb-2">147</div>
                      <div className="text-xs text-blue-600 font-semibold">3 new this month</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'CRA Remittance', status: 'Completed', color: 'primary' },
                      { label: 'T4 Generation', status: 'In Progress', color: 'accent' },
                      { label: 'ROE Processing', status: 'Scheduled', color: 'neutral' },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 bg-${item.color === 'accent' ? 'accent' : item.color}-50 rounded-xl border border-${item.color === 'accent' ? 'accent' : item.color}-${item.color === 'neutral' ? '200' : '100'}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${item.color === 'accent' ? 'bg-accent-500 animate-pulse' : item.color === 'neutral' ? 'bg-neutral-300' : 'bg-primary-500'}`}></div>
                          <span className="text-sm font-semibold text-neutral-800">{item.label}</span>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${item.color === 'accent' ? 'bg-accent-200 text-accent-700' : item.color === 'neutral' ? 'bg-neutral-200 text-neutral-600' : 'bg-primary-200 text-primary-700'}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Automation View */}
              {currentSlideData.image.type === 'automation' && (
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/50">
                      <svg className="w-10 h-10 text-white animate-spin" style={{ animationDuration: '3s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 mb-2">Automation Engine</h3>
                    <p className="text-sm text-neutral-600">Processing payroll workflows</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { task: 'Calculate CPP & EI', progress: 100, time: 'Completed in 0.3s' },
                      { task: 'Process Deductions', progress: 100, time: 'Completed in 0.5s' },
                      { task: 'Generate Pay Stubs', progress: 75, time: 'In progress...' },
                      { task: 'Update CRA Records', progress: 30, time: 'Queued' },
                    ].map((task, i) => (
                      <div key={i} className="bg-neutral-50 p-4 rounded-xl">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-neutral-800">{task.task}</span>
                          <span className="text-xs text-neutral-500">{task.time}</span>
                        </div>
                        <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security View */}
              {currentSlideData.image.type === 'security' && (
                <div className="space-y-6">
                  <div className="text-center py-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/50 relative">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 mb-2">Security Status</h3>
                    <p className="text-sm text-neutral-600">All systems protected</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { feature: '256-bit Encryption', status: 'Active', icon: '🔒' },
                      { feature: 'SOC 2 Type II', status: 'Certified', icon: '✓' },
                      { feature: 'Data Backup', status: 'Continuous', icon: '☁️' },
                      { feature: 'Access Control', status: 'Enabled', icon: '🛡️' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-100">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          <span className="text-sm font-semibold text-neutral-800">{item.feature}</span>
                        </div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-100 text-green-700">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-xl text-white text-center">
                    <div className="text-2xl font-bold mb-1">99.9%</div>
                    <div className="text-xs opacity-90">Security Score</div>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div 
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl blur-2xl opacity-60 animate-pulse-soft transition-colors duration-1000"
              style={{ backgroundColor: currentSlideData.image.secondary }}
            ></div>
            <div 
              className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl opacity-40 animate-pulse-soft transition-colors duration-1000"
              style={{ 
                backgroundColor: currentSlideData.image.primary,
                animationDelay: '1s'
              }}
            ></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-primary-600' 
                  : 'w-3 h-3 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}