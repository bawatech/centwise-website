// app/resources/ei/page.tsx

import Link from "next/link";

export default function EIPage() {
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
          Employment Insurance (EI)
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          Employment Insurance (EI) provides temporary income support to
          workers who lose their job through no fault of their own or who
          require special benefits such as maternity, parental, or sickness
          leave.
        </p>
      </header>

      {/* DESCRIPTION */}
      <section className="prose max-w-none text-neutral-900/80 mb-12">
        <p>
          Insurable earnings are the employee&apos;s earnings from insurable
          employment. Generally, employers must deduct EI premiums from:
        </p>

        <ul>
          <li>Salary, wages, and other remuneration</li>
          <li>Commissions and bonuses</li>
          <li>Most taxable benefits paid in cash</li>
          <li>Honorariums</li>
          <li>Certain tips and gratuities</li>
        </ul>

        <p>
          To determine whether EI premiums must be deducted, employers should
          always consult official CRA guidance.
        </p>
      </section>

      {/* EI TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Federal EI Premium Rates & Maximums
        </h2>

        <DataTable
          headers={[
            "Year",
            "Maximum Annual Insurable Earnings",
            "EI Rate",
            "Max Employee Premium",
            "Max Employer Premium",
          ]}
          rows={[
            ["2026", "$68,900", "1.63%", "$1,123.07", "$1,572.30"],
            ["2025", "$65,700", "1.64%", "$1,077.48", "$1,508.47"],
            ["2024", "$63,200", "1.66%", "$1,049.12", "$1,468.77"],
          ]}
        />
      </section>

      {/* REFERENCES */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-neutral-900 mb-4">
          Official References
        </h2>

        <ul className="list-disc pl-6 text-primary-600">
          <li>
            <a
              href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/employment-insurance-ei.html"
              target="_blank"
            >
              CRA – Employment Insurance (EI)
            </a>
          </li>
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> EI contribution rates and thresholds may change
          annually. Employers should always verify current rates using official
          CRA publications.
        </p>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Reusable Table (same as CPP)     */
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
