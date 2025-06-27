import { Icons } from "@/components/icons";
import { HomeIcon, FolderIcon, Contact2Icon, BinaryIcon } from "lucide-react";

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
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: BinaryIcon, label: "Projects" },
    { href: "#contact", icon: Contact2Icon, label: "Contact" },

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

      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@phitterparker",
        icon: Icons.youtube,
        navbar: true,
      },
     
    },
  },




  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
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
      logoUrl: "/edukh.png",
      start: "2018",
      end: "2021",
    },
    {
      school: "Phum Thmey Secondary School",
      href: "#",
      degree: "Graduated",
      logoUrl: "/edukh.png",
      start: "",
      end: "",
    },
    {
      school: "Rolom Chrey Primary School",
      href: "#",
      degree: "Graduated",
      logoUrl: "/edukh.png",
      start: "",
      end: "",
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
// ...existing code...
projects: [
   {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  
  {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },

     {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
],
// ...existing code...

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
      category: "Audio Visualization",
      skill: "Cava",
      description: "Console-based audio visualizer for music and system audio",
      icon: "🎵",
      level: "Intermediate"
    }
  ],
  
 
} as const;
