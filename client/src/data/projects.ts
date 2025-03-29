export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: 'commercial' | 'industrial' | 'institutional' | 'data-center';
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Hyatt Palace Development",
    description: "Complete MEP systems for luxury hotel",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "commercial"
  },
  {
    id: 2,
    title: "Coastal Corporate Tower",
    description: "State-of-the-art security and fire systems",
    imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "commercial"
  },
  {
    id: 3,
    title: "Enterprise Data Center",
    description: "Full MEP design and installation",
    imageUrl: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?auto=format&fit=crop&w=1000&h=600&q=80",
    category: "data-center"
  },
  {
    id: 4,
    title: "Palm Beach Office Tower",
    description: "Complete MEP and Fire Protection",
    imageUrl: "https://images.unsplash.com/photo-1498409785966-ab341407de6e?auto=format&fit=crop&w=600&h=400&q=80",
    category: "commercial"
  },
  {
    id: 5,
    title: "Manufacturing Plant",
    description: "Electrical and HVAC Systems",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&h=400&q=80",
    category: "industrial"
  },
  {
    id: 6,
    title: "Miami Data Center",
    description: "Cooling and Power Systems",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&h=400&q=80",
    category: "data-center"
  },
  {
    id: 7,
    title: "University Campus",
    description: "Fire Protection and Security",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&h=400&q=80",
    category: "institutional"
  },
  {
    id: 8,
    title: "Luxury Hotel",
    description: "Complete MEP Systems",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400&q=80",
    category: "commercial"
  },
  {
    id: 9,
    title: "Network Operations Center",
    description: "Low Voltage and Cooling",
    imageUrl: "https://images.unsplash.com/photo-1539193143244-c83d9436d633?auto=format&fit=crop&w=600&h=400&q=80",
    category: "data-center"
  }
];
