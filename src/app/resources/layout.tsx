// app/resources/layout.tsx

import MobileResourcesNav from "@/components/resources/MobileResourcesNav";
import ResourcesSidebar from "@/components/resources/ResourcesSidebar";
import { ReactNode } from "react";

export default function ResourcesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
      
      {/* Mobile Nav Button */}
      <div className="mb-4 lg:hidden">
        <MobileResourcesNav />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
        
        {/* Sidebar (Desktop only) */}
        <aside className="hidden lg:block lg:sticky lg:top-32 h-fit">
          <ResourcesSidebar />
        </aside>

        {/* Content */}
        <section className="min-w-0">
          {children}
        </section>
      </div>
    </div>
  );
}
