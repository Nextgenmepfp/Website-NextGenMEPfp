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
    title: "MEP Blueprint Design",
    description: "Full-service Mechanical, Electrical, and Plumbing blueprint design with BIM integration for complex commercial and institutional buildings. Our designs ensure optimal energy efficiency, code compliance, and system integration for seamless building operation.",
    imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-pencil-ruler"
  },
  {
    id: 2,
    title: "Low Voltage Systems",
    description: "Comprehensive low voltage design including structured cabling, access control, surveillance systems, and audiovisual integration. Our expertise in TIA/EIA standards ensures future-proof infrastructure for your telecommunications needs.",
    imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-network-wired"
  },
  {
    id: 3,
    title: "Fire Alarm & Protection",
    description: "Advanced fire alarm and suppression system design with detailed riser diagrams, device layouts, and sequence of operations. Our designs adhere to NFPA standards and local fire codes for comprehensive life safety protection.",
    imageUrl: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-fire-extinguisher"
  },
  {
    id: 4,
    title: "Data Center Infrastructure",
    description: "Specialized MEP design for data centers including precision cooling, redundant power distribution, and comprehensive monitoring systems. Our designs prioritize reliability, scalability, and energy efficiency for mission-critical facilities.",
    imageUrl: "https://images.unsplash.com/photo-1597138177671-3a8d31815c19?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-server"
  },
  {
    id: 5,
    title: "Building Automation",
    description: "Intelligent building control systems design for HVAC, lighting, and security integration. Our automation solutions optimize energy usage, enhance occupant comfort, and provide detailed monitoring capabilities for facility management.",
    imageUrl: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-robot"
  },
  {
    id: 6,
    title: "Energy Modeling & Analysis",
    description: "Comprehensive energy modeling and performance analysis to optimize building systems and reduce operational costs. Our team utilizes advanced simulation tools to evaluate design alternatives and recommend efficient solutions.",
    imageUrl: "https://images.unsplash.com/photo-1473308822086-710304d7d30c?auto=format&fit=crop&w=600&h=400&q=80",
    icon: "fa-chart-line"
  }
];
