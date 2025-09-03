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
    const timeOut = useRef();
    const [marginTop, setmarginTop] = useState(-50)
    const modalRef=useRef()

    useEffect(() => {
        clearTimeout(timeOut.current)
        if (alert) {
            modalRef.current.showModal();
            setmarginTop(0)
            timeOut.current = setTimeout(() => { setmarginTop(-50); }, 1500)
            timeOut.current = setTimeout(() => { Alert('');modalRef.current.close() }, 2000)
        }
    }, [alert]);

    return (
        <GlobalContexts.Provider value={{ home, about, skills, works, contacts, Alert }}>
            <>
                <dialog ref={modalRef} className="bg-transparent w-fit mx-auto ">
                    <div style={{ transition: "0.5s", marginTop, }}
                        className="alert alert-success font-bold">
                        <BiCheckCircle size={20} /><span >{alert}</span>
                    </div>
                </dialog>
                {children}
            </>
        </GlobalContexts.Provider>
    )
}
export const useValues = () => useContext(GlobalContexts);