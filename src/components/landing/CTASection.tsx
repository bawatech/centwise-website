'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to Transform Your Payroll Process?
          </h2>

          {/* Subheading */}
          <p className="text-xl text-primary-100 mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Join hundreds of Canadian accounting firms who have automated their payroll workflows. 
            Start your 30-day free trial today—no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <a
              href="https://app.centwise.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-400 text-neutral-900 px-10 py-5 rounded-lg hover:bg-accent-300 transition-all font-bold text-lg shadow-accent hover:shadow-2xl transform hover:-translate-y-1"
            >
              Start Free Trial →
            </a>
            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur text-white px-10 py-5 rounded-lg hover:bg-white/20 transition-all font-bold text-lg border-2 border-white/30"
            >
              Schedule a Demo
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">30-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}