import React, { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userLoginData = (e) => {
    e.preventDefault()
    if(email !== "" && password !== ""){
        alert('User logged in')
    }

    else {
        alert("Not logged")
    }
  }

  return (
    <>
        <section className='h-[200vh] w-full bg-primary'>
          <div className='h-[140vh] flex flex-col justify-center items-center w-full'>
            <div className='h-[120vh] w-11/12 bg-slate-300 rounded-lg flex items-center flex-col'>
                <div className='text-primary font-semibold text-[2.5rem] mt-10'>WELCOME BACK USER</div>
                <div className='text-secondary font-semibold text-[1rem]'>Tagline</div>
                <div className='mt-10 w-full flex justify-center items-center'><hr className='h-[0.2rem] w-11/12 bg-black bg-opacity-40' /></div>
                <div className='bg-white w-11/12 h-[40vh] rounded-lg mt-20 flex flex-col items-center'>
                    <form onSubmit={userLoginData} className='mt-5'>                        
                        <div className='grid grid-cols-2 mt-5 gap-x-10'>
                            <div>
                                <label>Email Address</label> <br />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2' />
                            </div>
                            <div>
                                <label>Password</label> <br />
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border-2' />
                            </div>
                        </div>
                        <div className='mt-5 font-semibold border-secondary border-2 flex justify-center items-center h-[2rem] rounded-lg text-white bg-secondary cursor-pointer hover:bg-white hover:text-secondary transition-all duration-300'><button onClick={userLoginData}>LOG IN</button></div>
                    </form>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Login
