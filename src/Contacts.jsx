import { useRef, useState, } from "react";
import { useValues } from "./GlobalContexts";

export default function Contacts() {
  const { Alert, contacts } = useValues();
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')
  const [viewSubmit, setViewSubmit] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Message = { name, email, phone, message, }
    Alert('Message sent successfully.');
    //console.log(Message);
  }

  function onChange(e, setValue, errorId) {
    const valid = e.target.validity.patternMismatch;
    const classList = e.target.classList;
    const classList2 = document.getElementById(errorId).classList
    setValue(e.target.value);
    if (valid) {
      classList.replace('border-primary', 'border-error')
      classList2.replace('hidden', 'block')
    }
    else {
      classList.replace('border-error', 'border-primary')
      classList2.replace('block', 'hidden')
    }
  }

  const onFormChange = (e) => setViewSubmit(e.currentTarget.checkValidity())

  return (
    <div ref={contacts} className="min-h-full p-3 pt-13 m-auto max-w-5xl">
      <h1 className="text-center font-bold underline underline-offset-8 text-3xl text-primary">Contacts</h1>
      <form onSubmit={handleSubmit} onChange={onFormChange}
        className="flex flex-col w-full items-center mt-4">
        <input type="text" placeholder="Name" className="input mt-3 bg-white border border-primary focus:border-2"
          pattern="[a-zA-Z ]{2,}" title="At least two characters"
          onChange={(e) => onChange(e, setname, "nameError")}
        /><small className="hidden text-red-600" id="nameError">Invalid name format</small>

        <input type="email" placeholder="Email" title="Invalid email format"
          className="bg-white input mt-3 border border-primary focus:border-2 "
          onChange={(e) => onChange(e, setemail, "emailError")} pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
        /> <small className="hidden text-red-600" id="emailError">Invalid email format</small>

        <input type="tel" className="border mt-3 border-primary focus:border-2 input bg-white"
          placeholder="Phone" pattern="[0-9]{10}" title="Must be 10 digits" maxLength={10}
          onChange={(e) => onChange(e, setphone, "phoneError")}
        /> <small className="hidden text-red-600" id="phoneError">Eter 10 digits phone number</small>

        <textarea placeholder="Write message(optional)" onChange={(e) => setmessage(e.target.value)}
          className="textarea border border-primary mt-3 focus:border-2 h-30 resize-none bg-white " />

        {
          (viewSubmit && (name && email && phone)) ?
            <button className="btn btn-primary mt-3">Send message</button>
            : <div className="p-2 rounded opacity-30 bg-primary mt-3">Send message</div>
        }
      </form>
    </div>
  )
}
