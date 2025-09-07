import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'
import image from './assets/satya.png';
import { useValues } from './GlobalContexts';

export default function Home() {
  const { home, contacts, } = useValues();
  function scrollPage(el) {
    el.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <section ref={home} className='max-w-5xl p-3 pt-13 m-auto'>

      <div className='font-bold'>
        <div className='text-3xl sm:text-4xl md:text-5xl my-3'>Hi,</div>
        <div className='text-3xl sm:text-4xl md:text-5xl'>
          <span>I'm </span>
          <span className='text-primary'>Satya Narayan Dharua</span>
        </div>
        <div className='my-3'>Fullstack Web Developer</div>
      </div>

      <div className='flex gap-5 items-center'>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://www.linkedin.com/in/satya-narayan-dharua-4992b7174"><FaLinkedin size={30} /></a>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://github.com/SatyShrey"><FaGithub size={30} /></a>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://www.facebook.com/narayan.dharua"><FaFacebook size={30} /></a>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className="w-80 m-auto my-5 max-w-4/5 overflow-hidden rounded-full shadow-primary shadow-[0_4px_10px]">
          <img src={image} alt="profile_pic" className='hover:scale-[1.3] transition-all duration-600' />
        </div>

        <button onClick={() => scrollPage(contacts)}
          className="h-11 w-36 flex items-center border-1 border-primary rounded-full overflow-hidden relative justify-center 
          cursor-pointer after:absolute after:w-0 after:rounded-full after:top-0 after:bottom-0 after:transition-all after:duration-500
         after:left-0 after:bg-primary hover:after:w-36 before:content-['Contact_me'] before:z-[1] hover:text-white transition-all"/>

      </div>

    </section>
  )
}
