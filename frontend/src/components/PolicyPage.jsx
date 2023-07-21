import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom'
import instagram from '../images/policy/instagram.jpeg'
import facebook from '../images/logos/facebook.png'
import linkedin from '../images/policy/linkedin.png'
import yt from '../images/policy/yt.jpg'
import download from '../images/policy/download.jpg'
import twitter from '../images/policy/twitter.png'

const PolicyPage = () => {
  return (
    <>
        <section className='h-auto w-full bg-primary'>
            <div className='flex'>
                <div className='w-3/4 px-20 py-24'>
                <div className='text-[4rem] font-semibold'>
                        <div className='text-white'>Get Covered, Get Confident</div>
                        <div> <span className='text-secondary'>Your Path to Insurance <br /> Security</span></div>
                    </div>
                    <div className='text-white mt-7 text-[1.45rem] w-11/12 text-justify'>Explore our user-friendly platform designed for easy browsing of insurance policies. Discover a comprehensive range of coverage options tailored to your unique needs. Whether it's health, home, auto, or more, we provide a diverse selection of policies. Gain peace of mind by comparing features, benefits, and pricing. With our intuitive interface and informative policy details, you can make informed decisions. Start browsing now and find the perfect insurance policy to protect what matters most to you</div>
                    <div className='flex flex-col gap-y-5 mt-10'>
                        <Link to={'/policy-form'} className='rounded-full text-3xl bg-secondary text-white font-semibold w-11/12 hover:bg-secondary h-16 flex justify-center items-center'>Enter your details</Link>                                              
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
                <div className='1/4 w-[90rem] h-[50rem] py-24 mt-20 flex justify-center'>
                <Swiper
                loop={true}
        mousewheel={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}        
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>        
      </Swiper>
                </div>
            </div>
        </section>

        <section className='h-auto mb-10 w-full bg-white'>
                <div className='flex p-10 gap-x-4'>
                    <div className='w-3/4'>
                        <div className='text-[1.35rem] font-semibold'>BEWARE OF SPURIOUS PHONE CALLS ND FICTITIOUS / FRAUDULENT OFFERS!</div>
                        <div className='ml-5 mt-4 text-[1.09rem]'><ul className='list-disc'><li>IRDAI is not involved in activites like selling insurance policies, announcing bonus or investment of premiums. Public receiving such phone calls are requested to lodge a police complaint</li></ul></div>
                        <div className='flex gap-x-5 mt-6 text-[1.19rem]'>
                            <div><button className='w-[21rem] h-[3rem] bg-gray-300'>IRDAI Public Notice on Spurious calls</button></div>
                            <div><button className='w-[14rem] h-[3rem] bg-gray-300'>Fraud Prevention Tips</button></div>
                            <div><button className='w-[15rem] h-[3rem] bg-gray-300'>Fraud Awareness Booklet</button></div>
                        </div>
                    </div>
                    <div className='flex flex-col ml-5'>                      
                            <div className='font-semibold text-[1.35rem]'>Follow Us On</div>
                            <div className='flex gap-x-7 mt-5'>
                                <div><img src={facebook} alt="facebook" className='max-w-[2rem]' /></div>
                                <div><img src={twitter} alt="twitter" className='max-w-[2rem] mt-1' /></div>
                                <div><img src={yt} alt="youtube" className='max-w-[2rem]' /></div>
                                <div><img src={instagram} alt="instagram" className='max-w-[2rem]' /></div>
                                <div><img src={linkedin} alt="linkedin" className='max-w-[2rem]' /></div>
                            </div>  
                            <div className='font-bold mt-2 text-[1.45rem]'>Download Life Assist-</div>                  
                            <div className='font-bold text-[1.45rem]'>Customer Portal App</div>
                            <div className='mt-4'><img src={download} alt="download" className='w-[25rem]' /></div>                  
                    </div>
                </div>
                    <div className='flex justify-center items-center mt-5'><hr className='w-11/12 h-[0.2rem] rounded-3xl bg-zinc-600 opacity-30' /></div>
                    <div className='flex flex-col gap-y-4 text-[1.15rem] mt-10 justify-center items-center'>
                        <div>&copy; Bajaj Allianz Life Insurance Co. Ltd. All Rights Reserved. | IRDAI Reg. No. 116 | An ISO 9001:2015 and ISO 27001:2013 Certified IT Department</div>
                        <div>CIN: U66010PN2001PLC015959 | Registered Office Address: Bajaj Allianz House, Airport Road, Yerawada, Pune-411006, Maharashtra</div>
                        <div>Email: customercare@bajajallianz.co.in | Fax no.: 020 66026789 | Tollfree: 1800 209 7272,</div>
                        <div>Disclaimer: Images used on this website and the models photographed in them are for representative purposes only and are not indicative of anyone's personal thoughts or ideas</div>
                        <div>The Logo of Bajaj Allianz Life Insurance Co. Ltd. is provided on the basis of license given by Bajaj Finserv Ltd. to use its "Bajaj" Logo and Allianz SE to use "Allianz" logo.</div>
                        <div>Website Compatible Browsers: IE11, Firefox, Safari, Opera, Chrome</div>
                    </div>                   
        </section>
    </>
  )
}

export default PolicyPage
