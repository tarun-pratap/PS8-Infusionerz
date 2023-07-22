import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(true);
  const [dialogBox, showDialogBox] = useState(false);

  const navigate = useNavigate()

  // useEffect(() => {
  //   async function getData() {
  //     const tokenDoc = await axios.get('/login-token');   
  //     if(tokenDoc.data === ""){
  //       setShow(true);        
  //     }

  //     else {
  //       alert("not");   
  //     }
  //     }          

  //   getData();   
  // }, []);

  async function loginform(e) {
    e.preventDefault();

    if (email !== "" && password !== "") {
      await axios.post("/user-login", { email, password });      
      showDialogBox(false);
      navigate('/policy-predict-page');
    } else {
      showDialogBox(true);
    }
  } 

  return (
    <>
    {show && <>
      <section className='h-[130vh] w-full bg-[#0072BC]'>
            <div className='flex justify-center items-center h-[130vh]'>
                <div className='bg-slate-200 w-11/12 h-[105vh] rounded-[2rem] flex items-center flex-col'>
                    <div className='font-semibold text-[3.7rem] mt-10 text-[#0072BC]'>WELCOME BACK USER</div>
                    <div className='text-[1.7rem] text-[#f89c30] font-semibold'>Enter the Portal, Empowering Your Insurance Journey</div>
                    <div><hr className='w-[91rem] h-[0.2rem] rounded-3xl bg-zinc-600 mt-16 opacity-80' /></div>

                    {/* Form Div */}                   

                    <div className='bg-white w-3/4 h-[56vh] rounded-[2rem] mt-20 flex flex-col items-center'>
                        <form className='mt-16' onSubmit={loginform}>                            
                            <div className='grid grid-cols-2 gap-12 mt-2'>
                                <div>
                                    <label>Email Address</label> <br />
                                    <input type="email" placeholder='Enter your email address...' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {email === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Email Address can't be blank
                                        </div>
                                    )}
                                </div>  
                                <div>
                                    <label>Password</label> <br />
                                    <input type="password" placeholder='Enter a password...' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    {password === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Password can't be blank
                                        </div>
                                    )}
                                </div>
                            </div>                                                    

                        <div className='mt-5 flex justify-end w-full text-[1.1rem]'>
                            <a className='cursor-pointer underline hover:text-[#0072BC] hover:font-semibold'><i class="bi bi-question-circle-fill mr-1"></i>Forgot Password</a>
                        </div>

                        <div className='font-semibold'>
                            <div><button className='w-[43rem] mt-[2rem] h-[3.4rem] rounded-[0.8rem] text-[1.4rem] bg-[#f89c30] hover:bg-white hover:text-[#f89c30]
                            border-2 border-[#f89c30] text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#f89c30] outline-none' onClick={loginform}>LOGIN</button></div>                            
                        </div>                                           

                        <div className='mt-6 flex gap-x-5 justify-center'>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-zinc-600 opacity-80' /></div>
                            <span className='font-semibold'>Or continue with</span>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-zinc-600 opacity-80' /></div>
                        </div>

                        {/* <div className='flex gap-x-8 mt-5 justify-center'>
                            <div><img src={google} alt="google" className='max-w-[2rem] cursor-pointer' /></div>
                            <div><img src={facebook} alt="facebook" className='max-w-[2rem] cursor-pointer' /></div>
                        </div>                                                */}

                        <div className='font-semibold mt-6 text-[1.2rem] flex justify-center'>Don't have an account? <Link to={'/new-user-register'} className='h-[3rem] rounded-[0.5rem] text-[#0072BC] hover:bg-white hover:text-[#216693] transition-all duration-300 underline font-bold ml-2'>SIGN UP</Link></div>
                        </form> 
                    </div>                    

                    {dialogBox && (
                         <> <ToastContainer /> </>
                    )}

                </div>
            </div>
        </section>
    </>}    
        
    </>
  )
}

export default Login
