export const siteConfig = {
  name: "Yair Flores",
  title: "Yair's Portfolio",
  description: "Yair Flores — Computer Engineer & Software Engineer Portfolio",
  favicon: "/favicon.jpeg",
  email: "yairflowers@gmail.com",
  resumePath: "/images/services/YairFloresResume.pdf",
  profileImage: "/images/yair.jpeg",
  aboutImage: "/images/mtn.jpg",
  socials: [
    {
      label: "GitHub",
      url: "https://github.com/serolfy",
      icon: "fa-brands fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yairflores/",
      icon: "fa-brands fa-linkedin"
    }
  ]
};

export const heroContent = {
  greeting: "Hi, I'm Yair 👋",
  subtitle: "(like air with a y)",
  paragraphs: [
    "I'm a **Computer Engineer** based in **Atlanta, GA**, focused on **software engineering**.",
    "I build **end-to-end systems** across **full-stack development**, **IoT & edge solutions**, **big-data platforms**, **embedded systems**, and **computer hardware design** — connecting real-world signals to reliable software people can trust."
  ]
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm a computer engineer who loves building things where **software meets hardware.** My sweet spot is turning messy, real-world problems — noisy data, device constraints, clunky workflows — into **clean, scalable systems** people actually enjoy using.",
    "I'm comfortable owning the whole lifecycle — **data architecture**, **engineering**, **UI/UX**, and **stakeholder alignment** — and I'm big on iterating: ship, demo, learn, improve. I've worked on projects ranging from internal reliability/experience tooling to V2X research that helped reduce roadside equipment TCO via IoT edge computing."
  ],
  highlights: [
    { label: "Full-Stack Apps", detail: "thoughtful UI/UX + solid APIs" },
    {
      label: "IoT / Embedded / Edge",
      detail: "sensors, devices, constrained environments"
    },
    {
      label: "Big Data Engineering",
      detail: "making high-volume telemetry useful"
    },
    {
      label: "Hardware-Aware Software",
      detail: "performance, reliability, real-world constraints"
    }
  ]
};

export const skills = [
  { name: "Python", icon: "fa-brands fa-python" },
  { name: "Node", icon: "fa-brands fa-node-js" },
  { name: "TypeScript", icon: "fa-brands fa-js-square" },
  { name: "Next.js", icon: "svg:nextjs" },
  { name: "C++", icon: "fa-solid fa-code" },
  { name: "Figma", icon: "fa-brands fa-figma" },
  { name: "Embedded", icon: "fa-solid fa-microchip" },
  { name: "IoT", icon: "fa-solid fa-wifi" },
  { name: "JavaScript", icon: "fa-brands fa-js-square" },
  { name: "React", icon: "fa-brands fa-react" },
  { name: "HTML", icon: "fa-brands fa-html5" },
  { name: "CSS", icon: "fa-brands fa-css3-alt" }
];

export interface Project {
  id: number;
  title: string;
  description: string;
  demoLink?: string;
  githubLink?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "V2X Research",
    description:
      "Developed a solution to reduce the Total Cost of Ownership (TCO) of Vehicle-to-Everything Roadside Equipment (V2X-RSE) using COTS components and open-source software. Innovated a proxy server connecting RSE & OBE networks with a web platform for developers to code, test, and deploy new functionality. Deployed COTS V2X-RSEs at multiple locations with Kubernetes deployment supporting IoT edge computing, including a custom Docker Registry (OwlBoxHub) with custom ARM containers.",
    demoLink: "https://youtu.be/OrBc7ursPf8",
    technologies: [
      "Python",
      "Node",
      "Linux",
      "IoT",
      "Docker",
      "Kubernetes",
      "Raspberry Pi",
      "HTML"
    ]
  },
  {
    id: 2,
    title: "2021 AT&T Symposium Hackathon",
    description:
      "Used Commercial-Off-The-Shelf (COTS) components and open-source software to create smart IoT connected home lighting control and Light-Based Cues with AI to learn as you work in a WFH environment. The system adapts to the presence of the user and flashes lights to alert times for breaks from working as well as for various environmental changes, such as emergencies, holidays, and intruders.",
    demoLink: "https://youtu.be/wm2vlkewGB8",
    technologies: [
      "Python",
      "Linux",
      "IoT",
      "Raspberry Pi",
      "HTML",
      "PIR Sensors"
    ]
  },
  {
    id: 3,
    title: "Undergraduate Senior Project",
    description:
      "Developed and managed a group of four engineers as Project Manager in creating start-up tech company TriFit. The project used COTS components, open-source software, proprietary printed PCB boards, and software to optimize bodybuilders' dietary recovery post-workout and meal plans using macronutrients. The main device features a gyroscope, accelerometer, heart rate, blood oxygen, and force sensors interfacing with a Raspberry Pi Zero W. It uses ML with a TensorFlow backend to transmit information over BLE to a mobile app and display nutritional regeneration information from a custom REST API.",
    technologies: ["Python", "Linux", "IoT", "ML", "Bluetooth", "PCB Design"]
  }
];

export const contactContent = {
  heading: "Get In Touch",
  text: "If you want us to work together or have any questions, always feel free to reach out, even if to just say hi! 😄",
  ctaLabel: "Say Hello"
};
