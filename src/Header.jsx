import { useEffect, useState } from "react";
import { CgClose, } from "react-icons/cg";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode, } from "react-icons/md";
import { useValues } from "./GlobalContexts";

export default function () {
  const { home, about, skills, works, contacts, changeTheme, theme, } = useValues();
  const [navWidth, setnavWidth] = useState('0px');
  const [currentSection, setcurrentSection] = useState("Home");
  const navItems = [
    { name: "Home", ref: home },
    { name: "About", ref: about },
    { name: "Skills", ref: skills },
    { name: "Works", ref: works },
    { name: "Contacts", ref: contacts },
  ]

  //scroll page on button click
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

  //highlight current section
  useEffect(() => {
    window.addEventListener('scroll', () => {
      navItems.map(a => {
        if (a.ref.current.getBoundingClientRect().top <= 100) {
          setcurrentSection(a.name);
        }
      })
    })
  }, [])

  return (
    <header className="z-10 sticky top-0 w-full transition-all duration-700"
      style={{ backgroundColor: theme.backgroundColor, boxShadow: `0 0 1px ${theme.color}` }}>
      <div className="flex justify-between items-center m-auto max-w-5xl h-13">
        <h1 className='font-extrabold text-3xl mx-2 text-primary'>Portfolio.</h1>
        <nav className='sm:flex justify-evenly min-w-1/2 hidden h-full items-center'>
          {
            navItems.map((a, b) =>
              <button key={b}
                className={`font-semibold hover:scale-[1.1] flex flex-col items-center cursor-pointer
                  relative after:absolute after:bottom-0 hover:after:w-[100%] after:transition-all 
                  after:h-0.5 after:bg-primary after:duration-500
                  ${currentSection === a.name ? "after:w-[100%]" : "after:w-[0%]"} 
                ${currentSection === a.name ? "text-primary" : theme.color}`}
                onClick={() => { scrollPage(a.ref) }}
              >{a.name}</button>)
          }
        </nav>
        <button //theme change button
         onClick={changeTheme} className="cursor-pointer p-2">
          {theme.theme === "light" ? <MdOutlineLightMode size={25} /> : <MdOutlineDarkMode size={25} />}
        </button>
        <button className="p-2 active:opacity-70 sm:hidden" onClick={() => setnavWidth('200px')}>
          <MdMenu size={30} />
        </button>
      </div>
      <nav //mobile menu
        style={{ width: navWidth, transition: '0.5s', background: theme.backgroundColor, boxShadow: `0 0 2px ${theme.color}` }}
        className="sm:hidden h-3xl flex overflow-hidden flex-col gap-4 absolute pb-10 top-0 right-0"
      >
        <button className="font-semibold w-fit p-2" onClick={() => setnavWidth('0px')}>
          <CgClose size={20} />
        </button>
        {
          navItems.map((a, b) =>
            <button key={b}
              className={`font-semibold hover:scale-[1.1] cursor-pointer p-2 ${currentSection === a.name ? "text-primary" : theme.color}`}
              onClick={() => { scrollPage(a.ref); setnavWidth('0px') }}
            >{a.name}</button>)
        }
      </nav>
    </header>)
}
