export const CLOUDINARY_BASE = 'https://res.cloudinary.com/dw5n0wlmr';
export const LOGO_URL = 'https://github.com/level-one-ai/Level-One.Website-/blob/main/images/Whisk_krwz0utmjzjyjbtotqwywgtlxedo00smhjdmtqm%20(1).png?raw=true';
export const HERO_VIDEO_URL = `${CLOUDINARY_BASE}/video/upload/f_auto,q_auto/v1770454069/Mobius_Ring_qoul2x.mp4`;
export const CANVAS_FRAME_URL = (index: number) =>
  `${CLOUDINARY_BASE}/image/upload/f_auto,q_auto/v1770458357/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;
export const FRAME_COUNT = 120;

export const hexSystems = [
  {
    key: 'sales',
    title: 'Revenue Engines',
    labels: ['Revenue Growth', 'Conversion', 'Acquisition'],
    desc: 'Infrastructure that generates qualified pipeline and drives conversion. Every prospect is identified, qualified, and engaged—increasing revenue without expanding headcount.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459449/Whisk_9083c2dff85528ca4114eca372fa5906dr.jpg`,
  },
  {
    key: 'support',
    title: 'Resolution Systems',
    labels: ['Cost Reduction', 'Efficiency', 'Automation'],
    desc: 'Smart support infrastructure that resolves routine inquiries automatically. Response times drop from hours to seconds while satisfaction scores improve.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459448/Whisk_d397bbc3aa1701280a94eea24f609ac5dr.jpg`,
  },
  {
    key: 'consulting',
    title: 'Systems Architecture',
    labels: ['Profit Identification', 'ROI Mapping', 'Strategy'],
    desc: 'Blueprint of how your software and tools work together. We identify where clunky manual tasks eat your money and map accurate ROI for automation.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459442/Whisk_26e82c97b8738ed83da4cdbe4acb856ddr.jpg`,
  },
  {
    key: 'workflow',
    title: 'Operational Autonomy',
    labels: ['Scale', 'Cost Elimination', 'Workflow'],
    desc: 'Software that runs your daily tasks in the background without human help. The end of one task automatically starts the next for massive scale.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459438/Whisk_054b050aea37afcbb5c4beaa69bd3260dr.jpg`,
  },
];

export const processPhases = [
  {
    num: 'Phase 1',
    title: 'Systems Audit',
    desc: 'We map your current workflow and quantify where inefficiency costs you revenue or margin. Every recommendation targets measurable commercial impact.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459429/Whisk_2d3cf369b4c88a8a8f941b53648eb51deg.png`,
  },
  {
    num: 'Phase 2',
    title: 'Infrastructure Deployment',
    desc: 'We install revenue infrastructure designed to increase acquisition, reduce costs, and eliminate manual overhead. Every system is tested before handover.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459428/Whisk_5349c90e685b97fae1c4144eb7f7fb57eg.png`,
  },
  {
    num: 'Phase 3',
    title: 'Performance Monitoring',
    desc: 'We track system performance against revenue, cost, and efficiency metrics. Your infrastructure adapts to maintain competitive advantage as you scale.',
    img: `${CLOUDINARY_BASE}/image/upload/v1770459420/Whisk_7741b67544eeaef8cd14c8fb31b59fcdeg.png`,
  },
];

export const services = [
  {
    num: '01',
    title: 'Lead Generation',
    pills: ['Pipeline Automation', 'Prospect Qualification', 'Outreach Systems'],
    img: `${CLOUDINARY_BASE}/image/upload/v1770459418/Whisk_99745a4700b012798fb40774e808e27beg.png`,
  },
  {
    num: '02',
    title: 'Project Management',
    pills: ['Task Automation', 'Resource Allocation', 'Status Tracking'],
    img: `${CLOUDINARY_BASE}/image/upload/v1770459413/Whisk_aaf194a8b8db6f2a143446669843f3badr.jpg`,
  },
  {
    num: '03',
    title: 'Hiring Systems',
    pills: ['Candidate Sourcing', 'Interview Scheduling', 'Applicant Tracking'],
    img: `${CLOUDINARY_BASE}/image/upload/v1770459406/Whisk_d1963aa83204981ae444ac5c0925a947eg.png`,
  },
  {
    num: '04',
    title: 'Sales Administration',
    pills: ['CRM Automation', 'Follow-up Systems', 'Data Entry'],
    img: `${CLOUDINARY_BASE}/image/upload/v1770459405/Whisk_55a208eb59d9974be53410b59e7f56ceeg.png`,
  },
];

