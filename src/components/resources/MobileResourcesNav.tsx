// components/resources/MobileResourcesNav.tsx

"use client";

import { useState } from "react";
import ResourcesSidebar from "./ResourcesSidebar";

export default function MobileResourcesNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium shadow-soft flex items-center justify-between"
      >
        Browse Resources
        <span className="text-primary-600">☰</span>
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          
          {/* Drawer */}
          <div className="absolute left-0 top-0 h-full w-[280px] bg-white p-5 shadow-xl animate-slide-in">
            
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-lg text-neutral-900">
                Resources
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-neutral-900/60 text-xl"
              >
                ✕
              </button>
            </div>

            <ResourcesSidebar />

          </div>
        </div>
      )}
    </>
  );
}
