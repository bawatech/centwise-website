// src/components/hero-section/LeftContent.tsx (Static Content)
'use client';

import { CheckCircle, Users, Shield, BarChart, Cloud, Zap } from 'lucide-react';

export default function LeftContent() {
  return (
    <div className="max-w-2xl">
      {/* Tagline with gradient */}
      <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl border border-primary-100 mb-10 shadow-soft">
        <div className="w-8 h-8 rounded-lg base-gradient flex items-center justify-center">
          <Users className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-semibold text-primary-700">
          For Accountants • By Accountants
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
        Payroll Software 
        <span className="block text-transparent bg-clip-text base-gradient mt-2">
          Designed for Accountants
        </span>
      </h1>

      {/* Description */}
      <div className="mb-10">
        <p className="text-xl text-neutral-600 leading-relaxed mb-6 bg-gradient-to-r from-white to-primary-50 p-6 rounded-xl border border-primary-100">
          "Say goodbye to old, complex, and costly payroll software. Embrace our seamless cloud-based solution, designed exclusively for <span className="font-semibold text-primary-700">Accounting Professionals</span>, so you can focus on driving sales, not processing payroll."
        </p>
        
        {/* Key Features */}
        <div className="flex items-center gap-4 text-primary-700 font-medium">
          <div className="flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            <span>Cloud-Based Solution</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-primary-300" />
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            <span>Anytime, Anywhere Access</span>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {[
          {
            icon: <BarChart className="w-6 h-6" />,
            title: "Multi-Client Dashboard",
            description: "Manage all client payrolls from one unified dashboard"
          },
          {
            icon: <Shield className="w-6 h-6" />,
            title: "Automated Compliance",
            description: "Stay compliant with automatic tax updates and filings"
          },
          {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Real-Time Processing",
            description: "Process payroll instantly with live calculations"
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "Client Self-Service",
            description: "Empower clients with their own secure portal"
          }
        ].map((feature, idx) => (
          <div 
            key={idx} 
            className="p-4 bg-white rounded-xl border border-neutral-100 shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
              idx === 0 ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
              idx === 1 ? 'bg-gradient-to-br from-secondary-500 to-secondary-600' :
              idx === 2 ? 'bg-gradient-to-br from-accent-500 to-accent-600' :
              'base-gradient'
            }`}>
              <div className="text-white">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl base-gradient hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5">
          Start Free 14-Day Trial
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white group-hover:animate-ping" />
          </div>
        </button>
        <button className="inline-flex items-center justify-center px-8 py-4 font-semibold rounded-xl border-2 border-primary-200 text-primary-700 hover:bg-primary-50 transition-colors">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}