import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import photo from '../assets/remove-home-page.png';
import { useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import Resume from '../assets/sameer ahamed.resume.png'

const MainPage = () => {
  const comp = useRef(null)
  useLayoutEffect(() =>{
    let ctx = gsap.context(()=> {
      const tl = gsap.timeline()
      
      tl.fromTo("#anime",{
        x:-100,
        opacity:0,

      },{
        x:0,
        opacity:1,
        duration:1.3,
      })
      tl.fromTo("#image",{
        x:100,
        opacity:0,

      },{
        x:0,
        opacity:1,
        duration:1.3,
      })
    } ,comp)
    
  },[])
  return (
    <section className='min-h-[85vh] flex items-center lg:min-h-[78vh] lg:px-[8rem] mt-[30px]' id='home' ref={comp}>
      <div className="container mx-auto text-white">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:text-left' >
            <div className="text" id="anime">
              <div className='flex-1 text-center font-secondary lg:text-left'>
                <h1  className='text-[50px] font-bold leading-[0.8] lg:text-[110px] '>Sameer <span>Ahamed</span></h1>
                <div className='mt-6 text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4'>Iam a</span>
             <TypeAnimation
             sequence={[
              'developer...',
              2000,
              'Designer...',
              2000,
              'student..',
              2000,
             ]}
             speed={30} 
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
             /> 
            </div>
            <p className=' font-bold text-[19px] mt-6 max-w-lg mx-auto lg:mx-0 capitalize'>Embracing the world of web development fuels my passion as a college student. </p>
              <div className='py-[20px] w-max-lg'>
                <button className='btn  rounded-xl px-6 py-1 text-white font-bold pb-[8px] text-[20px]'> <a href={Resume} target='blank'>resume</a></button>
                
              </div>
              
              <div className='flex text-[40px] gap-x-[3rem] max-w-max mx-auto lg:mx-0 '>
              <a href="https://github.com/sameer-del" target='blank'>
              <i class='bx bxl-github' ></i>
              </a>
              <a href="https://www.linkedin.com/in/sameer-ahamed-0b671027a/" target='blank'>
              <i class='bx bxl-linkedin-square' ></i>
              </a>
              <a href="https://www.instagram.com/sxmeer_xhxmed_?igshid=YzVkODRmOTdmMw==" target='blank'>
              <i class='bx bxl-instagram-alt' ></i>
              </a>
              </div>
              
              </div>
             
            </div>
            <div id='image'>
              <img src={photo} alt="" />
             </div>
        </div>
      </div>


    </section>
  )
}

export default MainPage