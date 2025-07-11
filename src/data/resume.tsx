import { Icons } from "@/components/icons";
import Image from 'next/image';
import { HomeIcon, FolderIcon, Contact2Icon, BinaryIcon, ActivityIcon, FolderHeartIcon, AwardIcon, SendHorizontalIcon } from "lucide-react";

export const DATA = {
  name: "BuoySophit",
  initials: "BP",
  url: "https://portfolio.buoysophit.pro",
  location: "Cambodia, Phnom Penh",
  locationLink: "https://www.google.com/maps/place/cambodia+phnom+penh",
  description:
    "Computer Science Student. Passionate about technology software development problem-solving Experienced in building web, mobile, and desktop solutions.",
  summary:
    "Buoy Sophit, a Bachelor of Computer Science student at Royal University of Phnom Penh. Passionate about IT, software development, and networking. Experienced in school projects and practical related work",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "flutter",
    "Postgres",
    "C++",
    "C#",
    "AWS",
    "TailwindCSS",
    "IT Support",
    "Archlinux",
    "Kali-linux",
    "Linux Ricing",
    "Linux Customization",
    "Ubuntu",
  ],
  skillsWithIcons: [
    {
      skills: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
        { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },     
        { name: "Arch Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg" },
        { name: "Kali Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Kali_Linux_2.0_wordmark.svg" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Vim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg" },
        { name: "Neovim", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg" },
      ]
    }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: BinaryIcon, label: "Projects" },
    { href: "/certificate", icon: AwardIcon, label: "Certificates" },
    { href: "#contact", icon: SendHorizontalIcon, label: "Contact" },


  ],
  contact: {
    email: "Bouysophit11@gmail.com",
    tel1: "+855 764290073",
    tel2: "+855 886224813", // Optional second phone number
    address: "Phnom Penh, Cambodia",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/buoysophit",
        icon: Icons.github,

        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/buoy-sophit-06111a2b4/",
        icon: Icons.linkedin,
        navbar: true,
      },

      Telegram:{
        name: "Telegram",
        url: "https://t.me/buoysophitt",
        icon: Icons.telegram,
        navbar: true,
      }
    },
  },
education: [
    {
      school: "Royal University of Phnom Penh",
      href: "https://rupp.edu.kh",
      degree: "Bachelor Degree of Computer Science",
      logoUrl: "/rupp.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "Hun Sen Thmor Pouk High School",
      href: "#",
      degree: "Graduated",
      logoUrl: "/edulogo.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Phum Thmey Secondary School",
      href: "#",
      degree: "Graduated",
      logoUrl: "/edulogo.png",
      start: "2015",
      end: "2018",
    },
    {
      school: "Rolom Chrey Primary School",
      href: "#",
      degree: "Graduated",
      logoUrl: "/edulogo.png",
      start: "2009",
      end: "2015",
    },
  ],
  shortCourses: [
    {
      title: "Full Stack Web Development",
      provider: "The Odin Project",
      href: "https://www.theodinproject.com",
      certificate: "",
      logoUrl: "/odin-project.png",
      completed: "2024",
      description: "Comprehensive full-stack web development curriculum covering HTML, CSS, JavaScript, Node.js, and React."
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      provider: "freeCodeCamp",
      href: "https://www.freecodecamp.org",
      certificate: "https://freecodecamp.org/certification/username/javascript-algorithms-and-data-structures",
      logoUrl: "/freecodecamp.png",
      completed: "2023",
      description: "Learned fundamental programming concepts including algorithms, data structures, and problem-solving techniques."
    },
    {
      title: "React - The Complete Guide",
      provider: "Udemy",
      href: "https://www.udemy.com",
      certificate: "",
      logoUrl: "/udemy.png",
      completed: "2023",
      description: "Complete React course covering hooks, context, Redux, and modern React development patterns."
    },
    {
      title: "Docker & Kubernetes: The Complete Guide",
      provider: "Udemy",
      href: "https://www.udemy.com",
      certificate: "",
      logoUrl: "/udemy.png",
      completed: "2024",
      description: "Comprehensive course on containerization and orchestration with Docker and Kubernetes."
    },
  ],
projects: [
   {
      title: "Html CSS Javascript With PHP-Ecommerce",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a full-stack e-commerce application using HTML, CSS, JavaScript, and PHP. The project includes user authentication, product management, and a shopping cart system.",
      technologies: [
        "Html",
        "css",
        "Mysql",
        "Javascript",
        "PHP",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/buoysophit/nitastore.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/assets/video/Pro1.webm",
    },

    {
      title: "Inventory Management System",
      href: "",
      dates: "",
      active: true,
      description:
        "Developed a desktop application for inventory management using C# Winform and MySQL. The application allows users to manage products, suppliers, and sales transactions efficiently.",
      technologies: [
        "C# Winform",
        "Mysql",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/buoysophit/Inventory-Management-System.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/video/Pro1.png",
      video:
        "",
    },
  
  {
      title: "Laravel API With ReactJS - Ecommerce",
      href: "",
      dates: "",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "mysql",
        "TailwindCSS",
        "Stripe",
        "laravel API",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/buoysophit/nitastore.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

     {
      title: "Phitter Shop UI",
      href: "Ecommercer UI",
      dates: "June 2025 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "ReactJS",
        "vite",
        "TailwindCSS",
        "AOS",
        "Redux Toolkit",
        "Axios ",
        "Lucide React",
        " ESLint",
      ],
      links: [
        {
          type: "Demo",
          href: "https://phitter-shop-react-js.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/buoysophit/Phitter-Shop-ReactJS.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/assets/video/Pro2.webm",
    },
    {
      title: "Ecommerce Application",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "flutter",
        "firebase",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/buoysophit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
],
nonTechSkills: [
    {
      category: "Linux Customization",
      skill: "Linux Ricing",
      description: "Custom desktop environments, window managers, and system theming",
      icon: "🐧",
      level: "Advanced"
    },
    {
      category: "Office Suite",
      skill: "Microsoft Office",
      description: "Word, Excel, PowerPoint, and other productivity applications",
      icon: "📊",
      level: "Proficient"
    },
    {
      category: "Video Editing",
      skill: "CapCut",
      description: "Video editing, effects, transitions, and content creation",
      icon: "🎬",
      level: "Intermediate"
    },
    {
      category: "Graphic Design",
      skill: "Canva",
      description: "Graphic design, presentations, social media content, and visual branding",
      icon: "🎨",
      level: "Intermediate"
   }
  ],
  
 
} as const;
