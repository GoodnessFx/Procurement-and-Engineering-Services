export const SITE_CONFIG = {
  name: 'Procurement & Engineering Services',
  shortName: 'PES',
  tagline: 'Procurement & Engineering Excellence Across West Africa',
  description: 'Trusted procurement and engineering partner across Nigeria, Ghana, Côte d\'Ivoire, and Senegal. We deliver equipment, materials, and technical services that keep your projects on schedule and on budget.',
  url: 'https://pes-ng.com',
  phone: '+234 800 737 0000',
  phoneClean: '2348007370000',
  email: 'info@pes-ng.com',
  address: 'Plot 14, Block 5, Admiralty Way, Lekki Phase 1, Lagos, Nigeria',
  whatsappNumber: '2348007370000',
  whatsappMessage: 'Hello PES team, I\'d like to discuss a procurement or engineering project.',
  social: {
    linkedin: 'https://linkedin.com/company/pes-ng',
    twitter: 'https://twitter.com/pes_ng',
    instagram: 'https://instagram.com/pes_ng',
  },
  hours: 'Mon–Fri 8:00–18:00 WAT | Sat 9:00–14:00 WAT',
  regions: ['Nigeria', 'Ghana', 'Côte d\'Ivoire', 'Senegal'],
  certifications: ['ISO 9001:2015', 'ISO 45001:2018', 'NCDMB Compliant', 'NCDMB NOGICD Act Compliant'],
};

