import { Server, ShieldCheck, Database, Zap, Network, Lock } from 'lucide-react';

export const personalInfo = {
  name: "Sidhanta Manoj Sahu",
  headline: "Engineering scalable web infrastructure.",
  subhead: "Specializing in sub-50ms WebRTC pipelines, distributed MERN architectures, and partition-tolerant backend systems.",
  location: "Thane, Maharashtra",
  resumeLink: "/Sidhanta_Sahu_Resume.pdf",
  github: "https://github.com/sidsahu94",
  linkedin: "https://linkedin.com/in/sidhanta-sahu"
};

export const engineeringFocus = [
  {
    icon: Network,
    title: "Distributed Systems",
    desc: "Designing decoupled microservices utilizing Docker and Redis Pub/Sub for horizontal scalability and high availability."
  },
  {
    icon: Zap,
    title: "Real-Time Infrastructure",
    desc: "Optimizing WebSocket and WebRTC signaling pipelines to sustain high-throughput data and media streaming."
  },
  {
    icon: Lock,
    title: "Secure Data Integrity",
    desc: "Enforcing ACID-compliant MongoDB transactions, stateless JWT protocols, and deterministic smart contracts."
  }
];

export const skills = {
  core: ["System Architecture", "API Design", "Database Modeling", "Performance Optimization"],
  tech: ["Node.js", "React.js", "MongoDB", "Redis", "WebRTC", "Solidity", "Express.js"],
  tools: ["Docker", "Git/GitHub", "Vercel", "Render", "Postman"]
};

export const projects = [
  {
    id: "ultimate-social",
    title: "Ultimate Social",
    summary: "Real-Time Communications Infrastructure",
    problem: "Concurrent socket connections overload single-thread Node.js instances during peak traffic, bottlenecking event loops and degrading media performance.",
    challenges: [
      "Eliminating distributed state divergence across isolated server instances.",
      "Preventing main-thread blocking during heavy WebRTC peer negotiation."
    ],
    decisions: [
      "Containerized the MERN application utilizing Docker for rapid, predictable horizontal scaling.",
      "Integrated Redis as a Pub/Sub message broker to synchronize state across the server cluster.",
      "Secured peer-to-peer handshakes with strict, stateless JWT validation."
    ],
    impact: [
      "Reduced real-time signaling latency below 50ms.",
      "Guaranteed zero-data-loss via MongoDB ACID transactions under heavy load."
    ],
    tech: ['Node.js', 'React', 'Redis', 'Docker', 'WebRTC'],
    liveLink: "https://ultimate-social-app.vercel.app",
    github: "https://github.com/sidsahu94",
    icon: Server
  },
  {
    id: "smart-billing",
    title: "Smart Billing Platform",
    summary: "High-Availability SaaS Dashboard",
    problem: "SaaS dashboards deployed in low-bandwidth areas suffer from transaction loss and fatal application crashes during network dropouts.",
    challenges: [
      "Resolving partitioned state conflicts between the local SQLite cache and the cloud database.",
      "Ensuring seamless background data synchronization without interrupting the user thread."
    ],
    decisions: [
      "Engineered an offline-first architecture utilizing localized SQLite databases for instant data capture.",
      "Developed a background synchronization queue via Service Workers to push payloads upon reconnection.",
      "Decoupled authentication using stateless JWT protocols to eliminate session dependency."
    ],
    impact: [
      "Delivered a 99.9% available, partition-tolerant application.",
      "Eliminated transaction loss entirely during network instability."
    ],
    tech: ['Node.js', 'Express', 'SQLite', 'JWT'],
    liveLink: "https://bill-0178.onrender.com",
    github: "https://github.com/sidsahu94",
    icon: Database
  },
  {
    id: "decentralized-voting",
    title: "Decentralized Ledger Voting",
    summary: "Cryptographic Smart Contracts",
    problem: "Centralized voting databases are highly vulnerable to unauthorized internal mutation and fundamentally lack mathematical transparency.",
    challenges: [
      "Bridging deterministic Web3 nodes with asynchronous Web2 infrastructure.",
      "Ensuring vote anonymity while maintaining public, cryptographic verifiability."
    ],
    decisions: [
      "Deployed zero-trust, immutable Solidity smart contracts to the Ethereum Virtual Machine (EVM).",
      "Bridged the EVM with a robust Node.js backend using the Web3.js library.",
      "Implemented cryptographic vote hashes to ensure mathematical proof-of-work."
    ],
    impact: [
      "Established a mathematically verifiable, tamper-proof electoral ledger.",
      "Removed single-point-of-failure vulnerabilities associated with standard relational databases."
    ],
    tech: ['Solidity', 'Web3.js', 'Node.js', 'EVM'],
    liveLink: "https://blockchain-voting-zmvn.onrender.com",
    github: "https://github.com/sidsahu94",
    icon: ShieldCheck
  },
  {
    id: "news-explorer",
    title: "NewsExplorer Engine",
    summary: "High-Velocity Data Aggregation",
    problem: "Rendering continuous, large-scale JSON payloads from global REST APIs causes severe DOM thrashing and memory leaks on client devices.",
    challenges: [
      "Preventing main-thread blocking during continuous DOM hydration.",
      "Managing heap memory consumption during infinite scrolling."
    ],
    decisions: [
      "Developed a heavily optimized client-side rendering engine utilizing React.",
      "Implemented strict debouncing on keyword search and applied virtualized lists to limit rendered DOM nodes.",
      "Decoupled data fetching from the main rendering thread using background Web Workers."
    ],
    impact: [
      "Maintained consistent 60fps rendering under high-volume DOM updates.",
      "Achieved instantaneous O(1) keyword filtering on client-side cached payloads."
    ],
    tech: ['JavaScript', 'REST API', 'HTML5', 'CSS3'],
    liveLink: "https://newsexplorer-b8cx.onrender.com",
    github: "https://github.com/sidsahu94",
    icon: Zap
  }
];