export type Pub = {
  id:           string;
  name:         string;
  neighbourhood: string;
  address:      string;
  rating:       number;   // 1–5
  description:  string;
  note?:        string;   // short personal note
  price:        '£' | '££' | '£££';
  lat:          number;
  lng:          number;
};

export const PUBS: Pub[] = [
  {
    id:            'harp',
    name:          'The Harp',
    neighbourhood: 'Covent Garden',
    address:       '47 Chandos Pl, London WC2N 4HS',
    rating:        5,
    description:   'CAMRA Pub of the Year and arguably London\'s finest pint. Small, packed, no-nonsense. The Guinness here is poured slowly and properly — creamy head, settled perfectly. Get there early.',
    note:          'My benchmark. Every other pint gets compared to this one.',
    price:         '££',
    lat:           51.5093,
    lng:           -0.1258,
  },
  {
    id:            'porterhouse',
    name:          'Porterhouse',
    neighbourhood: 'Covent Garden',
    address:       '21-22 Maiden Lane, London WC2E 7NA',
    rating:        5,
    description:   'Irish brewery bar spread across several atmospheric floors. The Guinness is exceptional — they take the two-part pour seriously and the lines are kept immaculate. A proper Dublin pub transported to London.',
    note:          'Best spot for a quiet first pint before the evening gets going.',
    price:         '££',
    lat:           51.5114,
    lng:           -0.1232,
  },
  {
    id:            'toucan',
    name:          'The Toucan',
    neighbourhood: 'Soho',
    address:       '19 Carlisle St, London W1D 3BY',
    rating:        4,
    description:   'Tiny, legendary Soho boozer dedicated almost entirely to Guinness. Toucan-themed throughout. Gets extremely packed but that\'s part of the charm. The pint is reliably excellent.',
    note:          'More of an experience than a pub. Go on a Tuesday afternoon.',
    price:         '££',
    lat:           51.5148,
    lng:           -0.1320,
  },
  {
    id:            'mulligans',
    name:          'Mulligan\'s of Mayfair',
    neighbourhood: 'Mayfair',
    address:       '13-14 Cork St, London W1S 3NS',
    rating:        4,
    description:   'Proper old-school Irish pub tucked behind Bond Street, serving Mayfair since the eighties. The Guinness is beautifully poured and the bar staff know what they\'re doing. Quieter than the Covent Garden spots.',
    note:          'Great for a long, unhurried afternoon pint.',
    price:         '££',
    lat:           51.5104,
    lng:           -0.1418,
  },
  {
    id:            'devereaux',
    name:          'Devereux',
    neighbourhood: 'Temple',
    address:       '20 Devereux Ct, London WC2R 3JJ',
    rating:        4,
    description:   'Hidden down a Strand alley in old legal London, the Devereux is a proper drinker\'s pub. The Guinness is consistently well-kept and the barristers who prop up the bar look like they\'ve been there since 1887.',
    price:         '£',
    lat:           51.5129,
    lng:           -0.1133,
  },
  {
    id:            'black-lion',
    name:          'The Black Lion',
    neighbourhood: 'Hammersmith',
    address:       '2 South Black Lion Lane, London W6 9TJ',
    rating:        4,
    description:   'Beautiful old riverside pub with a garden. Not the most Irish of pubs but they keep a cracking Guinness — lines are always clean, pour is always patient. One of West London\'s best.',
    price:         '££',
    lat:           51.4921,
    lng:           -0.2365,
  },
  {
    id:            'crown-islington',
    name:          'The Crown',
    neighbourhood: 'Islington',
    address:       '116 Cloudesley Rd, London N1 0EB',
    rating:        3,
    description:   'A neighbourhood pub that takes its Guinness seriously in a borough that doesn\'t always bother. Quieter than central options, which means the pint gets the attention it deserves.',
    price:         '£',
    lat:           51.5360,
    lng:           -0.1073,
  },
  {
    id:            'pride-of-spitalfields',
    name:          'Pride of Spitalfields',
    neighbourhood: 'Spitalfields',
    address:       '3 Heneage St, London E1 5LJ',
    rating:        3,
    description:   'East London classic — stripped back, no-nonsense, the kind of pub that was here before the neighbourhood got interesting. The Guinness is solid and the prices are honest.',
    price:         '£',
    lat:           51.5190,
    lng:           -0.0730,
  },
];

export const NEIGHBOURHOODS = [...new Set(PUBS.map(p => p.neighbourhood))].sort();
