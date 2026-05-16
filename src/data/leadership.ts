export type LeadershipPost = {
  organization: string;
  name: string;
  description: string;
  longDescription: string[];
  href?: string;
  monogram: string;
};

export const leadershipStats = [
  { value: "1,000+", label: "students taught" },
  { value: "$15K+", label: "raised" },
  { value: "50+", label: "person teams led" },
  { value: "500+", label: "hours volunteered" },
  { value: "Dozens", label: "mentored" },
];

export const leadership: LeadershipPost[] = [
  {
    organization: "Los Altos Hacks",
    name: "Organizer & Sponsorship Lead",
    description:
      "Organized the world's largest high-school hackathon from 2021-2025. Raised $15K+ in sponsorships, gave speeches to 1000+ students, and mentored many new members.",
    longDescription: [
      "Organized the world's largest high-school hackathon from 2021-2025. Raised $15K+ in sponsorships, gave speeches to 1000+ students, and mentored many new members.",
    ],
    href: "https://losaltoshacks.com",
    monogram: "LAH",
  },
  {
    organization: "CENG",
    name: "Senior Vice President",
    description:
      "Managed 100+ volunteers teaching 24+ coding classes in Python, Java, and JavaScript to underserved schools.",
    longDescription: [
      "Managed 100+ volunteers teaching 24+ coding classes in Python, Java, and JavaScript to underserved schools.",
    ],
    href: "https://cengclass.org",
    monogram: "CENG",
  },
  {
    organization: "Teen Tutoring",
    name: "Tutor",
    description:
      "Tutored local students across math, coding, and science fundamentals, building curriculum and running 1-on-1 sessions to help them level up.",
    longDescription: [
      "Tutored local students across math, coding, and science fundamentals, building curriculum and running 1-on-1 sessions to help them level up.",
    ],
    href: "https://teentutorslahs.wixsite.com/lahs",
    monogram: "TT",
  },
  {
    organization: "T² Robotics",
    name: "Work Experience",
    description:
      "Gained hands-on engineering and operations experience, contributing to day-to-day execution alongside a small team.",
    longDescription: [
      "Gained hands-on engineering and operations experience, contributing to day-to-day execution alongside a small team.",
    ],
    monogram: "T²",
  },
  {
    organization: "Presidential Volunteer Service Award",
    name: "Service Award",
    description:
      "Earned the Presidential Volunteer Service Award for logging 200+ hours of community service in a single year.",
    longDescription: [
      "Earned the Presidential Volunteer Service Award for logging 200+ hours of community service in a single year.",
    ],
    monogram: "PVSA",
  },
];
