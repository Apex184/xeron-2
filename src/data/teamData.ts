export type TeamMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & CEO",
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "CTO",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Head of Product",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Lead Designer",
    imageUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "David Patel",
    role: "AI Engineer",
    imageUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 6,
    name: "Lisa Johnson",
    role: "Marketing Director",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const advisors: TeamMember[] = [
  {
    id: 1,
    name: "Dr. James Williams",
    role: "AI Research Advisor",
    imageUrl: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    socialLinks: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Katherine Lee",
    role: "Industry Expert",
    imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const productImages = [
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
  "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
];