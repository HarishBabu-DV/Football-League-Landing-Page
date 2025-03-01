import React from 'react'
import { kick, pros, trophy, win } from '../../assets/asset'

const ProsSection = () => {
  return (
    <section className='w-full'>
        {/* Pros of Kerala Super League  */}
        <div className='flex flex-col justify-center items-center gap-8 min-h-dvh py-24 relative'>
           {
            pros.map((pro)=>(
                <p key={pro.id} className='text-justify leading-6 text-white text-[.9rem] uppercase max-w-[50%] w-full pros-description'>{pro.content}</p>
            ))
           }
           {/* Kicking image  */}
            <div className='w-[270px] h-[150px] absolute top-[5%] left-4'>
              <img src={kick} alt="football kicking image" />                
            </div>

            {/* Trophy image  */}
            <div className='w-[270px] h-[150px] absolute top-[35%] right-0'>
              <img src={trophy} alt="trophy image" />
            </div>

            {/* Winning image  */}
            <div className='w-[270px] h-[150px] absolute top-[65%] left-0'>
              <img src={win} alt="winning image" />
            </div>
        </div>
    </section>
  )
}

export default ProsSection