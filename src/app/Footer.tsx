'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-900 text-neutral-300 pt-20 pb-8">
      
      {/* Top Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-600/40 to-transparent" />

      <div className="container-custom">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="
                relative 
                w-[160px] h-[40px]
                sm:w-[200px] sm:h-[48px]
                md:w-[240px] md:h-[56px]
                bg-white rounded-lg p-2
              ">
                <Image
                  src="/centvise-logo-rect.png"
                  alt="Centvise logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-neutral-400 leading-relaxed max-w-md mt-4">
              Canadian-built payroll and CRM software designed specifically for
              accounting professionals. Compliance-first, secure, and tailored
              to firm workflows.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: 'LinkedIn', icon: LinkedInIcon },
                { label: 'Twitter', icon: TwitterIcon },
              ].map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 transition hover:bg-primary-600"
                >
                  <Icon className="h-4 w-4 text-neutral-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Quick Links"
            links={[
              { label: 'Home', href: '/' },
              { label: 'Resources', href: '/resources' },
              { label: 'Contact', href: '/contact' },
              { label: 'Access App', href: 'https://app.centvise.ca', external: true },
            ]}
          />

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-neutral-400">
              <ContactItem icon={LocationIcon} text="Toronto, Ontario, Canada" />
              <ContactItem
                icon={EmailIcon}
                text="info@centvise.ca"
                href="mailto:info@centvise.ca"
              />
              <ContactItem
                icon={PhoneIcon}
                text="1-800-PAYROLL"
                href="tel:1-800-729-7655"
              />
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center sm:text-left">
            © {currentYear} Centvise. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-neutral-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Components ---------------- */

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="text-neutral-400 hover:text-primary-400 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactItem({
  icon: Icon,
  text,
  href,
}: {
  icon: any;
  text: string;
  href?: string;
}) {
  const content = (
    <span className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-primary-400 mt-0.5" />
      <span>{text}</span>
    </span>
  );

  return href ? (
    <a href={href} className="hover:text-primary-400 transition-colors">
      {content}
    </a>
  ) : (
    <li>{content}</li>
  );
}

/* ---------------- Icons ---------------- */

function LinkedInIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.11-4 0v5.6h-3v-11h3v1.77c1.4-2.59 7-2.78 7 2.48v6.75z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3c-2.63 0-4.78 2.14-4.78 4.78 0 .37.04.73.12 1.07C7.69 8.63 4.07 6.69 1.64 3.7a4.79 4.79 0 00-.65 2.4c0 1.66.85 3.13 2.14 3.99a4.45 4.45 0 01-2.17-.6v.06c0 2.32 1.65 4.26 3.83 4.7a4.48 4.48 0 01-2.16.08c.61 1.91 2.38 3.3 4.48 3.34A9 9 0 010 19.54a12.72 12.72 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.59A9.2 9.2 0 0023 3z" />
    </svg>
  );
}

function LocationIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeWidth={2} d="M12 21s-6-5.33-6-10a6 6 0 1112 0c0 4.67-6 10-6 10z" />
      <circle cx="12" cy="11" r="2" strokeWidth={2} />
    </svg>
  );
}

function EmailIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeWidth={2} d="M4 6h16v12H4z" />
      <path strokeWidth={2} d="M4 6l8 7 8-7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
      <path strokeWidth={2} d="M3 5h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2C9 23 1 15 1 7a2 2 0 012-2z" />
    </svg>
  );
}
