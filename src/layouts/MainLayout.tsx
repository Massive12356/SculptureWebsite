import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ConsentBanner from '../components/ConsentBanner';
import { sculptures } from '../data/mockData';

const pageTitles: Record<string, string> = {
  '/': 'SCULPTMOORE',
  '/about': 'About · SCULPTMOORE',
  '/gallery': 'Gallery · SCULPTMOORE',
  '/services': 'Services · SCULPTMOORE',
  '/contact': 'Contact · SCULPTMOORE',
  '/privacy': 'Privacy · SCULPTMOORE',
  '/terms': 'Terms · SCULPTMOORE',
  '/consent': 'Consent · SCULPTMOORE',
};

const MainLayout = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    const detailMatch = pathname.match(/^\/gallery\/(\d+)$/);
    if (detailMatch) {
      const work = sculptures.find((sculpture) => sculpture.id === Number(detailMatch[1]));
      document.title = work ? `${work.title} · SCULPTMOORE` : 'Gallery · SCULPTMOORE';
      return;
    }

    document.title = pageTitles[pathname] ?? 'SCULPTMOORE';
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