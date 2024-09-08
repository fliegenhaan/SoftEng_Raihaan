import project1 from "../projects/project1.png";
import project2 from "../projects/project2.png";
import project3 from "../projects/project3.png";
import project4 from "../projects/project4.png";
import project5 from "../projects/project5.png";

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
    year: "Jul 2024 - Present",
    role: "Head of Event: PEMPEK 2024",
    company: "MUSI ITB",
    description: `Led a team in planning, conceptualizing and determining themes, ToR and Timeline for the cadre formation of new members of MUSI ITB 2024/"PEMPEK 2024"`,
    skills: ["Project Management","Leadership","Creativity","Negotiation"],
  },
  {
    year: "Jul 2024 - Present",
    role: "Human Resources Management Officer",
    company: "IEEE ITB Student Branch",
    description: `Managing human resources in the organization. Ensure that team members feel valued, motivated, and have everything they need to contribute effectively. Primary duties include recruiting, member development, and team welfare management.`,
    skills: ["Communication","Problem Solving","Time Management","Interpersonal"],
  },
  {
    year: "Dec 2023 - Jul 2024",
    role: "Staff of Finance",
    company: "BPA STEI-K 2023",
    description: `Manage fundraising activities to meet the needs of the STEI-K 2023. Primary responsibilities include budget planning, transaction recording, fundraising management, and financial reporting.`,
    skills: ["Accounting", "Finance Management", "Marketing", "Analytical Thinking"],
  },
  {
    year: "Oct 2023 - Jun 2024",
    role: "Member",
    company: "GDSC ITB",
    description: `Get training in the chosen field (Web Development, Mobile Development, Data Science, UI/UX, etc) then work on the final project to get a graduation certificate according to the field.`,
    skills: ["HTML","CSS","JavaScript","React"],
  },
  {
    year: "March 2024 - May 2024",
    role: "Staff of Sponsorship for STEI-Kesyen",
    company: "STEI-K 2023",
    description: `Managing and developing relationships with sponsors, as well as ensuring sponsor support is achieved properly, obtaining financial and material support necessary for the success of the STEI-Kesyen Event.`,
    skills: ["Negotiation","Interpersonal Skills","Communication","Accounting"],
  },
];

export const PROJECTS = [
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
  {
    title: "HaloPIPS! (on-maintenance)",
    image: project4,
    link: "https://halo-pips.vercel.app/",
    description: `SPARTA 2023 Milestone project, which is a website for ITB students to consult with their seniors via the chatroom on this website.
     In this project I contributed as a back end developer for the user profile, create chat ID, and member list api routes.`,
    technologies: ["Nextjs", "Tailwind CSS", "Authjs", "Prisma ORM", "ShadcnUI"],

  },
  {
    title: "Tontonanque (on-going)",
    image: project5,
    link: "https://",
    description: `A solo project in the form of a movie tracker website that allows user to add, remove, mark as done, and edit their watchlist also give review and rating to the movie they watched.
    This is my lates project but not finished and deployed yet.`,
    technologies: ["Nextjs", "Tailwind CSS", "Authjs", "MongoDB", "Expressjs"],
  },
];