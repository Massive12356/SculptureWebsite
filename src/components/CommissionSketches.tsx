type SketchProps = {
  className?: string;
};

const frame = 'w-full h-32 text-gray-800';

export const ConsultationSketch = ({ className = frame }: SketchProps) => (
  <svg viewBox="0 0 200 130" fill="none" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M46 36c10-14 28-12 30 2 2 12-8 20-20 16" strokeWidth="1.6" />
      <path d="M58 54c-4 18-10 30-6 42" strokeWidth="1.6" />
      <path d="M54 70c18 8 34 10 48 4" strokeWidth="1.6" />
      <path d="M156 34c-12-12-30-8-30 6-1 12 10 18 22 12" strokeWidth="1.6" />
      <path d="M146 52c4 18 10 32 6 44" strokeWidth="1.6" />
      <path d="M150 68c-20 10-36 12-52 4" strokeWidth="1.6" />
      <path d="M28 104h144" strokeWidth="1.6" />
      <path d="M44 104v16M156 104v16" strokeWidth="1.4" />
      <path d="M88 94h26l5 14H92z" strokeWidth="1.4" />
      <path d="M96 100h14M96 105h10" strokeWidth="1" />
    </g>
  </svg>
);

export const ConceptSketch = ({ className = frame }: SketchProps) => (
  <svg viewBox="0 0 200 130" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <g opacity="0.4" strokeWidth="1">
          <circle cx="78" cy="40" r="14" />
          <path d="M64 40h28M78 26v28" />
        </g>
        <path d="M78 54c-2 12-6 18-4 28" strokeWidth="1.7" />
        <path d="M76 66c-16 2-22 10-24 18" strokeWidth="1.6" />
        <path d="M80 66c14 4 22 2 28 10" strokeWidth="1.6" />
        <path d="M74 82c-8 12-6 20 2 26" strokeWidth="1.6" />
        <path d="M80 84c6 14 16 18 22 16" strokeWidth="1.6" />
        <circle cx="142" cy="48" r="12" strokeWidth="1.4" />
        <path d="M132 46c4 2 8 6 8 6M146 42c2 4 2 8 0 12" strokeWidth="1.2" />
        <path d="M48 116c24-8 56-6 96 2" strokeWidth="1" opacity="0.5" />
      </g>
  </svg>
);

export const MaterialSketch = ({ className = frame }: SketchProps) => (
  <svg viewBox="0 0 200 130" fill="none" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 50h50v46H24V50z" strokeWidth="1.6" />
      <path d="M24 50l8-10h42" strokeWidth="1.3" opacity="0.7" />
      <path d="M34 66c12-4 18 8 30-2M32 80c14-2 16 8 28 0" strokeWidth="1.3" />
      <path d="M88 52h34v46H88V52z" strokeWidth="1.6" />
      <path d="M94 64c12-4 16 8 24-2M94 78c14-4 16 8 24-1M94 90c10-3 16 6 22-2" strokeWidth="1.2" />
      <ellipse cx="160" cy="76" rx="22" ry="26" strokeWidth="1.6" />
      <path d="M150 62c8 10 8 22-2 34" strokeWidth="1.3" />
      <path d="M168 58c6 8 6 20 0 32" strokeWidth="1" opacity="0.5" />
    </g>
  </svg>
);

export const SculptingSketch = ({ className = frame }: SketchProps) => (
  <svg viewBox="0 0 200 130" fill="none" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 46h78v62H30V46z" strokeWidth="1.6" />
      <path d="M30 58c18-8 28 6 30 20 2 14-8 26-22 32" strokeWidth="1.7" />
      <path d="M52 64c6 3 8 10 4 16" strokeWidth="1.3" />
      <path d="M124 58l26 36" strokeWidth="1.7" />
      <path d="M144 88l12 8-16 3z" strokeWidth="1.5" />
      <path d="M112 40h34" strokeWidth="3" />
      <path d="M128 40v14" strokeWidth="1.5" />
      <path d="M42 116c18-4 46-2 72 2" strokeWidth="1" opacity="0.4" />
    </g>
  </svg>
);

export const InstallationSketch = ({ className = frame }: SketchProps) => (
  <svg viewBox="0 0 200 130" fill="none" className={className} aria-hidden="true">
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <path d="M100 8v16" strokeWidth="1.2" />
      <path d="M92 24h16l-2 8h-12z" strokeWidth="1.4" />
      <path d="M100 32v8" strokeWidth="1.2" strokeDasharray="2 3" />
      <circle cx="100" cy="50" r="9" strokeWidth="1.6" />
      <path d="M100 59v22" strokeWidth="1.6" />
      <path d="M100 68L82 82M100 68l18 12" strokeWidth="1.6" />
      <path d="M100 81L86 102M100 81l14 21" strokeWidth="1.6" />
      <path d="M48 104h104l-8 16H56z" strokeWidth="1.6" />
      <path d="M36 104h8M156 104h8" strokeWidth="1.2" strokeDasharray="2 2" />
    </g>
  </svg>
);
