// src/components/hero-section/LeftContent.tsx (Professional, Clean)
'use client';

import { ArrowRight, CheckCircle, Cloud, Zap, Shield, TrendingUp } from 'lucide-react';

export default function LeftContent() {
  return (
    <div className="max-w-2xl mt-8">

      {/* Main Headline - Professional Black */}
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
        <span className="block text-neutral-900">
          Payroll Software
        </span>
        <span className="block text-neutral-900 mt-3">
          Designed for Accountants
        </span>
      </h1>

      {/* Description Card with Enhanced Colors */}
      <div className="relative mb-10">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-2xl blur-xl" />
        <div className="relative bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-neutral-500 flex items-center justify-center flex-shrink-0">
              <div className="text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div>
              <p className="text-lg text-neutral-700 leading-relaxed">
                "Say goodbye to old, complex, and costly payroll software. Embrace our seamless cloud-based solution, designed exclusively for <span className="font-semibold text-primary-700">Accounting Professionals</span>, so you can focus on driving sales, not processing payroll."
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-neutral-700 font-medium">
                  <Cloud className="w-4 h-4" />
                  <span>Cloud-Based Solution</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-primary-300" />
                <div className="flex items-center gap-2 text-neutral-700 font-medium">
                  <Zap className="w-4 h-4" />
                  <span>Anytime, Anywhere Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* CTA Buttons with Enhanced Design */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl base-gradient shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative">Start Free 14-Day Trial</span>
          <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
        </button>
        
        <button className="group inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border-2 border-primary-200 text-primary-700 hover:bg-primary-50/50 hover:border-primary-300 transition-all duration-300">
          <span className="flex items-center gap-2">
            <span>Schedule a Demo</span>
            <div className="w-8 h-8 rounded-full bg-primary-100 group-hover:bg-primary-200 flex items-center justify-center transition-colors">
              <div className="w-2 h-2 rounded-full bg-primary-500 group-hover:bg-primary-600" />
            </div>
          </span>
        </button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 pt-8 border-t border-neutral-100">
        <div className="flex items-center gap-6 text-sm text-neutral-600">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary-500" />
            <span>SOC 2 Type II Certified</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-300" />
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span>256-bit Encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}