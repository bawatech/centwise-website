'use client';

import { ACCESS_APP_URL } from "@/config/constants";
import Link from "next/link";

export default function DemoCTA() {
  return (
    <section className="w-full bg-primary-800 py-24 px-4">
      <div className="mx-auto max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Get a demo—live or on demand
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Explore how our solution simplifies payroll process so that you can focus on your accounting practice not on processing payroll.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary button */}
          <button className="px-10 py-4 rounded-lg bg-accent-500 text-black font-semibold
                             hover:bg-accent-600 transition">
            
            <Link
                href={ACCESS_APP_URL}
              >
              Book a live walkthrough
              </Link>
          </button>

          {/* Secondary button */}
          <button className="px-10 py-4 rounded-lg border-2 border-accent-500
                             text-white font-semibold
                             hover:bg-accent-500 hover:text-black transition">
                              <Link
                href={ACCESS_APP_URL}
              >
            Explore features
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}
