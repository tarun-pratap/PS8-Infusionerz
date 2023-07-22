import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import r1 from '../images/retirement/r1.jpg'
import r2 from '../images/retirement/r2.jpg'
import r3 from '../images/retirement/r3.jpg'
import Carousel from 'react-elastic-carousel'
import Item from './Item'
import data from '../insurance_data/term_data.json'
import unit_data from '../insurance_data/unit_data.json'
import { Link, useNavigate } from 'react-router-dom'
import f1 from '../images/slideshow/1.png'
import f2 from '../images/slideshow/2.png'
import f3 from '../images/slideshow/3.png'
import f4 from '../images/slideshow/4.png'
import f5 from '../images/slideshow/5.png'

const Hero = () => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const [storeTerm, setStore] = useState(data)
  const [storeUnit, setStoreUnit] = useState(unit_data)
  
  const navigate = useNavigate()

  const head_arr = ['No Data', 'B1', 'B2', 'B3','B4','B5','B6','B7','B8','B9','B10','B11','B12','B13','B14','B15','B16','B17','B18']

  const term_btn = (idv) => {    
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  const unit_btn = (idv) => {   
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  const retire_btn = (idv) => {  
    navigate(`ind-policy-page/${idv}`, {
        state: {
            heading: head_arr[idv]
        }
    })
  }

  return (
    <>
        <section className='h-[400vh] bg-[#0072BC]'>
            <div className='flex p-32'>
                <div className='w-1/2'>
                    <div className='text-[4rem] font-semibold'>
                        <div className='text-white'>Unlocking</div>
                        <div><span className='text-white'>Smart predictions</span> <br /> <span className='text-[#f89c30]'>Your ideal policy</span></div>
                    </div>
                    <div className='flex flex-col gap-y-5 mt-10'>
                        <div><Link to={'/new-user-register'} className='rounded-full text-3xl bg-[#f89c30] text-white font-semibold w-[33rem] hover:bg-[#ef8711] h-16 flex justify-center items-center'>New User</Link></div>
                        <div><Link to={'/login-user'} className='rounded-full text-3xl bg-[#f89c30] text-white font-semibold w-[33rem] hover:bg-[#ef8711] h-16 flex justify-center items-center'>Existing User</Link></div>
                    </div>
                </div>
                
                <div className='w-1/2'>
                <Swiper pagination={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Pagination, Autoplay]} loop={true} className="mySwiper">
        <SwiperSlide><img src={f1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={f5} alt="" /></SwiperSlide>     
      </Swiper>  
                </div>              
            </div>

            {/* Product */}

           <div className='flex justify-center'>
            <section className='rounded-[3.5rem] bg-white h-[300vh] w-11/12'>
                <div className='flex justify-center flex-col items-center'>

                {/* Head */}

                    <div className='font-semibold text-[3rem] mt-20'>
                        <span className='text-[#0072BC]'>Bajaj Allianz</span> <span className='text-[#f89c30]'>Life Insurance Products</span>
                    </div>

                {/* Term Insurance Plans */}

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Term Insurance Plans</div>
                    <div className='text-[1.45rem] mt-4'>Term plans provide comprehensive coverage at affordable rates, ensuring that your loved ones  continue to pursue their life goals even in your absence.</div>
                    <div className='h-[70vh] w-[100rem] mt-[5rem]'>
                        <Carousel breakPoints={breakPoints} pagination={false}>
                        {storeTerm.map((v, i) => {
                            return (
                                <>
                                    <Item>
                                    <div>
                                        <div><img src={require(`../images/term/${v.img}.jpg`)} alt="term_1"  className='w-[19rem]'/></div>
                                        <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                            <div className='text-[#0062a8] text-[1.5rem]'>Bajaj Allianz Life</div>
                                            <div className='text-[#0062a8]'>{v.desc}</div>
                                            <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id={v.id} onClick={(e) => term_btn(e.target.id)}>VIEW MORE</button></div>
                                        </div>
                                    </div> 
                                    </Item>
                                </>
                            )
                        })}                                                                        
                            
                        </Carousel>
                    </div>
                </div>

                {/* Unit Linked Insurance Plans */}

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Unit Linked Insurance Plans</div>
                    <div className='text-[1.45rem] w-11/12 mt-4 text-center'>The new-age Unit Linked Insurance Plans enable you invest systematically over long term to help you meet your long-term life goals. Take advantage of the combination of wealth creation and protection in a single plan. Tax benefit is the cherry on the top.</div>
                    <div className='h-[70vh] w-[100rem] mt-[5rem]'>
                        <Carousel breakPoints={breakPoints} pagination={false}>
                        {storeUnit.map((v, i) => {
                            return (
                                <>
                                    <Item>
                                    <div>
                                        <div><img src={require(`../images/unit/${v.img}.jpg`)} alt="term_1"  className='w-[19rem]'/></div>
                                        <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                            <div className='text-[#0062a8] text-[1.5rem]'>Bajaj Allianz Life</div>
                                            <div className='text-[#0062a8]'>{v.desc}</div>
                                            <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id={v.id} onClick={(e) => unit_btn(e.target.id)}>VIEW MORE</button></div>
                                        </div>
                                    </div> 
                                    </Item>
                                </>
                            )
                        })}                                                                        
                            
                        </Carousel>
                    </div>
                </div>

                {/* Retirement Plans */}

                <div className='mt-10 flex flex-col justify-center items-center'>
                    <div className='text-[2rem] font-semibold text-[#0072BC]'>Retirement Plans</div>
                    <div className='text-[1.45rem] mt-4 text-center w-11/12'>Start investing today to build a significant corpus for your retirement. Retirement/pension plans provide you financial security and makes you financially independent even post retirement, so that you enjoy a relaxed and comfortable retired life without compromising on your life goals..</div>
                    <div className='flex flex-row gap-x-8 w-full justify-evenly mt-[5rem]'>
                        <div>
                            <div><img src={r1} alt="retirement_1"  className='w-[19rem]'/></div>
                            <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                <div className='text-[#0062a8] text-[1.5rem]'>Bajaj Allianz Life</div>
                                <div className='text-[#0062a8]'>Guaranteed Pension Goal</div>
                                <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id='16' onClick={(e) => retire_btn(e.target.id)}>VIEW MORE</button></div>
                            </div>
                        </div>
                        
                        <div>
                            <div><img src={r2} alt="retirement_1"  className='w-[19rem]'/></div>
                            <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                <div className='text-[#0062a8] text-[1.5rem]'>Bajaj Allianz Life</div>
                                <div className='text-[#0062a8]'>Saral Pension</div>
                                <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id='17' onClick={(e) => retire_btn(e.target.id)}>VIEW MORE</button></div>
                            </div>
                        </div>

                        <div>
                            <div><img src={r3} alt="retirement_1"  className='w-[15rem]'/></div>
                            <div className='flex flex-col justify-center items-center font-bold mt-4 text-[1.25rem]'>
                                <div className='text-[#0062a8] text-[1.5rem]'>Bajaj Allianz Life</div>
                                <div className='text-[#0062a8]'>Retire Rich</div>
                                <div className='mt-6'><button className='text-white bg-[#f89c30] px-5 py-2.5 flex justify-center items-center rounded-full font-semibold button_slide slide_right' id='18' onClick={(e) => retire_btn(e.target.id)}>VIEW MORE</button></div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
           </div>

        </section>
    </>
  )
}

export default Hero
