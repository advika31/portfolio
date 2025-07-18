import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "From brainstorming to deployment — I enjoy the whole ride.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "From campus collabs to global hackathons — I’m in.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Playground",
    description: "My dev",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building cool tech, blending AI with web magic to create something truly unique.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "RetentionX: AI-powered learning tool",
    des: "Uses Spaced Repetition & the Forgetting Curve to optimize revision schedules, ensuring efficient learning.",
    img: "/p1.webp",
    iconLists: [
      "/re.svg",
      "/bootstrap.svg",
      "/fastapi.png",
      "/mongodb.svg",
      "/ethereum.svg",
    ],
    link: "https://retentionx-two.vercel.app/",
  },
  {
    id: 2,
    title: "DocVia: Doctors Appointment Platform",
    des: "A platform that connects patients with doctors, allowing users to book appointments, manage their health records, and communicate with healthcare professionals.",
    img: "/p5.png",
    iconLists: [
      "/nextjs.png",
      "/vonage.png",
      "/tailwind.svg",
      "/prisma.svg",
      "/shadcn.pn~g",
    ],
    link: "https://docvia.vercel.app/",
  },
  {
    id: 3,
    title: "Amazon Prime Video Clone",
    des: "This project emulates the Amazon Prime Video interface, showcasing both UI design and basic authentication.",
    img: "/p2.webp",
    iconLists: ["/re.svg", "/firebase.svg", "/javascript.svg"],
    link: "https://prime-tawny.vercel.app/",
  },
  {
    id: 4,
    title: "AI Mentor-Mentee matching",
    des: "It uses a similarity-based matching algorithm to connect club members with suitable mentors based on their project requirements, interests, and expertise.",
    img: "/p3.webp",
    iconLists: ["/python.svg", "/streamlit.svg", "/sqlite.svg"],
    link: "https://mentor-mentee-matching.streamlit.app/",
  },
];

export const aboutme = [
  {
    quote:
      "B.Tech in Electronics and Communication Engineering (AI specialization) from IGDTUW with a strong academic foundation and a CGPA of 8.85.",
    name: "Indira Gandhi Delhi Technical University for Women",
    title: "2023 - 2027",
  },
  {
    quote:
      "Co-authored a research paper proposing a hybrid CNN-RNN deep learning model for anomaly detection in IoT networks, enhancing cybersecurity adaptability.",
    name: "Research Publication",
    title: "AI & Cybersecurity | Jun 2024 - Present",
  },
  {
    quote:
      "Secured 2nd place out of 2000+ registrations in the 'Hack & Solve' Hackathon at Devcation, organized by GDG on campus IGDTUW.",
    name: "Hack & Solve",
    title: "Apr 2025",
  },

  {
    quote:
      "Earned the 'Prompt Design in Vertex AI' badge from Google Cloud, demonstrating my proficiency in crafting optimized AI prompts and fine-tuning models within Vertex AI.",
    name: "Google Cloud Skills Boost",
    title: "Prompt Design in Vertex AI Badge",
  },
  {
    quote:
      "Qualified Stage 1 of AlgoUniversity Tech Fellowship (ATF) 2024, placing in the top 3% out of 50,000+ applicants.",
    name: "ATF 2024",
    title: "Top Performer | Sep 2024",
  },
  {
    quote:
      "Active member of IEEE IGDTUW & MSC IGDTUW, contributing to various technical and community initiatives, enhancing my leadership and teamwork skills.",
    name: "Tech Communities",
    title: "IEEE | MSC | 2023 - Present",
  },
];


export const workExperience = [
  {
    id: 1,
    title:
      "Machine Learning Researcher - Defence Research and Development Organization",
    desc: "Worked under DRDO at SAG Lab in the field of Quantum computing, applying algorithms for optimisation processes for the laboratory purposes.",
    className: "md:col-span-2",
    thumbnail: "/exp1.webp",
  },
  {
    id: 2,
    title: "Web development Mentor - LeanIn IGDTUW",
    desc: "Mentored 70+ students in web development, delivering 15+ interactive sessions on foundational & advanced frontend & backend tech. Provided individual guidance on 10+ projects, increasing project success rates by 50%",
    className: "md:col-span-2",
    thumbnail: "/exp2.webp",
  },
  {
    id: 3,
    title: "Python and Machine Learning Intern - COE-AI IGDTUW",
    desc: "Designed and evaluated machine learning models for network anomaly detection in IoT devices, optimizing accuracy with feature selection and multi-metric analysis.",
    className: "md:col-span-2",
    thumbnail: "/exp3.webp",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/advika31",
  },
  {
    id: 2,
    img: "/x.png",
    link: "https://x.com/adviiikaaa",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/advika-singhal-ab97a7285/",
  },
];
