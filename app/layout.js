
import './globals.css';
import ClientLayout from './components/layout/GlobalProvider';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import { CartProvider } from '../context/cartContext';


export const metadata = {
  title: 'FunMight Beauty Shop',
  description: 'FunMight beauty shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
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
