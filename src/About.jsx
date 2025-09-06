import { BiDownload } from 'react-icons/bi';
import { useValues } from './GlobalContexts';
import pdf from "./assets/Fullstack-Developer.pdf"
export default function About() {
  const { about } = useValues();
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
          <h3  className='mt-1 border-b w-fit'>
            <span className='font-bold text-primary'>MCA</span> <span className='text-sm'>(Master of Computer Applications)</span>
          </h3>
          <p> College: Ganesh Institute of Management Studies, Bhubaneswar</p>
          <p>Year of passout: 2025</p>
          <p>Specialization: Computer</p>

          <h3 className='mt-2 border-b w-fit'>
            <span className='font-bold text-primary'>BCA</span> <span className='text-sm'>(Bachelor of Computer Applications)</span>
          </h3>
          <p> College: Academy of Management and Information Technology, Khordha</p>
          <p>Year of passout: 2023</p>
          <p>Specialization: Computer</p>
        </div>

        <div className='flex flex-col text-center gap-2'>
          <h2 className='font-semibold text-xl underline underline-offset-3'>Interests</h2>
          <h3 className='font-semibold text-primary'>Trading</h3>
          <h3 className='font-semibold text-primary'>Photoshop</h3>
          <h3 className='font-semibold text-primary'>Bike riding</h3>
        </div>
      </div>
      <div className='text-center my-4'>
        <a className='btn btn-primary rounded-full' href={pdf}><BiDownload size={30} />My Resume</a>
      </div>
    </section>
  )
}
