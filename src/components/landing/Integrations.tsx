'use client';

import Image from 'next/image';

export default function Integrations() {
  const integrations = [
    {
      name: 'QuickBooks',
      logo: '/integrations/quickbooks.svg',
      description:
        'Seamless payroll sync for accurate reconciliation and financial reporting.',
    },
    
    {
      name: 'Google Drive',
      logo: '/integrations/google-drive.svg',
      description:
        'Secure google drive integrations and advanced automation.',
    },
    {
      name: 'Sage',
      logo: '/integrations/excel.svg',
      description:
        'Enterprise-grade integration for mid-size and large accounting firms.',
    },
    {
      name: 'Excel / CSV',
      logo: '/integrations/excel.svg',
      description:
        'Flexible import and export options for audits and custom workflows.',
    },
    {
      name: 'Xero',
      logo: '/integrations/xero.svg',
      description:
        'Automated journal entries with real-time accounting updates.',
    },
    {
      name: 'Gmail',
      logo: '/integrations/gmail.svg',
      description:
        'Secure google drive integrations and advanced automation.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Seamless Accounting Integrations
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            PayrollPro works with the tools your firm already trusts.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50 border border-neutral-200 hover:border-primary-500 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Logo */}
              <div className="flex items-center mb-6 h-10">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={50}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {item.name}
              </h3>

              <p className="text-neutral-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in">
          <span className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            More Integrations Coming
          </span>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Don’t see your accounting software? Our roadmap is driven by Canadian firms—custom integrations available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