export const SERVICES = [
  {
    id: 'procurement',
    title: 'Strategic Procurement',
    shortDesc: 'End-to-end sourcing, vendor management, and logistics for industrial projects.',
    description: 'We manage the full procurement lifecycle — from vendor qualification and tender management to expediting, inspection, and final delivery. Our vendor network spans OEMs, authorized distributors, and certified fabricators across West Africa and globally.',
    icon: 'procurement',
    features: [
      'Vendor qualification & pre-qualification',
      'Tender management & bid evaluation',
      'Expediting & progress tracking',
      'Third-party inspection (TPI) coordination',
      'Customs clearance & freight forwarding',
      'Warehousing & last-mile delivery',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Construction', 'Manufacturing'],
    ctaText: 'Discuss Procurement Needs',
  },
  {
    id: 'engineering',
    title: 'Engineering Services',
    shortDesc: 'Design, fabrication oversight, and technical support for capital projects.',
    description: 'Our engineering team provides multi-disciplinary support across mechanical, piping, structural, electrical, and instrumentation disciplines. We work alongside EPC contractors and owner-operators to de-risk project execution.',
    icon: 'engineering',
    features: [
      'FEED & detailed design review',
      'Piping & structural design (PDMS, SP3D, AutoCAD)',
      'Stress analysis & piping flexibility',
      'Vendor drawing review & approval',
      'Construction supervision & QA/QC',
      'Commissioning & start-up support',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Petrochemical', 'Infrastructure'],
    ctaText: 'Request Engineering Support',
  },
  {
    id: 'project-management',
    title: 'Project Management & Controls',
    shortDesc: 'Schedule control, cost management, and risk mitigation for capital projects.',
    description: 'We provide project controls expertise that keeps capital projects on track. From baseline development through earned value management to close-out, our team integrates with your PMO or acts as your outsourced controls function.',
    icon: 'project-management',
    features: [
      'Integrated project scheduling (Primavera P6, MS Project)',
      'Earned Value Management (EVM)',
      'Risk register & quantitative risk analysis (QRA)',
      'Change management & trend tracking',
      'Progress measurement & reporting',
      'Claims preparation & dispute support',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Infrastructure', 'Mining'],
    ctaText: 'Engage Project Controls',
  },
  {
    id: 'inspection',
    title: 'Inspection & QA/QC',
    shortDesc: 'Third-party inspection, NDT, and quality assurance for critical assets.',
    description: 'Our certified inspectors and NDT technicians provide independent verification at fabrication shops, construction sites, and operating facilities. We help you meet regulatory requirements and owner specifications.',
    icon: 'inspection',
    features: [
      'Welding inspection (CSWIP, AWS-CWI certified)',
      'NDT: UT, RT, MT, PT, VT, ET, PAUT, TOFD',
      'Coating inspection (NACE/CIP, FROSIO)',
      'Lifting equipment & pressure vessel inspection',
      'Vendor surveillance & shop inspection',
      'In-service inspection & RBI programs',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Marine', 'Construction'],
    ctaText: 'Schedule Inspection',
  },
  {
    id: 'expediting',
    title: 'Expediting & Logistics',
    shortDesc: 'Vendor surveillance, shipment tracking, and customs clearance across West Africa.',
    description: 'Our expeditors are embedded at vendor shops and ports across the region. We provide real-time visibility on fabrication progress, shipment status, and customs clearance — so you never lose sight of critical equipment.',
    icon: 'expediting',
    features: [
      'Shop-floor expediting & progress reporting',
      'Port clearance & customs brokerage (Nigeria, Ghana, CI, Senegal)',
      'Freight forwarding: air, sea, land',
      'Heavy lift & project cargo logistics',
      'Bonded warehousing & inventory management',
      'Real-time shipment tracking portal',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Construction', 'Mining'],
    ctaText: 'Track Your Shipment',
  },
  {
    id: 'manpower',
    title: 'Technical Manpower Supply',
    shortDesc: 'Certified engineers, inspectors, and tradespeople for project and operations support.',
    description: 'We supply vetted technical personnel for short-term project assignments and long-term operations support. All personnel are verified for certifications, medical fitness, and regulatory compliance (NCDMB, GiP, etc.).',
    icon: 'manpower',
    features: [
      'Discipline engineers (Mech, Piping, Civil, E&I, Process)',
      'Certified inspectors (CWI, CSWIP, API, NACE)',
      'NDT technicians (Level II/III certified)',
      'Welders, fitters, riggers, scaffolders',
      'Commissioning & start-up engineers',
      'HSE advisors & permit supervisors',
    ],
    industries: ['Oil & Gas', 'Power & Energy', 'Construction', 'Petrochemical'],
    ctaText: 'Request Personnel',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: 'regional-footprint',
    title: 'Regional Footprint',
    description: 'Permanent offices and personnel in Lagos, Accra, Abidjan, and Dakar. We know the local regulatory landscape, port procedures, and vendor ecosystem.',
    icon: 'regional',
  },
  {
    id: 'certified-quality',
    title: 'Certified Quality Systems',
    description: 'ISO 9001:2015 and ISO 45001:2018 certified. NCDMB-compliant for Nigerian oil & gas work. All inspectors hold current CSWIP, API, ASNT, NACE credentials.',
    icon: 'certified',
  },
  {
    id: 'vendor-network',
    title: 'Verified Vendor Network',
    description: '500+ pre-qualified vendors across OEMs, distributors, fabricators, and logistics providers. We audit and re-qualify annually.',
    icon: 'network',
  },
  {
    id: 'digital-visibility',
    title: 'Digital Visibility',
    description: 'Client portal with real-time PO tracking, expediting reports, inspection certificates, and shipment status. No more email chains for status updates.',
    icon: 'digital',
  },
  {
    id: 'local-compliance',
    title: 'Local Content Compliance',
    description: 'Deep expertise in Nigerian Content (NOGICD Act), Ghana Local Content, and Ivorian/Senegalese regulations. We help you meet local content targets.',
    icon: 'compliance',
  },
  {
    id: 'single-point',
    title: 'Single Point of Accountability',
    description: 'One contract, one project manager, one invoice. We coordinate procurement, engineering, inspection, and logistics so you don\'t manage multiple vendors.',
    icon: 'accountability',
  },
];

export const WHO_Its_FOR = [
  {
    id: 'epc-contractors',
    title: 'EPC Contractors',
    description: 'Supply chain support, vendor surveillance, expediting, and QA/QC staffing for lump-sum projects.',
    icon: 'epc',
    outcomes: [
      'Reduced vendor surveillance costs',
      'Faster material delivery to site',
      'Compliance with owner QA/QC requirements',
    ],
  },
  {
    id: 'owner-operators',
    title: 'Owner-Operators',
    description: 'Procurement strategy, technical manpower, inspection programs, and project controls for capital and maintenance projects.',
    icon: 'owner',
    outcomes: [
      'Optimized procurement spend',
      'Regulatory compliance assurance',
      'Reduced project schedule risk',
    ],
  },
  {
    id: 'fabricators',
    title: 'Fabricators & Manufacturers',
    description: 'Third-party inspection, NDT, and certification services to meet client and code requirements (ASME, API, AWS, DNV).',
    icon: 'fabricator',
    outcomes: [
      'Faster client drawing approval',
      'Reduced rework & rejection rates',
      'Certification support for export',
    ],
  },
  {
    id: 'government',
    title: 'Government & Regulators',
    description: 'Local content monitoring, project audit, and technical advisory for energy and infrastructure programs.',
    icon: 'government',
    outcomes: [
      'Independent project verification',
      'Local content compliance reporting',
      'Technical advisory for policy',
    ],
  },
];

export const PROJECTS = [
  {
    id: 'lng-train',
    title: 'LNG Train 7 Procurement Support',
    location: 'Bonny Island, Nigeria',
    sector: 'Oil & Gas',
    year: '2023–2024',
    description: 'Expediting and vendor surveillance for 200+ purchase orders covering rotating equipment, valves, instrumentation, and electrical packages. Real-time portal reporting to EPC project controls team.',
    services: ['Expediting', 'Vendor Surveillance', 'QA/QC', 'Logistics'],
    outcomes: [
      '98% on-time delivery for critical path equipment',
      'Zero expediting-related schedule delays',
      '100% NCDMB local content compliance',
    ],
    image: '/images/projects/lng-train.jpg',
  },
  {
    id: 'power-plant',
    title: '450MW Combined Cycle Power Plant',
    location: 'Tema, Ghana',
    sector: 'Power & Energy',
    year: '2022–2023',
    description: 'Procurement management for balance-of-plant equipment including heat exchangers, pumps, tanks, and piping spools. Vendor qualification, tender evaluation, and expediting.',
    services: ['Procurement', 'Vendor Qualification', 'Expediting', 'Logistics'],
    outcomes: [
      '15% cost savings vs. budget through competitive tendering',
      'All critical equipment delivered before mechanical completion',
      'Ghana Local Content compliance achieved',
    ],
    image: '/images/projects/power-plant.jpg',
  },
  {
    id: 'refinery-turnaround',
    title: 'Refinery Turnaround Inspection Program',
    location: 'Abidjan, Côte d\'Ivoire',
    sector: 'Oil & Gas',
    year: '2023',
    description: 'Full-scope inspection services for 45-day major turnaround: 120+ inspectors, NDT technicians, and coating inspectors deployed across 5 process units. 24/7 coverage with daily reporting.',
    services: ['Inspection', 'NDT', 'Coating Inspection', 'Manpower Supply'],
    outcomes: [
      'Zero safety incidents across 180,000 man-hours',
      'Turnaround completed 2 days ahead of schedule',
      'All NCRs closed before startup',
    ],
    image: '/images/projects/refinery.jpg',
  },
  {
    id: 'pipeline-project',
    title: 'Cross-Border Pipeline Logistics',
    location: 'Nigeria → Ghana',
    sector: 'Oil & Gas',
    year: '2022',
    description: 'End-to-end logistics for 180km pipeline project: port clearance at Tema, inland transportation, stringing yard management, and customs transit across two borders.',
    services: ['Logistics', 'Customs Clearance', 'Warehousing', 'Project Cargo'],
    outcomes: [
      'Zero customs delays across both jurisdictions',
      '100% material traceability via tracking portal',
      'Zero loss/damage claims',
    ],
    image: '/images/projects/pipeline.jpg',
  },
];

export const TRUST_INDICATORS = {
  stats: [
    { value: '15+', label: 'Years Operating in West Africa' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Certified Inspectors & Engineers' },
    { value: '98%', label: 'On-Time Delivery Rate' },
    { value: '4', label: 'Permanent Offices (NG, GH, CI, SN)' },
    { value: 'ISO 9001', label: 'Certified Since 2018' },
  ],
  certifications: [
    { name: 'ISO 9001:2015', issuer: 'SGS', validUntil: '2026-03-15' },
    { name: 'ISO 45001:2018', issuer: 'SGS', validUntil: '2026-03-15' },
    { name: 'NCDMB Compliant', issuer: 'Nigerian Content Development Board', validUntil: '2025-12-31' },
    { name: 'API 510/570/653', issuer: 'American Petroleum Institute', validUntil: '2025-08-20' },
    { name: 'CSWIP 3.1/3.2', issuer: 'TWI Certification Ltd', validUntil: '2025-11-30' },
    { name: 'NACE CIP Level 3', issuer: 'NACE International', validUntil: '2025-09-15' },
  ],
  clients: [
    'Shell Nigeria', 'TotalEnergies', 'Chevron Nigeria', 'ExxonMobil',
    'ENI Ghana', 'Tullow Oil', 'Kosmos Energy', 'Ghana Gas',
    'CIE (Côte d\'Ivoire Énergies)', 'Senelec', 'WAPP',
    'Julius Berger', 'CCECC', 'Dangote Industries', 'BUA Group',
  ],
  affiliations: [
    'NCDMB (Nigerian Content Development Board)',
    'Ghana Petroleum Commission',
    'PETROCI (Côte d\'Ivoire)',
    'COS-Petrogaz (Senegal)',
    'Nigerian Society of Engineers (NSE)',
    'Ghana Institution of Engineering (GhIE)',
  ],
};

export const FAQS = [
  {
    category: 'Procurement',
    questions: [
      {
        question: 'What regions do you cover for procurement?',
        answer: 'We operate from permanent offices in Nigeria (Lagos, Port Harcourt), Ghana (Accra, Takoradi), Côte d\'Ivoire (Abidjan), and Senegal (Dakar). Our vendor network extends globally — we source from OEMs and authorized distributors in Europe, Asia, the Middle East, and North America, then manage logistics into West Africa.',
      },
      {
        question: 'How do you qualify vendors?',
        answer: 'Our vendor qualification follows a documented procedure: (1) Pre-qualification questionnaire (financial, HSE, quality systems), (2) Desktop assessment of certifications and track record, (3) On-site audit for critical vendors (ISO 9001, API, ASME compliance), (4) Trial order evaluation, (5) Annual re-qualification. We maintain a qualified vendor list (QVL) of 500+ suppliers.',
      },
      {
        question: 'Can you handle customs clearance in multiple countries?',
        answer: 'Yes. We have licensed customs brokers in Nigeria, Ghana, Côte d\'Ivoire, and Senegal. We handle import permits, SONCAP/COC (Nigeria), GSA/GCNet (Ghana), CI-Douane (Côte d\'Ivoire), and GAINDE (Senegal). For cross-border projects, we manage transit procedures and bonded warehousing.',
      },
      {
        question: 'What is your typical procurement lead time?',
        answer: 'It varies by equipment type: long-lead rotating equipment (16–28 weeks), valves/instrumentation (8–16 weeks), structural steel/piping (6–12 weeks), electrical/control systems (10–20 weeks). Our expediting reduces vendor lead times by 15–25% on average through shop-floor surveillance and priority escalation.',
      },
    ],
  },
  {
    category: 'Engineering & Inspection',
    questions: [
      {
        question: 'What engineering software do you use?',
        answer: 'Our team works in PDMS/E3D, SP3D, AutoCAD Plant 3D, Caesar II (stress analysis), PV Elite (vessel design), and ETAP (electrical studies). We can adapt to your project\'s designated platform.',
      },
      {
        question: 'Are your inspectors certified?',
        answer: 'Yes. All inspectors hold current certifications: CSWIP 3.1/3.2 (welding), API 510/570/653 (pressure vessels/piping/tanks), ASNT Level II/III (NDT), NACE CIP 1/2/3 (coatings). Certificates are verified annually and available for client audit.',
      },
      {
        question: 'Can you provide NDT services on short notice?',
        answer: 'We maintain a pool of 20+ NDT technicians (UT, RT, MT, PT, VT, PAUT, TOFD) across our four offices. For planned work, we mobilize within 48 hours. For emergency call-outs (e.g., pipeline leak, pressure vessel anomaly), we target 24-hour mobilization in Nigeria/Ghana and 48 hours in CI/Senegal.',
      },
    ],
  },
  {
    category: 'Project Management & Controls',
    questions: [
      {
        question: 'What scheduling tools do you support?',
        answer: 'Primavera P6 (EPPM and Professional), Microsoft Project, Asta Powerproject, and Tilos (linear scheduling). We can develop schedules from scratch, perform schedule health checks, run Monte Carlo risk analysis, and provide monthly update cycles with narrative reports.',
      },
      {
        question: 'Do you offer earned value management (EVM)?',
        answer: 'Yes. We implement ANSI/EIA-748 compliant EVM systems: WBS/OBS alignment, control account planning, performance measurement baselines, monthly EV reporting (CV, SV, CPI, SPI, TCPI, EAC), and variance analysis narratives. We integrate with Primavera P6, Unifier, and EcoSys.',
      },
    ],
  },
  {
    category: 'General',
    questions: [
      {
        question: 'What is your typical engagement model?',
        answer: 'We offer flexible models: (1) Time & Materials for advisory/manpower, (2) Fixed-price for defined-scope procurement/inspection packages, (3) Retainer for ongoing vendor surveillance or project controls support, (4) Success-fee for vendor negotiation savings. We structure to your commercial preference.',
      },
      {
        question: 'How do you handle local content requirements?',
        answer: 'We have dedicated local content advisors in each country. We develop Nigerian Content Plans (NCPs) for NCDMB approval, Ghana Local Content Plans for Petroleum Commission, and equivalent for CI/Senegal. We track Nigerian content spend, Nigerian personnel hours, and in-country fabrication tonnage — with auditable reporting.',
      },
      {
        question: 'What insurance and liability coverage do you carry?',
        answer: 'We maintain: Professional Indemnity (₦500M / $300K), General Liability (₦200M), Workers\' Compensation (per local law), Motor Fleet, and Marine Cargo for logistics. Certificates of insurance available on request. We sign mutual indemnity clauses aligned with project risk allocation.',
      },
    ],
  },
];

export const CONTACT_INFO = {
  offices: [
    {
      country: 'Nigeria (HQ)',
      city: 'Lagos',
      address: 'Plot 14, Block 5, Admiralty Way, Lekki Phase 1, Lagos',
      phone: '+234 800 737 0000',
      email: 'lagos@pes-ng.com',
      coordinates: { lat: 6.4281, lng: 3.4219 },
    },
    {
      country: 'Nigeria',
      city: 'Port Harcourt',
      address: 'KM 15, East-West Road, Rumuolumeni, Port Harcourt',
      phone: '+234 800 737 0001',
      email: 'ph@pes-ng.com',
      coordinates: { lat: 4.8156, lng: 7.0498 },
    },
    {
      country: 'Ghana',
      city: 'Accra',
      address: '7th Floor, The Octagon, Independence Avenue, Ridge, Accra',
      phone: '+233 300 737 000',
      email: 'accra@pes-ng.com',
      coordinates: { lat: 5.6037, lng: -0.1870 },
    },
    {
      country: 'Ghana',
      city: 'Takoradi',
      address: 'Plot 42, Harbour Road, Sekondi-Takoradi',
      phone: '+233 300 737 001',
      email: 'takoradi@pes-ng.com',
      coordinates: { lat: 4.8964, lng: -1.7598 },
    },
    {
      country: 'Côte d\'Ivoire',
      city: 'Abidjan',
      address: 'Immeuble SCIAM, 12ème Étage, Boulevard de la République, Plateau, Abidjan',
      phone: '+225 27 73 70 00',
      email: 'abidjan@pes-ng.com',
      coordinates: { lat: 5.3599, lng: -4.0083 },
    },
    {
      country: 'Senegal',
      city: 'Dakar',
      address: 'Immeuble KPMG, 5ème Étage, Place de l\'Indépendance, Dakar Plateau',
      phone: '+221 33 737 00 00',
      email: 'dakar@pes-ng.com',
      coordinates: { lat: 14.7167, lng: -17.4677 },
    },
  ],
};

export const LEGAL = {
  privacyPolicyLastUpdated: '2024-01-15',
  termsLastUpdated: '2024-01-15',
  cookiePolicyLastUpdated: '2024-01-15',
  companyRegistration: 'RC 1234567 (Nigeria), CS12345 (Ghana), CI-ABJ-2023-4567 (CI), SN-DKR-2023-890 (Senegal)',
  dataProtectionOfficer: 'dpo@pes-ng.com',
};