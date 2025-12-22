'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Typewriter Component
function TypewriterText({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-0.5 h-12 bg-primary-600 ml-1 animate-pulse"></span>
      )}
    </span>
  );
}

export default function HeroSectionV1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Payroll Made Simple for Canadian Accountants',
      subtitle: 'CRA-compliant payroll management designed exclusively for accounting professionals',
      accent: 'Trusted by 500+ Firms',
      dashboardType: 'payroll',
    },
    {
      title: 'Automate Your Payroll Workflows',
      subtitle: 'Save hours every week with intelligent automation and seamless integrations',
      accent: '99.9% Accuracy Rate',
      dashboardType: 'automation',
    },
    {
      title: 'Enterprise-Grade Security You Can Trust',
      subtitle: 'Bank-level encryption with SOC 2 compliance for your clients sensitive data',
      accent: 'SOC 2 Certified',
      dashboardType: 'security',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-neutral-50 overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <div className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                {slides[currentSlide].accent}
              </div>
            </div>

            {/* Main Heading - Animated with Typewriter */}
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight min-h-[180px]">
              <TypewriterText text={slides[currentSlide].title} speed={50} />
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-neutral-600 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.centwise.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold text-lg shadow-primary hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Access Payroll App →
              </a>
              <Link
                href="/contact"
                className="border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all font-semibold text-lg text-center"
              >
                Schedule Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-neutral-600">Active Clients</div>
              </div>
              <div className="w-px h-12 bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-neutral-600">Payrolls Processed</div>
              </div>
              <div className="w-px h-12 bg-neutral-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-neutral-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right - Dynamic Dashboard based on slide */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }} key={currentSlide}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 relative">
              
              {/* PAYROLL DASHBOARD - Slide 1 */}
              {slides[currentSlide].dashboardType === 'payroll' && (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">Payroll Dashboard</div>
                        <div className="text-sm text-neutral-500">December 2024</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-600 font-medium">Live</span>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Total Payroll</div>
                      <div className="text-2xl font-bold text-neutral-900">$847,290</div>
                      <div className="text-xs text-primary-600 mt-1 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        12% vs last month
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Employees</div>
                      <div className="text-2xl font-bold text-neutral-900">147</div>
                      <div className="text-xs text-blue-600 mt-1">3 new this month</div>
                    </div>
                  </div>

                  {/* Activity List */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-primary-50 rounded-lg border border-primary-100">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm font-medium text-neutral-800">CRA Remittance</span>
                      </div>
                      <span className="text-xs text-primary-600 font-semibold">Completed</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg border border-accent-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-neutral-800">T4 Generation</span>
                      </div>
                      <span className="text-xs text-accent-700 font-semibold">In Progress</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
                        <span className="text-sm font-medium text-neutral-800">ROE Processing</span>
                      </div>
                      <span className="text-xs text-neutral-500 font-semibold">Scheduled</span>
                    </div>
                  </div>
                </>
              )}

              {/* AUTOMATION DASHBOARD - Slide 2 */}
              {slides[currentSlide].dashboardType === 'automation' && (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600 animate-spin" style={{ animationDuration: '3s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">Automation Engine</div>
                        <div className="text-sm text-neutral-500">Processing workflows</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-600 font-medium">Active</span>
                    </div>
                  </div>

                  {/* Automation Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Time Saved</div>
                      <div className="text-2xl font-bold text-neutral-900">47 hrs</div>
                      <div className="text-xs text-blue-600 mt-1">This week</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Accuracy</div>
                      <div className="text-2xl font-bold text-neutral-900">99.9%</div>
                      <div className="text-xs text-green-600 mt-1">Error-free</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-3">
                    <div className="bg-neutral-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-neutral-800">Calculate CPP & EI</span>
                        <span className="text-xs text-neutral-500">Completed</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>

                    <div className="bg-neutral-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-neutral-800">Process Deductions</span>
                        <span className="text-xs text-neutral-500">In progress</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                      </div>
                    </div>

                    <div className="bg-neutral-50 p-4 rounded-xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-neutral-800">Generate Pay Stubs</span>
                        <span className="text-xs text-neutral-500">Queued</span>
                      </div>
                      <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-neutral-300 to-neutral-400 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* SECURITY DASHBOARD - Slide 3 */}
              {slides[currentSlide].dashboardType === 'security' && (
                <>
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center relative">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">Security Center</div>
                        <div className="text-sm text-neutral-500">All systems protected</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-neutral-600 font-medium">Secure</span>
                    </div>
                  </div>

                  {/* Security Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Security Score</div>
                      <div className="text-2xl font-bold text-neutral-900">99.9%</div>
                      <div className="text-xs text-purple-600 mt-1">Excellent</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                      <div className="text-sm text-neutral-600 mb-1">Threats Blocked</div>
                      <div className="text-2xl font-bold text-neutral-900">1,247</div>
                      <div className="text-xs text-green-600 mt-1">This month</div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">🔒</span>
                        <span className="text-sm font-medium text-neutral-800">256-bit Encryption</span>
                      </div>
                      <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Active</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">✓</span>
                        <span className="text-sm font-medium text-neutral-800">SOC 2 Type II</span>
                      </div>
                      <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Certified</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">☁️</span>
                        <span className="text-sm font-medium text-neutral-800">Daily Backups</span>
                      </div>
                      <span className="text-xs text-green-600 font-semibold bg-green-100 px-2 py-1 rounded-full">Running</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Decorative floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-300 rounded-full blur-2xl opacity-50 animate-pulse-soft"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300 rounded-full blur-2xl opacity-50 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-8 bg-primary-600' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}