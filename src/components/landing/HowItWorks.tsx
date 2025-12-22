'use client';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Add Clients & Employees',
      description:
        'Create client organizations, add employees, and configure pay structures with provincial rules applied automatically.',
      stat: 'Step 01',
    },
    {
      title: 'Run Payroll',
      description:
        'Process payroll in minutes with automated CPP, EI, and income tax calculations—no manual adjustments.',
      stat: 'Step 02',
    },
    {
      title: 'CRA Remittance & Filings',
      description:
        'Submit CRA remittances, generate T4s and ROEs, and stay compliant without spreadsheets or rework.',
      stat: 'Step 03',
    },
    {
      title: 'Reports & Audit Readiness',
      description:
        'Access real-time payroll reports, export data, and remain audit-ready at all times.',
      stat: 'Step 04',
    },
  ];

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How CentWise Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A simple, structured workflow designed specifically for Canadian accounting firms.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50 border border-neutral-200 hover:border-primary-500 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large Background Number */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {step.stat}
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <button className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-4 text-white font-semibold shadow-md hover:bg-primary-700 transition">
            Schedule a Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
