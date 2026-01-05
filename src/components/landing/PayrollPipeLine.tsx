'use client';

import React, { useState, useEffect } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

const steps = [
  { title: "TD1 Onboarding", desc: "Federal & Provincial Forms" },
  { title: "Statutory Math", desc: "CPP, EI & Tax Calculations" },
  { title: "EFT Batch", desc: "Direct Deposit to Big 5" },
  { title: "CRA Remittance", desc: "PD7A Filing & Submission" },
  { title: "T4 Summary", desc: "Annual Year-End Filing" }
];

export default function PayrollPipeline() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 0.2 : 0));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <br/>
    <br/>
    <br/>
    <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How Centvise Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A simple, structured workflow designed specifically for Canadian accounting firms.
          </p>
        </div>
    <div className="w-full max-w-6xl mx-auto p-16 bg-neutral-50 rounded-3xl shadow-soft">
      <div className="relative flex justify-between">
        
        {/* Background Track (Neutral Gray) */}
        <div className="absolute top-6 left-0 w-full h-1.5 bg-neutral-200 rounded-full" />

        {/* Dynamic Progress Path (Primary Emerald) */}
        <div className="absolute top-6 left-0 w-full h-1.5">
          <motion.div 
            className="h-full bg-accent-500 rounded-full shadow-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {steps.map((step, index) => {
          const stepPercentage = (index / (steps.length - 1)) * 100;
          const isCompleted = progress >= stepPercentage;
          
          return (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* Step Node */}
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: isCompleted ? "rgb(var(--primary-600))" : "#FFFFFF", // primary.600
                  borderColor: isCompleted ? "rgb(var(--primary-600))" : "#E5E7EB",      // accent vs neutral.200
                  scale: isCompleted ? 1.15 : 1,
                }}
                className="w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-500 shadow-md"
              >
                {isCompleted ? (
                  <CheckIcon className="w-6 h-6 text-accent-500" />
                ) : (
                  <span className="text-sm font-bold text-neutral-400">{index + 1}</span>
                )}
              </motion.div>

              {/* Text Content */}
              <div className="mt-6 text-center w-40">
                <motion.h3 
                  animate={{ 
                    color: isCompleted ? "#064E3B" : "#6B7280", // primary.900 vs neutral.500
                    scale: isCompleted ? 1.05 : 1 
                  }}
                  className="text-sm font-bold tracking-tight"
                >
                  {step.title}
                </motion.h3>
                <p className="text-[11px] text-neutral-500 mt-1.5 leading-tight font-medium uppercase tracking-wide">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Manual Progress Slider for testing your theme */}
      {/* <div className="mt-20 flex flex-col items-center gap-2">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress} 
          onChange={(e) => setProgress(Number(e.target.value))}
          className="w-full max-w-xs h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
        />
        <span className="text-[10px] font-mono text-neutral-400">THEME_SYNC_ACTIVE: {Math.round(progress)}%</span>
      </div> */}
    </div>
    </>
  );
}

/**
 * Fixed CheckIcon with explicit SVGMotionProps to prevent VS Code Type Errors
 */
function CheckIcon(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="#f1f1f1" 
      {...props}
    >
      <motion.path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={3} 
        d="M5 13l4 4L19 7" 
      />
    </motion.svg>
  );
}