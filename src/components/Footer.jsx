import React from 'react'
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <div name="footer" className='bg-zinc-950 text-white '>
    
        <div className='w-full flex flex-col sm:max-w-screen-xl sm:mx-auto items-center pt-4  sm:h-[32vh] h-[36vh]  '>

          <h1 className='pt-2 pl-2 sm:text-5xl text-3xl'>Nestsecure Solutions</h1>

          <p className='pt-2 pb-4 pl-2 text-xl'>Secure Your place.</p>

          <div className='absolutetext-white w-[45vh] sm:w-[150vh] top-20 sm:border-b-4 border-b-4 sm:max-w-7xl  border-y-yellow-800'>   </div>

          <div className='my-4 flex flex-col items-center justify-center sm:flex sm:justify-between'>
            <span className=''>@2024. All rights reserved.</span>

            <div className='social_icons py-0 sm:py-2 max-w-screen-xl sm:flex flex flex-row'>
              <span className='py-6 px-4 sm:py-3 sm:px-4 scale-110' ><IoLogoInstagram size={20} /></span>
              <span className='py-6 px-4 sm:py-3 sm:px-4 scale-110' ><FaWhatsapp size={20}/></span>
              <span className='py-6 px-4 sm:py-3 sm:px-4 scale-110  ' ><FaLinkedinIn size={20}/></span>
            </div>

            <div>
              <span className='pr-8 '>Terms & Condition</span>
              <span className='pl-2'>Privacy Policy</span>
            </div>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Footer