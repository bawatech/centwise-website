// app/resources/page.tsx

import Link from "next/link";

export default function ResourcesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-gradient-hero py-20 mt-[50px]">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900">
            Resources
          </h1>
          <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl mx-auto">
            Guides, official references, and compliance resources to help
            businesses stay informed and compliant.
          </p>
        </div>
      </section>

      {/* RESOURCE CATEGORIES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Payroll Guide Card */}
            <Link
              href="/resources/payroll"
              className="group bg-white rounded-2xl p-6 transition
             shadow-md shadow-neutral-300
             hover:shadow-lg hover:shadow-neutral-400"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 text-xl">
                📘
              </div>

              <h3 className="text-xl font-semibold text-neutral-900">
                Canadian Payroll Guide
              </h3>

              <p className="mt-2 text-neutral-900/70">
                Payroll compliance, CPP, EI, statutory holidays, overtime,
                minimum wage, and vacation entitlements.
              </p>

              <div className="mt-4 text-primary-600 font-medium">
                View Guide →
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
