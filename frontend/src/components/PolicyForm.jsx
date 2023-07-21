import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, Select, Switch, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import male from '../images/form/male.png'
import female from '../images/form/female.png'
import trans from '../images/form/trans.png'

const PolicyForm = () => {

  // Values   
  const [email, setEmail] = useState('')
  const [pincode, setPincode] = useState('')
  const [address, setAddress] = useState('')
  const [income, setIncome] = useState('')
  const [occupation, setOccupation] = useState('')
  
  // Switch Value
  const [genderValue, setGenderClick] = useState('')
  const [nriswitchValue, setNriSwitchValue] = useState('')  

  const handleGenderSwitchChange = (value) => {
    setGenderClick(value)
  }

  const handleNriSwitchChange = (value) => {
    setNriSwitchValue(value)
  }

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
                                            <Switch id='male' isChecked={genderValue === 'male'} onChange={() => handleGenderSwitchChange('male')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={male} alt="male" className='w-[3rem]' /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='female' isChecked={genderValue === 'female'} onChange={() => handleGenderSwitchChange('female')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={female} alt="female" /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='trans' isChecked={genderValue === 'trans'} onChange={() => handleGenderSwitchChange('trans')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={trans} alt="trans" /></span>
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
                                <div><hr className='w-full h-[0.2rem] rounded-3xl bg-zinc-200 mt-16 opacity-80' /></div>                               
                                <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 mt-10 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>2</div> <div>Second, fill some general details</div></div>      
                                <div className='w-full h-auto mt-10'>
                                <div className='px-28 py-10 ml-10'>
                                    <label className='text-[1.6rem]'>Email Address</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftElement pointerEvents='none' children='@' fontSize={'1.5rem'} marginTop={'0.8rem'}></InputLeftElement>
                                        <Input autoComplete='off' id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Email Address...'/>
                                    </InputGroup>
                                </div> 
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Pincode</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftElement pointerEvents='none'><i class="bi bi-geo-alt-fill text-[1.4rem] mt-5"></i></InputLeftElement>
                                        <Input value={pincode} onChange={(e) => setPincode(e.target.value)} autoComplete='off' id='pincode' type='number' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Pincode...' />
                                    </InputGroup> 
                                </div>                         
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Address</label> <br />
                                    <Textarea autoComplete='off' id='address' placeholder='Enter your Address...' marginTop={'1.5rem'} fontSize={'1.2rem'} width={'80%'} height={'8rem'} value={address} onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Education</label> <br />
                                    <Select id='education' placeholder='Select your Education...' marginTop={'1.5rem'} width={'80%'} fontSize={'1.2rem'} height={'4rem'}>
                                        <option value='option1' fontSize={'1.2rem'}>Higher Secondary</option>
                                        <option value='option2' fontSize={'1.2rem'}>Under Graduate</option>
                                        <option value='option3' fontSize={'1.2rem'}>Phd</option>
                                        <option value='option4' fontSize={'1.2rem'}>Post Graduate</option>
                                    </Select>
                                </div>           
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Annual Income</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <Input autoComplete='off' id='income' type='number' width={'73%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Annual Income...' />
                                        <InputRightAddon height={'4rem'} fontSize={'1.2rem'} children='(in lakhs)' />
                                    </InputGroup> 
                                </div>               
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Occupation</label> <br />
                                    <Input autoComplete='off' id='occupation' type='text' width={'80%'} fontSize={'1.2rem'} height={'4rem'}  marginTop={'1.5rem'} placeholder='Enter your Occupation...' />
                                </div>
                                </div>
                                <div><hr className='w-full h-[0.2rem] rounded-3xl bg-zinc-200 mt-16 opacity-80' /></div>       
                                <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 mt-16 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>3</div> <div>Third, some policy specific questions</div></div>
                                <div className='w-full h-auto mt-10'>
                                <div className='px-28 py-10 ml-10'>
                                    <label className='text-[1.6rem]'>Are you a NRI ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='nri_yes' isChecked={nriswitchValue === 'yes'} onChange={() => handleNriSwitchChange('yes')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='nri_no' isChecked={nriswitchValue === 'no'} onChange={() => handleNriSwitchChange('no')} colorScheme='red' size={'lg'} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div>  
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you a Smoker ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='smoke_yes' colorScheme='green' size={'lg'} isChecked={smokerswitchValue === 'yes'} onChange={() => handleSmokerSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='smoke_no' colorScheme='red' size={'lg'} isChecked={smokerswitchValue === 'no'} onChange={() => handleSmokerSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div>   
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you an existing Bajaj Employee ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='em_yes' colorScheme='green' size={'lg'} isChecked={emswitchValue === 'yes'} onChange={() => handleEmSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='em_no' colorScheme='red' size={'lg'} isChecked={emswitchValue === 'no'} onChange={() => handleEmSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div>  
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you having Diabetes ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='diab_yes' colorScheme='green' size={'lg'} isChecked={diabeteswitchValue === 'yes'} onChange={() => handleDiabetesSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='diab_no' colorScheme='red' size={'lg'} isChecked={diabeteswitchValue === 'no'} onChange={() => handleDiabetesSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
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
