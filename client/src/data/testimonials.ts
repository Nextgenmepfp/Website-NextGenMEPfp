export type Testimonial = {
  id: number;
  content: string;
  author: string;
  position: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "NEXTGEN MEPfp's team delivered our project on time and under budget. The quality of their work and attention to detail was exceptional. We'll definitely be working with them again!",
    author: "Michael Roberts",
    position: "Project Manager, Premier Development",
    rating: 5
  },
  {
    id: 2,
    content: "Working with NEXTGEN MEPfp has been a game-changer for our building projects. Their expertise in mechanical and electrical systems is unmatched, and their team is responsive and professional.",
    author: "Sarah Johnson",
    position: "Director of Operations, Coastal Properties",
    rating: 5
  },
  {
    id: 3,
    content: "The security and fire protection systems installed by NEXTGEN MEPfp have given us peace of mind. Their team's knowledge and professionalism exceeded our expectations in every way.",
    author: "David Chen",
    position: "Facility Manager, Enterprise Solutions",
    rating: 5
  }
];
