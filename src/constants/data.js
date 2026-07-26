import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Cpu,
  Code,
  Database,
  Globe,
  Wrench,
  Server,
  MonitorSmartphone,
  CircuitBoard,
  Wifi,
} from "lucide-react";
import { Github, Linkedin, Instagram } from "../components/ui/Icons";

// ─── Personal / Hero ───────────────────────────────────────────
export const personalInfo = {
  name: "Dwi",
  roles: ["Computer Engineering Student", "Web Developer", "IoT Enthusiast"],
  tagline:
    "Mahasiswa D3 Teknik Komputer yang passionate di bidang embedded systems, IoT, dan web development.",
  resumeUrl: "/resume.pdf",
};

// ─── About ─────────────────────────────────────────────────────
export const aboutData = {
  description: [
    "Saya adalah mahasiswa D3 Teknik Komputer yang memiliki minat besar di bidang teknologi, khususnya pada embedded systems, Internet of Things (IoT), dan pengembangan web.",
    "Selama perkuliahan, saya aktif mengerjakan berbagai proyek yang menggabungkan hardware dan software, mulai dari mikrokontroler hingga full-stack web application.",
    "Saya selalu antusias untuk belajar teknologi baru dan menerapkannya dalam proyek-proyek nyata yang memberikan dampak.",
  ],
  stats: [
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Semester", value: "5" },
    { label: "Certifications", value: "3+" },
  ],
};

// ─── Education ─────────────────────────────────────────────────
export const educationData = [
  {
    degree: "Diploma III (D3) Teknik Komputer",
    institution: "Universitas XYZ",
    period: "2023 – 2026",
    gpa: "3.75 / 4.00",
    description:
      "Fokus pada embedded systems, jaringan komputer, dan pemrograman. Aktif di organisasi dan komunitas teknologi kampus.",
    icon: GraduationCap,
  },
];

// ─── Skills ────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: [
      { name: "C / C++", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 65 },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React.js", level: 80 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    title: "Embedded & IoT",
    icon: CircuitBoard,
    skills: [
      { name: "Arduino", level: 85 },
      { name: "ESP32 / ESP8266", level: 80 },
      { name: "Raspberry Pi", level: 70 },
      { name: "Sensor Integration", level: 75 },
    ],
  },
  {
    title: "Networking",
    icon: Wifi,
    skills: [
      { name: "TCP/IP", level: 75 },
      { name: "Cisco (CCNA)", level: 65 },
      { name: "Mikrotik", level: 70 },
      { name: "Linux Server", level: 70 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 60 },
      { name: "Postman", level: 70 },
    ],
  },
];

// ─── Projects ──────────────────────────────────────────────────
export const projectsData = [
  {
    title: "Smart Home IoT System",
    description:
      "Sistem smart home berbasis ESP32 dengan kontrol melalui web dashboard. Mengintegrasikan sensor suhu, kelembapan, dan relay untuk kontrol perangkat rumah.",
    tech: ["ESP32", "React.js", "Firebase", "MQTT"],
    category: "IoT",
    image: null,
    github: "https://github.com/dwi/smart-home",
    demo: null,
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio personal yang dibangun dengan React dan Tailwind CSS, menampilkan proyek dan kemampuan teknis.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Web",
    image: null,
    github: "https://github.com/dwi/portfolio",
    demo: "https://dwi-portfolio.vercel.app",
    featured: true,
  },
  {
    title: "Weather Monitoring Station",
    description:
      "Stasiun pemantauan cuaca menggunakan Arduino dan berbagai sensor lingkungan. Data ditampilkan pada LCD dan dikirim ke cloud.",
    tech: ["Arduino", "DHT22", "BMP280", "ThingSpeak"],
    category: "IoT",
    image: null,
    github: "https://github.com/dwi/weather-station",
    demo: null,
    featured: false,
  },
  {
    title: "Network Monitoring Dashboard",
    description:
      "Dashboard monitoring jaringan real-time yang menampilkan status perangkat, bandwidth usage, dan alert system.",
    tech: ["Node.js", "Express", "Socket.io", "Chart.js"],
    category: "Web",
    image: null,
    github: "https://github.com/dwi/net-monitor",
    demo: null,
    featured: false,
  },
  {
    title: "Line Follower Robot",
    description:
      "Robot line follower dengan algoritma PID menggunakan Arduino Mega. Meraih juara 3 pada kompetisi robotik tingkat regional.",
    tech: ["Arduino", "C++", "PID Control", "IR Sensor"],
    category: "Embedded",
    image: null,
    github: "https://github.com/dwi/line-follower",
    demo: null,
    featured: true,
  },
  {
    title: "Inventory Management System",
    description:
      "Sistem manajemen inventaris berbasis web dengan fitur CRUD, barcode scanning, dan laporan stok.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    category: "Web",
    image: null,
    github: "https://github.com/dwi/inventory-system",
    demo: null,
    featured: false,
  },
];

export const projectCategories = ["All", "IoT", "Web", "Embedded"];

// ─── Experience ────────────────────────────────────────────────
export const experienceData = [
  {
    role: "IoT Lab Assistant",
    company: "Universitas XYZ",
    period: "Sep 2024 – Sekarang",
    description: [
      "Membimbing mahasiswa dalam praktikum mikrokontroler dan IoT.",
      "Merancang modul praktikum berbasis Arduino dan ESP32.",
      "Mengelola peralatan dan inventaris laboratorium.",
    ],
    icon: Cpu,
  },
  {
    role: "Web Developer Intern",
    company: "PT. Tech Solutions",
    period: "Jun 2025 – Agt 2025",
    description: [
      "Mengembangkan fitur front-end menggunakan React.js.",
      "Berkolaborasi dengan tim back-end untuk integrasi REST API.",
      "Melakukan code review dan writing unit tests.",
    ],
    icon: MonitorSmartphone,
  },
  {
    role: "IT Support Volunteer",
    company: "Event Kampus",
    period: "Mar 2024 – Mei 2024",
    description: [
      "Setup jaringan dan infrastruktur IT untuk acara kampus.",
      "Troubleshooting perangkat keras dan perangkat lunak.",
    ],
    icon: Server,
  },
];

// ─── Contact ───────────────────────────────────────────────────
export const contactInfo = {
  email: "dwi@email.com",
  phone: "+62 812-xxxx-xxxx",
  location: "Indonesia",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/dwi",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dwi",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/dwi",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:dwi@email.com",
      icon: Mail,
    },
  ],
};

// ─── Navigation ────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
