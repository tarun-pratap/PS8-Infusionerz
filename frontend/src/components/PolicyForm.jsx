import { Input, InputGroup, InputLeftAddon, Switch } from '@chakra-ui/react'
import React from 'react'
import male from '../images/form/male.png'
import female from '../images/form/female.png'
import trans from '../images/form/trans.png'

const PolicyForm = () => {
  return (
    <>
       <section className='h-[auto] w-full bg-primary'>
            <div className='flex justify-center items-center w-full h-[auto] p-10'>
                <div className='bg-white h-auto rounded-[1rem] flex flex-col w-5/6'>                               
                    <div className='flex flex-col items-center'>
                        <div className='font-bold text-[3.7rem] mt-10 text-primary'>Bajaj SecureFlow</div>
                        <div className='text-[1.7rem] text-secondary font-semibold'>Hassle Free Submission</div>
                    </div>
                    <div className='mt-[5rem]'>
                        <form>
                            <div>
                            <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>1</div> <div>First, tell us about yourself</div></div>
                            <div className='w-full h-auto mt-5'>
                                <div className='px-28 py-10 ml-10 mr-10' id='name_div'><label className='text-[1.6rem]'>Full Name</label> <br />
                                <Input autoComplete='off' id='name' type='text' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Full Name...' marginTop={'1.5rem'} />
                                </div> 
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Gender</label>
                                    <div className='flex gap-x-10 mt-[1.5rem]'>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='male' colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={male} alt="male" className='w-[3rem]' /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='female' colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={female} alt="female" /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='trans' colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={trans} alt="trans" /></span>
                                        </div>
                                    </div>
                                </div> 
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Mobile Number</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftAddon height={'4rem'} children='+91' />
                                        <Input autoComplete='off' id='mobile' type='number' width={'76%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Phone Number...' />
                                    </InputGroup>                                                                       
                                </div>
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Date of Birth</label> <br />
                                    <Input autoComplete='off' id='dob' marginTop={'1.5rem'} placeholder="Select Date of Birth..." size="md" type="date" width={'80%'} fontSize={'1.2rem'} height={'4rem'} />
                                </div>                                                                                                                             
                            </div>
                        </div>
                        </form> 
                    </div>
                </div>
                <div className='w-1/6'>
                                            {/* img  */}
                </div>               
            </div>
        </section>
    </>
  )
}

export default PolicyForm
