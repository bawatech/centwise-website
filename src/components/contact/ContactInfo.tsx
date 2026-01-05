'use client';

import Button from "../ui/AnchorButton";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'support@centvise.com',
      link: 'mailto:support@centvise.com',
      description: 'Send us an email anytime',
    },
    // {
    //   icon: (
    //     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    //     </svg>
    //   ),
    //   title: 'Phone',
    //   value: '1-800-PAYROLL',
    //   link: 'tel:1-800-729-7655',
    //   description: 'Mon-Fri from 9am to 6pm EST',
    // },
    // {
    //   icon: (
    //     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //     </svg>
    //   ),
    //   title: 'Office',
    //   value: 'Toronto, Ontario',
    //   link: null,
    //   description: 'Visit us at our headquarters',
    // },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="animate-fade-in">
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">Get in Touch</h3>
        <p className="text-neutral-600 leading-relaxed">
          Have questions about Centvise? Our team is here to help. Reach out and we'll get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
              {detail.icon}
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-neutral-600 mb-1">{detail.title}</div>
              {detail.link ? (
                <a
                  href={detail.link}
                  className="text-lg font-bold text-neutral-900 hover:text-primary-600 transition-colors block mb-1"
                >
                  {detail.value}
                </a>
              ) : (
                <div className="text-lg font-bold text-neutral-900 mb-1">{detail.value}</div>
              )}
              <p className="text-sm text-neutral-600">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Office Hours */}
      {/* <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Office Hours
        </h4>
        <div className="space-y-3 text-primary-100">
          <div className="flex justify-between items-center">
            <span>Monday - Friday:</span>
            <span className="font-semibold text-white">9:00 AM - 6:00 PM EST</span>
          </div>
          <div className="w-full h-px bg-primary-500"></div>
          <div className="flex justify-between items-center">
            <span>Saturday:</span>
            <span className="font-semibold text-white">10:00 AM - 2:00 PM EST</span>
          </div>
          <div className="w-full h-px bg-primary-500"></div>
          <div className="flex justify-between items-center">
            <span>Sunday:</span>
            <span className="font-semibold text-white">Closed</span>
          </div>
        </div>
      </div> */}

      {/* Quick Access */}
      <div className="bg-accent-50 border-2 border-accent-200 rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h5 className="font-bold text-neutral-900 mb-1">Need Immediate Help?</h5>
            <p className="text-sm text-neutral-700 mb-3">
              Access our payroll app directly or schedule a live demo with our team.
            </p>
            <Button>
              Access App →
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}