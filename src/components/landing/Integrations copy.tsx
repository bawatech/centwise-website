'use client';

export default function Integrations() {
  const integrations = [
    {
      name: 'QuickBooks',
      description: 'Sync payroll data seamlessly for accurate reconciliation and reporting.',
    },
    {
      name: 'Xero',
      description: 'Automated journal entries and real-time financial updates.',
    },
    {
      name: 'Sage',
      description: 'Native integration for mid-size and enterprise accounting firms.',
    },
    {
      name: 'CSV / Excel',
      description: 'Import and export payroll data for custom workflows and audits.',
    },
    {
      name: 'API Access',
      description: 'Secure APIs for custom integrations and advanced automation.',
    },
    {
      name: 'Time Tracking',
      description: 'Connect popular time-tracking tools for accurate payroll runs.',
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
            Centvise fits directly into your existing accounting workflow—no process changes required.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50 border border-neutral-200 hover:border-primary-500 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder Logo */}
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white border border-neutral-200 mb-6 text-primary-600 font-bold text-lg shadow-sm">
                {integration.name.charAt(0)}
              </div>

              <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                {integration.name}
              </h3>

              <p className="text-neutral-700 leading-relaxed">
                {integration.description}
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
            Don’t see your software? Our roadmap is driven by accounting firms—custom integrations available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
