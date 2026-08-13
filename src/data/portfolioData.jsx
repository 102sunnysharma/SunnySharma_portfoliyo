import {
  FaCode,
  FaLayerGroup,
  FaTools,
  FaBrain,
  FaProjectDiagram,
  FaCodeBranch,
  FaTrophy,
  FaGraduationCap,
  FaCertificate,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const heroInfo = {
  greeting: "Hello, I'm",
  title: "Sunny Sharma",

  subtitle: "MCA Student | Software Engineer | AI & Backend",
  description:
    "Building intelligent software that solves real problems.I turn ideas into scalable web applications using Python, FastAPI, React, SQL & AI — backed by strong DSA and computer science fundamentals.",
  primaryButton: "View Projects",
  secondaryButton: "Download Resume",
  resumeUrl:
    "https://drive.google.com/file/d/1FgFkEj6PypoVUvkErm2fWPdDTLHoBY1C/view?usp=sharing",
  social: {
    github: "https://github.com/102sunnysharma",
    linkedin: "https://www.linkedin.com/in/102sunnysharma",
    email: "102sunnysharma@gmail.com",
  },
  profileImage: "/forlinkedin.jpg",
};

export const aboutInfo = {
  paragraphs: [
    "Software Developer and MCA student with a strong foundation in Data Structures & Algorithms, Python, full-stack development, backend engineering, and database systems. I build scalable, production-ready applications using React, FastAPI, PostgreSQL, and modern development tools, with a focus on clean architecture and efficient problem solving. Consistently sharpening my engineering skills through real-world projects, competitive problem solving, and continuous exploration of emerging technologies."
  ],
};

export const highlights = [
  {
    icon: "cleanCode",
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
  },
  {
    icon: "problemSolving",
    title: "Problem Solving",
    description: "Analytical thinking and creative solutions",
  },
  {
    icon: "teamPlayer",
    title: "Team Player",
    description: "Collaborative and communication-focused",
  },
];

export const statCards = [
  { Icon: FaProjectDiagram, value: "11+", label: "Projects Completed" },
  { Icon: FaCodeBranch, value: "22+", label: "Technologies" },
  { Icon: FaTrophy, value: "4+", label: "Certifications" },
];

export const skillsCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: ["Python", "JavaScript", "SQL", "Java", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup />,
    skills: [
      "React.js",
      "FastAPI",
      "Node.js",
      "Tailwind CSS ",
      "SQLAlchemy",
      "Pydantic ",
      "Pytest",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Vite",
      "VS Code",
      "Postman",
    ],
  },
  {
    title: "Soft Skills",
    icon: <FaBrain />,
    skills: [
      "Data Structures & Algorithms",
      "Problem Solving",
      "Object-Oriented Programming",
      "Database Management",
      "Team Collaboration",
      "Communication",
      "Entrepreneurship",
      "Lyric Writing",
    ],
  },
];

export const projects = [
  {
    title: "Amazon clone",
    description:
      "This project is a simple Amazon homepage clone built with pure HTML, CSS and JavaScript. It demonstrates my skills in web layout design, responsive styling, and recreating real-world UI components.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/amazon.webp",
    link: "https://github.com/102sunnysharma",
  },
  {
    title: "Music player",
    description:
      "This music player showcases interactive audio controls created with pure HTML, CSS, and JavaScript. It offers a clean interface, seamless playback, and a user-friendly listening experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/music-photo.jpg",
    link: "https://github.com/102sunnysharma",
  },
  {
    title: "Myntra clone",
    description:
      "A responsive Myntra clone created using HTML, CSS, and JavaScript that replicates the look and feel of the original website. It features a clean layout, product cards, and smooth UI interactions for a real-shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/myntra-clone-photo.png",
    link: "https://github.com/102sunnysharma",
  },
];

export const educationTimeline = [
  {
    date: "2025 - 2027",
    title: "Master of Computer Applications (MCA)",
    institution: "KR Manglam University",
    tags: [
      "Data Structures & Algorithms",
      "Full-Stack Development",
      "Software Engineering",
      "Database Management",
      "Entrepreneurship",
      "Data Analytics",
      "Problem Solving",
      "System Design",
    ],
    icon: <FaGraduationCap />,
  },
  {
    date: "2022 - 2025",
    title: "Bachelor of Arts (BA)",
    institution: "Pandit dindwal updaya sekhawati University",
    tags: [
      "Political Science",
      "Indian Geography",
      "English Literature",
      "Communication",
      "Entrepreneurship",
      "Business Development",
      "Creative & Lyric Writing",
      "Python",
      "Data Analytics",
      "Power BI",
    ],
    icon: <FaGraduationCap />,
  },
  {
    date: "Certifications",
    title: "Professional Certifications",
    points: [
      "Data analytics - Simplilearn",
      "Machine Learning Specialization - Stanford Online",
      "Python for Data Science - DataCamp",
    ],
    icon: <FaCertificate />,
  },
];

export const contactCards = [
  {
    title: "Email",
    value: "102sunnysharma@gmail.com",
    link: "mailto:102sunnysharma@gmail.com",
    icon: <FaEnvelope />,
  },
  { title: "Location", value: "Gurugram, India", icon: <FaMapMarkerAlt /> },
  {
    title: "Phone",
    value: "+91 9256009759",
    link: "tel:+919256009759",
    icon: <FaPhone />,
  },
];

export const contactSocialLinks = [
  {
    label: "GitHub",
    link: "https://github.com/102sunnysharma",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/102sunnysharma",
    icon: <FaLinkedin />,
  },
  {
    label: "LeetCode",
    link: "https://leetcode.com/u/102sunnysharma/",
    icon: <FaCode />,
  },
];

export const footerLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