export const pricingTiers = [
  {
    title: 'The Prototype',
    subtitle: 'For high-growth businesses testing revenue infrastructure in a single department.',
    price: '£1,500',
    period: 'Fixed Build (One-time)',
    monthly: '+ £299 /mo Operations',
    commitment: '3-Month Minimum Agreement',
    features: [
      '3 Targeted Growth Systems',
      'Standardized Logic Deployment',
      'Systems Engineer Oversight',
      '24/7 Performance Monitoring',
      'Email Support (48hr SLA)',
      'Memory Systems (Vector Database)',
      'Monthly Performance Optimization',
    ],
    btnText: 'Deploy Prototype',
    featured: false,
  },
  {
    title: 'The Pilot',
    subtitle: 'For ambitious businesses deploying full departmental revenue infrastructure.',
    price: '£3,500',
    period: 'Fixed Build',
    monthly: '+ £599 /mo Operations',
    commitment: '3-Month Minimum Agreement',
    features: [
      'Complete Revenue Infrastructure',
      'Custom Growth Logic Deployment',
      'Memory Systems (Vector Database)',
      'Direct Support Channel (Slack)',
      'Monthly Performance Optimization',
      'Dedicated Growth Systems Engineer',
      '14-Day Deployment Sprint',
    ],
    btnText: 'Deploy Pilot',
    featured: true,
  },
  {
    title: 'The Architecture',
    subtitle: 'For businesses requiring enterprise-grade growth infrastructure and dedicated engineering.',
    price: 'Custom Scope',
    period: 'Quoted based on complexity',
    monthly: 'From £1,250 /mo Operations',
    commitment: '3-Month Minimum Agreement',
    features: [
      'Unlimited System Requests',
      'Full-Stack Infrastructure (Private Cloud)',
      'Priority Support Channel (Slack)',
      'Dedicated Growth Systems Engineer',
      'Cross-Departmental Orchestration',
      'Weekly Strategy & ROI Roadmapping',
      'Custom Security Protocols',
    ],
    btnText: 'Schedule Architecture Call',
    featured: false,
    gradient: true,
  },
];

export const comparisonRows = [
  { feature: 'Growth Systems', proto: '3 Targeted', pilot: 'Complete Department', arch: 'Unlimited' },
  { feature: 'Logic Deployment', proto: 'Standardized', pilot: 'Custom', arch: 'Fully Bespoke' },
  { feature: 'Memory Systems (Vector DB)', proto: '✓', pilot: '✓', arch: '✓' },
  { feature: 'Support Channel', proto: 'Email (48hr SLA)', pilot: 'Direct Slack', arch: 'Priority Slack' },
  { feature: 'Performance Monitoring', proto: '✓', pilot: '✓', arch: '✓' },
  { feature: 'Monthly Optimization', proto: '✓', pilot: '✓', arch: '✓' },
  { feature: 'Dedicated Engineer', proto: '—', pilot: '✓', arch: '✓' },
  { feature: 'Cross-Departmental Orchestration', proto: '—', pilot: '—', arch: '✓' },
  { feature: 'Weekly Strategy Sessions', proto: '—', pilot: '—', arch: '✓' },
  { feature: 'Custom Security Protocols', proto: '—', pilot: '—', arch: '✓' },
  { feature: 'Private Cloud Infrastructure', proto: '—', pilot: '—', arch: '✓' },
  { feature: 'Deployment Sprint', proto: 'Standard Timeline', pilot: '14-Day Sprint', arch: 'Custom Schedule' },
];

