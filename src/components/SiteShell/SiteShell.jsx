'use client';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import PageLoader from '../PageLoader/PageLoader';

export default function SiteShell({ children }) {
  return (
    <>
      <PageLoader />
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
