import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ConsentBanner from '../components/ConsentBanner';

const MainLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16 overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <ConsentBanner />
    </div>
  );
};

export default MainLayout;