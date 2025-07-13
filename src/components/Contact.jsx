import React from 'react'
import Cont from '../assets/Cont.jpeg'
import bg1 from '../assets/bg1.jpg'

const Contact = () => {

    return (

        // <div name="contact us" className="w-full sm:h-[90vh] h-[100vh] sm:bg-cover sm:bg-center ">
         <div name="contact" className=""> 
            {/* <div className=' relative h-screen text-white flex flex-col bg-fixed brightness-50 sm:flex sm:flex-col  items-center w-full ' style={{ backgroundImage: `url(${Cont})`}}>
              */}
            <div className=" relative sm:h-[100vh] h-[105vh]   bg-fixed bg-cover px-4 pt-2 bg-center flex items-center justify-center "
                style={{ backgroundImage: `url(${bg1})` }}>
                <div>
                    <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay */}
                    <h1 className="relative z-10 text-white sm:text-5xl text-4xl font-bold  text-center px-4 pb-2 ">
                        Contact Us</h1>
                    <p className='relative z-10 text-white text-lg font-bold text-center sm:pb-14 pb-4      px-4'>Submit the form below to get in touch with us.</p>

                    <div className='bg-white text-black relative z-10 flex justify-center  rounded-3xl'>
                        <form action="https://getform.io/f/ajjowgwa" method='POST' className=' px-5 py-8 sm:px-12 sm:py-6 flex flex-col w-full '>

                            <label className='text-black text-sm' for="name" class="block" >Your First Name*    </label>
                            <input className='sm:w-[65vh] py-2 px-3 sm:px-4 sm:py-3 mb-4 rounded-lg border-2 border-gray-400' type="text" name="name" placeholder='Enter your name' />

                            <label className='text-black text-sm' for="phone_number" class="block">Phone Number*    </label>
                            <input className=' py-2 px-3 sm:px-4 sm:py-3 mb-4 flex  rounded-lg border-2 border-gray-400' type="text" name="phone_number" placeholder='Enter your name' />

                            <label className='text-black text-sm' for="email" class="block">Your Email Address*    </label>
                            <input className=' py-2 px-3 sm:px-4 sm:py-3 mb-4 rounded-lg border-2 border-gray-400' type="text" name="email" placeholder='Enter your name' />

                            <label className='text-black text-sm' for="message" class="block">Your Message*    </label>
                            <textarea sm:rows="4" rows="3" className=' py-3 sm:px-4 sm:py-2 mb-4 rounded-lg border-2 border-gray-400' name="message" placeholder='Type your message here' id=""></textarea>

                            <div className='flex  justify-center'>
                                <button className=' px-12 py-2 sm:px-16 sm:py-3 mb-4 rounded-full hover:bg-yellow-500 hover:text-white hover:font-semibold border-2 border-gray-400 ' type="submit">Submit Your Request</button>
                            </div>
                        </form>
                    </div></div>
            </div>
        </div>
    )
}

export default Contact

// bg-[#00796B]
