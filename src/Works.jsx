import { BiWorld } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"
import aichatbot from "./project_screenshots/aichatbot.png"
import myimageslider from "./project_screenshots/myimageslider.png"
import countdowntimer from "./project_screenshots/countdowntimer.png"
import { useValues } from "./GlobalContexts"

const projects = [
  { name: "AI Chat Bot", image: aichatbot, link: "https://aichatbotatweb3.netlify.app", tech: "HTML, CSS, JavaScript, React, Gemini API" },
  { name: "Image Slider", image: myimageslider, link: "https://myimagesliderdemo.netlify.app", tech: "HTML, CSS, JavaScript" },
  { name: "Countdown Timer", image: countdowntimer, link: "https://countdowntimer3344.netlify.app", tech: "HTML, CSS, JavaScript" },
];
//const token = 'TVZPZBW-PYCM3HP-NKAX846-3JFGJ2H';
export default function Works() {
 const{ works,}=useValues();
  return (
    <div ref={works} className="min-h-full p-3 pt-13 m-auto max-w-5xl">
      <h1 className="text-center font-bold underline underline-offset-4 text-3xl text-primary">Works</h1>
      <div className="mt-5 text-center">
        {projects.map((a, b) =>
          <div key={b} className="bg-gradient-to-br from-primary to-pink-300 rounded w-[47%] not-sm:w-[95%] sm:inline-block m-2 p-2">
            <h3 className="font-semibold text-xl text-white mb-2">{a.name}</h3>
            <div className="h-40 bg-cover " 
            style={{backgroundImage:`url(${a.image})`}}>
            </div>
            <div className="h-12">{a.tech}</div>
            <div className="flex gap-2 justify-center mt-2">
              <a href={a.link} target="_blank" className="btn btn-sm"><BiWorld size={25} />Visit site</a>
              <a href={a.link} target="_blank" className="btn btn-sm"><FaGithub size={25} />Source code</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
