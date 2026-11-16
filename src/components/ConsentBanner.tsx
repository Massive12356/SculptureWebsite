import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ConsentChoice, readConsent, saveConsent, subscribeConsent } from '../lib/consent';

const ConsentBanner = () => {
  const { pathname } = useLocation();
  const [choice, setChoice] = useState<ConsentChoice | null>(readConsent);

  useEffect(() => subscribeConsent(() => setChoice(readConsent())), []);

  if (choice || pathname === '/consent') return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 z-50 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md rounded-lg border border-gray-200 bg-white p-5 shadow-2xl">
      <p className="text-sm font-semibold text-gray-900">The studio uses a few stored choices</p>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
        Essential storage remembers this answer. You can also allow remembered preferences and occasional studio notes. Read the <Link to="/privacy" className="underline underline-offset-4 text-gray-900">Privacy Policy</Link>.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveConsent({ preferences: true, studioNotes: true })}
          className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
        >
          Accept all
        </button>
        <button
          type="button"
          onClick={() => saveConsent({ preferences: false, studioNotes: false })}
          className="border border-gray-300 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50"
        >
          Essential only
        </button>
        <Link
          to="/consent"
          className="px-4 py-2 text-sm font-medium text-gray-900 underline underline-offset-4"
        >
          Choose
        </Link>
      </div>
    </div>
  );
};

export default ConsentBanner;
