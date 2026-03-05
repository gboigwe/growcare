import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://growcare.vercel.app')),
  title: {
    default: 'GrowCare - Collaborative Expense Management on Stacks',
    template: '%s | GrowCare',
  },
  description: 'Manage group expenses effortlessly with GrowCare. Built on Stacks Bitcoin L2, GrowCare helps communities track contributions, split costs, and build financial transparency through smart contracts.',
  keywords: ['expense management', 'group expenses', 'stacks', 'bitcoin', 'blockchain', 'smart contracts', 'community finance', 'expense splitting'],
  authors: [{ name: 'GrowCare Team' }],
  creator: 'GrowCare',
  publisher: 'GrowCare',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'GrowCare - Collaborative Expense Management on Stacks',
    description: 'Manage group expenses effortlessly with GrowCare. Built on Stacks Bitcoin L2 for transparent community finance.',
    siteName: 'GrowCare',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GrowCare - Collaborative Expense Management on Stacks',
    description: 'Manage group expenses effortlessly with GrowCare. Built on Stacks Bitcoin L2 for transparent community finance.',
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
  icons: {
    icon: [
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  },
  other: {
    'talentapp:project_verification': 'b14e73cd710be5740be614a0e27010758cbf11fc7a5f154c450710d9d34bbe99187ff1e31b03ba7782844fb32c964e6f0daa60e632290ed733390234b12499a0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}