'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSectionV4() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Payroll Made Simple for Canadian Accountants',
      subtitle: 'CRA-compliant payroll management designed exclusively for accounting professionals',
      accent: 'Trusted by 500+ Firms',
    },
    {
      title: 'Automate Your Payroll Workflows',
      subtitle: 'Save hours every week with intelligent automation and seamless integrations',
      accent: '99.9% Accuracy Rate',
    },
    {
      title: 'Enterprise-Grade Security You Can Trust',
      subtitle: 'Bank-level encryption with SOC 2 compliance for your clients sensitive data',
      accent: 'SOC 2 Certified',
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

            {/* Main Heading - Animated */}
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight transition-all duration-500">
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-neutral-600 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.centvise.ca"
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

          {/* Right - Dashboard Mockup */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 relative">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">Employee Dashboard</div>
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