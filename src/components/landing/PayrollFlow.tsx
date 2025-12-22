'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { title: "TD1 Onboarding", desc: "Federal/Provincial Tax Forms" },
  { title: "Net Pay Calc", desc: "CPP, EI & Income Tax" },
  { title: "EFT Batch", desc: "Direct Deposit to Big 5 Banks" },
  { title: "PD7A Filing", desc: "CRA Remittance Submission" },
  { title: "T4 Summary", desc: "Annual Year-End Filing" }
];

export default function PayrollFlow() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play the sequence for demonstration
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-10 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
      <div className="relative flex justify-between items-start">
        
        {/* Background Static Path */}
        <svg className="absolute top-5 left-0 w-full h-2 px-10" preserveAspectRatio="none">
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
        </svg>

        {/* Animated Drawing Path */}
        <svg className="absolute top-5 left-0 w-full h-2 px-10" preserveAspectRatio="none">
          <motion.line
            x1="0" y1="50%" x2="100%" y2="50%"
            stroke="#3B82F6"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeStep / (steps.length - 1) }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg>

        {/* Steps Logic */}
        {steps.map((step, index) => {
          const isActive = index <= activeStep;
          const isCurrent = index === activeStep;

          return (
            <div key={index} className="relative z-10 flex flex-col items-center w-40">
              {/* The Node/Circle */}
              <motion.div
                animate={{
                  scale: isCurrent ? 1.2 : 1,
                  backgroundColor: isActive ? "#3B82F6" : "#FFFFFF",
                  borderColor: isActive ? "#3B82F6" : "#CBD5E1"
                }}
                className="w-10 h-10 rounded-full border-4 flex items-center justify-center shadow-lg transition-colors duration-500"
              >
                {isActive ? (
                  <CheckIcon className="w-5 h-5 text-white" />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-300" />
                )}
                
                {/* Ping animation for the current active step */}
                {isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75" />
                )}
              </motion.div>

              {/* Text Content */}
              <motion.div 
                animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 5 }}
                className="mt-6 text-center"
              >
                <h3 className={`font-bold text-sm tracking-tight ${isCurrent ? 'text-blue-600' : 'text-slate-700'}`}>
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed leading-tight">
                  {step.desc}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}