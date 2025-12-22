'use client';

import { motion } from 'framer-motion';

export default function AnimatedSystemFlow() {
  return (
    <section className="relative section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            How Payroll Data Flows
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            A real-time automated pipeline connecting employees, payroll processing,
            CRA compliance, and reporting.
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center">
          <svg
            width="800"
            height="300"
            viewBox="0 0 800 300"
            className="max-w-full"
          >
            {/* === Animated Paths === */}

            <AnimatedPath d="M150 150 H350" delay={0} />
            <AnimatedPath d="M350 150 H550" delay={0.4} />
            <AnimatedPath d="M350 150 V230 H550" delay={0.8} />

            {/* === Data Dots === */}
            <FlowDot from={{ x: 150, y: 150 }} to={{ x: 350, y: 150 }} />
            <FlowDot from={{ x: 350, y: 150 }} to={{ x: 550, y: 150 }} delay={0.8} />
            <FlowDot from={{ x: 350, y: 150 }} to={{ x: 550, y: 230 }} delay={1.6} />

            {/* === Nodes === */}
            <Node x={150} y={150} label="Employees" />
            <Node x={350} y={150} label="Payroll Engine" highlight />
            <Node x={550} y={150} label="CRA" />
            <Node x={550} y={230} label="Reports" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function AnimatedPath({ d, delay }: { d: string; delay: number }) {
  return (
    <motion.path
      d={d}
      stroke="#22c55e"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.2, delay }}
    />
  );
}

function FlowDot({
  from,
  to,
  delay = 0,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay?: number;
}) {
  return (
    <motion.circle
      r="5"
      fill="#22c55e"
      initial={{ cx: from.x, cy: from.y }}
      animate={{ cx: to.x, cy: to.y }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
        delay,
      }}
    />
  );
}

function Node({
  x,
  y,
  label,
  highlight = false,
}: {
  x: number;
  y: number;
  label: string;
  highlight?: boolean;
}) {
  return (
    <>
      <motion.circle
        cx={x}
        cy={y}
        r={highlight ? 26 : 22}
        fill="#020617"
        stroke="#22c55e"
        strokeWidth="3"
        animate={highlight ? { boxShadow: ['0 0 0px #22c55e', '0 0 18px #22c55e', '0 0 0px #22c55e'] } : {}}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <text
        x={x}
        y={y + 40}
        textAnchor="middle"
        fill="#e5e7eb"
        fontSize="14"
        fontWeight="600"
      >
        {label}
      </text>
    </>
  );
}
