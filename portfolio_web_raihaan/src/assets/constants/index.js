import project1 from "../projects/project1.png";
import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";
import project6 from "../projects/project6.png";
import project7 from "../projects/project7.png";
import project8 from "../projects/project8.png";
import project9 from "../projects/project9.png";

export const HERO_CONTENT = `A passionate Informatics Engineering student at ITB, dedicated to exploring the intersection of technology and creativity.
I'm deeply interested in the field of software engineering. I love building web applications, diving deep into coding challenges, and constantly learning new things.
Additionally, I have earned certifications in various programming languages and framework related to web development, which have further strengthened my skills in this area. `

export const DESCRIPTION = `I am a student of Informatics Engineering student at ITB, driven by a deep passion for coding and a relentless commitment to continuous learning.
 My journey in technology has allowed me to acquire a diverse set of skills, particularly in web development, where I have worked extensively with HTML, CSS, JavaScript, React.js, and Tailwind CSS.
 My involvement with the Google Developer Students Club ITB, where I earned a completion certificate in web development, is a testament to my dedication and keen interest in this domain.
 This experience has fueled my desire to delve deeper into software engineering, constantly pushing myself to explore new technologies and expand my expertise.
 I believe that growth comes from embracing challenges and never settling for the status quo.

In addition to my technical pursuits, I actively participate in a variety of activities that broaden my skill set beyond programming.
 I have taken on roles in event management, human resources, finance, and sponsorship, each contributing to my holistic development as a professional.
 These experiences have taught me the importance of teamwork, leadership, and adaptability, qualities that I believe are essential for success in any field. 
 My journey is one of continuous improvement, and I am committed to making meaningful contributions in every endeavor I undertake.`

