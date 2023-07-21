import React from 'react'
import { Link } from 'react-router-dom'

const PolicyPage = () => {
  return (
    <>
        <section className='h-auto w-full bg-primary'>
            <div className='flex px-28 py-24'>
                <div className='w-3/4'>
                <div className='text-[4rem] font-semibold'>
                        <div className='text-white'>Get Covered, Get Confident</div>
                        <div> <span className='text-secondary'>Your Path to Insurance <br /> Security</span></div>
                    </div>
                    <div className='text-white mt-7 text-[1.45rem] w-11/12 text-justify'>Explore our user-friendly platform designed for easy browsing of insurance policies. Discover a comprehensive range of coverage options tailored to your unique needs. Whether it's health, home, auto, or more, we provide a diverse selection of policies. Gain peace of mind by comparing features, benefits, and pricing. With our intuitive interface and informative policy details, you can make informed decisions. Start browsing now and find the perfect insurance policy to protect what matters most to you</div>
                    <div className='flex flex-col gap-y-5 mt-7'>
                        <Link to={'/'} className='rounded-full text-3xl bg-secondary text-white font-semibold w-11/12 hover:bg-secondary h-16 flex justify-center items-center'>Enter your details</Link>                                              
                    </div>
                    <div className='mt-6 flex gap-x-5 justify-center w-11/12'>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-white opacity-80' /></div>
                            <span className='font-semibold text-white text-[1.15rem]'>OR</span>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-white opacity-80' /></div>
                    </div>
                    <div className='flex flex-col gap-y-5 mt-7'>
                        <button className='rounded-full text-[2rem] text-[#f89c30] underline font-semibold w-11/12 hover:text-[#ef8711] h-8 flex justify-center items-center'>Browse all policies</button>                                              
                    </div>
                </div>
                <div>
                    {/* img */}
                </div>
            </div>
        </section>
    </>
  )
}

export default PolicyPage
