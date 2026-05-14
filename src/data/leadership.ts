export type LeadershipPost = {
  organization: string;
  name: string;
  description: string;
};

export const leadership: LeadershipPost[] = [
  {
    organization: "Los Altos Hacks",
    name: "Organizer & Sponsorship Lead",
    description:
      "Organized the world's largest high-school hackathon from 2021–2025. Raised $15K+ in sponsorships, gave speeches to 1000+ students, and mentored many new members.",
  },
  {
    organization: "CENG",
    name: "Senior Vice President",
    description:
      "Senior VP of Computer Engineers of the Next Generation (2022–2025). Managed 100+ volunteers teaching 24+ coding classes (Python, Java, JS) to underserved schools.",
  },
  {
    organization: "Teen Tutoring",
    name: "Tutor",
    description:
      "Tutored local students across math, coding, and science fundamentals, building curriculum and running 1-on-1 sessions to help them level up.",
  },
  {
    organization: "T²",
    name: "Work Experience",
    description:
      "Worked at T² gaining hands-on engineering and operations experience, contributing to day-to-day execution alongside a small team.",
  },
  {
    organization: "Presidential Service",
    name: "Presidential Volunteer Service Award",
    description:
      "Earned the Presidential Volunteer Service Award for logging 200+ hours of community service in a single year.",
  },
];
