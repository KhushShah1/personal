export type LeadershipPost = {
  organization: string;
  name: string;
  date: string;
  description: string;
  longDescription: string[];
  href?: string;
};

export const leadershipStats = [
  { value: "1,000+", label: "students taught" },
  { value: "$15K+", label: "raised" },
  { value: "50+", label: "person teams led" },
  { value: "500+", label: "hours volunteered" },
];

export const leadership: LeadershipPost[] = [
  {
    organization: "Los Altos Hacks",
    name: "Organizer & Sponsorship Lead",
    date: "Sep 2021 - May 2025",
    description:
      "Organized the world's largest high-school hackathon from 2021-2025. Raised $15K+ in sponsorships, gave speeches to 1000+ students, and mentored many new members.",
    longDescription: [
      "I was one of the main organizers of Los Altos Hacks, which at the time was the world's largest high-school hackathon. Beyond general organization, I led and arranged sponsorships for the hackathon, personally raising over $15,000 by closely working with professionals across dozens of companies.",
      "I was also responsible for the opening and closing ceremonies over the four years I was an organizer, giving speeches to 1,000+ attendees. Outside of the event itself, I spent countless hours personally mentoring new members of the organizing team.",
    ],
    href: "https://losaltoshacks.com",
  },
  {
    organization: "CENG",
    name: "Senior Vice President",
    date: "Nov 2022 - Jun 2025",
    description:
      "Spent three years growing a non-profit that's delivered $1M+ in free CS classes to underserved youth, leading 100+ volunteers and teaching 24+ classes along the way.",
    longDescription: [
      "I wore many hats during my 3 years at CENG, a non-profit I spent hundreds of hours growing that inspires underrepresented minorities to pursue Computer Science. At CENG, I led Marketing, Finance, and Outreach - managing multiple teams of up to 50+ volunteers.",
      "I led teams to raise thousands of dollars of funding, run social media outreach and marketing, and ensure hackathons and classes ran smoothly. I oversaw the growth of the organization nearly triple, and led CENG to cross the million dollar impact mark through providing over $1 million worth of coding classes, programs, and events for free to underprivileged communities.",
      "Beyond the managerial work, I also personally trained over a dozen teachers to teach our classes, and taught 24+ classes in languages all the way from Scratch to JavaScript and Python basics to advanced CS concepts in Java.",
    ],
    href: "https://cengclass.org",
  },
  {
    organization: "Teen Tutoring",
    name: "Board Member & Tutor",
    date: "Nov 2022 - Jun 2024",
    description:
      "Served on the board while tutoring local students in math, coding, and science, helping coordinate support and run 1-on-1 sessions.",
    longDescription: [
      "As a Board Member of Teen Tutors, I coordinated meetings, scheduling, and volunteer operations, and mentored new members by teaching them strategies to genuinely connect with students and help them learn more effectively.",
      "As a tutor, I focused on two areas: tutoring middle schoolers in math and science - pushing them to engage with the material in new ways and find a passion for the subjects - and helping Pre-K kids learn to read by leading weekend tutoring sessions at the public library.",
    ],
    href: "https://teentutorslahs.wixsite.com/lahs",
  },
  {
    organization: "T² Robotics",
    name: "Head Coach",
    date: "Jun 2019 - Mar 2023",
    description:
      "Worked as Head Coach for robotics classes, teaching 100+ students across over a dozen sessions of city-run summer programs and year-round classes.",
    longDescription: [
      "As Head Coach for LEGO Mindstorms EV3 robotics classes, I led city-run summer programs and taught year-round classes for over a hundred elementary and middle school students.",
      "I guided students through robotics fundamentals, team practices, and hands-on engineering projects, helping them build both technical skills and the ability and confidence to tackle problems as a team.",
    ],
  },
  {
    organization: "Presidential Volunteer Service Award",
    name: "Service Award",
    date: "2024",
    description:
      "Earned the Presidential Volunteer Service Award for logging 200+ hours of community service in a single year.",
    longDescription: [
      "Through all my volunteer work across various organizations, I was awarded the nationally recognized Presidential Volunteer Service Award by the U.S. Government in 2024, once I became an adult.",
    ],
  },
];
