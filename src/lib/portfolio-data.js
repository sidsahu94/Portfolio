import { Layers, Shield, Database, Globe } from 'lucide-react';

export const personalInfo = {
  name: "Sidhanta Manoj Sahu",
  title: "Architecting digital scale.",
  description: "A Full Stack Developer focused on high-performance infrastructure. Specializing in low-latency WebRTC streams, horizontally scalable MERN environments, and secure backend deployments.",
  location: "Thane, Maharashtra",
  availability: "Available for Engineering Roles",
  resumeLink: "/Sidhanta_Sahu_Resume.pdf",
  github: "https://github.com/sidsahu94"
};

export const projects = [
  {
    id: "ultimate-social",
    title: "Ultimate Social",
    subtitle: "Real-Time Communications Infrastructure",
    desc: "Engineered a containerized MERN application utilizing Docker and Redis for horizontal scaling. Implemented low-latency WebRTC media streams with MongoDB ACID transactions for data integrity.",
    tech: ['MongoDB', 'React', 'Redis', 'Docker', 'WebRTC'],
    colSpan: "col-span-1 md:col-span-8",
    icon: Layers,
    github: "https://github.com/sidsahu94"
  },
  {
    id: "decentralized-voting",
    title: "Decentralized Voting",
    subtitle: "Web3 Smart Contracts",
    desc: "Architected a decentralized electoral system ensuring cryptographic transparency by integrating Solidity smart contracts with a robust Node.js/Web3.js backend.",
    tech: ['Solidity', 'Web3.js', 'Node.js'],
    colSpan: "col-span-1 md:col-span-4",
    icon: Shield,
  },
  {
    id: "smart-billing",
    title: "Smart Billing",
    subtitle: "SaaS Dashboard Architecture",
    desc: "Built a production-grade SaaS platform featuring secure JWT authentication, localized SQLite data persistence, and automated invoice generation with offline-first support.",
    tech: ['Node.js', 'Express', 'SQLite', 'JWT'],
    colSpan: "col-span-1 md:col-span-5",
    icon: Database,
  },
  {
    id: "news-explorer",
    title: "NewsExplorer",
    subtitle: "High-Volume Data Aggregation",
    desc: "Designed an optimized client-side application fetching and filtering high-velocity global data via NewsAPI, featuring real-time keyword indexing.",
    tech: ['JavaScript', 'REST API', 'HTML5'],
    colSpan: "col-span-1 md:col-span-7",
    icon: Globe,
  }
];