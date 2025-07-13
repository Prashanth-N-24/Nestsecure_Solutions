import React from 'react'
import { Link } from 'react-scroll'
import SplashCursor from './SplashCursor'
import Ahd_cam from '../assets/Ahd_cam.webp'
import Ip_cam from '../assets/Ip_cam.jpg'
import Wireless from '../assets/Wireless.jpg'
import Video_door from '../assets/Video_door.jpg'
import Biometric from '../assets/Biometric.jpg'
import Networking from '../assets/Networking.jpg'


const Service = () => {

    const serv = [
        {
            id: 1,
            src: Ahd_cam,
            title: 'CCTV CAMERA',
            para: ' Keep your home or business secure 24/7 with high-quality surveillance.',
            para2:' Monitor live or recorded footage anytime from anywhere.',
            link: ''
        },
       
        {
            id: 2,
            src: Ip_cam,
            title: 'IP CAMERAS',
            para: ' High-resolution cameras connected via the internet for real-time monitoring.',
            para2:'Ideal for remote access, storage, and advanced security features.',
            link: ''
        },
        {
            id: 3,
            src: Wireless,
            title: 'WI-FI CAMERAS',
            para: 'Easy-to-install cameras with wireless connectivity.',
            para2:' Perfect for homes and small offices needing flexible surveillance.',
            link: ''
        },
        {
            id: 4,
            src: Video_door,
            title: 'VIDEO DOOR PHONE',
            para: ' See and talk to visitors before opening your door.',
            para2:'Enhances safety with clear audio and video communication. ',
            link: ''
        },
         {
            id: 5,
            src: Biometric,
            title: 'BIOMETRIC',
            para: ' Secure access with fingerprint, face, or iris recognition.',   
            para2:' Ideal for attendance tracking and restricted entry control.', 
            link: ''
        },

        {
            id: 6,
            src: Networking,
            title: 'NETWORKING',
            para: 'Reliable network setup for homes and businesses.',
            para2:'Includes routers, switches, cabling, and complete network solutions.',
            link: ''
        }
    ]

    return (
        <div name="service" className='w-full sm:h-[105vh]  sm:pt-20 pt-20 '>
            {/* <SplashCursor /> */}
            <div className='flex justify-center'>
                <h2 className='sm:text-5xl text-4xl font-bold border-b-4 border-yellow-300 inline '>Security Services</h2>
            </div>

            {/* <div className='flex sm:mx-40 sm:shadow-xl sm:border-white/90 border'> */}
            <div className='flex max-w-screen-xl mx-auto  sm:shadow-xl sm:border-white/90 border'>
                <div className=' w-full grid grid-cols-1 place-items-center sm:grid-cols-3  py-3 '>
                    {
                        serv.map(({ id, src, title, para, para2, link }) => (
                            <div key={id} className="relative mt-6 mx-2   ">
                                <img className='brightness-50 sm:rounded-2xl rounded-2xl bg-contain sm:w-[24vw] sm:h-[40vh] w-[90vw] h-[32vh] hover:scale-105 duration-500' src={src} alt="" />
                                <div className="absolute bottom-5 left-5 my-4 text-white">
                                    <h1 className="text-2xl font-semibold font-sans ">{title} </h1>
                                    <p className="text-sm  before:content-['•'] py-2">{ para}</p>
                                    <p className="text-sm mb-4 before:content-['•'] py-2">{ para2}</p>
                                    <Link className=" sm:px-11 sm:py-3 px-8 py-2       text-sm font-medium border border-white rounded-full hover:bg-white hover:text-black transition">
                                        See more
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service