import { createContext, useContext, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";

const GlobalContexts = createContext();
export function GlobalProvider({ children }) {
  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const works = useRef();
  const contacts = useRef();
  const darkTheme = {
    backgroundColor: "#101234",
    color: "#eeeeee",
    theme: "dark",
  };
  const lightTheme = {
    color: "#101234",
    backgroundColor: "#eeeeee",
    theme: "light",
  };
  const [theme, settheme] = useState(lightTheme);

  //change theme
  const changeTheme = () => {
    if (theme.theme === "light") {
      settheme(darkTheme);
      localStorage.setItem("theme", "dark");
    } else {
      settheme(lightTheme);
      localStorage.setItem("theme", "light");
    }
  };

  //set theme
  useEffect(() => {
    const themeREf = localStorage.getItem("theme");
    if (themeREf === "dark") {
      settheme(darkTheme);
    }
  }, []);

  return (
    <GlobalContexts.Provider
      value={{ home, about, skills, works, contacts, changeTheme, theme }}
    >
      <div
        style={theme}
      >
        {children}
      </div>
      <ToastContainer/>
    </GlobalContexts.Provider>
  );
}
export const useValues = () => useContext(GlobalContexts);
