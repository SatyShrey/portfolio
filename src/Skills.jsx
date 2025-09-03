import { DiBootstrap, DiMongodb, DiPhotoshop, DiPython } from "react-icons/di";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { useValues } from "./GlobalContexts";
const skillsArray = [
  { name: "HTML", logo: FaHtml5, progress: 95 },
  { name: "CSS", logo: FaCss3, progress: 80 },
  { name: "JavaScript", logo: RiJavascriptFill, progress: 70 },
  { name: "React", logo: FaReact, progress: 60 },
  { name: "ReactNative", logo: TbBrandReactNative, progress: 50 },
  { name: "Bootstrap", logo: DiBootstrap, progress: 50 },
  { name: "Tailwind CSS", logo: RiTailwindCssFill, progress: 50 },
  { name: "NodeJS", logo: FaNodeJs, progress: 40 },
  { name: "MongoDB", logo: DiMongodb, progress: 40 },
  { name: "Python", logo: DiPython, progress: 20 },
  { name: "Photoshop", logo: DiPhotoshop, progress: 50 },
]
export default function Skills() {
   const{ skills,}=useValues();
  return (
    <div ref={skills} className="min-h-full p-3 pt-13 m-auto max-w-5xl">
      <h1 className="text-center font-bold underline underline-offset-4 text-3xl text-primary">Skills</h1>
      <div className="text-center">
        {
          skillsArray.map((a, b) => <div key={b} className=" w-1/2 inline-block not-md:w-full p-3">
            <div className="flex items-center px-2">
              <a.logo size={30} className="text-primary inline" />
              <span>{a.name}</span>
              <span className="flex-1 text-right">{a.progress}%</span>
            </div>
            <div className="shadow rounded-full">
              <div className="rounded-full h-2 bg-gradient-to-r from-primary to-pink-300" style={{ width: a.progress + "%" }}></div>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
