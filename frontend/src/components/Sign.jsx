import React from 'react'

const Sign = () => {
  return (
    <>
        {/* #0072BC */}
        {/* #f58120 */}

        <section className='h-[125vh] w-full bg-[#0072BC]'>
          <div className='h-[82vh] flex flex-col justify-center items-center w-full'>
            <div className='h-[62vh] w-11/12 bg-slate-300 rounded-lg flex items-center flex-col'>
                <div className='text-[#0072BC] font-semibold text-[2.5rem] mt-10'>WELCOME USER</div>
                <div className='text-[#f58120] font-semibold text-[1rem]'>Tagline</div>
                <div className='mt-10 w-full flex justify-center items-center'><hr className='h-[0.2rem] w-11/12 bg-black bg-opacity-40' /></div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Sign
