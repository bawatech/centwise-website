// src/components/hero-section/LeftContent.tsx (Simplified)
'use client';

import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, Shield, Users, BarChart, Zap, FileText, Settings } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "All-in-One Payroll & HR Platform",
    subtitle: "Built for Modern Accounting Firms",
    description: "Manage client payroll, benefits, compliance, and HR from a single dashboard. Automate busywork and focus on strategic advisory.",
    features: ["Multi-client dashboard", "Automated tax filings", "Real-time compliance"],
    icon: <BarChart className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Automated Compliance & Reporting",
    subtitle: "Never Miss a Deadline",
    description: "Stay ahead of changing regulations with automated compliance alerts, tax calculations, and instant audit trails.",
    features: ["Auto-tax calculations", "Compliance alerts", "Instant audit trails"],
    icon: <Shield className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Client Portal & Self-Service",
    subtitle: "Empower Your Clients",
    description: "Give clients 24/7 access to payroll data, reports, and documents. Reduce support requests by 60%.",
    features: ["Client self-service", "Real-time reports", "Document sharing"],
    icon: <Users className="w-6 h-6" />,
  }
];

export default function LeftContent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, [currentSlide, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="max-w-2xl">

      {/* Slide Content */}
      <div className="min-h-[320px] mb-10">
        <div
          key={slide.id}
          className={`transition-all duration-500 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {/* Icon with Gradient Background */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl base-gradient mb-8 shadow-lg">
            <div className="text-white">
              {slide.icon}
            </div>
          </div>

          {/* Subtitle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg mb-6">
            <span className="text-sm font-semibold text-primary-700">
              {slide.subtitle}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-8">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
            {slide.description}
          </p>

          {/* Features List */}
          <div className="space-y-4">
            {slide.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white border border-neutral-100 rounded-xl shadow-soft hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-lg font-medium text-neutral-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators with Gradient */}
      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'w-12 base-gradient'
                  : 'w-4 bg-neutral-200 hover:bg-neutral-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Slide Counter */}
        <div className="text-sm text-neutral-500">
          <span className="font-semibold text-primary-600">{currentSlide + 1}</span>
          <span className="mx-1">/</span>
          <span>{slides.length}</span>
        </div>
      </div>
    </div>
  );
}