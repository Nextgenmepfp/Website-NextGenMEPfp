export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "Licensed & Certified",
    description: "Our team holds all required industry certifications and licenses to handle your project with excellence.",
    icon: "fa-certificate"
  },
  {
    id: 2,
    title: "Experienced Team",
    description: "With decades of combined experience, our professionals deliver superior results on every project.",
    icon: "fa-users"
  },
  {
    id: 3,
    title: "On-Time Delivery",
    description: "We understand the importance of schedules and consistently deliver projects on time and within budget.",
    icon: "fa-clock"
  }
];
