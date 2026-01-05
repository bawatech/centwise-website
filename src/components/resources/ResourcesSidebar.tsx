// components/resources/ResourcesSidebar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const RESOURCES = [
  {
    section: "Payroll Guide",
    items: [
      { title: "Overview", href: "/resources" },
      { title: "CPP Contributions", href: "/resources/cpp" },
      { title: "EI Contributions", href: "/resources/ei" },
    ],
  },
  {
    section: "Employment Standards",
    items: [
      { title: "Minimum Wage", href: "/resources/minimum-wage" },
      { title: "Overtime Regulations", href: "/resources/overtime" },
      { title: "Vacation Entitlements", href: "/resources/vacation" },
      { title: "Statutory Holidays", href: "/resources/statutory-holidays" },
    ],
  },
];

export default function ResourcesSidebar() {
  const pathname = usePathname();

  return (
    <nav className="rounded-2xl border border-neutral-200 bg-white shadow-soft p-5">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4">
        Resources
      </h2>

      <div className="space-y-6">
        {RESOURCES.map((group) => (
          <div key={group.section}>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-900/60 mb-2">
              {group.section}
            </p>

            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block rounded-lg px-3 py-2 text-sm transition",
                        isActive
                          ? "bg-primary-50 text-primary-700 font-medium"
                          : "text-neutral-900/80 hover:bg-primary-50/60 hover:text-primary-700"
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
