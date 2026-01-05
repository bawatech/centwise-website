// app/resources/vacation/page.tsx

import Link from "next/link";

export default function VacationPage() {
  return (
    <main className="py-14">

      {/* HEADER */}
      <header className="mb-10">
        <Link
          href="/resources"
          className="text-primary-600 text-sm font-medium"
        >
          ← Back to Payroll Guide
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-neutral-900">
          Vacation Entitlements in Canada
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          Vacation benefits in Canada consist of two components: vacation time
          (time off work) and vacation pay (wages paid during vacation).
          Entitlements vary by jurisdiction and length of service.
        </p>
      </header>

      {/* DESCRIPTION */}
      <section className="prose max-w-none text-neutral-900/80 mb-12">
        <p>
          Most Canadian jurisdictions apply a progressive vacation entitlement
          system, where employees earn additional vacation time and pay as
          their length of service increases.
        </p>

        <p>
          Vacation pay is typically calculated as a percentage of an
          employee&apos;s gross wages and must be paid in accordance with
          provincial or federal employment standards.
        </p>
      </section>

      {/* TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Vacation Time & Pay by Jurisdiction (2025)
        </h2>

        <DataTable
          headers={[
            "Jurisdiction",
            "Vacation Time Entitlement",
            "Vacation Pay Rate",
          ]}
          rows={[
            ["Federal", "2 weeks (1 yr); 3 weeks (5 yrs); 4 weeks (10 yrs)", "4% (1–5 yrs); 6% (5–10 yrs); 8% (10+ yrs)"],
            ["Alberta", "2 weeks (1 yr); 3 weeks (5 yrs)", "4% (1–5 yrs); 6% (5+ yrs)"],
            ["British Columbia", "2 weeks (1 yr); 3 weeks (5 yrs)", "4% (1–5 yrs); 6% (5+ yrs)"],
            ["Manitoba", "2 weeks (1 yr); 3 weeks (5 yrs)", "4% (1–5 yrs); 6% (5+ yrs)"],
            ["New Brunswick", "2 weeks (1 yr); 3 weeks (8 yrs)", "4% (1–8 yrs); 6% (8+ yrs)"],
            ["Newfoundland & Labrador", "2 weeks (1 yr); 3 weeks (15 yrs)", "4% (1–15 yrs); 6% (15+ yrs)"],
            ["Northwest Territories", "2 weeks (1 yr); 3 weeks (6 yrs)", "4% (1–5 yrs); 6% (6+ yrs)"],
            ["Nova Scotia", "2 weeks (1 yr); 3 weeks (8 yrs)", "4% (1–8 yrs); 6% (8+ yrs)"],
            ["Nunavut", "2 weeks (1 yr); 3 weeks (6 yrs)", "4% (1–5 yrs); 6% (6+ yrs)"],
            ["Ontario", "2 weeks (1 yr); 3 weeks (5 yrs)", "4% (1–5 yrs); 6% (5+ yrs)"],
            ["Prince Edward Island", "2 weeks (1 yr); 3 weeks (8 yrs)", "4% (1–8 yrs); 6% (8+ yrs)"],
            ["Québec", "2 weeks (1 yr); 3 weeks (3 yrs)", "4% (1–3 yrs); 6% (3+ yrs)"],
            ["Saskatchewan", "3 weeks (1 yr); 4 weeks (10 yrs)", "5.77% (1–10 yrs); 7.69% (10+ yrs)"],
            ["Yukon", "2 weeks (1 yr)", "4%"],
          ]}
        />
      </section>

      {/* REFERENCES */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">
          Provincial & Federal Labour Standards
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AuthorityLink
            title="Federal Employment Standards"
            href="https://www.canada.ca/en/services/jobs/workplace/federal-labour-standards.html"
          />
          <AuthorityLink
            title="Ontario Employment Standards"
            href="https://www.ontario.ca/document/your-guide-employment-standards-act-0"
          />
          <AuthorityLink
            title="British Columbia Employment Standards"
            href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards"
          />
          <AuthorityLink
            title="Québec CNESST"
            href="https://www.cnesst.gouv.qc.ca/en/working-conditions"
          />
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> Vacation entitlements are governed by
          jurisdiction-specific legislation and may vary based on employment
          agreements. Employers must comply with the most applicable standards.
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
