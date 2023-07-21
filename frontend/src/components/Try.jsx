import { Switch } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import { firestore } from "../firebase"
import { addDoc, collection } from "@firebase/firestore"

const Try = () => {
    const [genderValue, setGenderClick] = useState('')
    const ref = collection(firestore, "tempp")
  const handleGenderSwitchChange = async (value) => {
    setGenderClick(value)
    console.log(value);
    if (answer !== value) {
        try {
          // If the answer is different from the previous choice, update the Firestore
      let data = {
        gender: answer
      }
          addDoc(ref, data);
          console.log('donee');
  
          // Update the local state with the latest choice
          setAnswer(value);
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      }
  }

  const [answer, setAnswer] = useState('');
  return (
    <>
        <div className='mt-1 px-28 ml-10'>
                                    <label className='text-[1.6rem]'>Gender</label>
                                    <div className='flex gap-x-10 mt-[1.5rem]'>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='male' isChecked={genderValue === 'male'} onChange={(event) => handleGenderSwitchChange('male')}
                                            colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'>male</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='female' isChecked={genderValue === 'female'} onChange={(event) => handleGenderSwitchChange('female')}  colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'>female</span>
                                        </div>
                                        <div className={`w-[8rem] h-[4rem] flex justify-center items-center text-[1.6rem]`}> 
                                            <Switch id='trans' isChecked={genderValue === 'trans'} onChange={() => handleGenderSwitchChange('trans')} colorScheme='green' size={'lg'} /> <span className='ml-3 -mt-1'>trans</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div><button id='submit-btn'>Submit</button></div>
    </>
  )
}

export default Try