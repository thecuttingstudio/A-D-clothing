import { Product } from '../types';

export const formatINR = (amount: number): string =>
  '₹' + Number(amount).toLocaleString('en-IN');

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85';

export const CAMPAIGN_IMAGE =
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=82';

export const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?auto=format&fit=crop&w=1200&q=82';

export const PRODUCTS: Product[] = [
  {
    id: 'ad-essential-oversized-tee',
    sku: 'AD-FW26-101',
    name: 'A&D Essential Oversized Tee',
    price: 1199,
    category: 'Tees',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Tees', 'Oversized', 'Essentials'],
    isNewDrop: true,
    isBestSeller: true,
    gsm: '260 GSM COMBED HEAVY JERSEY',
    fit: 'BOXY DROP-SHOULDER SILHOUETTE',
    colors: [
      { name: 'Obsidian Black', hex: '#0D0D0D' },
      { name: 'Bone White', hex: '#E8E4DC' },
      { name: 'Washed Charcoal', hex: '#38383C' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=82',
    description:
      'Everyday foundational oversized tee cut from 260 GSM ring-spun cotton with a thick mock-rib collar and tonal chest monogram.',
    details: [
      '100% Heavyweight Combed Cotton (260 GSM)',
      'Dropped shoulder seams with elongated sleeve profile',
      'Tonal matte silicone A&D chest insignia',
      'Pre-shrunk & bio-washed for zero torque'
    ]
  },
  {
    id: 'ad-crimson-emblem-graphic-tee',
    sku: 'AD-FW26-102',
    name: 'A&D Crimson Emblem Graphic Tee',
    price: 1499,
    category: 'Tees',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Tees', 'Oversized'],
    isNewDrop: true,
    isBestSeller: true,
    gsm: '280 GSM COMPACT COTTON JERSEY',
    fit: 'OVERSIZED STREET FIT',
    colors: [
      { name: 'Obsidian Black', hex: '#0B0B0B' },
      { name: 'Deep Crimson', hex: '#9E0B16' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=82',
    description:
      'Editorial graphic tee featuring raised 3D puff-print typography across the back shoulder blades and subtle collar distressing.',
    details: [
      '280 GSM heavyweight compact cotton jersey',
      '3D raised puff-print "WEAR YOUR IDENTITY" back graphic',
      'Double-needle reinforced hem & sleeves',
      'Unisex relaxed architectural drape'
    ]
  },
  {
    id: 'ad-boxy-acid-wash-tee',
    sku: 'AD-FW26-103',
    name: 'A&D Boxy Acid-Wash Tee',
    price: 1399,
    category: 'Tees',
    gender: 'Women',
    tags: ['Women', 'Men', 'Tees', 'Oversized'],
    isNewDrop: false,
    isBestSeller: false,
    gsm: '270 GSM MINERAL-WASHED COTTON',
    fit: 'CROPPED BOXY FIT',
    colors: [
      { name: 'Charcoal Fade', hex: '#2E2E32' },
      { name: 'Vintage Slate', hex: '#4B525A' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=82',
    description:
      'Individually mineral-washed for a smoked vintage patina. Slightly cropped boxy waist engineered to pair effortlessly with wide-leg cargos.',
    details: [
      '270 GSM breathable heavy single-jersey cotton',
      'Artisanal mineral acid-wash finish (each garment unique)',
      'Signature crimson bar-tack stitch at back neckline',
      'Structured 1.2-inch ribbed crew collar'
    ]
  },
  {
    id: 'ad-heavyweight-480gsm-hoodie',
    sku: 'AD-FW26-104',
    name: 'A&D Heavyweight 480GSM Hoodie',
    price: 2799,
    category: 'Hoodies & Sweats',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Hoodies & Sweats', 'Oversized'],
    isNewDrop: true,
    isBestSeller: true,
    gsm: '480 GSM LOOPBACK FRENCH TERRY',
    fit: 'STRUCTURED BOXY FIT',
    colors: [
      { name: 'Obsidian Black', hex: '#090909' },
      { name: 'Crimson Red', hex: '#9E0B16' },
      { name: 'Ash Grey', hex: '#7A7D82' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&w=900&q=82',
    description:
      'Our signature 480 GSM loopback French terry pullover crafted without drawstrings for a clean, monolithic hood structure.',
    details: [
      '480 GSM 100% pure heavyweight loopback French terry',
      'Double-lined architectural hood (no drawstrings)',
      'High-density embroidered A&D chest emblem',
      'Wide 2x2 ribbed cuffs & waistband'
    ]
  },
  {
    id: 'ad-signature-zip-up-hoodie',
    sku: 'AD-FW26-105',
    name: 'A&D Signature Zip-Up Hoodie',
    price: 2999,
    category: 'Hoodies & Sweats',
    gender: 'Women',
    tags: ['Women', 'Men', 'Hoodies & Sweats', 'Essentials'],
    isNewDrop: false,
    isBestSeller: true,
    gsm: '450 GSM BRUSHED FLEECE',
    fit: 'RELAXED LAYERED FIT',
    colors: [
      { name: 'Pitch Black', hex: '#0B0B0B' },
      { name: 'Charcoal', hex: '#2D2D30' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=82',
    description:
      'Full-zip luxury fleece hoodie equipped with a two-way matte gunmetal zipper, split kangaroo pockets, and crimson spine embroidery.',
    details: [
      '450 GSM ultra-soft brushed cotton fleece interior',
      'Custom two-way matte gunmetal zipper hardware',
      'Crimson woven internal neck tape & metal hem plaque',
      'Ideal year-round layering silhouette'
    ]
  },
  {
    id: 'ad-drop-shoulder-crewneck',
    sku: 'AD-FW26-106',
    name: 'A&D Drop-Shoulder Crewneck Sweatshirt',
    price: 2299,
    category: 'Hoodies & Sweats',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Hoodies & Sweats', 'Essentials'],
    isNewDrop: false,
    isBestSeller: false,
    gsm: '430 GSM DIAGONAL FRENCH TERRY',
    fit: 'OVERSIZED CREWNECK FIT',
    colors: [
      { name: 'Obsidian Black', hex: '#0C0C0C' },
      { name: 'Off-White', hex: '#EAE6DF' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&w=900&q=82',
    description:
      'Minimalist heavyweight crewneck featuring reverse-weave side gussets, flatlock seam detailing, and tonal satin-stitch A&D branding.',
    details: [
      '430 GSM 100% combed diagonal French terry',
      'Reverse-weave side panels to prevent vertical shrinkage',
      'Satin-stitch A&D chest monogram',
      'Relaxed drop-shoulder profile'
    ]
  },
  {
    id: 'ad-parachute-cargo-pants',
    sku: 'AD-FW26-107',
    name: 'A&D 6-Pocket Parachute Cargo Pants',
    price: 2699,
    category: 'Bottoms',
    gender: 'Men',
    tags: ['Men', 'Women', 'Bottoms', 'Oversized'],
    isNewDrop: true,
    isBestSeller: true,
    gsm: '290 GSM COTTON RIPSTOP',
    fit: 'WIDE-LEG STACKED FIT',
    colors: [
      { name: 'Obsidian Black', hex: '#0B0B0B' },
      { name: 'Tactical Olive', hex: '#3B4235' },
      { name: 'Charcoal', hex: '#303134' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=900&q=82',
    description:
      'Six-pocket tactical parachute cargos cut in crisp cotton ripstop with articulated knee darts and adjustable ankle bungee toggles.',
    details: [
      '290 GSM tear-resistant combed cotton ripstop',
      '6 gusseted utility pockets with concealed snap flaps',
      'Adjustable drawcord hem locks for wide or cuffed wear',
      'Elasticated waistband with internal drawcord'
    ]
  },
  {
    id: 'ad-baggy-raw-hem-denim',
    sku: 'AD-FW26-108',
    name: 'A&D Baggy Raw-Hem Denim Jeans',
    price: 2899,
    category: 'Bottoms',
    gender: 'Men',
    tags: ['Men', 'Women', 'Bottoms', 'Oversized'],
    isNewDrop: false,
    isBestSeller: true,
    gsm: '13.5 OZ RIGID BULL DENIM',
    fit: 'RELAXED BAGGY STRAIGHT',
    colors: [
      { name: 'Washed Black', hex: '#1E1E20' },
      { name: 'Vintage Indigo', hex: '#28364A' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=82',
    description:
      'Heavy 13.5 oz non-stretch cotton denim enzyme-washed for an authentic aged fade, finished with custom matte rivets and crimson back patch.',
    details: [
      '13.5 oz 100% pure cotton rigid twill denim',
      '5-pocket construction with custom engraved A&D rivets',
      'Embossed crimson leatherette waist patch',
      'Wide stacked leg opening'
    ]
  },
  {
    id: 'ad-heavyweight-track-joggers',
    sku: 'AD-FW26-109',
    name: 'A&D Heavyweight Track Joggers',
    price: 1999,
    category: 'Bottoms',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Bottoms', 'Essentials'],
    isNewDrop: false,
    isBestSeller: false,
    gsm: '420 GSM LOOPBACK COTTON TERRY',
    fit: 'RELAXED STRAIGHT-LEG SWEATPANT',
    colors: [
      { name: 'Obsidian Black', hex: '#0B0B0B' },
      { name: 'Heather Grey', hex: '#8E9196' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=82',
    description:
      'Clean-cut 420 GSM French terry track pants with pintuck front seams, concealed zippered side pockets, and minimal crimson thigh embroidery.',
    details: [
      '420 GSM heavyweight loopback cotton terry',
      'Tailored front pintuck crease for structured drape',
      'Zippered side-seam pockets + rear welt pocket',
      'Tonal crimson A&D micro-crest on left thigh'
    ]
  },
  {
    id: 'ad-cropped-utility-jacket',
    sku: 'AD-FW26-110',
    name: 'A&D Cropped Technical Utility Jacket',
    price: 3999,
    category: 'Outerwear',
    gender: 'Men',
    tags: ['Men', 'Women', 'Outerwear', 'Oversized'],
    isNewDrop: true,
    isBestSeller: false,
    gsm: 'WATER-REPELLENT MATTE NYLON SHELL',
    fit: 'CROPPED BOXY OUTERWEAR',
    colors: [
      { name: 'Pitch Black', hex: '#0A0A0A' },
      { name: 'Crimson Accent', hex: '#9E0B16' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=82',
    description:
      'All-weather technical shell jacket engineered with a high storm collar, matte black waterproof zippers, and breathable mesh lining.',
    details: [
      'Windproof & water-repellent matte nylon twill',
      'Two-way YKK matte black storm zipper',
      'Velcro adjustable cuffs & hem bungee cinch',
      'Internal security chest pocket'
    ]
  },
  {
    id: 'ad-varsity-bomber-jacket',
    sku: 'AD-FW26-111',
    name: 'A&D Varsity Bomber Jacket',
    price: 4499,
    category: 'Outerwear',
    gender: 'Men',
    tags: ['Men', 'Women', 'Outerwear'],
    isNewDrop: false,
    isBestSeller: true,
    gsm: '520 GSM WOOL-BLEND & VEGAN LEATHER',
    fit: 'BOXY VARSITY SILHOUETTE',
    colors: [
      { name: 'Black / Crimson', hex: '#9E0B16' },
      { name: 'All Black', hex: '#0D0D0D' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=900&q=82',
    description:
      'Statement varsity silhouette pairing a heavyweight melton body with grained matte sleeves, chenille A&D chest patch, and quilted satin lining.',
    details: [
      '520 GSM heavyweight melton body with contrast sleeves',
      'Raised chenille & chain-stitch A&D emblem',
      'Diamond-quilted crimson satin interior lining',
      'Heavy striped rib-knit collar, cuffs & hem'
    ]
  },
  {
    id: 'ad-cuban-collar-overshirt',
    sku: 'AD-FW26-112',
    name: 'A&D Distressed Cuban Collar Overshirt',
    price: 2199,
    category: 'Shirts & Knitwear',
    gender: 'Men',
    tags: ['Men', 'Women', 'Shirts & Knitwear', 'Essentials'],
    isNewDrop: false,
    isBestSeller: false,
    gsm: '250 GSM SLUB COTTON TWILL',
    fit: 'RELAXED CAMP-COLLAR FIT',
    colors: [
      { name: 'Obsidian Black', hex: '#0E0E0E' },
      { name: 'Bone White', hex: '#E6E1D6' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    image:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=82',
    description:
      'Structured open-collar overshirt woven in textured slub cotton twill with matte horn buttons and subtle raw-edge pocket detailing.',
    details: [
      '250 GSM breathable slub cotton twill',
      'Relaxed camp/Cuban collar with drop shoulders',
      'Custom engraved matte black buttons',
      'Wear buttoned solo or layered over A&D tees'
    ]
  },
  {
    id: 'ad-distressed-logo-cap',
    sku: 'AD-FW26-113',
    name: 'A&D Distressed Logo Cap',
    price: 999,
    category: 'Accessories',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Accessories', 'Essentials'],
    isNewDrop: false,
    isBestSeller: true,
    gsm: '360 GSM BRUSHED COTTON TWILL',
    fit: 'STRUCTURED 6-PANEL CURVED BRIM',
    colors: [
      { name: 'Pitch Black', hex: '#0B0B0B' },
      { name: 'Crimson Red', hex: '#9E0B16' }
    ],
    sizes: ['ONE SIZE'],
    image:
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=82',
    description:
      'Heavy brushed bull-denim 6-panel cap with raised 3D crimson A&D embroidery, subtle brim distressing, and engraved gunmetal buckle.',
    details: [
      '100% heavy brushed cotton bull denim',
      'Raised 3D A&D front monogram embroidery',
      'Laser-etched gunmetal strap closure',
      'Breathable inner sweatband'
    ]
  },
  {
    id: 'ad-tactical-crossbody-sling',
    sku: 'AD-FW26-114',
    name: 'A&D Tactical Crossbody Sling Bag',
    price: 1599,
    category: 'Accessories',
    gender: 'Unisex',
    tags: ['Men', 'Women', 'Accessories'],
    isNewDrop: true,
    isBestSeller: false,
    gsm: '900D BALLISTIC CORDURA NYLON',
    fit: 'MODULAR DAILY CARRY (4.5L)',
    colors: [{ name: 'Obsidian Black', hex: '#0A0A0A' }],
    sizes: ['ONE SIZE'],
    image:
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=82',
    secondaryImage:
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=82',
    description:
      'Weather-sealed 900D ballistic nylon crossbody bag featuring quick-release Fidlock magnetic buckle, crimson interior lining, and MOLLE webbing.',
    details: [
      '900D water-resistant ballistic nylon exterior',
      'Quick-release matte black magnetic strap buckle',
      'Signature crimson ripstop interior organizer pockets',
      'Metal A&D front badge'
    ]
  }
];

export const COLLECTIONS_META = [
  {
    id: 'Men',
    title: 'MEN',
    subtitle: 'BOXY TEES, HEAVYWEIGHT HOODIES & CARGO SILHOUETTES',
    count: '12 PIECES',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'Women',
    title: 'WOMEN',
    subtitle: 'SCULPTED PROPORTIONS & ACID-WASHED ESSENTIALS',
    count: '11 PIECES',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'Hoodies & Sweats',
    title: 'HOODIES & SWEATS',
    subtitle: '430–480 GSM FRENCH TERRY & BRUSHED FLEECE',
    count: '03 PIECES',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'Outerwear',
    title: 'OUTERWEAR & CARGOS',
    subtitle: 'TECHNICAL SHELLS, VARSITY BOMBERS & RIPSTOP',
    count: '05 PIECES',
    image:
      'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1000&q=80'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    handle: '@AD.STREETWEAR',
    caption: 'DROP 04 // NIGHT SHIFT IN MUMBAI. CROPPED UTILITY JACKET.',
    productId: 'ad-cropped-utility-jacket',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ig-2',
    handle: '@AD.ARCHIVE',
    caption: '480 GSM LOOPBACK ARCHITECTURE. NO COMPROMISE.',
    productId: 'ad-heavyweight-480gsm-hoodie',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ig-3',
    handle: '@AD.STREETWEAR',
    caption: 'WEAR YOUR IDENTITY. CRIMSON EMBLEM EDITION.',
    productId: 'ad-crimson-emblem-graphic-tee',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ig-4',
    handle: '@AD.STUDIOS',
    caption: 'CONCRETE & OBSIDIAN. 6-POCKET PARACHUTE RIGS.',
    productId: 'ad-parachute-cargo-pants',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ig-5',
    handle: '@AD.WOMEN',
    caption: 'SILHOUETTE STUDY 09 // MINERAL CHARCOAL ACID WASH.',
    productId: 'ad-boxy-acid-wash-tee',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'ig-6',
    handle: '@AD.STREETWEAR',
    caption: 'BUILT DIFFERENT. WORN DIFFERENT.',
    productId: 'ad-essential-oversized-tee',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=700&q=80'
  }
];
