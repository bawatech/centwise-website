// src/components/sections/UltimatePartnerSection.tsx
'use client';

import { LayoutDashboard, FileText, BookOpen, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Single, At-a-Glance View",
    description: "Get a single, at-a-glance view of everything you need on our dashboard",
    gradient: "from-primary-500 to-primary-600"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Multi-Client Payroll Reports",
    description: "Generate multi-client payroll reports for the data you need, precisely when you need it",
    gradient: "from-secondary-500 to-secondary-600"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Key Insights & Resources",
    description: "Access key insights and resources such as tax tools, industry reports and the latest thought leadership through ADP's Resource Center",
    gradient: "from-accent-500 to-accent-600"
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Professional Growth",
    description: "Bolster your professional growth with CPD credits and complimentary webinars",
    gradient: "from-primary-600 to-secondary-600"
  }
];

export default function UltimatePartnerSection() {
  return (
    <section className="bg-white">
      <div className="container-custom">
        {/* Section Header */}
        {/* <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Become the Ultimate Partner to Your Clients
          </h1>
          <p className="text-lg text-neutral-600">
            Our all-in-one, do-it-all portal puts accountants and bookkeepers across Canada in position to earn more, learn more and become the ultimate partner to your clients.
          </p>
        </div> */}

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Powerful Features for
            <span className="block text-primary-700">Accounting Professionals</span>
          </h2>
          <p className="text-lg text-neutral-600">
Our all-in-one, do-it-all portal puts accountants and bookkeepers across Canada in position to earn more, learn more and become the ultimate partner to your clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl border border-neutral-100 p-8 shadow-soft hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center flex-shrink-0`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Hover Line */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-primary-500 to-secondary-500" />
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

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-10">
            <div className="text-left md:text-center">
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                Ready to transform your practice?
              </h3>
              <p className="text-neutral-600">
                Join thousands of accounting professionals across Canada
              </p>
            </div>
            <button className="px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}