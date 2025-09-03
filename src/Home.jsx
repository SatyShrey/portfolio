import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'
import image from './assets/satya2.png';
import { useValues } from './GlobalContexts';

export default function Home() {
  const { home, contacts, } = useValues();
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div ref={home} className='min-h-full p-3 pt-13 m-auto max-w-5xl sm:grid grid-cols-2'>

      <div className='font-bold flex flex-col justify-evenly'>
        <div className='text-3xl sm:text-4xl md:text-5xl mb-3'>Hi,</div>
        <div>
          <span className='text-3xl sm:text-4xl md:text-5xl'>I'm </span>
          <span className='bg-gradient-to-r from-primary to-pink-300 bg-clip-text text-4xl sm:text-5xl md:text-6xl text-transparent w-fit'>Satya</span>
        </div>
        <div className='mt-3'>Fullstack Web Developer</div>
        <div className='flex gap-5 items-center mt-3'>
                <a href="https://www.linkedin.com/in/satya-narayan-dharua-4992b7174"><FaLinkedin size={30} /></a>
                <a href="https://github.com/SatyShrey"><FaGithub size={30} /></a>
                <a href="https://www.facebook.com/narayan.dharua"><FaFacebook size={30} /></a>
        </div>
      </div>

      <div className='text-center flex flex-col justify-evenly gap-5 items-center'>
        <img src={image} alt="profile_pic" className='w-80 m-auto mt-3 max-w-4/5 rounded-full bg-gradient-to-r from-primary to-pink-300' />
        <button onClick={() => scrollPage(contacts)} className='btn btn-primary'>Contact me</button>
      </div>

    </div>
  )
}
