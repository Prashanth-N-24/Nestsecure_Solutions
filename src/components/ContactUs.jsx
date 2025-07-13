import React from 'react'
import Map from "./Map";

const ContactUs = () => {
    return (
        <div name='contact' className='w-full max-w-screen-xl mx-auto  sm:h-[65vh] h-[105vh] relative'>
            <div className='flex flex-col text-center items-center sm:text-left sm:flex-row'>
                <div className='items-center sm:mt-16 mx-10  w- sm:w-[40vW] sm:h-[52vh]'>
                    <h1 className='sm:text-5xl text-4xl font-bold pt-10 pb-4 sm:pt-0 sm:pb-3 '>Our Location</h1>
                    <p className='max-w-md text-gray-700 sm:pb-8 pb-4'>Reach out to us for security that enhance your living experience and provide unmatched convenience and security.</p>
                    <h2 className=' Sm:pb-1 font-bold'>Address</h2>
                    <p className=' text-gray-700 sm:px-0 sm:pr-10 px-10 max-w-md  flex pb-3'>{'#19/19, Billapura Village, Sarjapura Post,\n Anekal Taluk, Bangalore - 562125'}</p>
                    <h2 className=' Sm:pb-1 font-bold'>Phone</h2>
                    <p className=' text-gray-700 pb-3'> +91 8123972747</p>
                    <h2 className=' Sm:pb-1 font-bold'>Email ID</h2>
                    <p className=' text-gray-700 pb-3'>nestsecuresolutions@gmail.com</p>
                    <h2 className=' Sm:pb-1 font-bold'>Hours</h2>
                    <p className=' text-gray-700 pb-3'>9AM - 6PM</p>
                </div>

                <div className="mt-5 border-2 sm:border-4    border-yellow-500 items-center rounded-xl  bg-gray-100">
                    <iframe className=' w-[90vw] h-[30vh] sm:w-[40vw] sm:h-[50vh] rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.3332004301956!2d77.78595765903437!3d12.837343979322103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73a1e2286377%3A0x69c8193e0093019b!2sNestsecure%20Solutions!5e0!3m2!1sen!2sin!4v1750768633039!5m2!1sen!2sin"     
                 allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                    {/* <h1 className="text-3xl font-bold text-center absolute top-[100%] ">Our Location</h1> */}
            </div>
        </div>
    )
}

export default ContactUs    