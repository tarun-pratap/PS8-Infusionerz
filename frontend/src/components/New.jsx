import React, { useState, useRef } from 'react'
import male from '../images/form/male.png'
import female from '../images/form/female.png'
import trans from '../images/form/trans.png'
import bot from '../images/form/bot.png'
import { Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, Select, Textarea } from '@chakra-ui/react'
import { Switch } from '@chakra-ui/react'
import axios from 'axios'
import { firestore } from "../firebase"
import { addDoc, collection, getDocs } from "@firebase/firestore"
const listDetails = () =>{
    return getDocs(collection(firestore, "bajajPolicyUserDetails"))
}
const New = () => {

  const [genderValue, setGenderClick] = useState('')
  const [nriswitchValue, setNriSwitchValue] = useState('');
  const [smokerswitchValue, setSmokerSwitchValue] = useState('');
  const [emswitchValue, setEmSwitchValue] = useState('');
  const [diabeteswitchValue, setDiabetesSwitchValue] = useState('');
  const [bloodswitchValue, setBloodSwitchValue] = useState('');
  const [insulinswitchValue, setInsulinSwitchValue] = useState('');
  const [hospitalswitchValue, setHospitalSwitchValue] = useState('');
  const [diabPolicyswitchValue, setDiabPolicySwitchValue] = useState('');

  const fullnameRef = useRef();
  const mobileRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const occupationRef = useRef();
  const incomeRef = useRef();


  const ref = collection(firestore, "bajajPolicyUserDetails")

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const handleNriSwitchChange = (value) => {
    setNriSwitchValue(value);
  };

  const handleSmokerSwitchChange = (value) => {
    setSmokerSwitchValue(value);
  };

  const handleEmSwitchChange = (value) => {
    setEmSwitchValue(value);
  };

  const handleDiabetesSwitchChange = (value) => {
    setDiabetesSwitchValue(value);
  };

  const handleBloodSwitchChange = (value) => {
    setBloodSwitchValue(value);
  };

  const handleInsulinSwitchChange = (value) => {
    setInsulinSwitchValue(value);
  };

  const handleHospitalSwitchChange = (value) => {
    setHospitalSwitchValue(value);
  };

  const handleDiabPolicySwitchChange = (value) => {
    setDiabPolicySwitchValue(value);
  };

  const handleGenderSwitchChange = (value) => {
    //value apan ko pata hai

    setGenderClick(value)
  }

  async function bot_btn(e){
    e.preventDefault()
    const res = await axios.get("/voice-bot")
    setName(res.data.name)
    setEmail(res.data.email)
    setMobile(res.data.mobile)
  }

  const handleSubmitData = async (e) => {
    e.preventDefault();
    console.log(fullnameRef.current.value);
    console.log(mobileRef.current.value);
    console.log(emailRef.current.value);
    console.log(addressRef.current.value);
    console.log(occupationRef.current.value);
    console.log(incomeRef.current.value);

    let data = {
        fullname: fullnameRef.current.value,
        mobileRef: mobileRef.current.value,
        emailRef: emailRef.current.value,
        addressRef: addressRef.current.value,
        occupationRef: occupationRef.current.value,
        incomeRef: incomeRef.current.value,
    }

    try {
        addDoc(ref, data);
        // handleButtonClick()
    } catch (e) {
        console.log(e);
    }
   }

    // const [answer, setAnswer] = useState('');
  
    // const handleButtonClick = async (choice) => {
    //   if (answer !== choice) {
    //     try {
    //       // If the answer is different from the previous choice, update the Firestore
    //       const docRef = await addDoc(collection(firestore, 'tempppp'), {
    //         answer: choice,
    //         timestamp: new Date().toISOString(),
    //       });
    //       console.log('Document written with ID: ', docRef.id);
  
    //       // Update the local state with the latest choice
    //       setAnswer(choice);
    //     } catch (error) {
    //       console.error('Error adding document: ', error);
    //     }
    //   }
    // };

  return (
    <>
        <section className='h-[630vh] w-full bg-[#0072BC]'>
            <div className='flex justify-center items-center w-full h-[620vh] p-10'>
                <div className='bg-white h-[600vh] rounded-[1rem] flex flex-col w-5/6'>                               
                    <div className='flex flex-col items-center'>
                        <div className='font-bold text-[3.7rem] mt-10 text-[#0072BC]'>Bajaj SecureFlow</div>
                        <div className='text-[1.7rem] text-[#f89c30] font-semibold'>Hassle Free Submission</div>
                    </div>
                    <div className='mt-[5rem]'>
    
                        <form onSubmit={(event) => {handleSubmitData(event)}}>
                            <div>
                            <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>1</div> <div>First, tell us about yourself</div></div>
                            <div className='w-full h-auto mt-5'>
                                <div className='px-28 py-10 ml-10 mr-10' id='name_div'><label className='text-[1.6rem]'>Full Name</label> <br />
                                <Input id='name' ref={fullnameRef} value={name} onChange={(e) => setName(e.target.value)} type='text' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Full Name...' marginTop={'1.5rem'} />
                                </div> 
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Gender</label>
                                    <div className='flex gap-x-10 mt-[1.5rem]'>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='male' isChecked={genderValue === 'male'} onChange={(event) => handleGenderSwitchChange('male')}
                                           
                                            colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={male} alt="male" className='w-[3rem]' 
                                   
                                            /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='female' isChecked={genderValue === 'female'}  colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={female} alt="female" /></span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='trans' isChecked={genderValue === 'trans'} onChange={() => handleGenderSwitchChange('trans')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'><img src={trans} alt="trans"/></span>
                                        </div>
                                    </div>
                                  
                                </div> 
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Mobile Number</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftAddon height={'4rem'} children='+91' />
                                        <Input id='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} type='number' width={'76%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Phone Number...' ref={mobileRef} />
                                    </InputGroup>                                                                       
                                </div>
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Date of Birth</label> <br />
                                    <Input  id='dob' marginTop={'1.5rem'} placeholder="Select Date of Birth..." size="md" type="date" width={'80%'} fontSize={'1.2rem'} height={'4rem'} />
                                </div>          
                                </div>  
                                <div><hr className='w-full h-[0.2rem] rounded-3xl bg-zinc-200 mt-16 opacity-80' /></div>                               
                                <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 mt-10 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>2</div> <div>Second, fill some general details</div></div>      
                                <div className='w-full h-auto mt-10'>
                                <div className='px-28 py-10 ml-10'>
                                    <label className='text-[1.6rem]'>Email Address</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftElement pointerEvents='none' children='@' fontSize={'1.5rem'} marginTop={'0.8rem'}></InputLeftElement>
                                        <Input id='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Email Address...' ref={emailRef} />
                                    </InputGroup>
                                </div>                         
                                                       
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Pincode</label> <br />
                                    <InputGroup marginTop={'1.5rem'}>
                                        <InputLeftElement pointerEvents='none'><i class="bi bi-geo-alt-fill text-[1.4rem] mt-5"></i></InputLeftElement>
                                        <Input  id='pincode' type='number' width={'80%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Pincode...' />
                                    </InputGroup> 
                                </div>                         
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Address</label> <br />
                                    <Textarea  id='address' placeholder='Enter your Address...' marginTop={'1.5rem'} fontSize={'1.2rem'} width={'80%'} height={'8rem'} ref={addressRef} />
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
                                        <Input id='income' type='tel' width={'73%'} fontSize={'1.2rem'} height={'4rem'} placeholder='Enter your Annual Income...' ref={incomeRef} />
                                        <InputRightAddon height={'4rem'} fontSize={'1.2rem'} children='(in lakhs)' />
                                    </InputGroup> 
                                </div>               
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Occupation</label> <br />
                                    <Input id='occupation' type='text' width={'80%'} fontSize={'1.2rem'} height={'4rem'} ref={occupationRef} marginTop={'1.5rem'} placeholder='Enter your Occupation...' />
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
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you interested in taking Diabetic Related Policies ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='diab_poly_yes' colorScheme='green' size={'lg'} isChecked={diabPolicyswitchValue === 'yes'} onChange={() => handleDiabPolicySwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='diab_poly_no' colorScheme='red' size={'lg'} isChecked={diabPolicyswitchValue === 'no'} onChange={() => handleDiabPolicySwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div>  
                                </div>  
                                <div><hr className='w-full h-[0.2rem] rounded-3xl bg-zinc-200 mt-16 opacity-80' /></div>
                                {diabPolicyswitchValue === 'yes' ? <>
                                <div className='text-[2.4rem] font-semibold text-[#011F3F] flex gap-x-5 mt-20 px-16'><div className='w-[4rem] h-[4rem] flex justify-center items-center border-2 rounded-full bg-[#0072BC] text-white border-[#0c5b90]'>!!</div> <div>Oh, some extra work to do</div></div>
                                <div className='w-full h-auto mt-10'>
                                <div className='px-28 py-10 ml-10'>
                                    <label className='text-[1.6rem]'>What is the class of Diabetes ?</label>
                                    <Select id='diab_class' placeholder='Select type...' marginTop={'1.5rem'} width={'80%'} fontSize={'1.2rem'} height={'4rem'}>
                                        <option value='option1' fontSize={'1.2rem'}>Option 1</option>                                        
                                    </Select>
                                </div>  
                                <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Since how many years do you have diabetes ?</label>
                                    <Input id='diab_years' placeholder='Number of years...' marginTop={'1.5rem'} width={'80%'} fontSize={'1.2rem'} height={'4rem'} />                                       
                                </div>   
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>What was your last recorded HbA1c level ?</label>
                                    <Input  id='hba1c_level' placeholder='Select level...' marginTop={'1.5rem'} width={'80%'} fontSize={'1.2rem'} height={'4rem'} />                                    
                                </div>  
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>When was it last recorded ?</label>
                                    <Input id='last_recorded' placeholder='Select period...' marginTop={'1.5rem'} width={'80%'} fontSize={'1.2rem'} height={'4rem'} />                                    
                                </div>  
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Height & Weight</label>
                                    <div className='flex gap-x-5'>
                                        <div><InputGroup marginTop={'1.5rem'}><Input id='height_ft' type='number' width={'5rem'} /><InputRightAddon height={'2.5rem'} fontSize={'1.2rem'} children='(ft)' /></InputGroup></div>
                                        <div><InputGroup marginTop={'1.5rem'}><Input id='height_inch' type='number' width={'5rem'} /><InputRightAddon height={'2.5rem'} fontSize={'1.2rem'} children='(inches)' /></InputGroup></div>
                                        <div><InputGroup marginTop={'1.5rem'}><Input id='weight' type='number' width={'5rem'} /><InputRightAddon height={'2.5rem'} fontSize={'1.2rem'} children='(kg)' /></InputGroup></div>
                                    </div>
                                </div>  
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you suffering from high Blood Pressure ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='blood_yes' colorScheme='green' size={'lg'} isChecked={bloodswitchValue === 'yes'} onChange={() => handleBloodSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='blood_no' colorScheme='red' size={'lg'} isChecked={bloodswitchValue === 'no'} onChange={() => handleBloodSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div> 
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Are you currently taking insulin as treatment ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch  id='insulin_yes' colorScheme='green' size={'lg'} isChecked={insulinswitchValue === 'yes'} onChange={() => handleInsulinSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch  id='insulin_no' colorScheme='red' size={'lg'} isChecked={insulinswitchValue === 'no'} onChange={() => handleInsulinSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Have you ever been hospitalized or taken injection of glucose because of diabetes, diabetic coma, hypoglycemic shock since you received treatment/suffering from proteinuria or diabetic nephropathy ?</label>
                                    <div className='flex gap-x-5 mt-3'>
                                    <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                           
                                        <Switch id='hosp_yes' colorScheme='green' size={'lg'} isChecked={hospitalswitchValue === 'yes'} onChange={() => handleHospitalSwitchChange('yes')} /> <span className='ml-3 -mt-1'>Yes</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}>                                       
                                        <Switch id='hosp_no' colorScheme='red' size={'lg'} isChecked={hospitalswitchValue === 'no'} onChange={() => handleHospitalSwitchChange('no')} /> <span className='ml-3 -mt-1'>No</span>                                  
                                        </div>
                                    </div>
                                </div> 
                                <div><button id='submit-btn'>Submit</button></div>  
                                </div>
                                </> : <div><button id='submit-btn' onClick={(event) => {handleSubmitData(event)}

                                }>Submit</button></div>  }                                             
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/6'>
                        <button onClick={bot_btn}><img src={bot} alt="bot" className='w-[11rem] fixed top-[25rem] right-[5rem]' /></button>                      
                </div>
            </div>
        </section>
    </>
  )
}

export default New