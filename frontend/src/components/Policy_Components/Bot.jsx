import React, { useState } from 'react'
import bot from '../../images/form/bot.png'
import axios from 'axios';

const Bot = () => {

  const [show, setShow] = useState(false)
  const [text, setText] = useState('Have Questions? Ask our Bot :)')

  const ai_chat_bot = async (policy_name,query)=>{
      await axios
      .get('http://127.0.0.1:6000/bajaj/ai_bot', {
        headers: { 
      "policy-name":policy_name, question: query },
      })
      .then((response) => {
        console.log(response,"kemcho");
        bot_speak(response.data);
      const container = document.getElementById('chat_bot_text');
      const newDiv = document.createElement('div');
      newDiv.textContent = response.data; 
      container.appendChild(newDiv);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const bot_speak = async (question, rate = 150) =>{
    await axios
    .get('http://localhost:8000/speak', {
      headers: {
        prompt: question,
        rate: rate,
      },
    })
    .then((response) => {
      bot_listen();
    })
    .catch((error) => {
      console.error(error);
    });
    // axios
    // .get('http://localhost:8000/speak', {
    //   headers: {
    //     prompt: question,
    //     rate: rate,
    //   },
    // })
    // .then((response) => {
    //   bot_listen();
    // })
    // .catch((error) => {
    //   console.error(error);
    // });
  }

  const bot_listen = () =>{
    axios
    .get('http://localhost:8000/listen')
    .then((response) => {
      if (response.data.recognized_text=="Stop") {
        console.log("bello");
      } else {
        console.log(response.data.recognized_text)
        const container = document.getElementById('chat_bot_text');
        const newDiv = document.createElement('div');
        newDiv.textContent = response.data.recognized_text;
        container.appendChild(newDiv);
        ai_chat_bot("ACE",response.data.recognized_text)
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  const run_chat_bot = () => {
    // console.log("bello")
    // bot_speak("Hello! I am Pol-E",150);
    ai_chat_bot ("ACE","Age eligibility?")
  }

  const ToggleBox = () => {
    if (show) {
      setShow(false)
      setText('Have Questions? Ask our Bot :)')
    } else{
      setShow(true)
      setText('Tap To Close')
      run_chat_bot()
    }
  }

  return (
    <>
        <div className='flex w-full mt-20 ml-20 px-20 items-center justify-between gap-x-0'>          
        {show ? <>
            <div id='chat_bot_text' className='flex flex-col gap-y-10 w-5/6 h-[40vh] text-justify bg-primary rounded-[2rem] justify-center items-center'>
                
            </div>
        </> : null}                 
            <div className={`${!show ? 'w-3/4 ml-[100rem]' : 'w-1/6 flex flex-col h-[40vh] items-center'}`} onClick={ToggleBox}>
                <div><button><img src={bot} alt="ai-bot" className='w-[6rem]' /></button></div>
                <div className='text-secondary font-semibold text-[1.2rem] mr-[5rem]'><button>{text}</button></div>
            </div>
        </div>
    </>
  )
}

export default Bot