import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About GrowCare',
  description: 'Learn about GrowCare - a hackathon project built for Stacks Vibe Coding Hackathon 2025. Discover how we make caring for each other feel as natural as a warm hug using Clarity smart contracts on Stacks Bitcoin L2.',
  keywords: ['about growcare', 'stacks hackathon', 'blockchain project', 'clarity smart contracts', 'team', 'mission'],
  openGraph: {
    title: 'About GrowCare - Our Story & Mission',
    description: 'Built for the Stacks Vibe Coding Hackathon 2025. GrowCare wraps blockchain transparency in human warmth.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
