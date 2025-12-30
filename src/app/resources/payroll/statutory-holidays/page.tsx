// app/resources/payroll/statutory-holidays/page.tsx

import Link from "next/link";

export default function StatutoryHolidaysPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-14 mt-[50px]">
      
      {/* PAGE HEADER */}
      <header className="mb-10">
        <Link
          href="/resources/payroll"
          className="text-primary-600 text-sm font-medium"
        >
          ← Back to Payroll Guide
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-neutral-900">
          Statutory Holidays in Canada
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          General holidays, often referred to as statutory or public holidays,
          are legislated rest days established at the federal or provincial
          level. Eligibility and entitlements vary by jurisdiction.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <section className="prose max-w-none text-neutral-900/80">
        <p>
          Eligible employees across Canada typically receive a day off with
          pay, compensation in lieu of time off, or a combination of these
          benefits. Employers must follow the specific rules set by their
          province or territory.
        </p>

        <p>
          Because statutory holiday rules differ significantly across Canada,
          employers should always refer to the official government resources
          for the most accurate and up-to-date information.
        </p>
      </section>

      {/* LINKS */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Official Statutory Holiday References
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <HolidayLink
            title="Federal Statutory Holidays"
            href="https://www.canada.ca/en/revenue-agency/services/tax/public-holidays.html"
          />
          <HolidayLink
            title="Alberta"
            href="https://www.alberta.ca/alberta-general-holidays"
          />
          <HolidayLink
            title="British Columbia"
            href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards/statutory-holidays"
          />
          <HolidayLink
            title="Manitoba"
            href="https://www.gov.mb.ca/labour/standards/doc,gen-holidays-after-april-30-07,factsheet.html"
          />
          <HolidayLink
            title="New Brunswick"
            href="https://www2.gnb.ca/content/gnb/en/departments/finance/human_resources/content/policies_and_guidelines/leave_policies/statutory_public_holidays.html"
          />
          <HolidayLink
            title="Ontario"
            href="https://www.ontario.ca/document/your-guide-employment-standards-act-0/public-holidays"
          />
          <HolidayLink
            title="Québec"
            href="https://www.cnesst.gouv.qc.ca/en/working-conditions/statutory-holidays"
          />
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-16 rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> Statutory holiday eligibility, pay calculation,
          and substitution rules vary by province and employment type. Always
          consult the official provincial or federal authority for compliance.
        </p>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Reusable Link Card               */
/* -------------------------------- */

function HolidayLink({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="block rounded-xl bg-white p-4 shadow-soft transition hover:shadow-primary"
    >
      <div className="text-neutral-900 font-medium">
        {title}
      </div>
      <div className="mt-1 text-primary-600 text-sm">
        View official page →
      </div>
    </a>
  );
}
