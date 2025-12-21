'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle 
            cx="32" 
            cy="32" 
            r="30" 
            stroke="#059669" 
            strokeWidth="3" 
            fill="#ECFDF5"
            className="animate-pulse-soft"
          />
          <path 
            d="M20 32 L28 40 L44 24" 
            stroke="#059669" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: 'CRA-Compliant Payroll',
      description: 'Automated tax calculations and remittances that ensure full compliance with Canadian Revenue Agency regulations and provincial standards.',
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect 
            x="16" 
            y="8" 
            width="32" 
            height="48" 
            rx="2" 
            stroke="#059669" 
            strokeWidth="2" 
            fill="#ECFDF5"
            className="animate-pulse-soft"
          />
          <line x1="22" y1="20" x2="42" y2="20" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="28" x2="42" y2="28" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="36" x2="35" y2="36" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: 'Automated Deductions',
      description: 'CPP, EI, and income tax calculations handled automatically with real-time updates to federal and provincial rates.',
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path 
            d="M32 8 L48 16 L48 32 C48 42 42 50 32 56 C22 50 16 42 16 32 L16 16 Z" 
            stroke="#059669" 
            strokeWidth="2" 
            fill="#ECFDF5"
            className="animate-pulse-soft"
          />
          <path d="M26 32 L30 36 L38 26" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Bank-Level Security',
      description: 'SOC 2 Type II certified infrastructure with 256-bit encryption protecting your sensitive payroll data 24/7.',
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="40" width="8" height="16" fill="#059669" className="animate-pulse-soft" />
          <rect x="24" y="28" width="8" height="28" fill="#059669" className="animate-pulse-soft" style={{animationDelay: '0.1s'}} />
          <rect x="36" y="20" width="8" height="36" fill="#059669" className="animate-pulse-soft" style={{animationDelay: '0.2s'}} />
          <rect x="48" y="12" width="8" height="44" fill="#059669" className="animate-pulse-soft" style={{animationDelay: '0.3s'}} />
        </svg>
      ),
      title: 'Real-Time Analytics',
      description: 'Comprehensive reporting dashboards giving you instant insights into payroll costs, trends, and compliance status.',
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="24" stroke="#059669" strokeWidth="2" fill="#ECFDF5" className="animate-pulse-soft" />
          <path d="M32 20 L32 32 L40 36" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
      title: 'Time Tracking Integration',
      description: 'Seamlessly sync with popular time tracking systems to automate hours calculation and reduce manual entry errors.',
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="20" width="40" height="28" rx="4" stroke="#059669" strokeWidth="2" fill="#ECFDF5" className="animate-pulse-soft" />
          <circle cx="24" cy="32" r="4" fill="#059669" />
          <circle cx="40" cy="32" r="4" fill="#059669" />
        </svg>
      ),
      title: 'Multi-Entity Support',
      description: 'Manage payroll for multiple companies or divisions from a single dashboard with consolidated reporting.',
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Everything You Need for Modern Payroll
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Purpose-built features that understand the unique requirements of Canadian accounting professionals
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 bg-white animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}