import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useValues } from "./GlobalContexts";
import { motion } from "framer-motion";

export default function () {
  const { home, about, skills, works, contacts, changeTheme, theme } =
    useValues();
  const [navWidth, setnavWidth] = useState("0px");
  const [currentSection, setcurrentSection] = useState("Home");
  const navItems = [
    { name: "Home", ref: home },
    { name: "About", ref: about },
    { name: "Skills", ref: skills },
    { name: "Works", ref: works },
    { name: "Contacts", ref: contacts },
  ];

  //scroll page on button click
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

  //highlight current section
  useEffect(() => {
    window.addEventListener("scroll", () => {
      navItems.map((a) => {
        if (a.ref.current.getBoundingClientRect().top <= 100) {
          setcurrentSection(a.name);
        }
      });
    });
  }, []);

  return (
    <header
      className="z-10 sticky top-0 w-full"
      style={{
        backgroundColor: theme.backgroundColor,
        boxShadow: `0 0 1px ${theme.color}`,
      }}
    >
      <div className="flex justify-between items-center m-auto max-w-5xl h-13">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="font-extrabold text-3xl mx-2 text-primary"
        >
          Portfolio.
        </motion.h1>
        <nav className="sm:flex justify-evenly min-w-1/2 hidden h-full items-center">
          {navItems.map((a, b) => (
            <motion.button
              key={b}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: b * 0.1 + 0.4 }}
              className={`font-semibold flex flex-col cursor-pointer w-fit hover:scale-110 hover:text-primary
                  ${
                    currentSection === a.name
                      ? "[&>span]:w-full"
                      : "[&>span]:w-0"
                  } 
                ${currentSection === a.name ? "text-primary" : theme.color}`}
              onClick={() => {
                scrollPage(a.ref);
              }}
            >
              {a.name}{" "}
              <span className="h-0.5 bg-primary duration-300 mx-auto"></span>{" "}
            </motion.button>
          ))}
        </nav>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={changeTheme}
          className="cursor-pointer p-2"
        >
          {theme.theme === "light" ? (
            <MdOutlineLightMode size={25} />
          ) : (
            <MdOutlineDarkMode size={25} />
          )}
        </motion.button>
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-2 active:opacity-70 sm:hidden"
          onClick={() => setnavWidth("200px")}
        >
          <MdMenu size={30} />
        </motion.button>
      </div>
      <nav //mobile menu
        style={{
          width: navWidth,
          transition: "0.5s",
          background: theme.backgroundColor,
          boxShadow: `0 0 2px ${theme.color}`,
        }}
        className="sm:hidden h-3xl flex overflow-hidden flex-col gap-4 absolute rounded-bl-sm pb-10 top-0 right-0"
      >
        <button
          className="font-semibold w-fit p-2"
          onClick={() => setnavWidth("0px")}
        >
          <CgClose size={20} />
        </button>
        {navItems.map((a, b) => (
          <button
            key={b}
            className={`font-semibold hover:scale-[1.1] cursor-pointer p-2 ${
              currentSection === a.name ? "text-primary" : theme.color
            }`}
            onClick={() => {
              scrollPage(a.ref);
              setnavWidth("0px");
            }}
          >
            {a.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
