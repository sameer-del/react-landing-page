import React from 'react'

const Header = () => {
 
  return (
    <div className='h-[15vh] flex items-center justify-between lg:px-[8rem]  px-5' id='header'>
        <a href="#" className=' font-Aldrich text-[32px] font-bold  text-white leading-4 uppercase lg:pl-[50px]' id='logo'>sameer</a>
        <button className='btn  lg:mr-16 rounded-xl px-6 py-1 text-white font-bold pb-[8px]' id='btn'><a href="https://sameer-del.github.io/contact-form/" target='blank'>contact</a></button>
    </div>
  )
}

export default Header