export const faqItems = [
  {
    q: 'How long does the whole process take from start to finish?',
    a: 'Most projects are fully deployed within 2–4 weeks depending on scope. We start with an audit, build and test in stages, and hand over a working system with zero disruption to your day-to-day operations.',
  },
  {
    q: 'Do we need any technical knowledge on our end?',
    a: "Not at all. Everything we build is designed to run in the background without your team needing to manage it. We handle the technical side entirely—setup, maintenance, monitoring, and updates are all included.",
  },
  {
    q: 'Will this work with the tools and software we already use?',
    a: "Yes. We build on top of your existing stack—CRMs, email platforms, project management tools, accounting software, and more. Our audit identifies the best way to connect your current systems rather than replacing them.",
  },
  {
    q: 'What kind of results can we expect?',
    a: 'Results vary by business, but clients typically see a 30–50% reduction in admin costs, a measurable increase in lead conversion, and clear ROI within the first few months. We map expected returns during the initial audit before any build begins.',
  },
  {
    q: 'What happens after the systems are built?',
    a: "We don't just build and walk away. Every project includes ongoing monitoring and optimisation as part of your Operations agreement. If something underperforms, we identify and fix it—keeping your systems running at peak performance.",
  },
  {
    q: 'Is there a minimum commitment?',
    a: 'All tiers include a 3-month minimum operations agreement. This gives enough time for deployment, stabilisation, and initial performance measurement. After that, it continues month-to-month with no long-term lock-in.',
  },
];

export const reviews = [
  {
    text: "Level One completely transformed how we handle inbound leads. We went from losing 40% of enquiries to capturing and qualifying every single one automatically. Revenue is up 28% in three months.",
    name: 'Callum Henderson',
    role: 'Director, Henderson & Co Solicitors — Edinburgh',
  },
  {
    text: "We were drowning in admin—invoices, project updates, client follow-ups. Level One automated the lot. My team now spends their time on actual project work instead of data entry. Best investment we've made.",
    name: 'Fiona MacLeod',
    role: 'Managing Director, Forth Valley Construction — Stirling',
  },
  {
    text: "The support automation alone saved us two full-time salaries. Customer satisfaction actually went up because response times dropped from hours to seconds. The ROI was obvious within weeks.",
    name: 'Gregor Wallace',
    role: 'Operations Manager, Highland Digital Solutions — Inverness',
  },
  {
    text: "I was sceptical about AI for a traditional business like ours, but Level One made it completely painless. The systems just work in the background. Our booking rate has doubled and we haven't hired anyone new.",
    name: 'Eilidh Robertson',
    role: 'Owner, The Morningside Practice — Edinburgh',
  },
  {
    text: "Level One mapped out exactly where we were losing money before building anything. That audit alone was worth the investment. Six months in and our operational costs are down 35%.",
    name: 'Alistair Drummond',
    role: 'CEO, Drummond Property Group — Glasgow',
  },
];

export interface MenuSubsection {
  name: string;
  href: string;
}

export interface MenuLink {
  name: string;
  href: string;
  subsections?: MenuSubsection[];
}

export const menuLinks: MenuLink[] = [
  {
    name: 'Systems',
    href: '#features',
    subsections: [
      { name: 'Revenue Engines', href: '#features' },
      { name: 'Resolution Systems', href: '#features' },
      { name: 'Systems Architecture', href: '#features' },
      { name: 'Operational Autonomy', href: '#features' },
    ],
  },
  {
    name: 'Architecture',
    href: '#process',
    subsections: [
      { name: 'Systems Audit', href: '#process' },
      { name: 'Infrastructure Deployment', href: '#process' },
      { name: 'Performance Monitoring', href: '#process' },
    ],
  },
  { name: 'Entity', href: '#about' },
  {
    name: 'Solutions',
    href: '#services',
    subsections: [
      { name: 'Lead Generation', href: '#services' },
      { name: 'Project Management', href: '#services' },
      { name: 'Hiring Systems', href: '#services' },
      { name: 'Sales Administration', href: '#services' },
    ],
  },
  { name: 'Pricing', href: '#pricing' },
];
