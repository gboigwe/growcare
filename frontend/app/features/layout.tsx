import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore GrowCare features: create unlimited circles, track contributions in real-time, enjoy Bitcoin L2 security with Clarity smart contracts, instant settlements, global accessibility, and transparent expense management.',
  keywords: ['growcare features', 'expense management', 'smart contracts', 'real-time tracking', 'bitcoin l2', 'blockchain features'],
  openGraph: {
    title: 'GrowCare Features - Small Acts, Shared Purpose',
    description: 'Discover what makes GrowCare the warmest way to support each other. Features designed with empathy and care.',
  },
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
