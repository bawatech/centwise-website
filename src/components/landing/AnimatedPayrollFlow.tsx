'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Employee Data',
    description: 'Salaries, hours, benefits, deductions',
    icon: '👥',
  },
  {
    title: 'Payroll Engine',
    description: 'CPP, EI & tax calculations automated',
    icon: '⚙️',
  },
  {
    title: 'CRA Compliance',
    description: 'Remittance, T4 & ROE filing',
    icon: '🏛️',
  },
  {
    title: 'Reports',
    description: 'Audit-ready payroll reports',
    icon: '📊',
  },
];

export default function AnimatedPayrollFlow() {
  return (
    <section className="section-padding bg-neutral-900 text-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Payroll, Fully Automated
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Watch how PayrollPro transforms complex payroll into a seamless flow.
          </p>
        </div>

        {/* Flow */}
        <div className="relative">
          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-primary-400 origin-left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="relative bg-neutral-800 border border-neutral-700 rounded-2xl p-8 text-center hover:border-primary-500 transition"
              >
                {/* Floating Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-5xl mb-6"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-2xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-10 py-4 text-white font-semibold shadow-lg hover:bg-primary-700 transition"
          >
            See PayrollPro in Action →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
