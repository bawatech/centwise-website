export default function CurvedSection() {
  return (
    <section className="relative bg-primary-600 text-white pt-24 pb-32 overflow-hidden">
      <div className="container-custom relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Smart Payroll, Smooth Workflow
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Designed for modern Canadian accounting firms.
        </p>
      </div>

      {/* SVG Curve */}
      <svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 100"
  preserveAspectRatio="none"
>
  <path
    className="animate-wave"
    fill="white"
    d="M0,40 C240,100 480,0 720,40 960,80 1200,20 1440,60 L1440,0 L0,0 Z"
  />
</svg>
    </section>
  );
}