export const EXPERIENCES = [
  {
    year: "Oct 2024 - Present",
    role: "Frontend Developer PEMILU HMIF ITB 2025",
    company: "HMIF ITB",
    description: `Currently developing Chairman of HMIF ITB election platform features, implemented the landing page and footer design based on figma and ensuring responsiveness across devices, and built reusable UI components using CSS and shadcn/ui library for efficient development.`,
    skills: ["Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Sept 2024 - Present",
    role: "Frontend Developer PEMIRA KM ITB 2025",
    company: "KM ITB",
    description: `Currently developing Chairman of KM ITB election platform features, implementing the website design based on Figma, ensuring responsiveness across devices, and built voting guide feature implementing step-by-step instructions to enhance user experience during the student election voting process.`,
    skills: ["Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Sept 2024 - Nov 2024",
    role: "Frontend Developer Wisuda Oktober ITB 2024",
    company: "Parade Wisuda ITB",
    description: `Developed and implemented the website design based on Figma, ensuring responsiveness across devices, and built reusable UI components using shadcn/ui library for efficient development.`,
    skills: ["Next.Js","TypeScript","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Jul 2024 - Sept 2024",
    role: "FullStack Developer HaloPIPS!",
    company: "Team Project for SPARTA 2023",
    description: `Managed the backend using Next.js server actions for user profiles, settings, authentication, and chat ID creation, along with implementing data storage mechanisms using firebase. Developed frontend features including profile and settings pages with comprehensive user interface.`,
    skills: ["Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    year: "Jul 2024 - Present",
    role: "Head of Event: PEMPEK 2024",
    company: "MUSI ITB",
    description: `Led a team in planning, conceptualizing and determining themes, ToR and Timeline for the cadre formation of new members of MUSI ITB 2024/"PEMPEK 2024"`,
    skills: ["Project Management","Leadership","Creativity","Negotiation"],
  },
  // {
  //   year: "Jul 2024 - Present",
  //   role: "Human Resources Management Officer",
  //   company: "IEEE ITB Student Branch",
  //   description: `Managing human resources in the organization. Ensure that team members feel valued, motivated, and have everything they need to contribute effectively. Primary duties include recruiting, member development, and team welfare management.`,
  //   skills: ["Communication","Problem Solving","Time Management","Interpersonal"],
  // },
  // {
  //   year: "Dec 2023 - Jul 2024",
  //   role: "Staff of Finance",
  //   company: "BPA STEI-K 2023",
  //   description: `Manage fundraising activities to meet the needs of the STEI-K 2023. Primary responsibilities include budget planning, transaction recording, fundraising management, and financial reporting.`,
  //   skills: ["Accounting", "Finance Management", "Marketing", "Analytical Thinking"],
  // },
  // {
  //   year: "Oct 2023 - Jun 2024",
  //   role: "Member",
  //   company: "GDSC ITB",
  //   description: `Get training in the chosen field (Web Development, Mobile Development, Data Science, UI/UX, etc) then work on the final project to get a graduation certificate according to the field.`,
  //   skills: ["HTML","CSS","JavaScript","React"],
  // },
  // {
  //   year: "March 2024 - May 2024",
  //   role: "Staff of Sponsorship for STEI-Kesyen",
  //   company: "STEI-K 2023",
  //   description: `Managing and developing relationships with sponsors, as well as ensuring sponsor support is achieved properly, obtaining financial and material support necessary for the success of the STEI-Kesyen Event.`,
  //   skills: ["Negotiation","Interpersonal Skills","Communication","Accounting"],
  // },
];

export const PROJECTS = [
  {
    title: "HalalHub",
    image: project9,
    link: "https://github.com/fliegenhaan/IF2150-2024-K03-G07-HalalHub",
    description: `HalalHub is a GUI-based software developed using Python, designed specifically for small and medium-sized enterprises (SMEs/UMKM) to manage businesses selling Muslim clothing and accessories.`,
    technologies: ["Python","Tkinter","Python GUI","Model View Controller","CI/CD"],
  },
  {
    title: "Skibiditify",
    image: project8,
    link: "https://github.com/fliegenhaan/Algeo02-23124-Skibiditify",
    description: `Skibiditify is a website designed as an audio and image finder, utilizing linear algebra and geometry concepts such as the PCA method for image searching and Query by Humming for audio searching.`,
    technologies: ["Next.js","TypeScript","Flask","Python","API","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Pemilu HMIF 2024/2025",
    image: project7,
    link: "https://pemilu.hmif.dev/",
    description: `The Pemilu HMIF 2024/2025 website for chairman election`,
    technologies: ["Next.js","TypeScript","Prisma ORM","REST API","Docker","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Parade Wisokto 2024",
    image: project6,
    link: "https://paradewisok2024.com/",
    description: `The Parade Wisokto 2024 website celebrates graduates with a Wall of Appreciation for congratulatory messages, showcases their final projects through TA fair, and offers exclusive event merchandise.`,
    technologies: ["Next.Js","TypeScript","Prisma ORM","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "HaloPIPS! (on-maintenance)",
    image: project4,
    link: "https://halo-pips-nzdt.vercel.app/",
    description: `SPARTA 2023 Milestone project, which is a website for ITB students to consult with their seniors via the chatroom on this website.`,
    technologies: ["Next.Js","TypeScript","Firebase","Firestore","REST API","Tailwind CSS","Shadcn UI"],
  },
  {
    title: "Tenki no Haan",
    image: project1,
    description: `A solo project in the form of an anime-themed weather app website inspired by the anime 'Tenki no Ko'.
     This weather app website provide not just accurate weather forecasts but also an engaging and visually appealing experience.`,
    link: "https://tenki-no-haan.vercel.app/",
    technologies:["HTML","CSS","JavaScript"],
  },
  {
    title: "To Do List",
    image: project2,
    link: "https://to-do-list-gamma-black.vercel.app/",
    description: `A solo project in the form of a to do list website that allows you to record what you do, mark it as complete, and delete it.
     Everything on the list is stored on your device's local storage so your to-do list will not be lost or replaced.`,
    technologies:["ReactJs","CSS","JavaScript"],
  },
  {
    title: "GameGoDino1vs1",
    image: project3,
    link: "https://github.com/fliegenhaan/GameGoDino-1vs1-.git",
    description: `The final project for the "Dasar Pemrograman" course in the form of Terminal-based game created in groups (5 people) using the Python programming language.`,
    technologies:["Python"],
  },
];
