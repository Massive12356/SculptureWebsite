import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

type LegalPageProps = {
  kicker: string;
  title: string;
  updated: string;
  children: ReactNode;
};

const LegalPage = ({ kicker, title, updated, children }: LegalPageProps) => {
  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">{kicker}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <p className="mt-4 text-gray-300">Last updated {updated}</p>
        </div>
      </section>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-10 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:underline [&_a]:underline-offset-4 [&_a]:text-gray-900">
          {children}
        </div>
        <nav className="mt-14 flex flex-wrap gap-x-6 gap-y-2 text-sm border-t border-gray-200 pt-6">
          <Link to="/privacy" className="text-gray-900 font-medium hover:text-gray-600">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-900 font-medium hover:text-gray-600">Terms of Service</Link>
          <Link to="/consent" className="text-gray-900 font-medium hover:text-gray-600">Consent preferences</Link>
        </nav>
      </article>
    </div>
  );
};

export default LegalPage;
