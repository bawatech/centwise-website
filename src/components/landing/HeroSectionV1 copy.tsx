'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-primary-50 via-white to-neutral-50">
      {/* ================= BACKGROUND MOTION ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated gradient layer */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-primary-200/30 rounded-full blur-[120px] animate-slow-float" />
        <div className="absolute top-1/2 -right-32 w-[520px] h-[520px] bg-accent-200/25 rounded-full blur-[120px] animate-slow-float delay-1000" />

        {/* Bottom curve */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,80 C240,20 480,140 720,100 960,60 1200,80 1440,40 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container-custom relative z-10 flex items-center min-h-[90vh]">
        <div className="max-w-4xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold animate-fade-up">
            <span className="w-2 h-2 bg-primary-500 rounded-full" />
            Built for Canadian Accounting Firms
          </div>

          {/* Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight text-neutral-900 animate-fade-up delay-100">
            Payroll software
            <span className="block text-primary-600">
              accountants trust
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl text-neutral-600 max-w-2xl leading-relaxed animate-fade-up delay-200">
            A CRA-compliant payroll platform designed to reduce errors,
            automate routine work, and scale with modern accounting firms.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-6 animate-fade-up delay-300">
            <a
              href="https://app.centwise.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-9 py-4 rounded-lg text-lg font-semibold shadow-primary hover:bg-primary-700 transition-all"
            >
              Access Payroll App
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center text-primary-600 font-semibold text-lg hover:underline"
            >
              Schedule a Demo →
            </Link>
          </div>

          {/* Credibility strip */}
          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 animate-fade-up delay-400">
            <Stat value="500+" label="Accounting Firms" />
            <Stat value="99.9%" label="Accuracy" />
            <Stat value="CRA" label="Compliant" />
            <Stat value="SOC 2" label="Security Ready" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= SUB COMPONENTS ================= */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-neutral-900">{value}</div>
      <div className="text-sm text-neutral-600">{label}</div>
    </div>
  );
}
