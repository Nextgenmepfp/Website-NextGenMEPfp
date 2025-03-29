export type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Mechanical Systems",
    description: "Complete HVAC design, installation, and maintenance services for optimal building performance.",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89f12e?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-fan"
  },
  {
    id: 2,
    title: "Electrical Systems",
    description: "Comprehensive electrical solutions from power distribution to lighting controls and emergency systems.",
    imageUrl: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-bolt"
  },
  {
    id: 3,
    title: "Fire Protection",
    description: "State-of-the-art fire detection, alarm, and suppression systems for complete building safety.",
    imageUrl: "https://images.unsplash.com/photo-1569841294485-491e8a96928b?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-fire-extinguisher"
  },
  {
    id: 4,
    title: "Plumbing Systems",
    description: "Expert design and installation of plumbing systems, including water supply, drainage, and fixtures.",
    imageUrl: "https://images.unsplash.com/photo-1563204996-8965751d75d4?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-faucet"
  },
  {
    id: 5,
    title: "Security Systems",
    description: "Comprehensive security solutions including access control, surveillance, and intrusion detection.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-shield-alt"
  },
  {
    id: 6,
    title: "Low Voltage Systems",
    description: "Data, voice, A/V, and structured cabling solutions for modern building communication needs.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-network-wired"
  }
];
