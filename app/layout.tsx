import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dnstechsupport.com'),
  title: {
    default: 'DNS TechSupport – 24/7 | Technology | Support | Solutions',
    template: '%s | DNS TechSupport',
  },
  description:
    'DNS TechSupport provides practical IT support, website development, software solutions, and technology guidance for individuals, professionals, educational institutions, and businesses. Available 24/7.',
  keywords: [
    'IT support services',
    'Web development company',
    'Custom software solutions',
    'Technology consulting',
    '24/7 tech support',
    'Website design Chhattisgarh',
    'Software development India',
    'Pamgarh tech support',
  ],
  authors: [{ name: 'DNS TechSupport' }],
  creator: 'DNS TechSupport',
  publisher: 'DNS TechSupport',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://dnstechsupport.com',
    title: 'DNS TechSupport – 24/7 | Technology | Support | Solutions',
    description:
      'Practical IT support, website development, and software solutions. Available 24/7.',
    siteName: 'DNS TechSupport',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DNS TechSupport',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNS TechSupport – 24/7',
    description: 'Practical IT support, website development, and software solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
