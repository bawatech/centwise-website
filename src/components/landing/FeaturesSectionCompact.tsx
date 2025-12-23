// src/components/sections/FeaturesSectionCompact.tsx
'use client';

import { BarChart, Shield, CheckCircle, Users, BarChart3, FileText } from 'lucide-react';

const features = [
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Multi-Client Dashboard",
    description: "Manage all client payrolls from one unified dashboard",
    gradient: "from-primary-500 to-primary-600"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Automated Compliance",
    description: "Stay compliant with automatic tax updates and filings",
    gradient: "from-secondary-500 to-secondary-600"
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Real-Time Processing",
    description: "Process payroll instantly with live calculations",
    gradient: "from-accent-500 to-accent-600"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Self-Service",
    description: "Empower clients with their own secure portal",
    gradient: "from-accent-600 to-accent-500"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced Analytics",
    description: "Generate detailed reports and analytics for client insights, cost optimization, and business growth",
    gradient: "to-primary-600 from-secondary-600"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Tax Management",
    description: "Automated tax calculations, remittances, and filing for federal and provincial requirements",
    gradient: "from-primary-600 to-secondary-600"
  }
];

export default function FeaturesSectionCompact() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Powerful Features for
            <span className="block text-primary-700">Accounting Professionals</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to streamline payroll management for your clients
          </p>
        </div>

        {/* Compact Grid - 3 columns on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-neutral-100 p-6 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Line - uses the first color of the gradient */}
              <div className="mt-4 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-primary-500 to-secondary-500" />
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-12 border-t border-neutral-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "2,000+", label: "Accounting Firms" },
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "40%", label: "Time Saved" },
              { value: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${
                  idx === 0 ? 'text-primary-700' :
                  idx === 1 ? 'text-secondary-700' :
                  idx === 2 ? 'text-accent-700' :
                  'text-primary-700'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}