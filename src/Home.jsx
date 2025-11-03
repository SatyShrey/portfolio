import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import image from "./assets/satya.jpg";
import { useValues } from "./GlobalContexts";
import { motion } from "framer-motion";

export default function Home() {
  const { home, contacts } = useValues();

  //scroll page
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="max-w-5xl p-3 m-auto relative">
      <div ref={home} className="absolute -top-40"></div>
      <div className="font-bold min-h-40">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl my-3"
        >
          Hi,
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl"
        >
          <span>I am </span>
          <span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary"
          >
            Satya Narayan Dharua
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="my-3 not-sm:mt-1"
        >
          Fullstack Web Developer
        </motion.p>
      </div>

      <div className="flex gap-5 items-center">
        <a
          className="hover:scale-[1.2] hover:text-primary"
          href="https://www.linkedin.com/in/satya-narayan-dharua-4992b7174"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="hover:scale-[1.2] hover:text-primary"
          href="https://github.com/SatyShrey"
        >
          <FaGithub size={30} />
        </a>
        <a
          className="hover:scale-[1.2] hover:text-primary"
          href="https://www.facebook.com/narayan.dharua"
        >
          <FaFacebook size={30} />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -50,x:-100 }}
          animate={{ opacity: 1, rotate: 0,x:0 }}
          transition={{ duration: 1,delay:0.5 }}
          className="w-80 m-auto my-5 max-w-[calc(100%-30px)] overflow-hidden rounded-full outline-2 outline-primary"
        >
          <img src={image} alt="profile_pic" className="" />
        </motion.div>

        <button
          onClick={() => scrollPage(contacts)}
          className="h-11 w-36 flex items-center border-1 border-primary rounded-full overflow-hidden relative justify-center 
          cursor-pointer after:absolute after:w-0 after:rounded-full after:top-0 after:bottom-0 after:transition-all after:duration-500
         after:left-0 after:bg-primary hover:after:w-36 before:content-['Contact_me'] before:z-[1] hover:text-white transition-all"
        />
      </motion.div>
    </section>
  );
}
