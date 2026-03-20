import { PUBS, NEIGHBOURHOODS, type Pub } from '@/lib/pubs';

function PintRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
          background: i <= rating ? 'var(--amber)' : 'var(--bg-border)',
        }} />
      ))}
    </div>
  );
}

function PubCard({ pub, rank }: { pub: Pub; rank: number }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pub.name + ' ' + pub.address)}`;
  return (
    <article style={{
      background: 'var(--bg-card)', border: '1px solid var(--bg-border)',
      borderRadius: 6, padding: '28px 32px',
      display: 'grid', gridTemplateColumns: '52px 1fr', gap: '0 24px',
    }}>
      <div style={{
        fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 900,
        color: rank <= 2 ? 'var(--amber)' : 'var(--cream-faint)',
        lineHeight: 1, paddingTop: 4,
      }}>{rank}</div>
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--cream)', lineHeight: 1.2, marginBottom: 4 }}>{pub.name}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>{pub.neighbourhood}</span>
              <span style={{ color: 'var(--bg-border)' }}>·</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', color: 'var(--cream-faint)' }}>{pub.price}</span>
            </div>
          </div>
          <PintRating rating={pub.rating} />
        </div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9375rem', color: 'var(--cream-muted)', lineHeight: 1.75, marginBottom: pub.note ? 14 : 18 }}>{pub.description}</p>
        {pub.note && (
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--amber)', fontStyle: 'italic', marginBottom: 18, lineHeight: 1.5 }}>&ldquo;{pub.note}&rdquo;</p>
        )}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {pub.address}<span style={{ opacity: 0.5 }}>↗</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const sorted = [...PUBS].sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <header style={{ borderBottom: '1px solid var(--bg-border)', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 10 }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>guinness.robgregg.com</p>
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', borderBottom: '1px solid var(--amber)', paddingBottom: 1 }}>London</span>
      </header>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '80px 32px 64px' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 20 }}>A curated guide</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 28 }}>
          The best Guinness<br />in London.
        </h1>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', color: 'var(--cream-muted)', lineHeight: 1.8, maxWidth: 480 }}>
          Not every pub deserves the glass. A running list of places that treat a pint of Guinness with the respect it warrants — clean lines, a patient pour, and the right temperature.
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--bg-border)', borderBottom: '1px solid var(--bg-border)', background: 'var(--bg-card)', padding: '18px 32px', display: 'flex', gap: 40, overflowX: 'auto' }}>
        {[
          { label: 'Pubs listed',    value: PUBS.length },
          { label: 'Neighbourhoods', value: NEIGHBOURHOODS.length },
          { label: '5-pint rated',   value: PUBS.filter(p => p.rating === 5).length },
        ].map(s => (
          <div key={s.label} style={{ flexShrink: 0 }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--cream)', lineHeight: 1, marginBottom: 4 }}>{s.value}</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)' }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 32px 100px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {sorted.map((pub, i) => <PubCard key={pub.id} pub={pub} rank={i + 1} />)}
      </div>

      <footer style={{ borderTop: '1px solid var(--bg-border)', padding: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
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
