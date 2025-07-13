import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from 'framer-motion'; // Import Framer Motion

// import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'

const Main = () => {
    return (
        <div name="home" className=''>

            <div className=" relative w-full h-[100vh] bg-fixed bg-cover brightness-[50%] px-4 pt-10 bg-center flex items-center justify-center  " style={{ backgroundImage: `url(${bg2})` }}></div>

            <div>
                <div className='flex  sm:flex ' >

                    <p className='sm:pl-[29%] px-10 font-bold text-[20px] absolute top-[15%] text-white  text-center sm:text-center 
                sm:text-[30px] sm:top-[17%]  sm:ml '>
                    
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="font-bold text-4xl sm:text-7xl mb-6"
                        >
                            Welcome to <br></br>Nestsecure Solutions
                        </motion.h1>
                    </p>

                    <p className='px-16 font-bold text-xl absolute top-[50%] text-center  text-white 
                sm:text-4xl sm:top-[55%] sm:max-w-4xl sm:ml'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="font-bold text-xl sm:text-4xl mb-4"
                        >
                            Your Trusted Partner in Safety & Surveillance
                        </motion.p>
                    </p>

                    <p className='sm:px-16 px-4 font-thin  text-base  absolute top-[56%] text-white text-justify sm:text-lg sm:top-[66%] sm:max-w-4xl sm:ml'>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="font-thin text-base sm:text-lg mb-8"
                        >
                            At NestSecure Solutions, we specialize in providing advanced security systems tailored to protect your home and business. From high-definition CCTV installations to reliable alarm systems, our solutions are designed to offer round-the-clock protection and peace of mind. With a focus on quality, reliability, and customer satisfaction, we are committed to making your world safer—one camera at a time.
                        </motion.p>
                    </p>

                    {/* <AnimatedContent /> */}

                </div>

                 <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="font-thin text-base sm:text-lg mb-8"
                >

                <div className='flex flex-col sm:flex-row text-center justify-center sm:justify-start  items-center  max-w-screen-md  sm:ml-16 '>

                    <ScrollLink
                        to="service"
                        smooth={true}
                        duration={500} className='group flex  top-[88%] sm:top-[85%]  absolute rounded-md sm:px-6 px-5 sm:py-3 py-2 items-center w-fit border text-white hover:bg-white hover:text-black cursor-pointer duration-200 '>
                        Learn more
                        <span className='group-hover:rotate-90 duration-200'>
                            <MdOutlineKeyboardArrowRight size={25} />
                        </span>
                    </ScrollLink>
                </div>
                            </motion.p>
            </div>
        </div>

    )
}

export default Main
