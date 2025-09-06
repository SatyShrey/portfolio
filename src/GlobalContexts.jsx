import { createContext, useContext, useEffect, useRef, useState } from "react";
import { BiCheck, BiCheckCircle } from "react-icons/bi";

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
    const colors = { bg: '#101234', text: "#eeeeee",};
    const [theme, settheme] = useState({ text: colors.bg, bg: colors.text })

    //change theme
    const changeTheme = () => {
        if (theme.text === colors.text) {
            settheme({ text: colors.bg, bg: colors.text })
        } else {
            settheme({ text: colors.text, bg: colors.bg })
        }
    }

    //alert modal
    useEffect(() => {
        clearTimeout(timeOut.current)
        if (alert) {
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
        <GlobalContexts.Provider value={{ home, about, skills, works, contacts, Alert, Loading, changeTheme, theme, colors }}>
            <div className=" transition-all duration-700 poppins-regular"
                style={{ backgroundColor: theme.bg, color: theme.text, }}>
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
                        <div style={{ borderTopColor: "white", height: "100px", width: "100px", }}
                            className="animate-spin rounded-full m-auto border-4 border-gray-500 border-t-primary"></div>
                    </div>
                </dialog>
            </div>
        </GlobalContexts.Provider>
    )
}
export const useValues = () => useContext(GlobalContexts);