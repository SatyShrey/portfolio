import { DiBootstrap, DiFirebase, DiMongodb, DiPython, DiWordpress } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { useValues } from "./GlobalContexts";
import { useState } from "react";
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
const categories = ['', 'Backend', 'Frontend', "Database"];

export default function Skills() {
  const { skills, theme } = useValues();
  const [currentCategory, setcurrentCategory] = useState('');
  return (
    <section ref={skills} className='max-w-5xl p-3 pt-13 m-auto'>
      <h1 className="text-center font-bold underline underline-offset-4 text-3xl text-primary">Skills</h1>
      <div className="mt-5 flex justify-center gap-1 flex-wrap">
        {
          categories.map((a, b) =>
            <button key={b} className={`btn transition-all duration-300 shadow-[0_0_2px]
              ${a === currentCategory ? "btn-primary" : ""}`}
              onClick={() => setcurrentCategory(a)}>{a === '' ? "All" : a}</button>)
        }
      </div>
      <div className="mt-2 grid md:grid-cols-2 gap-2">
        {
          skillsArray.filter((f) => f.category.includes(currentCategory)).map((a, b) =>
            <div key={b} style={{ boxShadow: `0 0 1px ${theme.color}`, backgroundColor: `${theme.color}10` }}
              className="p-2 rounded-xl">
              <div className="flex items-center">
                <a.logo size={30} className="text-primary" />
                <span className="flex-1">{a.name}</span>
                <span>{a.progress}%</span>
              </div>
              <div>
                <div className="rounded-full transition-all duration-300 h-2 bg-primary "
                  style={{ width: a.progress + "%" }}
                ></div>
              </div>
            </div>)
        }
      </div>
    </section>
  )
}
