export type Content = {
  _id: string;
  title: string;
  description: string;
  links?: {
    text?: string;
    url?: string;
  }[];
};

export const contents_services_details: Content[] = [
  {
    _id: "3067a796",
    title: "Pushing the Industry Forward",
    description:
      "At Konstruktion, we are passionate about driving value into every project we undertake. We continue to challenge our people, projects and the industry. By being forward-thinking, we are continually finding new ways to deliver success for our clients and stakeholders.",
  },
  {
    _id: "2b72eb99",
    title: "Quality Assurance",
    description:
      "Konstruktion’s culture of quality is built into everything we do and begins with personal accountability from our employee-owners. Successful quality projects demonstrate our culture that embraces clear communication, strong problem-solving, and a relentless focus on creating strong relationships. We work with you from project start-up through completion to ensure your expectations are delivered and the final project meets all your needs.",
  },
  {
    _id: "2230f56b",
    title: "Tracking Project Trends",
    description:
      "From smart sensors to comprehensive integrated project analytics, we track and trend progress, quality, safety and more. This data allows us to understand the immediate and potential impacts of items and provides a simple means of examining complex data, provide you with options, and resolve challenges before they become issues.",
    links: [
      {
        text: "Contact us",
        url: "/contact",
      },
    ],
  },
];

export const construction_visions: Content[] = [
  {
    _id: "ff66b81",
    title: "We have a vision for the future of construction",
    description:
      "We are always looking ahead while we apply vast experience and broad expertise to overcome your unique challenges, exceed your expectations and drive measurable value to your bottom line.",
  },
  {
    _id: "b10815a",
    title: "Innovative",
    description:
      "We anticipate challenges and proactively develop new capabilities to address the evolving needs of our clients. Our relentless focus on innovation leads to smarter building practices and technology that reduces complexity throughout our projects.",
  },
  {
    _id: "0d164fc",
    title: "Flexible",
    description:
      "Our breadth of expertise across services and markets helps us develop unique solutions for each project's complex challenges. We bring together the right team to find the best way forward, connecting knowledge and experience to help you reimagine what's possible.",
  },
];
