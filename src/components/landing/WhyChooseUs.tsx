'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Custom Software Expertise',
      description: '15+ years building enterprise solutions for accounting firms. We understand your workflow because we\'ve worked alongside accountants.',
      stat: '15+ Years',
    },
    {
      title: 'Canadian Compliance Focus',
      description: 'Built specifically for Canadian tax laws, provincial regulations, and CRA reporting requirements. Not adapted—purpose-built.',
      stat: '100% Compliant',
    },
    {
      title: 'Scalable Architecture',
      description: 'From solo practitioners to national firms with 10,000+ employees. Our infrastructure scales with your business growth.',
      stat: 'Enterprise Ready',
    },
    {
      title: 'Dedicated Support',
      description: 'Canadian-based support team that speaks accounting. No outsourced call centers, just knowledgeable professionals.',
      stat: '< 2hr Response',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Why Canadian Accountants Choose PayrollPro
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're not just another payroll vendor. We're your technology partner in building efficient, compliant practices.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-primary-50 border border-neutral-200 hover:border-primary-500 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large Number Background */}
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {reason.stat}
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-neutral-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}