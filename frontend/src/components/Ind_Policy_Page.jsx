import React, { useEffect, useState } from 'react'
import id_img from '../images/Ind_policy/id.png'
import Overview from './Policy_Components/Overview'
import KeyAdvantage from './Policy_Components/KeyAdvantage'
import HowThisWorks from './Policy_Components/HowThisWorks'
import Eligibility from './Policy_Components/Eligibility'
import Downloads from './Policy_Components/Downloads'
import { useLocation, useParams } from 'react-router-dom'
import Bot from './Policy_Components/Bot'

const Ind_Policy_Page = () => {

  const [idSelector, setIdSelector] = useState('1')

  const { id } = useParams()
  const location = useLocation()
  const head = location.state.heading

  useEffect(() => {
    console.log(id);
  },[id])

  const handleComponentChange = (idv) => {
    setIdSelector(idv)
  }

  return (
    <>
        <section className='h-[330vh] w-full bg-[#0072BC]'>
            <div className='flex justify-center items-center h-[330vh]'>
                <div className='bg-white w-11/12 h-[315vh] rounded-[2rem] flex items-center flex-col'>
                    <div className='bg-[#0072BC] h-auto w-5/6 rounded-[2rem] mt-[3.5rem] flex'>
                        <div className='flex flex-col px-16 py-12'>
                            <div className='text-[1.8rem] font-semibold text-white'>{head}</div>
                            <div className='mt-1 text-[#f89c30] text-[1.3rem] font-semibold'>A Non-Linked, Participating, Life Insurance Plan</div>
                            <div className='pl-5'>
                                <ul className='mt-2 list-disc text-[1.3rem] text-white'>
                                    <li>Guaranteed maturity benefit and guaranteed additions</li>
                                    <li>Three cash installment options</li>
                                    <li>Ride benefits to enhance coverage</li>
                                    <li>Multiple premium payment and policy term options</li>
                                </ul>
                            </div>
                            <div className='grid grid-cols-2 mt-5'>
                                <div className='flex flex-col'>
                                    <div className='text-[1.5rem] underline font-bold text-[#f89c30]'>Download Brochure</div>
                                    <div className='text-white'>9499 KB</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-[1.5rem] underline font-bold text-[#f89c30]'>Download Policy Document</div>
                                    <div className='text-white'>9499 KB</div>
                                </div>
                            </div>
                            <div className='mt-5'><button className='text-white bg-[#f89c30] w-[10rem] h-[2.5rem] font-semibold rounded-lg cursor-pointer hover:bg-white hover:text-[#f89c30] border-2 border-[#f89c30] transition-all duration-300'>BUY ONLINE</button></div>
                        </div>
                        <div></div>
                    </div>

                    {/* <div className='flex justify-center w-full items-center'><Bot /></div> */}

                    {/* Navbar */}

                    <div className='flex justify-evenly w-full flex-col'>
                    <div><Bot /></div>
                    <div>
                        <div className='mt-20 text-[1.7rem]'>                       
                            <ul className='flex justify-evenly gap-x-12'>
                                <li><i class="bi bi-caret-left-fill text-[#f89c30]"></i></li>
                                <li><button id='1' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Overview</button></li>
                                <li><button id='2' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Key Advantage</button></li>
                                <li><button id='3' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>How this works</button></li>
                                <li><button id='4' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Eligibility</button></li>
                                <li><button id='5' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Downloads</button></li>
                                <li><i class="bi bi-caret-right-fill text-[#f89c30]"></i></li>
                            </ul>                    
                        </div>
                        {idSelector === '1' && <>
                        {/* <div className='flex justify-center w-full items-center mt-16'> */}
                            <Overview />
                        {/* </div> */}
                    </>}

                    {idSelector === '2' && <>
                        {/* <div className='flex justify-center w-full items-center mt-16'> */}
                            <KeyAdvantage />
                        {/* </div> */}
                    </>}

                    {idSelector === '3' && <>
                        {/* <div className='flex justify-center w-full items-center mt-16'> */}
                            <HowThisWorks />
                        {/* </div> */}
                    </>}

                    {idSelector === '4' && <>
                        {/* <div className='flex justify-center w-full items-center mt-16'> */}
                            <Eligibility />
                        {/* </div> */}
                    </>}

                    {idSelector === '5' && <>
                        {/* <div className='flex justify-center w-full items-center mt-16'> */}
                            <Downloads />
                        {/* </div> */}
                        </>
                    }
                    </div>
                        
                    </div>

            
                    {/* <div className='mt-20 text-[1.7rem]'>                       
                            <ul className='flex justify-evenly gap-x-12'>
                                <li><i class="bi bi-caret-left-fill text-[#f89c30]"></i></li>
                                <li><button id='1' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Overview</button></li>
                                <li><button id='2' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Key Advantage</button></li>
                                <li><button id='3' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>How this works</button></li>
                                <li><button id='4' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Eligibility</button></li>
                                <li><button id='5' className='hover:text-[#f89c30] hover:underline' onClick={(e) => handleComponentChange(e.target.id)}>Downloads</button></li>
                                <li><i class="bi bi-caret-right-fill text-[#f89c30]"></i></li>
                            </ul>                    
                    </div>

                    {idSelector === '1' && <>
                        <div className='flex justify-center w-full items-center mt-16'>
                            <Overview />
                        </div>
                    </>}

                    {idSelector === '2' && <>
                        <div className='flex justify-center w-full items-center mt-16'>
                            <KeyAdvantage />
                        </div>
                    </>}

                    {idSelector === '3' && <>
                        <div className='flex justify-center w-full items-center mt-16'>
                            <HowThisWorks />
                        </div>
                    </>}

                    {idSelector === '4' && <>
                        <div className='flex justify-center w-full items-center mt-16'>
                            <Eligibility />
                        </div>
                    </>}

                    {idSelector === '5' && <>
                        <div className='flex justify-center w-full items-center mt-16'>
                            <Downloads />
                        </div>
                    </>} */}

                    <div className='flex flex-col justify-start w-full px-[9.5rem]'>
                        <div className='text-[2.4rem] font-semibold'> <span className='text-[#f89c30]'>Documents you'll need</span> <span className='text-gray-400'>before investing</span></div>
                        <div className='flex gap-x-20 flex-wrap mt-10'>
                            <div className='flex flex-col'>
                                <div><img src={id_img} alt="id" className='w-[12rem]' /></div>
                                <div>ID Proof</div>
                            </div>
                            <div className='flex flex-col'>
                                <div><img src={id_img} alt="id" className='w-[12rem]' /></div>
                                <div>Age Proof</div>
                            </div>
                            <div className='flex flex-col'>
                                <div><img src={id_img} alt="id" className='w-[12rem]' /></div>
                                <div>Address Proof</div>
                            </div>
                            <div className='flex flex-col'>
                                <div><img src={id_img} alt="id" className='w-[12rem]' /></div>
                                <div>Recent Photograph</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                
        </section>
    </>
  )
}

export default Ind_Policy_Page