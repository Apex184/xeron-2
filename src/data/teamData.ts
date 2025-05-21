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
    name: "Adam Ledoor",
    role: "Co-founder/CEO/ Team Lead",
    imageUrl: "/adam2.jpg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Akindele Simeon",
    role: "Co-founder, ( COO)",
    imageUrl: "/akindele.jpg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 3,
    name: "Vimal Tarsariya",
    role: "Data Analyst, GTM Strategist",
    imageUrl: "/vimal.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 4,
    name: "Shehu Rasheed",
    role: "Data Analyst, GTM Strategist",
    imageUrl: "/rasheed.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 5,
    name: "David Peller",
    role: "Software Lead Developer",
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
    name: "Dr Williams, ( Ron Sheridan )",
    role: "Startup Adviser, Business Integration Strategy",
    imageUrl: "/ron.jpg",
    socialLinks: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: 2,
    name: "Douglas Hassel",
    role: "Sustainability Lead Project Adviser",
    imageUrl: "/ron2.jpeg",
    socialLinks: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export const productImages = [
  "/waitlist2.png",
  "/home.png",
  "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
];