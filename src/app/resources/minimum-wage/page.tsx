// app/resources/minimum-wage/page.tsx

import Link from "next/link";

export default function MinimumWagePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-14">
      
      {/* HEADER */}
      <header className="mb-10">
        <Link
          href="/resources"
          className="text-primary-600 text-sm font-medium"
        >
          ← Back to Payroll Guide
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-neutral-900">
          Minimum Wage in Canada
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          Minimum wage represents the mandatory base compensation an employer
          must pay an employee. Most workers are entitled to this rate,
          regardless of employment type or payment structure.
        </p>
      </header>

      {/* DESCRIPTION */}
      <section className="prose max-w-none text-neutral-900/80 mb-12">
        <p>
          Minimum wage rates are established at both the federal and provincial
          or territorial levels and vary by jurisdiction. These rates apply to
          full-time, part-time, and casual employees and generally cover hourly
          wages, salaries, commissions, and piece rates.
        </p>

        <p>
          Employers should always verify local regulations, as exemptions and
          special rules may apply depending on industry and employee category.
        </p>
      </section>

      {/* TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          General Minimum Wage Rates (2025)
        </h2>

        <DataTable
          headers={[
            "Jurisdiction",
            "Hourly Rate",
            "Effective Date",
          ]}
          rows={[
            ["Federal", "$17.75", "April 1, 2025"],
            ["Alberta", "$15.00", "June 26, 2019"],
            ["British Columbia", "$17.85", "June 1, 2025"],
            ["Manitoba", "$16.00", "October 1, 2025"],
            ["New Brunswick", "$15.65", "April 1, 2025"],
            ["Newfoundland & Labrador", "$16.00", "April 1, 2025"],
            ["Northwest Territories", "$16.95", "September 1, 2025"],
            ["Nova Scotia", "$16.50", "October 1, 2025"],
            ["Nunavut", "$19.75", "September 1, 2025"],
            ["Ontario", "$17.60", "October 1, 2025"],
            ["Prince Edward Island", "$16.50", "October 1, 2025"],
            ["Québec", "$16.10", "May 1, 2025"],
            ["Saskatchewan", "$15.35", "October 1, 2025"],
            ["Yukon", "$17.94", "April 1, 2025"],
          ]}
        />
      </section>

      {/* OFFICIAL LINKS */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">
          Provincial & Federal Labour Authorities
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AuthorityLink
            title="Federal"
            href="https://www.canada.ca/en/services/jobs/workplace/federal-labour-standards.html"
          />
          <AuthorityLink
            title="Alberta"
            href="https://www.alberta.ca/employment-standards"
          />
          <AuthorityLink
            title="British Columbia"
            href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards"
          />
          <AuthorityLink
            title="Ontario"
            href="https://www.ontario.ca/document/your-guide-employment-standards-act-0"
          />
          <AuthorityLink
            title="Québec"
            href="https://www.cnesst.gouv.qc.ca/en/working-conditions"
          />
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> Minimum wage rates may change due to legislative
          updates or cost-of-living adjustments. Always consult official
          government sources to ensure compliance.
        </p>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Table Component                  */
/* -------------------------------- */

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="min-w-full bg-white text-sm">
        <thead className="bg-primary-50">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left font-semibold text-neutral-900"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="border-t border-neutral-200 hover:bg-primary-50/50"
            >
              {row.map((cell, cidx) => (
                <td key={cidx} className="px-4 py-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* -------------------------------- */
/* Authority Link Card              */
/* -------------------------------- */

function AuthorityLink({
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
      className="block rounded-xl bg-white p-4 transition shadow-md shadow-neutral-300
             hover:shadow-lg hover:shadow-neutral-400"
    >
      <div className="font-medium text-neutral-900">
        {title}
      </div>
      <div className="mt-1 text-primary-600 text-sm">
        Visit official site →
      </div>
    </a>
  );
}
