import './globals.css';
import { Providers } from './Providers';
import LayoutWrapper from '../components/LayoutWrapper';
import { Poppins, Hind_Siliguri } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
});

const hindSiliguri = Hind_Siliguri({ 
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['bengali', 'latin'], 
  variable: '--font-hind-siliguri',
  display: 'swap',
});

export const metadata = {
  title: 'Md Sagor Ahmed – WordPress Developer Bangladesh',
  description: 'Md Sagor Ahmed – Professional WordPress Developer from Bangladesh.',
  verification: {
    google: 'MKOYeaaVCy2FGNy4H8OMmjE00a1w84vJ6MrFZ8ks3-s',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${hindSiliguri.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
