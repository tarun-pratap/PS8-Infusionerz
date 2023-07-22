import React, { useState, useRef } from 'react'
import google from '../images/logos/google.png'
import facebook from '../images/logos/facebook.png'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Sign = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const navigate = useNavigate()

  const registrationName = useRef();
  const registrationPhone = useRef();
  const registrationEmail = useRef();
  const registrationPassword = useRef();

  const validStartingDigits = ['6', '7', '8', '9'];

  const [dialogBox, showDialogBox] = useState(true);
 
  async function userRegistration(e) {
    e.preventDefault();
    const showToastErrorMessage = () => {
        toast.error('Please fill all fields correctly ', {           
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    const showToastSuccessMessage = () => {
        toast.success('Account Created ', {           
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    const showAlreadyToast = () => {
        toast.warning('Account already present !! Please login ', {           
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

    const showDbFailed = () => {
        toast.error('Registration failed due to internal reasons ', {           
            position: toast.POSITION.BOTTOM_CENTER
        });
    }

try{
    if (
        name !== "" &&
        phone !== "" &&
        email !== "" &&
        password !== "" &&       
        phone.length === 10 && validStartingDigits.includes(phone.charAt(0))
      ) {              
         const res = await axios.post("/register", {
            name,
            phone,
            email,
            password,
          });

          if(res.data !== "Account already present !! Please login"){
            showDialogBox(true)
            showToastSuccessMessage()    
            navigate('/policy-redirect-page')
        }
        
        else {         
          showAlreadyToast()
        }

        }
    
    else {     
        showDialogBox(true)
        showToastErrorMessage()
    }  
}  catch (error) {
    console.log(error);
    showDbFailed()
  }
  }

  return (
    <>
        <section className='w-full bg-[#0072BC] register-section'>
            <div className='flex justify-center items-center h-[130vh] register-cover-div w-full'>
                <div className='bg-slate-200 w-11/12 h-[115vh] rounded-[2rem] flex items-center flex-col register-gray-div'>
                    <div className='font-semibold text-[3.7rem] mt-10 text-[#0072BC]'>WELCOME USER</div>
                    <div className='text-[1.7rem] text-[#f89c30] font-semibold'>Join the Shield of Protection, Secure Your Tomorrow</div>
                    <div><hr className='w-[91rem] h-[0.2rem] rounded-3xl bg-zinc-600 mt-16 opacity-80' /></div>

                    {/* Form Div */}                   

                    <div className='bg-white register-white-div w-3/4 h-[70vh] rounded-[2rem] mt-20 flex flex-col items-center'>
                        <form className='mt-16' onSubmit={userRegistration}>
                            <div className='grid grid-cols-2 gap-12'>
                                <div>
                                    <label>Full Name</label> <br />
                                    <input type="text" placeholder='Enter your full name... ' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={name} onChange={(e) => setName(e.target.value)} ref={registrationName} />
                                    {name === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Name can't be blank
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <label>Phone Number</label> <br />
                                    <input type="number" placeholder='Enter your phone number...' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={phone} onChange={(e) => setPhone(e.target.value)} ref={registrationPhone} />
                                    {phone === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Phone Number can't be blank
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-12 mt-5'>
                                <div>
                                    <label>Email Address</label> <br />
                                    <input type="email" placeholder='Enter your email address...' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={email} onChange={(e) => setEmail(e.target.value)} ref={registrationEmail} />
                                    {email === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Email Address can't be blank
                                        </div>
                                    )}
                                </div>  
                                <div>
                                    <label>Password</label> <br />
                                    <input type="password" placeholder='Enter a password...' className='w-[20rem] mt-[0.4rem] rounded-[0.5rem] pl-[0.7rem] p-[0.2rem] border-[1.4px] border-black border-opacity-30 outline-[#0072BC] h-10 text-gray-500' value={password} onChange={(e) => setPassword(e.target.value)} ref={registrationPassword} />
                                    {password === "" && (
                                        <div className="mt-2 text-sm text-red-500">
                                            ** Password can't be blank
                                        </div>
                                    )}
                                </div>
                            </div>                                                                           

                        <div className='font-semibold'>
                            <div><button className='w-[43rem] mt-[2rem] h-[3.4rem] rounded-[0.8rem] text-[1.4rem] bg-[#0072BC] hover:bg-white hover:text-[#0072BC] border-2 border-[#0072BC] text-white transition-all duration-300 hover:shadow-2xl hover:shadow-[#0072BC] outline-none' onClick={userRegistration}>SIGN UP</button></div>                            
                        </div>                                           

                        <div className='mt-6 flex gap-x-5 justify-center'>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-zinc-600 opacity-80' /></div>
                            <span className='font-semibold'>Or continue with</span>
                            <div className='flex justify-center items-center'><hr className='w-[11rem] h-[0.2rem] rounded-3xl bg-zinc-600 opacity-80' /></div>
                        </div>

                        <div className='flex gap-x-8 mt-5 justify-center'>
                            <div><img src={google} alt="google" className='max-w-[2rem] cursor-pointer' /></div>
                            <div><img src={facebook} alt="facebook" className='max-w-[2rem] cursor-pointer' /></div>
                        </div>                        

                        <div className='mt-6 flex justify-center'>
                            <p>By clicking button above, you agree to our <a className='text-[#0072BC] font-semibold text-[1.05rem] cursor-pointer underline'>Terms of Use</a> and <a className='text-[#0072BC] font-semibold text-[1.05rem] cursor-pointer underline'>Privacy Policies</a></p>
                        </div>

                        <div className='font-semibold mt-4 text-[1.2rem] flex justify-center'>Already having an account? <Link to={'/login-user'} className='h-[3rem] rounded-[0.5rem] text-[#f89c30] hover:text-[#e18f32] transition-all duration-300 underline font-bold ml-2'>LOGIN</Link></div>
                        </form> 
                    </div>                    

                    {dialogBox && (
                         <> <ToastContainer /> </>
                    )}

                </div>
            </div>
        </section>
    </>
  )
}

export default Sign
