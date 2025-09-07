import { BiDownload } from 'react-icons/bi';
import { useValues } from './GlobalContexts';
import pdf from "./assets/Fullstack-Developer.pdf"
export default function About() {
  const { about, theme } = useValues();
  return (
    <section ref={about} className='max-w-5xl p-3 pt-13 m-auto '>
      <h1 className="font-bold underline underline-offset-4 text-center text-3xl text-primary">About</h1>
      <p className='indent-6 text-justify my-3' >
        I’m <b className='text-primary text-xl'>Satya Narayan Dharua</b> an aspiring Full Stack Web Developer  with a strong interest in building clean, modern, and user-friendly websites with backend integration.
        I hold a Bachelor’s in Computer Applications (BCA)  and a Master’s in Computer Applications (MCA). My background has given me a solid foundation
        in programming, problem-solving, and software design. I focus primarily on frontend technologies like HTML, CSS, JavaScript, React, React native,
        Tailwind CSS and backend technologies like node js, express js, while also exploring python programming language for backend development to
        become a well-rounded full-stack developer. Currently, I believe every project is a chance to learn and improve. I aim to build meaningful
        digital experiences  that help people and businesses thrive in the digital world. With curiosity as my guide, I’m always ready for new challenges.
      </p>
      <div className="grid md:grid-cols-2 mt-2 gap-4">
        <div>
          <h2 className='font-semibold text-xl text-center underline underline-offset-3'>Educations</h2>
          <h3 className='mt-1 border-b w-fit'>
            <span className='font-bold text-primary text-xl'>MCA</span> (Master of Computer Applications)
          </h3>
          <p> College: Ganesh Institute of Management Studies, Bhubaneswar</p>
          <p>Year of passout: 2025</p>
          <p>Specialization: Computer</p>

          <h3 className='mt-2 border-b w-fit'>
            <span className='font-bold text-primary text-xl'>BCA</span> (Bachelor of Computer Applications)
          </h3>
          <p> College: Academy of Management and Information Technology, Khordha</p>
          <p>Year of passout: 2023</p>
          <p>Specialization: Computer</p>
        </div>

        <div className='gap-2 text-center'>
          <h2 className='font-semibold text-xl underline underline-offset-3'>Interests</h2>
          <span className='btn btn-primary m-0.5'>Photoshop</span>
          <span className='btn btn-primary m-0.5'>Bike riding</span>
          <span className='btn btn-primary m-0.5'>Trading</span>
        </div>
      </div>
      <div className='flex my-4 justify-center'>
        <a href={pdf}
          className="h-11 w-36 flex items-center border-1 border-primary rounded-full overflow-hidden relative justify-center 
          cursor-pointer after:absolute after:w-0 after:rounded-full after:top-0 after:bottom-0 after:transition-all after:duration-500
         after:left-0 after:bg-primary hover:after:w-36 hover:text-white transition-all
         "><span className="z-[1]"><BiDownload className='inline -mt-1' size={25} /> My Resume</span></a>

      </div>
    </section>
  )
}
