// app/resources/payroll/cpp/page.tsx

import Link from "next/link";

export default function CPPPage() {
  return (
    <main className="py-4">
      
      {/* HEADER */}
      <header className="mb-10">
        <Link
          href="/resources/payroll"
          className="text-primary-600 text-sm font-medium"
        >
          ← Back to Payroll Guide
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-neutral-900">
          Canada Pension Plan (CPP)
        </h1>

        <p className="mt-4 text-lg text-neutral-900/70 max-w-3xl">
          The Canada Pension Plan (CPP) is a contributory, earnings-related
          social insurance program that provides income replacement upon
          retirement, disability, or death.
        </p>
      </header>

      {/* DESCRIPTION */}
      <section className="prose max-w-none text-neutral-900/80 mb-12">
        <p>The CPP provides three primary categories of benefits:</p>
        <ul>
          <li><strong>Retirement Pension</strong> – Monthly taxable income after retirement</li>
          <li><strong>Disability Benefits</strong> – Support for contributors unable to work</li>
          <li><strong>Survivor Benefits</strong> – Benefits for surviving spouses and children</li>
        </ul>
      </section>

      {/* CPP TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          CPP Contribution Amounts
        </h2>

        <DataTable
          headers={[
            "Year",
            "Maximum Pensionable Earnings",
            "Basic Exemption",
            "Max Contributory Earnings",
            "Employee Rate",
            "Max Employee Contribution",
            "Max Employer Contribution",
          ]}
          rows={[
            ["2026", "$74,600", "$3,500", "$71,100", "5.95%", "$4,230.45", "$4,230.45"],
            ["2025", "$71,300", "$3,500", "$67,800", "5.95%", "$4,034.10", "$4,034.10"],
            ["2024", "$68,500", "$3,500", "$65,000", "5.95%", "$3,867.50", "$3,867.50"],
          ]}
        />
      </section>

      {/* CPP 2 TABLE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
          Additional CPP Contributions (CPP 2)
        </h2>

        <DataTable
          headers={[
            "Year",
            "Additional Max Pensionable Earnings",
            "Contribution Rate",
            "Max Employee & Employer",
            "Max Self-Employed",
          ]}
          rows={[
            ["2026", "$85,000", "4%", "$416", "$832"],
            ["2025", "$81,200", "4%", "$396", "$792"],
            ["2024", "$73,200", "4%", "$188", "$376"],
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
              href="https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/payroll/payroll-deductions-contributions/canada-pension-plan-cpp/cpp-contribution-rates-maximums-exemptions.html"
              target="_blank"
            >
              CRA – CPP Contribution Rates & Maximums
            </a>
          </li>
          <li>
            <a
              href="https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/t4130/employers-guide-taxable-benefits-allowances.html"
              target="_blank"
            >
              CRA – Taxable Benefits & Allowances
            </a>
          </li>
        </ul>
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-xl bg-neutral-200/40 p-6 text-sm text-neutral-900/70">
        <p>
          <strong>Note:</strong> CPP contribution rates and thresholds are
          subject to change. Always confirm with official CRA publications for
          compliance.
        </p>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Reusable Table Component         */
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
