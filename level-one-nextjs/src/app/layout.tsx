import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Level One — AI Systems & Autonomous Agents | Edinburgh',
  description:
    'Level One: The Edinburgh-based AI system architects specializing in autonomous sales agents and generative revenue engines for high-growth firms.',
  keywords:
    'AI Automation Edinburgh, Sales Agents AI, Business Consulting Edinburgh, Customer Support AI Scotland',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
