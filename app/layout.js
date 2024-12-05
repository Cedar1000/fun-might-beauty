import { Noto_Serif, Open_Sans } from 'next/font/google';
import './globals.css';
import ClientLayout from './components/layout/GlobalProvider';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { CartProvider } from '../context/cartContext';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'FunMight Beauty Shop',
  description: 'FunMight beauty shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} ${openSans.variable} antialiased`}
      >
        <CartProvider>
          <ClientLayout>
            <Nav />

            {children}
            <Footer />
          </ClientLayout>
        </CartProvider>
      </body>
    </html>
  );
}
