// app/resources/payroll/page.tsx

import Link from "next/link";

export default function PayrollGuidePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-14 mt-[50px]">
      
      {/* PAGE TITLE */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-neutral-900">
          Canadian Payroll Guide
        </h1>
        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          Payroll management involves navigating a complex landscape of
          regulatory compliance, frequent legislative changes, accurate
          deductions, timely remittances, and year-end reporting obligations.
        </p>
      </header>

      {/* INTRO CONTENT */}
      <section className="prose max-w-none text-neutral-900/80 mb-14">
        <p>
          To assist employers in maintaining compliance and organizational
          efficiency, this guide consolidates key payroll guidelines and
          references from official government and industry authorities.
        </p>

        <p>
          While this guide provides a general overview of payroll processes, we
          strongly recommend consulting official government publications for
          detailed and legally binding guidance.
        </p>

        <ul>
          <li>
            <a
              href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4001.html"
              target="_blank"
              className="text-primary-600 font-medium"
            >
              CRA T4001 – Employers’ Guide: Payroll Deductions and Remittances
            </a>
          </li>
          <li>
            <a
              href="https://payroll.ca"
              target="_blank"
              className="text-primary-600 font-medium"
            >
              National Payroll Institute (NPI)
            </a>
          </li>
        </ul>
      </section>

      {/* SUB-SECTIONS NAVIGATION */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Payroll Topics
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <PayrollCard
            title="Statutory Holidays"
            description="Federal and provincial public holidays and eligibility rules."
            href="/resources/payroll/statutory-holidays"
          />

          <PayrollCard
            title="Canada Pension Plan (CPP)"
            description="CPP contributions, rates, maximums, and CPP 2."
            href="/resources/payroll/cpp"
          />

          <PayrollCard
            title="Employment Insurance (EI)"
            description="EI insurable earnings, contribution rates, and limits."
            href="/resources/payroll/ei"
          />

          <PayrollCard
            title="Minimum Wage"
            description="Federal and provincial minimum wage rates."
            href="/resources/payroll/minimum-wage"
          />

          <PayrollCard
            title="Overtime Regulations"
            description="Overtime eligibility, exemptions, and rates by province."
            href="/resources/payroll/overtime"
          />

          <PayrollCard
            title="Vacation Entitlements"
            description="Vacation time and pay entitlements by jurisdiction."
            href="/resources/payroll/vacation"
          />

        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-16 rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Disclaimer:</strong> The information within this guide is
          provided strictly for informational purposes and does not constitute
          legal or financial advice. In the event of any discrepancies between
          this content and official guidelines issued by federal or provincial
          authorities, the official government publications take precedence.
        </p>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Reusable Card Component          */
/* -------------------------------- */

function PayrollCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl bg-white p-6 transition shadow-md shadow-neutral-300
             hover:shadow-lg hover:shadow-neutral-400"
    >
      <h3 className="text-lg font-semibold text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-neutral-900/70 text-sm">
        {description}
      </p>
      <div className="mt-4 text-primary-600 font-medium">
        Read →
      </div>
    </Link>
  );
}
