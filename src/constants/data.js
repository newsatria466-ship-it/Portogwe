import {
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Cpu,
  Database,
  Server,
  MonitorSmartphone,
  Award,
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
    { label: "Certifications", value: "6+" },
  ],
};

// ─── Education ─────────────────────────────────────────────────
export const educationData = [
  {
    degree: "Diploma III (D3) Teknik Komputer",
    institution: "Universitas Harkat Negeri",
    period: "2024 – Now",
    gpa: "3.87 / 4.00",
    description:
      "Fokus pada embedded systems, jaringan komputer, dan pemrograman. Aktif di organisasi dan komunitas teknologi kampus.",
    icon: GraduationCap,
  },
];

// ─── Certifications ────────────────────────────────────────────
export const certificationsData = [
  {
    name: "Junior Programmer",
    issuer: "BNSP Indonesia",
    year: "2026",
    credentialId: "TIK.002.000042.2026",
    description: "•	Sertifikasi kompetensi nasional di bidang pemrograman dan pengembangan perangkat lunak, berlaku hingga Januari 2029.",
    url: "https://drive.google.com/file/d/1uIqB0LrOVyjdruN63trd74zNOL5YQTi6/view?usp=sharing",
    bg: "bg-coral",
  },
  {
    name: "Fundamental of Assistant Web Developer — Digital Talent",
    issuer: "BPSDM KOMDIGI",
    year: "2026",
    credentialId: "212128251110-9/DTA/BLSDM.Komdigi/2026",
    description: "• Pelatihan intensif pengembangan web yang mencakup implementasi antarmuka pengguna (UI), eksekusi kode program, dan pengelolaan struktur proyek.",
    url: "https://drive.google.com/file/d/1zy3iUxeThttt5MovuY_ahVtScpPK3d2l/view?usp=sharing",
    bg: "bg-yellow",
  },
  {
    name: "Overview of IoT Technologies — Huawei Talent Online",
    issuer: "Huawei Enterprise Business Group",
    year: "2025",
    description: "•	Sertifikasi kompetensi dasar mengenai arsitektur, protokol komunikasi, dan ekosistem teknologi Internet of Things (IoT).",
    url: "https://drive.google.com/file/d/1D0BXVWf9ePSvDK-hpU8znkd1lCyXa-VI/view?usp=sharing",
    bg: "bg-lavender",
  },
  {
    name: "AI for Work & Career Readiness with Google AI Products ",
    issuer: "Hacktiv8 Indonesia",
    year: "2026",
    description: "•	Pelatihan pemanfaatan teknologi AI Google untuk meningkatkan efisiensi kerja, produktivitas, dan kesiapan menghadapi dunia kerja.",
    url: "https://drive.google.com/file/d/1V2jM_LM5mPGiDGnqha0wrw5FT45GrVnt/view?usp=sharing",
    bg: "bg-teal",
  },
  {
    name: "Pola Pikir Digital — Micro Skill DTS",
    issuer: "BPSDM Komdigi",
    year: "2026",
    credentialId: "2299815850-25653/MS/BLSDM.Komdigi/2026",
    description: "Pelatihan pola pikir digital mencakup pemahaman elemen kunci dan strategi adaptasi teknologi dalam mendukung transformasi digital.",
    url: "https://drive.google.com/file/d/16iO9WxgKqF6NwdtrSTds_qoXHKqWPZ3g/view?usp=sharing",
    bg: "bg-pink",
  },
  {
    name: "Seminar Pembekalan Persiapan Masuk Dunia Kerja",
    issuer: "Universitas Harkat Negeri",
    year: "2026",
    description: "Peserta seminar (Membangun Kompetensi Mahasiswa Menuju Dunia Industri) untuk persiapan transisi menuju dunia kerja",
    url: "https://drive.google.com/file/d/170wavdrc89AnfebUMjrx09AxBqxqMtJl/view?usp=sharing",
    bg: "bg-orange",
  },
];

// ─── Projects ──────────────────────────────────────────────────
export const projectsData = [
  {
    title: "E-Commerce Web",
    description:
      "Website e-commerce dengan fitur belanja lengkap, terinspirasi dari platform marketplace modern.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: "Web",
    image: "/ecomers.png",
    github: null,
    demo: "https://w-dwi.wuaze.com/harkat-login/",
    featured: true,
  },
  {
    title: "Maison De Choco",
    description:
      "Website profil atau landing page untuk Maison De Choco, menampilkan informasi produk dan penawaran menarik.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image: "/Maison.png",
    github: null,
    demo: "https://newsatria466-ship-it.github.io/Maison-De-Choco/",
    featured: true,
  },
  {
    title: "Sistem Monitoring PDAM Aquasens",
    description:
      "Sistem monitoring berbasis web untuk PDAM, dilengkapi dengan fitur autentikasi dan pemantauan data secara real-time.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    category: ["Web", "IoT"],
    image: "/aquasense.png",
    github: null,
    demo: "https://w-dwi.wuaze.com/pdam_monitoring/auth/login.php",
    featured: true,
  },
  {
    title: "Flappy Birds",
    description:
      "Game Flappy Birds interaktif berbasis web yang menyenangkan, dibuat untuk melatih logika pemrograman game.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Game",
    image: "/flappybird.png",
    github: null,
    demo: "https://flappybirds-iota.vercel.app/",
    featured: true,
  },
  {
    title: "Smart Monitoring ESP32 DHT",
    description:
      "Sistem pemantauan cerdas menggunakan mikrokontroler ESP32 dan sensor DHT untuk memonitor suhu dan kelembaban.",
    tech: ["ESP32", "IoT", "Web"],
    category: "IoT",
    image: "/smartmonitoring.png",
    github: null,
    demo: "https://w-dwi.wuaze.com/ESP32_dht-main/",
    featured: true,
  },
  {
    title: "Spongebob Labirin",
    description:
      "Game petualangan labirin bertema Spongebob yang menantang dan seru untuk dimainkan.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Game",
    image: "/spongebob.png",
    github: null,
    demo: "https://spongebob-labirin.vercel.app/",
    featured: true,
  },
];

export const projectCategories = ["All", "Web", "IoT", "Game"];

// ─── Experience ────────────────────────────────────────────────
export const experienceData = [
  {
    role: "IoT Lab Assistant",
    company: "Universitas Harkat Negeri",
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
    company: "Cazh.co.id",
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
  email: "newsatria466@gmail.com",
  phone: "+62 898-8140-702",
  location: "Indonesia",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/newsatria466-ship-it",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/dwi-satria-21340b3a1?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: Linkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/dwi",
      icon: Instagram,
    },
    {
      name: "Email",
      url: "mailto:newsatria466@gmail.com",
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
