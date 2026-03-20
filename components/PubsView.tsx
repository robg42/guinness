'use client';

import { useState } from 'react';
import { PUBS, ZONES, ALL_FEATURES, FEATURE_LABELS, type Zone, type Feature } from '@/lib/pubs';

// ─── Rating dots ─────────────────────────────────────────────────────────────

function PintRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{
          width: 7, height: 7, borderRadius: '50%', flexShrink: 0,
          background: i <= rating ? 'var(--amber)' : 'var(--bg-border)',
        }} />
      ))}
    </div>
  );
}

// ─── Feature badge ────────────────────────────────────────────────────────────

function FeatureBadge({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily:    'var(--font-sans)',
      fontSize:      '0.55rem',
      fontWeight:    600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color:         'var(--cream-faint)',
      border:        '1px solid var(--bg-border)',
      padding:       '3px 7px',
      borderRadius:  2,
      whiteSpace:    'nowrap',
    }}>
      {label}
    </span>
  );
}

// ─── Pub card ─────────────────────────────────────────────────────────────────

function PubCard({ pub, rank }: { pub: typeof PUBS[0]; rank: number }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(pub.name + ' ' + pub.address)}`;
  return (
    <article style={{
      background:    'var(--bg-card)',
      border:        '1px solid var(--bg-border)',
      borderRadius:  6,
      overflow:      'hidden',
      display:       'flex',
      flexDirection: 'column',
    }}>
      {/* Image */}
      <div style={{ position: 'relative', height: 200, flexShrink: 0, overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pub.image}
          alt={pub.name}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.6) saturate(0.7)',
          }}
        />
        {/* Rank badge */}
        <div style={{
          position:      'absolute', top: 12, left: 12,
          fontFamily:    'var(--font-serif)',
          fontSize:      '1.4rem', fontWeight: 900,
          color:         rank <= 2 ? 'var(--amber)' : 'var(--cream)',
          lineHeight:    1,
          textShadow:    '0 1px 4px rgba(0,0,0,0.8)',
        }}>
          {rank}
        </div>
        {/* Zone chip */}
        <div style={{
          position:      'absolute', bottom: 10, right: 10,
          fontFamily:    'var(--font-sans)',
          fontSize:      '0.5rem', fontWeight: 700,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color:         'var(--cream)',
          background:    'rgba(0,0,0,0.55)',
          padding:       '3px 8px', borderRadius: 2,
        }}>
          {pub.zone}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Name + rating */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)', fontSize: '1.15rem',
            fontWeight: 700, color: 'var(--cream)', lineHeight: 1.2,
          }}>
            {pub.name}
          </h2>
          <PintRating rating={pub.rating} />
        </div>

        {/* Neighbourhood + price */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12, alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.58rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--cream-faint)',
          }}>
            {pub.neighbourhood}
          </span>
          <span style={{ color: 'var(--bg-border)', fontSize: '0.6rem' }}>·</span>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.58rem', color: 'var(--cream-faint)' }}>
            {pub.price}
          </span>
        </div>

        {/* Description */}
        <p style={{
          fontFamily: 'var(--font-serif)', fontSize: '0.875rem',
          color: 'var(--cream-muted)', lineHeight: 1.7,
          marginBottom: 12, flex: 1,
        }}>
          {pub.description}
        </p>

        {/* Personal note */}
        {pub.note && (
          <p style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.7rem',
            color: 'var(--amber)', fontStyle: 'italic',
            marginBottom: 14, lineHeight: 1.5,
          }}>
            &ldquo;{pub.note}&rdquo;
          </p>
        )}

        {/* Feature badges */}
        {pub.features.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 14 }}>
            {pub.features.map(f => <FeatureBadge key={f} label={FEATURE_LABELS[f]} />)}
          </div>
        )}

        {/* Address */}
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.58rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--cream-faint)', display: 'inline-flex', alignItems: 'center', gap: 5,
        }}>
          {pub.address}<span style={{ opacity: 0.5 }}>↗</span>
        </a>
      </div>
    </article>
  );
}

// ─── Filter button helpers ────────────────────────────────────────────────────

function ZoneTab({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      fontFamily:    'var(--font-sans)',
      fontSize:      '0.62rem',
      fontWeight:    600,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding:       '7px 16px',
      borderRadius:  3,
      border:        active ? 'none' : '1px solid var(--bg-border)',
      background:    active ? 'var(--amber)' : 'transparent',
      color:         active ? '#0B0A08' : 'var(--cream-muted)',
      cursor:        'pointer',
      whiteSpace:    'nowrap',
      transition:    'background 0.15s, color 0.15s',
    }}>
      {label}
    </button>
  );
}

function FeatureToggle({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      fontFamily:    'var(--font-sans)',
      fontSize:      '0.58rem',
      fontWeight:    600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      padding:       '5px 12px',
      borderRadius:  20,
      border:        active ? '1px solid var(--amber)' : '1px solid var(--bg-border)',
      background:    active ? 'rgba(200,137,10,0.12)' : 'transparent',
      color:         active ? 'var(--amber-light)' : 'var(--cream-faint)',
      cursor:        'pointer',
      whiteSpace:    'nowrap',
      transition:    'all 0.15s',
    }}>
      {label}
    </button>
  );
}

// ─── Main view ────────────────────────────────────────────────────────────────

export function PubsView() {
  const [zone, setZone]           = useState<Zone | 'all'>('all');
  const [features, setFeatures]   = useState<Set<Feature>>(new Set());

  function toggleFeature(f: Feature) {
    setFeatures(prev => {
      const next = new Set(prev);
      next.has(f) ? next.delete(f) : next.add(f);
      return next;
    });
  }

  const filtered = PUBS
    .filter(p => zone === 'all' || p.zone === zone)
    .filter(p => features.size === 0 || [...features].every(f => p.features.includes(f)))
    .sort((a, b) => b.rating - a.rating || a.name.localeCompare(b.name));

  return (
    <>
      {/* ── Filters ── */}
      <div style={{
        borderTop: '1px solid var(--bg-border)',
        borderBottom: '1px solid var(--bg-border)',
        background: 'var(--bg-card)',
        position: 'sticky', top: 60, zIndex: 9,
      }}>
        {/* Zone row */}
        <div style={{
          padding: '12px 32px',
          display: 'flex', gap: 6, overflowX: 'auto',
          borderBottom: '1px solid var(--bg-border)',
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--cream-faint)', alignSelf: 'center',
            marginRight: 6, flexShrink: 0,
          }}>
            Zone
          </span>
          {ZONES.map(z => (
            <ZoneTab
              key={z.value}
              label={z.label}
              active={zone === z.value}
              onClick={() => setZone(z.value)}
            />
          ))}
        </div>

        {/* Feature row */}
        <div style={{
          padding: '10px 32px',
          display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center',
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--cream-faint)', marginRight: 6, flexShrink: 0,
          }}>
            Vibe
          </span>
          {ALL_FEATURES.map(f => (
            <FeatureToggle
              key={f}
              label={FEATURE_LABELS[f]}
              active={features.has(f)}
              onClick={() => toggleFeature(f)}
            />
          ))}
          {features.size > 0 && (
            <button
              onClick={() => setFeatures(new Set())}
              style={{
                fontFamily: 'var(--font-sans)', fontSize: '0.55rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: 'var(--cream-faint)', background: 'none', border: 'none',
                cursor: 'pointer', marginLeft: 4, opacity: 0.6,
              }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* ── Results ── */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 32px 100px' }}>
        {/* Count */}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: '0.6rem', fontWeight: 600,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--cream-faint)', marginBottom: 24,
        }}>
          {filtered.length} pub{filtered.length !== 1 ? 's' : ''}
          {zone !== 'all' ? ` · ${ZONES.find(z => z.value === zone)?.label}` : ''}
          {features.size > 0 ? ` · ${features.size} filter${features.size > 1 ? 's' : ''} active` : ''}
        </p>

        {filtered.length === 0 ? (
          <p style={{
            fontFamily: 'var(--font-serif)', fontSize: '1rem',
            color: 'var(--cream-faint)', padding: '60px 0',
          }}>
            No pubs match those filters. Try loosening the vibe.
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}>
            {filtered.map((pub, i) => (
              <PubCard key={pub.id} pub={pub} rank={i + 1} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
