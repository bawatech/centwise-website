import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';

export const metadata = {
  title: 'Contact Us | PayrollPro Canada',
  description: 'Get in touch with PayrollPro. Our team is ready to help with your payroll management needs.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-neutral-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                We're Here to Help
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Contact Us
            </h1>
            
            <p className="text-xl text-neutral-600 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Have questions about PayrollPro? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div>
              <ContactInfo />
            </div>

            {/* Right - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      {/* <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Visit Our Office</h3>
                <p className="text-neutral-600">Toronto, Ontario, Canada</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Teaser */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-neutral-600">
                Quick answers to common questions about PayrollPro
              </p>
            </div>

            <div className="grid gap-6">
              {[
                {
                  question: 'How long does implementation take?',
                  answer: 'Most clients are up and running within 1-2 weeks. Our onboarding team guides you through every step.',
                },
                {
                  question: 'Is my data secure?',
                  answer: 'Absolutely. We use bank-level 256-bit encryption and are SOC 2 Type II certified for maximum security.',
                },
                {
                  question: 'Can I try before I buy?',
                  answer: 'Yes! We offer a 30-day free trial with full access to all features. No credit card required.',
                },
                {
                  question: 'Do you support multiple provinces?',
                  answer: 'Yes, PayrollPro supports all Canadian provinces and territories with automatic tax rate updates.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 rounded-xl p-6 hover:bg-primary-50 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 pl-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}