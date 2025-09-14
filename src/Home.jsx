import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6'
import image from './assets/satya2.png';
import { useValues } from './GlobalContexts';
import BlurText from './BlurText';
import { useState } from 'react';

export default function Home() {
  const { home, contacts, } = useValues();
  const [secondLine, setsecondLine] = useState(false)
  const [thirdLine, setthirdLine] = useState(false)
  const [fourthLine, setfourthLine] = useState(false)

  //scroll page
  function scrollPage(el) { el.current.scrollIntoView({ behavior: "smooth" }); }

  return (
    <section className='max-w-5xl p-3 m-auto relative'>
      <div ref={home} className='absolute -top-40'></div>
      <div className='font-bold min-h-40'>
        <BlurText
          text="Hi,"
          delay={150}
          animateBy="words"
          direction="top"
          className='text-3xl sm:text-4xl md:text-5xl my-3'
          onAnimationComplete={() => setsecondLine(true)}
        />
        {secondLine && <BlurText
          text="I'm"
          delay={150}
          animateBy="words"
          direction="top"
          className='inline text-3xl sm:text-4xl md:text-5xl'
          onAnimationComplete={() => setthirdLine(true)}
        />}
        {thirdLine && <BlurText
          text=" Satya Narayan Dharua"
          delay={150}
          animateBy="words"
          direction="top"
          className='text-primary inline text-3xl sm:text-4xl md:text-5xl'
          onAnimationComplete={() => setfourthLine(true)}
          stepDuration={0.35}
        />}
        {fourthLine && <BlurText
          text="Fullstack Web Developer"
          delay={150}
          animateBy="words"
          direction="top"
          className='my-3 not-sm:mt-1'
        />}
      </div>

      <div className='flex gap-5 items-center'>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://www.linkedin.com/in/satya-narayan-dharua-4992b7174"><FaLinkedin size={30} /></a>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://github.com/SatyShrey"><FaGithub size={30} /></a>
        <a className='hover:scale-[1.2] hover:text-primary' href="https://www.facebook.com/narayan.dharua"><FaFacebook size={30} /></a>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <div className="w-80 m-auto my-5 max-w-[calc(100%-30px)] overflow-hidden rounded-full shadow-primary shadow-[0_4px_10px]">
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
