import React, { useState } from 'react'

const Sign = () => {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userRegisterData = (e) => {
    e.preventDefault()
    
    if(name !== "" && mobile !== "" && email !== "" && password !== ""){
        alert('User registered')
    }

    else {
        alert("Not registered")
    }
  }

  return (
    <>
        {/* #0072BC */}
        {/* #f58120 */}

        <section className='h-[200vh] w-full bg-[#0072BC]'>
          <div className='h-[140vh] flex flex-col justify-center items-center w-full'>
            <div className='h-[120vh] w-11/12 bg-slate-300 rounded-lg flex items-center flex-col'>
                <div className='text-[#0072BC] font-semibold text-[2.5rem] mt-10'>WELCOME USER</div>
                <div className='text-[#f58120] font-semibold text-[1rem]'>Tagline</div>
                <div className='mt-10 w-full flex justify-center items-center'><hr className='h-[0.2rem] w-11/12 bg-black bg-opacity-40' /></div>
                <div className='bg-white w-11/12 h-[40vh] rounded-lg mt-20 flex flex-col items-center'>
                    <form onSubmit={userRegisterData} className='mt-5'>
                        <div className='grid grid-cols-2 gap-x-10'>
                            <div>
                                <label>Full Name</label> <br />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2' />
                            </div>
                            <div>
                                <label>Mobile Number</label> <br />
                                <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} className='border-2' />
                            </div>
                        </div>
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
                        <div className='mt-5 font-semibold border-[#f58120] border-2 flex justify-center items-center h-[2rem] rounded-lg text-white bg-[#f58120] cursor-pointer hover:bg-white hover:text-[#f58120] transition-all duration-300'><button onClick={userRegisterData}>SIGN UP</button></div>
                    </form>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Sign
