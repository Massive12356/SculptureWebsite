import { FormEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConsentChoice, readConsent, saveConsent } from '../lib/consent';

const ConsentPage = () => {
  const [preferences, setPreferences] = useState(false);
  const [studioNotes, setStudioNotes] = useState(false);
  const [saved, setSaved] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) return;
    setPreferences(existing.preferences);
    setStudioNotes(existing.studioNotes);
    setSaved(existing);
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    saveConsent({ preferences, studioNotes });
    setSaved(readConsent());
  };

  const savedLabel = saved
    ? new Date(saved.updatedAt).toLocaleString(undefined, {
        dateStyle: 'medium',
        timeStyle: 'short',
      })
    : null;

  return (
    <div className="bg-white">
      <section className="bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-4">Consent</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Your choices on this site</h1>
          <p className="mt-4 text-lg text-gray-300">
            Tell us what the studio may remember, and whether you want notes when there is something new on the bench.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <form onSubmit={handleSubmit} className="space-y-6">
          {saved && (
            <p className="rounded-md bg-gray-900 text-white px-4 py-3" role="status">
              Saved on this device{savedLabel ? ` · ${savedLabel}` : ''}.
            </p>
          )}

          <fieldset className="space-y-4">
            <legend className="text-2xl font-bold text-gray-900 mb-2">What we may store</legend>

            <label className="flex gap-4 rounded-lg border border-gray-200 p-5 bg-gray-50">
              <input type="checkbox" checked disabled className="mt-1 h-4 w-4" />
              <span>
                <span className="block font-semibold text-gray-900">Essential</span>
                <span className="block text-gray-600 mt-1">
                  Always on. This keeps the site working and remembers the choice you make here, so the banner does not return on every page.
                </span>
              </span>
            </label>

            <label className="flex gap-4 rounded-lg border border-gray-200 p-5 cursor-pointer">
              <input
                type="checkbox"
                checked={preferences}
                onChange={(event) => setPreferences(event.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                <span className="block font-semibold text-gray-900">Remember preferences</span>
                <span className="block text-gray-600 mt-1">
                  Keeps small choices in this browser, such as this form, so you do not have to set them again on the next visit.
                </span>
              </span>
            </label>

            <label className="flex gap-4 rounded-lg border border-gray-200 p-5 cursor-pointer">
              <input
                type="checkbox"
                checked={studioNotes}
                onChange={(event) => setStudioNotes(event.target.checked)}
                className="mt-1 h-4 w-4"
              />
              <span>
                <span className="block font-semibold text-gray-900">Studio notes</span>
                <span className="block text-gray-600 mt-1">
                  Occasional notes about new work, open Saturdays, and the journal. No other mail. You can turn this off here at any time.
                </span>
              </span>
            </label>
          </fieldset>

          <button
            type="submit"
            className="bg-gray-900 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Save my choices
          </button>
        </form>

        <p className="mt-8 text-gray-600 leading-relaxed">
          How the studio handles a message you send is in the <Link to="/privacy" className="text-gray-900 underline underline-offset-4">Privacy Policy</Link>.
          The rules for using the site and for commissions are in the <Link to="/terms" className="text-gray-900 underline underline-offset-4">Terms of Service</Link>.
        </p>
      </div>
    </div>
  );
};

export default ConsentPage;
