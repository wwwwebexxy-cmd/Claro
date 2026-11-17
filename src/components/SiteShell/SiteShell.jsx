'use client';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PageLoader from '../PageLoader/PageLoader';
import WhatsAppFloat from '../WhatsAppFloat/WhatsAppFloat';

export default function SiteShell({ children }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      {children}
      <WhatsAppFloat />
      <ScrollToTop />
      <Footer />
    </>
  );
}
