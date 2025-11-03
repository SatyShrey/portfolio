import { useState } from "react";
import { useValues } from "./GlobalContexts";
import skillsArray from "./skillsarray";
import AnimatedSection from "./components/AnimatedSection";

const categories = ['', 'Backend', 'Frontend', "Database"];

export default function Skills() {
  const { skills, theme } = useValues();
  const [currentCategory, setcurrentCategory] = useState('');
  return (
   <AnimatedSection>
     <div ref={skills} className='max-w-5xl p-3 pt-13 m-auto'>
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
    </div>
   </AnimatedSection>
  )
}
