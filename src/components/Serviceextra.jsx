import React from 'react'
import Cont from '../assets/Cont.jpeg'
import service_various from '../assets/service_various.webp'
import bg2 from '../assets/bg2.jpg'

const Serviceextra = () => {
    return (
        <div className='min-h-screen'>
            <div className='relative h-screen bg-fixed bg-cover text-center  bg-center ' style={{ backgroundImage: `url(${bg2})` }}>
                <div className='  justify-center text-white'>
                    <div className=' flex flex-col items-center justify-center absolute inset-0  bg-black/80'>
                        <h1 className='relative z-10 text-5xl pb-6 font-bold text-center px-4'>NestSecure Services</h1>
                        <h3 className='text-2xl pb-20  '>Our 3 Levels of Smart Home Automation Services</h3>

                        <div className=' grid sm:grid-cols-3 sm:gap-3 '>
                            <div className='sm:w-96 sm:h-96  '>
                                <div className=' w-96 h-64 rounded-t-3xl ' style={{ backgroundImage: `url(${Cont})` }}>
                                </div>
                                <div className='w-96 h-52 text-start p-8 bg-white text-black'>
                                    <h1 className=' text-xl font-semibold pb-4'>Heading</h1>
                                    <p > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam suscipit fuga vel exer0citationem.</p>
                                </div>
                            </div>

                            <div className='w-96 h-96 '>
                                <div className=' w-96 h-64 rounded-t-3xl ' style={{ backgroundImage: `url(${Cont})` }}>
                                </div>
                                <div className='w-96 h-52 text-start p-8 bg-white text-black'>
                                    <h1 className=' text-xl font-semibold pb-4'>Heading</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam suscipit fuga vel exer0citationem.</p>
                                </div>
                            </div>

                            <div className='w-80 h-96'>
                                <div className=' w-96 h-64 rounded-t-3xl' style={{ backgroundImage: `url(${Cont})` }}>
                                </div>
                                <div className=' w-96 h-52 p-8 text-start bg-white text-black'>
                                    <h1 className=' text-xl font-semibold pb-4'>Heading</h1>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laboriosam suscipit fuga vel exer0citationem.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Serviceextra