'use client';

export default function ContinuousWorkflow() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How Payroll Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A continuously automated payroll workflow from start to finish.
          </p>
        </div>

        {/* Workflow */}
        <div className="relative flex justify-center">
          {/* SVG PATH */}
          <svg
            width="1100"
            height="260"
            viewBox="0 0 1100 260"
            className="absolute top-20"
          >
            <path
              d="
                M 50 130
                C 200 40, 350 40, 500 130
                S 800 220, 1050 130
              "
              fill="none"
              stroke="#2563eb"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 14"
              className="workflow-path"
            />
          </svg>

          {/* Cards */}
          <div className="relative w-[1100px] h-[260px]">
            <Card title="Employees" x="40px" />
            <Card title="Payroll Input" x="260px" />
            <Card title="Processing" x="500px" />
            <Card title="CRA Filing" x="740px" />
            <Card title="Reports" x="960px" />
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .workflow-path {
          animation: dashMove 6s linear infinite;
        }

        @keyframes dashMove {
          to {
            stroke-dashoffset: -200;
          }
        }
      `}</style>
    </section>
  );
}

function Card({ title, x }: { title: string; x: string }) {
  return (
    <div
      className="absolute top-0"
      style={{ left: x }}
    >
      <div className="w-44 rounded-2xl bg-white border border-neutral-200 shadow-md p-5 text-center">
        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
          ✓
        </div>
        <h4 className="font-semibold text-neutral-900">{title}</h4>
      </div>
    </div>
  );
}
