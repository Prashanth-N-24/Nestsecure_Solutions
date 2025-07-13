import React from 'react'

const Why = () => {
    return (
        <div name="WhyUs" className='w-full h-[130vh] sm:h-[95vh] pt-[80px] sm:pt-28 '>
            
            <div className='flex justify-center'>
                <h2 className='sm:text-5xl text-4xl  text-black font-bold border-b-4 border-yellow-300 inline '>Why Nestsecure ?</h2>
            </div>

            <div className='sm:py-20 py-8 gap flex justify-center gap-2  sm:flex-row flex-col'>

                <img className=' sm:w-[36vw] sm:h-[52vh] h-[28vh] w-[88vw] ml-5  rounded-2xl bg-contain' src="src/assets/WhyNS.jpg" alt="why" />

                <div className='sm:ml-0 ml-10  w-[80vw] sm:w-[36vw] sm:h-[52vh]  sm:pl-20 py-2  sm:flex sm:flex-col sm:justify-center '>
                    <h3 className='py-2 font-semibold text-xl' > Advanced Security Technology </h3>
                    <p className='max-w-lg pb-6 text-gray-600 text-sm text-justify'>At NestSecure, we offer the latest CCTV systems equipped with high-resolution imaging, night vision, and smart motion detection. Our technology ensures 24/7 surveillance, keeping your home or business protected at all times. </p>
                    <h3 className='py-2 font-semibold text-xl' >Expert Installation & Reliable Support </h3>
                    <p className='max-w-lg pb-6 text-gray-600 text-sm text-justify'>Our certified technicians handle everything from planning to installation with precision. Plus, you get dedicated post-installation support and maintenance to ensure your systems run smoothly without interruptions. </p>
                    <h3 className='py-2 font-semibold text-xl' >Affordable & Custom Solutions </h3>
                    <p className='max-w-lg pb-6 text-gray-600 text-sm text-justify'>We understand that every property is unique. That’s why we provide tailored security packages to match your budget and requirements — with no compromise on quality or performance. </p>
                </div>
            </div>
        
        </div>
    )
}

export default Why