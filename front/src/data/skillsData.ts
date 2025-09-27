import csharp from "../assets/icons/c-sharp.png";
import css from "../assets/icons/css3.png";
import fastapi from "../assets/icons/fast-api.png";
import html from "../assets/icons/html5.png";
import java from "../assets/icons/java.png";
import javascript from "../assets/icons/javascript.png";
import nodejs from "../assets/icons/node-js.png";
import postgresql from "../assets/icons/postgresql.png";
import python from "../assets/icons/python.png";
import react from "../assets/icons/react.png";
import springboot from "../assets/icons/spring-boot.png";
import sqlserver from "../assets/icons/sql-server.png";
import supabase from "../assets/icons/supabase.png";
import tailwindcss from "../assets/icons/tailwindcss.png";
import typescript from "../assets/icons/typescript.png";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Front-end",
    icon: "💻",
    skills: [
      { name: "React", icon: react },
      { name: "HTML5", icon: html },
      { name: "CSS3", icon: css },
      { name: "Tailwind CSS", icon: tailwindcss },
    ],
  },
  {
    title: "Back-end",
    icon: "↩️",
    skills: [
      { name: "Spring Boot", icon: springboot },
      { name: "Node.js", icon: nodejs },
      { name: "FastAPI", icon: fastapi },
    ],
  },
  {
    title: "Databases",
    icon: "🗃️",
    skills: [
        { name: "PostgreSQL", icon: postgresql },
        { name: "Microsoft SQL Server", icon: sqlserver },
        { name: "Supabase", icon: supabase },
    ]
  },
  {
    title: "Programming Languages",
    icon: "📜",
    skills: [
        { name: "Java", icon: java },
        { name: "C#", icon: csharp },
        { name: "JavaScript", icon: javascript },
        { name: "TypeScript", icon: typescript },
        { name: "Python", icon: python },
    ]
  }
];