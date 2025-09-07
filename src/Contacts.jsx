import { useState, } from "react";
import { useValues } from "./GlobalContexts";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
import { MdEmail } from "react-icons/md";

export default function Contacts() {
  const { Alert, contacts, Loading, theme } = useValues();
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [nameError, setnameError] = useState(false)
  const [emailError, setemailError] = useState(false)
  const [phoneError, setphoneError] = useState(false)
  const [message, setmessage] = useState('')
  const SERVICE_ID = "service_9gwinis";
  const TEMPLATE_ID = "template_cpuad9a";
  const publicKey = "MRQ_qj6sA23Ffp73_";

  //send message
  const sendMessage = (e) => {
    e.preventDefault();
    Loading(true);
    const templateParams = {
      user_name: name,user_email: email,
      to_email: "satyaxyz31@gmail.com",message,phone,
    };
    emailjs.send(SERVICE_ID,TEMPLATE_ID,templateParams,publicKey)
    .then(
      () => { Alert('Message sent to Satya'); Loading(false); e.target.reset() },
      (error) => { alert('Email failed:', error); Loading(false) }
    );
  }

  function onChange(e, setValue, setError) {
    const notValid = e.target.validity.patternMismatch;
    setValue(e.target.value);
    setError(notValid);
  }

  const isValidForm=()=>{
    const messageError=message.length < 1 ;
    return (!messageError && !nameError && !phoneError && !emailError && message && email && name && phone);
  }

  return (
    <section ref={contacts} className='max-w-5xl m-auto p-3 pt-13 min-h-screen'>
      <h1 className="text-center font-bold underline underline-offset-8 text-3xl text-primary">Contacts</h1>
      <div className="grid md:grid-cols-2 mt-4">
        <div className="flex flex-col w-full mt-4 gap-2">
          <h2 className="font-semibold text-xl text-center underline underline-offset-3">Connect with me</h2>
          <div className=" flex flex-col gap-3 flex-1">
            <nav className="flex gap-3 justify-center">
              <a className="btn btn-primary" href="https://www.linkedin.com/in/satya-narayan-dharua-4992b7174">
                <FaLinkedin size={27} />
              </a>
              <a className="btn btn-primary" href="https://github.com/SatyShrey">
                <FaGithub size={27} />
              </a>
              <a className="btn btn-primary" href="https://www.facebook.com/narayan.dharua">
                <FaFacebook size={27} />
              </a>
            </nav>
            <p className="flex items-center gap-1"><BiHome size={25} />Balangir</p>
            <p className="flex items-center gap-1"><PiPhoneCall size={25} />+917749041799</p>
            <p className="flex items-center gap-1"><MdEmail size={25} /> satyaxyz31@gmail.com</p>
            <p className="flex items-center gap-1">Odisha, India (767024)</p>
          </div>
        </div>
        <form
          onSubmit={sendMessage}
          className="flex flex-col items-center w-full m-auto max-w-md mt-4">
          <h2 className="font-semibold text-xl underline underline-offset-3">Send message</h2>

          <input type="text" placeholder="Name" style={{ boxShadow: `0 0 2px ${theme.color}` }}
            className={`w-full mt-2 p-3 focus:outline-2 rounded-xl placeholder:text-gray-500
              ${nameError?"outline-error":"outline-primary"}`}
            pattern="[a-zA-Z ]{2,}" title="At least two characters"
            onChange={(e) => onChange(e, setname, setnameError)}
          />{nameError && <small className="text-error" >Invalid name format</small>}

          <input type="email" placeholder="Email" title="Invalid email format" style={{ boxShadow: `0 0 2px ${theme.color}` }}
            className={`w-full mt-2 p-3 focus:outline-2 rounded-xl placeholder:text-gray-500
              ${emailError?"outline-error":"outline-primary"}`}
            onChange={(e) => onChange(e, setemail, setemailError)} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          /> {emailError && <small className="text-error" >Invalid email format</small>}

          <input type="tel" placeholder="Phone" pattern="[0-9]{10}" title="Must be 10 digits" maxLength={10}
            className={`w-full mt-2 p-3 focus:outline-2 rounded-xl placeholder:text-gray-500
              ${phoneError?"outline-error":"outline-primary"}`}
            onChange={(e) => onChange(e, setphone, setphoneError)} style={{ boxShadow: `0 0 2px ${theme.color}` }}
          /> {phoneError && <small className="text-error" >Eter 10 digits phone number</small>}

          <textarea placeholder="Write message" onChange={(e) => setmessage(e.target.value)}
            maxLength={200} style={{ boxShadow: `0 0 2px ${theme.color}` }}
            className="resize-none h-40 w-full outline-primary mt-2 p-3 focus:outline-2 rounded-xl placeholder:text-gray-500"></textarea>
          {message && <small className={message.length === 200 ? "text-error" : ""}>{message.length}/200</small>}

          <button className="btn mt-3 rounded-full btn-primary w-48" disabled={ isValidForm() ? false : true}
          style={isValidForm() ?{}:{backgroundColor:theme.color+"10",color:theme.color+"20"}}
          >Send</button>

        </form>
      </div>
    </section>
  )
}
