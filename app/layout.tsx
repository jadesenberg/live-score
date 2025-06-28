import './globals.css';             // if you have any globals
import { ReactNode } from 'react';
import { Barlow } from 'next/font/google';
import QueryProvider from '@components/QueryProvider';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata = {
  title: 'Live Score App',
  description: 'Live scores',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={barlow.className}>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
