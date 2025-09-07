import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";

const GlobalContexts = createContext();
export function GlobalProvider({ children }) {
    const home = useRef();
    const about = useRef();
    const skills = useRef();
    const works = useRef();
    const contacts = useRef();
    const [alert, Alert] = useState(null);
    const [loading, Loading] = useState(false);
    const timeOut = useRef();
    const [marginTop, setmarginTop] = useState(-50)
    const modalRef = useRef()
    const modalRef2 = useRef()
    const darkTheme={backgroundColor: '#101234', color: "#eeeeee",theme:"dark"}
    const lightTheme = { color: '#101234', backgroundColor: "#eeeeee",theme:"light" };
    const [theme, settheme] = useState(lightTheme)

    //change theme
    const changeTheme = () => {
        if(theme.theme==="light"){settheme(darkTheme);localStorage.setItem('theme',"dark")}
        else{settheme(lightTheme);localStorage.setItem('theme',"light")}
    }

    //set theme
    useEffect(() => {
        const themeREf = localStorage.getItem('theme');
        if (themeREf === 'dark') {
            settheme(darkTheme)
        }
    }, [])

    //alert modal
    useEffect(() => {
        if (alert) {
            clearTimeout(timeOut.current)
            modalRef.current.showModal();
            setmarginTop(0)
            timeOut.current = setTimeout(() => { setmarginTop(-50); }, 1500)
            timeOut.current = setTimeout(() => { Alert(''); modalRef.current.close() }, 2000)
        }
    }, [alert]);

    //loading modal
    useEffect(() => {
        if (loading) {
            modalRef2.current.showModal();
        } else { modalRef2.current.close() }
    }, [loading]);

    return (
        <GlobalContexts.Provider value={{ home, about, skills, works, contacts, Alert, Loading, changeTheme, theme, }}>
            <div className='transition-all duration-700 font-["Poppins"]'
                style={theme}>
                {children}
                <dialog //success alert
                    ref={modalRef} className="bg-transparent w-fit mx-auto ">
                    <div style={{ transition: "0.5s", marginTop, }}
                        className="alert alert-success font-bold">
                        <BiCheckCircle size={20} /><span >{alert}</span>
                    </div>
                </dialog>
                <dialog //loader
                    ref={modalRef2} className="w-full h-full m-auto outline-0 bg-transparent">
                    <div className="w-full flex justify-center items-center h-full">
                        <div style={{borderTopColor:theme.color}}
                        className="animate-spin w-24 h-24 rounded-full m-auto border-4 border-gray-500"></div>
                    </div>
                </dialog>
            </div>
        </GlobalContexts.Provider>
    )
}
export const useValues = () => useContext(GlobalContexts);