// src/components/sections/FirmBenefitsSection.tsx
'use client';

import { 
  RefreshCw, 
  Headphones, 
  Award, 
  Globe, 
  Cloud,
  Calendar,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';

const benefits = [
  {
    icon: <RefreshCw className="w-5 h-5" />,
    text: "Seamless integrations from other popular payroll software helps to streamline your processes of migration.",
  },
  {
    icon: <Headphones className="w-5 h-5" />,
    text: "Daily support from our specialized staff Help Desk and a dedicated team help you resolve any issue",
  },
  {
    icon: <Award className="w-5 h-5" />,
    text: "Unparalleled payroll expertise help you and your clients navigate payroll-related provincial, territorial and/or federal requirements",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Enjoy anytime, anywhere access to clients' payroll reports",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    text: "Do more, faster, with our cloud-based solution",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    text: "Automated Payroll* – so that you can enjoy vacation",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: '"Highly flexible and intuitive" – Developed to meet the unique needs of the accounting professionals',
  }
];

export default function FirmBenefitsSection({imageUrl}:{imageUrl:string}) {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - SVG/Cartoon Image ONLY */}
          <div className="relative">
            {/* Image container with proper dimensions */}
            <div className="relative w-full h-full aspect-square max-w-3xl mx-auto bg-gradient-to-br from-neutral-50 to-white rounded-3xl border border-neutral-100 shadow-xl overflow-hidden">
              <Image 
                src={imageUrl || "/centwise-account-team.png"} 
                alt="Accounting team collaborating on Centwise platform" 
                fill
                className="object-contain p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>

          {/* Right Column - Content ONLY (exactly as provided) */}
          <div>
            {/* Header */}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Benefits for your firm
            </h2>
            
            {/* Description paragraph */}
            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Centvise, unlocks possibilities for firms across our provinces and/or territories. Our peerless services and dedicated support help you save time — and drive your bottom line.
            </p>

            {/* Benefits List - Simple layout with icons */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1
                    ${idx === 0 ? 'bg-primary-100 text-primary-600' :
                      idx === 1 ? 'bg-secondary-100 text-secondary-600' :
                      idx === 2 ? 'bg-accent-100 text-accent-600' :
                      idx === 3 ? 'bg-primary-100 text-primary-600' :
                      idx === 4 ? 'bg-secondary-100 text-secondary-600' :
                      idx === 5 ? 'bg-accent-100 text-accent-600' :
                      'bg-primary-100 text-primary-600'}`}>
                    {benefit.icon}
                  </div>
                  
                  {/* Text */}
                  <p className="text-neutral-700">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Optional note */}
            <div className="mt-10 pt-6 border-t border-neutral-200">
              <p className="text-sm text-neutral-500">
                *Automated payroll allows the system to process employee payroll without manual intervention once specific, pre-defined conditions are met
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}