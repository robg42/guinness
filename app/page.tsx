import { PUBS, ALL_FEATURES } from '@/lib/pubs';
import { PubsView } from '@/components/PubsView';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--bg-border)', padding: '0 32px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10,
      }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>
          guinness.robgregg.com
        </p>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', borderBottom: '1px solid var(--amber)', paddingBottom: 1 }}>
          London
        </span>
      </header>

      {/* Hero */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 32px 48px' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 16 }}>
          A curated guide
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.4rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 20 }}>
          The best Guinness<br />in London.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: 440 }}>
          Not every pub deserves the glass. A running list of places that treat a pint with the respect it warrants — clean lines, a patient pour, and the right temperature.
        </p>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 32, marginTop: 36 }}>
          {[
            { label: 'Pubs', value: PUBS.length },
            { label: '5-pint',  value: PUBS.filter(p => p.rating === 5).length },
            { label: 'Zones',   value: 5 },
            { label: 'Filters', value: ALL_FEATURES.length },
          ].map(s => (
            <div key={s.label}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--cream)', lineHeight: 1, marginBottom: 3 }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Filters + grid (client) */}
      <PubsView />

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--bg-border)', padding: '28px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.875rem', color: 'var(--cream-faint)' }}>Kept current. Disagreements welcome.</p>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'Recs', href: 'https://recs.robgregg.com' },
            { label: 'Mexico', href: 'https://mexico.robgregg.com' },
            { label: 'Learn', href: 'https://learn.robgregg.com' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>{l.label} ↗</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
