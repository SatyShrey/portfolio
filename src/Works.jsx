import gemini from "./project_screenshots/gemini.png"
import calculator from "./project_screenshots/calculator.png"
import { useValues } from "./GlobalContexts"

const projects = [
  { git:"",name: "Gemini lemo", image: gemini, link: "https://gemini-render-app.netlify.app/", tech: "HTML, CSS, JavaScript, React, Gemini API, Tailwind CSS, NodeJS, ExpressJS",github:"https://github.com/SatyShrey/geminiapp" },
  { git:"",name: "Calculator", image: calculator, link: "https://e-simple-calculator.netlify.app", tech: "HTML, CSS, JavaScript, React, Tailwind CSS, DaisyUI",github:"https://github.com/SatyShrey/Simple_Calculator"},
];
//const token = 'TVZPZBW-PYCM3HP-NKAX846-3JFGJ2H';
export default function Works() {
  const { works,theme } = useValues();
  return (
    <section ref={works} className='max-w-5xl p-3 pt-13 m-auto '>
      <h1 className="text-center font-bold underline underline-offset-4 text-3xl text-primary">Works</h1>
      <div className="mt-5 grid gap-2 sm:grid-cols-2">
        {projects.map((a, b) =>
          <div style={{boxShadow:`0 0 2px ${theme.color}`,backgroundColor:`${theme.color}10`}}
          className="w-full rounded-xl p-2 flex justify-center flex-wrap" key={b}>
            <img src={a.image} alt='project_screenshot' className="rounded-xl md:w-1/2" />
            <div className="flex flex-col justify-center items-center gap-2 md:w-1/2">
              <h2 className="text-2xl font-semibold text-center">{a.name}</h2>
              <div className="flex items-center gap-2">
                <a href={a.link} className="btn btn-sm btn-primary">Open link</a>
                <a href={a.github} className="btn btn-sm btn-primary">Github</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
