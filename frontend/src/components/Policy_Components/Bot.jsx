import React, { useState } from 'react'
import bot from '../../images/form/bot.png'

const Bot = () => {

  const [show, setShow] = useState(false)
  const [text, setText] = useState('Have Questions? Ask our Bot :)')

  const showBox = () => {
    setShow(true)
    setText('Tap To Close')
  }

  const hideBox = () => {
    setShow(false)
    setText('Have Questions? Ask our Bot :)')
  }

  return (
    <>
        <div className='flex w-full mt-20 ml-20 px-20 items-center justify-between gap-x-0'>          
        {show ? <>
            <div className='flex flex-col gap-y-10 w-5/6 h-[40vh] text-justify bg-primary rounded-[2rem]'>
                
            </div>
        </> : null}                 
            <div className={`w-1/6 flex flex-col h-[40vh] items-center`}>
                <div><button onClick={showBox}><img src={bot} alt="ai-bot" className='w-[6rem]' /></button></div>
                <div className='text-secondary font-semibold text-[1.2rem]'><button onClick={hideBox}>{text}</button></div>
            </div>
        </div>
    </>
  )
}

export default Bot
