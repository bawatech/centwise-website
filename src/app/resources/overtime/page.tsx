// app/resources/overtime/page.tsx

import Link from "next/link";

export default function OvertimePage() {
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
          Overtime Regulations in Canada
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          Canadian labour standards require employers to compensate employees
          at a higher rate when they work beyond standard daily or weekly hours.
          Overtime rules vary by jurisdiction and occupation.
        </p>
      </header>

      {/* DESCRIPTION */}
      <section className="prose max-w-none text-neutral-900/80 mb-12">
        <h2>Defining Overtime Pay</h2>
        <p>
          Overtime pay is typically calculated at <strong>1.5 times</strong> an
          employee&apos;s regular hourly wage (commonly known as time-and-a-half).
          In some jurisdictions, higher rates may apply after extended hours.
        </p>

        <p>
          Overtime is generally triggered after an employee works more than
          eight hours in a day or forty hours in a week, though thresholds vary
          by province or territory.
        </p>

        <h2>Eligibility and Exemptions</h2>
        <p>
          Both hourly and salaried employees may be eligible for overtime pay.
          However, certain roles and industries are commonly exempt, including:
        </p>

        <ul>
          <li>Management and supervisory positions</li>
          <li>Regulated professionals (e.g., lawyers, doctors, architects)</li>
          <li>Industry-specific exemptions (e.g., IT, agriculture, trucking)</li>
        </ul>

        <p>
          Employers should always consult local labour standards to determine
          eligibility and compliance requirements.
        </p>
      </section>

      {/* TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Overtime Rates & Thresholds by Jurisdiction
        </h2>

        <DataTable
          headers={[
            "Jurisdiction",
            "Overtime Rate & Threshold",
          ]}
          rows={[
            ["Federal", "1.5× after 8 hrs/day or 40 hrs/week"],
            ["Alberta", "1.5× after 8 hrs/day or 44 hrs/week"],
            ["British Columbia", "1.5× after 8 hrs/day or 40 hrs/week; 2× after 12 hrs/day"],
            ["Manitoba", "1.5× after 8 hrs/day or 40 hrs/week"],
            ["New Brunswick", "1.5× after 44 hrs/week"],
            ["Newfoundland & Labrador", "1.5× minimum wage after 40 hrs/week"],
            ["Northwest Territories", "1.5× after 8 hrs/day or 40 hrs/week"],
            ["Nova Scotia", "1.5× after 48 hrs/week"],
            ["Nunavut", "1.5× after 8 hrs/day or 40 hrs/week"],
            ["Ontario", "1.5× after 44 hrs/week"],
            ["Prince Edward Island", "1.5× after 48 hrs/week"],
            ["Québec", "1.5× after 40 hrs/week"],
            ["Saskatchewan", "1.5× after 8 or 10 hrs/day or 40 hrs/week"],
            ["Yukon", "1.5× after 8 hrs/day or 40 hrs/week"],
          ]}
        />
      </section>

      {/* REFERENCES */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">
          Official Labour Standards References
        </h2>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AuthorityLink
            title="Canada Labour Code"
            href="https://laws-lois.justice.gc.ca/eng/acts/L-2/"
          />
          <AuthorityLink
            title="Ontario Employment Standards"
            href="https://www.ontario.ca/document/your-guide-employment-standards-act-0"
          />
          <AuthorityLink
            title="British Columbia Employment Standards"
            href="https://www2.gov.bc.ca/gov/content/employment-business/employment-standards-advice/employment-standards"
          />
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> Overtime eligibility and thresholds vary by
          jurisdiction and industry. Employers must follow the most applicable
          legislation for their workplace.
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
