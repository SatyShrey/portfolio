import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu } from "react-icons/md";
import { useValues } from "./GlobalContexts";

export default function () {
  const { home, about, skills, works, contacts, } = useValues();
  const [navWidth, setnavWidth] = useState('0px');
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className='shadow h-13 z-10 bg-white sticky top-0 w-full'>
      <div className="flex justify-between items-center m-auto max-w-5xl">
        <h1 className='font-semibold text-2xl mx-2'>Satya.</h1>
        <nav className='sm:flex justify-evenly min-w-2/3 hidden'>
          <button className="font-semibold py-3" onClick={() => { scrollPage(home) }}>Home</button>
          <button className="font-semibold py-3" onClick={() => { scrollPage(about) }}>About</button>
          <button className="font-semibold py-3" onClick={() => { scrollPage(skills) }}>Skills</button>
          <button className="font-semibold py-3" onClick={() => { scrollPage(works) }}>Works</button>
          <button className="font-semibold py-3" onClick={() => { scrollPage(contacts) }}>Contacts</button>
        </nav>
        <nav className="sm:hidden flex">
          <button className="p-2 active:opacity-70 " onClick={() => setnavWidth('200px')}>
            <MdMenu size={30} />
          </button>
          <div style={{ width: navWidth, transition: '0.5s' }}
            className='overflow-hidden bg-white flex flex-col gap-4 pb-10 shadow absolute top-0 right-0'>
            <button className="font-semibold w-fit p-2" onClick={() => setnavWidth('0px')}>
              <CgClose size={20} />
            </button>
            <button className="font-semibold" onClick={() => { scrollPage(home) }}>Home</button>
            <button className="font-semibold" onClick={() => { scrollPage(about) }}>About</button>
            <button className="font-semibold" onClick={() => { scrollPage(skills) }}>Skills</button>
            <button className="font-semibold" onClick={() => { scrollPage(works) }}>Works</button>
            <button className="font-semibold" onClick={() => { scrollPage(contacts) }}>Contacts</button>
          </div>
        </nav>
      </div>
    </div>
  )
}
