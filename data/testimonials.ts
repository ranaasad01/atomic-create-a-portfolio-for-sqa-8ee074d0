export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechNova Solutions",
    avatar: "SC",
    quote:
      "Alex transformed our QA process from a bottleneck into a competitive advantage. The automation framework they built reduced our release cycle from 2 weeks to 3 days. Their ability to communicate complex testing strategies to non-technical stakeholders is exceptional.",
    rating: 5,
    relationship: "Direct Manager",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Lead Software Engineer",
    company: "TechNova Solutions",
    avatar: "MJ",
    quote:
      "Working with Alex has made me a better developer. Their shift-left testing approach and early involvement in sprint planning helped us catch architectural issues before they became expensive problems. The test coverage they achieved is something I've never seen before.",
    rating: 5,
    relationship: "Colleague",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Product Manager",
    company: "DataStream Inc.",
    avatar: "PP",
    quote:
      "Alex has a rare combination of deep technical expertise and strong business acumen. They always prioritized testing efforts based on business risk, ensuring we shipped features that actually worked for our customers. Our defect escape rate dropped by 80% under their watch.",
    rating: 5,
    relationship: "Cross-functional Partner",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "Pixel Labs",
    avatar: "DK",
    quote:
      "Alex built our entire QA infrastructure from the ground up. From test strategy to automation frameworks to CI/CD integration — they delivered everything on time and above expectations. I'd hire them again without hesitation.",
    rating: 5,
    relationship: "Executive Sponsor",
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    role: "Senior QA Engineer",
    company: "TechNova Solutions",
    avatar: "ER",
    quote:
      "Alex is the best mentor I've had in my career. They took the time to explain not just the 'how' but the 'why' behind every testing decision. The knowledge I gained from working alongside them has been invaluable to my professional growth.",
    rating: 5,
    relationship: "Mentee",
  },
];
