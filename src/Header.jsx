import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useValues } from "./GlobalContexts";

export default function () {
  const { home, about, skills, works, contacts,changeTheme,theme ,colors} = useValues();
  const [navWidth, setnavWidth] = useState('0px');
  const [currentSection, setcurrentSection] = useState("Home");
  const navItems = [
    { name: "Home", ref: home },
    { name: "About", ref: about },
    { name: "Skills", ref: skills },
    { name: "Works", ref: works },
    { name: "Contacts", ref: contacts },
  ]
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

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
    style={{backgroundColor:theme.bg,boxShadow:`0 0 1px ${theme.text}`}}>
      <div className="flex justify-between items-center m-auto max-w-5xl h-13">
        <h1 className='poppins-extrabold text-3xl mx-2 text-primary'>Portfolio.</h1>
        <nav className='sm:flex justify-evenly min-w-1/2 hidden h-full items-center'>
          {
            navItems.map((a, b) =>
              <button key={b}
                className={`font-semibold hover:scale-[1.1] cursor-pointer p-2 ${currentSection === a.name ? "text-primary" : theme.text}`}
                onClick={() => { scrollPage(a.ref) }}
              >{a.name}</button>)
          }
        </nav>
      <button onClick={changeTheme} className="cursor-pointer mx-2">
        {theme.text===colors.text ? <MdOutlineDarkMode size={25}/> : <MdOutlineLightMode size={25}/>}
      </button>
        <button className="p-2 active:opacity-70 sm:hidden" onClick={() => setnavWidth('200px')}>
          <MdMenu size={30} />
        </button>
      </div>
      <nav //mobile menu
        style={{ width: navWidth, transition: '0.5s' ,background:theme.bg,boxShadow:`0 0 2px ${theme.text}`}}
        className="sm:hidden h-3xl flex overflow-hidden flex-col gap-4 absolute pb-10 top-0 right-0"
        >
        <button className="font-semibold w-fit p-2" onClick={() => setnavWidth('0px')}>
          <CgClose size={20} />
        </button>
        {
          navItems.map((a, b) =>
            <button key={b}
              className={`font-semibold hover:scale-[1.1] cursor-pointer p-2 ${currentSection === a.name ? "text-primary" : theme.text}`}
              onClick={() => { scrollPage(a.ref); setnavWidth('0px') }}
            >{a.name}</button>)
        }
      </nav>
    </header>)
}
