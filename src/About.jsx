import { BiDownload } from 'react-icons/bi';
import { useValues } from './GlobalContexts';
import image from './assets/satya2.png';

export default function About() {
  const { about } = useValues();
  return (
    <div ref={about} className="min-h-full p-3 pt-13 m-auto max-w-5xl">
      <h1 className="font-bold underline underline-offset-4 text-3xl text-primary text-center">About</h1>
      <p className='indent-6 text-justify my-3' >
           <img src={image} alt="profilepic"  
           className='w-[50%] rounded md:w-[20%] sm:float-left lg:max-w-48 sm:m-2 m-auto
           bg-gradient-to-br from-primary to-pink-300' />
        I’m <b className='text-primary text-xl'>Satya Narayan Dharua</b> an aspiring Full Stack Web Developer  with a strong interest in building clean, modern, and user-friendly websites with backend integration.
        I hold a Bachelor’s in Computer Applications (BCA)  and a Master’s in Computer Applications (MCA). My background has given me a solid foundation
        in programming, problem-solving, and software design. I focus primarily on frontend technologies like HTML, CSS, JavaScript, React, React native,
        Tailwind CSS and backend technologies like node js, express js, while also exploring python programming language for backend development to
        become a well-rounded full-stack developer. Currently, I believe every project is a chance to learn and improve. I aim to build meaningful
        digital experiences  that help people and businesses thrive in the digital world. With curiosity as my guide, I’m always ready for new challenges.
      </p>
      <button className='flex m-auto items-center btn btn-primary'><BiDownload size={30} /> Resume</button>
    </div>
  )
}
