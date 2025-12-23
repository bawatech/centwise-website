// src/components/hero-section/HeroSection.tsx
'use client';

import LeftContent from "../hero-section/LeftContent";
import RightContent from "../hero-section/RightContent";


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32 section-padding">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-50 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <LeftContent />
          <RightContent />
        </div>
      </div>

      {/* Clean Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20"
        >
          <path
            d="M0,0 C480,40 960,0 1440,20 L1440,80 L0,80 Z"
            fill="rgb(var(--primary-50))"
            className="opacity-30"
          />
        </svg>
      </div>
    </section>
  );
}