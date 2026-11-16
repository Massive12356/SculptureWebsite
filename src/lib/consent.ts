export type ConsentChoice = {
  necessary: true;
  preferences: boolean;
  studioNotes: boolean;
  updatedAt: string;
};

const KEY = 'sculptor-studio-consent';
const EVENT = 'sculptor-consent-change';

export function readConsent(): ConsentChoice | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (parsed.necessary !== true) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Pick<ConsentChoice, 'preferences' | 'studioNotes'>) {
  const value: ConsentChoice = {
    necessary: true,
    preferences: choice.preferences,
    studioNotes: choice.studioNotes,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(KEY, JSON.stringify(value));
  window.dispatchEvent(new Event(EVENT));
}

export function subscribeConsent(listener: () => void) {
  window.addEventListener(EVENT, listener);
  window.addEventListener('storage', listener);
  return () => {
    window.removeEventListener(EVENT, listener);
    window.removeEventListener('storage', listener);
  };
}
