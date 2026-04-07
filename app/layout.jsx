import './globals.css';
import { Providers } from './Providers';
import LayoutWrapper from '../components/LayoutWrapper';

export const metadata = {
  title: 'Md Sagor Ahmed – WordPress Developer Bangladesh',
  description: 'Md Sagor Ahmed – Professional WordPress Developer from Bangladesh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
}
