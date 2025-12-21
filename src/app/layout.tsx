import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from './Header';
import Footer from './Footer';

export const metadata: Metadata = {
  title: 'PayrollPro Canada | Professional Payroll Management for Accountants',
  description: 'CRA-compliant payroll management and CRM solutions designed specifically for Canadian accounting professionals.',
  keywords: 'payroll, accounting, CRA, Canada, payroll management, accounting software',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-neutral-800 antialiased">
        <Header />
        
        <main className="w-full">
          {children}
        </main>
        <Footer/>
        {/* Footer will go here */}
      </body>
    </html>
  );
}