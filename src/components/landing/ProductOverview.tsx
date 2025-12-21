'use client';

export default function ProductOverview() {
  const benefits = [
    {
      title: 'Client-Centric Architecture',
      description: 'Manage unlimited client organizations with isolated data and custom workflows for each.',
    },
    {
      title: 'Provincial Compliance',
      description: 'Automatically adapts to provincial tax rates, holidays, and labour standards across all territories.',
    },
    {
      title: 'Accounting Software Integration',
      description: 'Native integrations with QuickBooks, Xero, and Sage for seamless financial reconciliation.',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Product Overview
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
              Payroll Management Built for Accountants
            </h2>

            <p className="text-lg text-neutral-700 leading-relaxed">
              PayrollPro is not generic payroll software. It's a specialized platform engineered specifically 
              for Canadian accounting firms managing payroll for multiple clients.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">{benefit.title}</h4>
                    <p className="text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Activity Feed */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                  <h3 className="text-lg font-bold text-neutral-900">Recent Activity</h3>
                  <span className="text-sm text-neutral-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>

                {/* Activity Items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl border border-primary-200">
                    <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">Payroll Processed</div>
                      <div className="text-sm text-neutral-600">ABC Accounting - 47 employees</div>
                    </div>
                    <div className="text-xs text-neutral-500">2m ago</div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">T4 Generated</div>
                      <div className="text-sm text-neutral-600">XYZ Corp - Ready for review</div>
                    </div>
                    <div className="text-xs text-neutral-500">15m ago</div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-900">CRA Remittance</div>
                      <div className="text-sm text-neutral-600">$12,847 submitted successfully</div>
                    </div>
                    <div className="text-xs text-neutral-500">1h ago</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}