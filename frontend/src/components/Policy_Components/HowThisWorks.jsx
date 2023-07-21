import React from 'react'
import overview from '../../images/Ind_policy/overview.png'

const HowThisWorks = () => {
  return (
    <>
        <div className='flex'>
            <div className='w-1/2'><img src={overview} alt="" /></div>
            <div className='flex flex-col gap-y-10 w-1/2 text-justify'>
                <div className='text-[2.1rem] text-[#0072BC] font-semibold'>How This Works</div>
                <div className='text-[1.5rem] w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam, illo unde dolor expedita neque molestias ratione tenetur repellat. Suscipit, officiis sapiente facilis omnis quo veniam nesciunt error nemo nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident minus commodi facere sapiente aliquam veritatis quo dolor officia sunt debitis quaerat perferendis repudiandae magnam, repellat asperiores ipsam ex incidunt? Impedit quidem doloremque autem vel dolor aspernatur? Hic veritatis reprehenderit quaerat assumenda omnis quos delectus, aspernatur doloremque, non error deleniti molestiae.</div>
                <div className='text-[1.5rem] w-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam, illo unde dolor expedita neque molestias ratione tenetur repellat. Suscipit, officiis sapiente facilis omnis quo veniam nesciunt error nemo nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quam ea, ut officiis minus cum quia quis eveniet! Nemo inventore, eligendi molestiae, accusamus ipsam modi similique saepe veritatis harum quibusdam dolores? Iusto architecto illo ut quae porro quos error fugit aut, dolor consequuntur ipsa necessitatibus alias placeat nisi voluptate molestiae?</div>
            </div>
        </div>
    </>
  )
}

export default HowThisWorks
