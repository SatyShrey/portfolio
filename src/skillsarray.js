import { DiBootstrap, DiFirebase, DiMongodb, DiPython, DiWordpress } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress, SiSolidity } from "react-icons/si";

const skillsArray = [
  { name: "HTML", logo: FaHtml5, progress: 95, category: "Frontend" },
  { name: "CSS", logo: FaCss3, progress: 80, category: "Frontend" },
  { name: "JavaScript", logo: RiJavascriptFill, progress: 70, category: "Frontend" },
  { name: "React", logo: FaReact, progress: 60, category: "Frontend" },
  { name: "ReactNative", logo: TbBrandReactNative, progress: 50, category: "Frontend" },
  { name: "Bootstrap", logo: DiBootstrap, progress: 50, category: "Frontend" },
  { name: "Tailwind CSS", logo: RiTailwindCssFill, progress: 50, category: "Frontend" },
  { name: "NodeJS", logo: FaNodeJs, progress: 40, category: "Backend" },
  { name: "ExpressJS", logo: SiExpress, progress: 40, category: "Backend" },
  { name: "Python", logo: DiPython, progress: 20, category: "Backend" },
  { name: "MongoDB", logo: DiMongodb, progress: 40, category: "Database" },
  { name: "Firebase", logo: DiFirebase, progress: 40, category: "Database" },
  { name: "WordPress", logo: DiWordpress, progress: 50, category: "Frontend Backend" },
  { name: "Solidity", logo: SiSolidity, progress: 20, category: "Backend" },
];

export default skillsArray;