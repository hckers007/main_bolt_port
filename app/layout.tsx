import './globals.css';
import type { Metadata } from 'next';
import { jetbrainsMono, inter } from '@/lib/fonts';
import { ThemeProvider } from '@/components/theme-provider';
import SiteLayout from '@/components/layout/site-layout';

export const metadata: Metadata = {
  title: 'Ram | Ethical Hacker & Penetration Tester',
  description: 'Professional portfolio of Ram, an expert in cybersecurity, penetration testing, and ethical hacking',
  keywords: ['ethical hacker', 'penetration testing', 'cybersecurity', 'security researcher', 'ram', 'portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} ${inter.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}