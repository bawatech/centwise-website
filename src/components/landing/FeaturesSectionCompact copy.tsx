// src/components/sections/FeaturesSection3x2.tsx
'use client';

import { 
  LayoutDashboard, 
  Zap, 
  ShieldCheck, 
  Users,
  BarChart3,
  FileText,
  CheckCircle,
  Building,
  Clock,
  TrendingUp,
  Cloud,
  Lock
} from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Multi-Client Dashboard",
    description: "Manage all client payrolls from one unified dashboard with real-time updates and batch processing capabilities.",
    benefits: ["Centralized client view", "Real-time payroll status", "Batch processing"],
    color: "primary"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-Time Processing",
    description: "Process payroll instantly with live calculations, direct deposit, and immediate client notifications.",
    benefits: ["Instant calculations", "Live updates", "Direct deposit"],
    color: "secondary"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Automated Compliance",
    description: "Stay compliant with automatic tax updates, filings, and CRA-compliant calculations across all provinces.",
    benefits: ["CRA compliance", "Auto-tax filings", "Provincial standards"],
    color: "accent"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Client Self-Service",
    description: "Empower clients with secure portals for 24/7 payroll access, document management, and reduced admin work.",
    benefits: ["24/7 client access", "Document sharing", "Reduced support calls"],
    color: "primary"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Advanced Analytics",
    description: "Generate detailed reports and analytics for client insights, cost optimization, and business growth.",
    benefits: ["Custom reports", "Trend analysis", "Cost insights"],
    color: "secondary"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Tax Management",
    description: "Automated tax calculations, remittances, and filing for federal and provincial requirements.",
    benefits: ["CPP/EI calculations", "Real-time rate updates", "Auto-deductions"],
    color: "accent"
  }
];

export default function FeaturesSection3x2() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full mb-6">
            <CheckCircle className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700">
              Built for Modern Accounting Firms
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Everything You Need in One Platform
          </h2>
          
          <p className="text-lg text-neutral-600">
            Streamline your accounting practice with comprehensive tools designed for Canadian professionals
          </p>
        </div>

        {/* Features Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-neutral-200 p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Icon Container */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  feature.color === 'primary' ? 'bg-primary-50' :
                  feature.color === 'secondary' ? 'bg-secondary-50' :
                  'bg-accent-50'
                }`}>
                  <div className={`${
                    feature.color === 'primary' ? 'text-primary-600' :
                    feature.color === 'secondary' ? 'text-secondary-600' :
                    'text-accent-600'
                  }`}>
                    {feature.icon}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Benefits List */}
              <div className="mt-auto pt-4 border-t border-neutral-100">
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${
                        feature.color === 'primary' ? 'text-primary-500' :
                        feature.color === 'secondary' ? 'text-secondary-500' :
                        'text-accent-500'
                      }`} />
                      <span className="text-neutral-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Indicator */}
              <div className={`mt-4 h-1 w-0 group-hover:w-full transition-all duration-300 ${
                feature.color === 'primary' ? 'bg-primary-500' :
                feature.color === 'secondary' ? 'bg-secondary-500' :
                'bg-accent-500'
              }`} />
            </div>
          ))}
        </div>

        {/* Stats with Icons */}
        <div className="mt-20 pt-12 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { 
                value: "2,000+", 
                label: "Accounting Firms", 
                icon: <Building className="w-5 h-5" />,
                color: "primary"
              },
              { 
                value: "99.9%", 
                label: "Accuracy Rate", 
                icon: <TrendingUp className="w-5 h-5" />,
                color: "secondary"
              },
              { 
                value: "40%", 
                label: "Time Saved", 
                icon: <Clock className="w-5 h-5" />,
                color: "accent"
              },
              { 
                value: "24/7", 
                label: "Support", 
                icon: <Cloud className="w-5 h-5" />,
                color: "primary"
              }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 mx-auto ${
                  stat.color === 'primary' ? 'bg-primary-50' :
                  stat.color === 'secondary' ? 'bg-secondary-50' :
                  'bg-accent-50'
                }`}>
                  <div className={`${
                    stat.color === 'primary' ? 'text-primary-600' :
                    stat.color === 'secondary' ? 'text-secondary-600' :
                    'text-accent-600'
                  } group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                </div>
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                  stat.color === 'primary' ? 'text-primary-700' :
                  stat.color === 'secondary' ? 'text-secondary-700' :
                  'text-accent-700'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-xl p-4 border border-neutral-200 shadow-soft">
            <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
              <Lock className="w-5 h-5 text-green-600" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium text-neutral-900">SOC 2 Type II Certified</div>
              <div className="text-xs text-neutral-500">Enterprise-grade security & compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}