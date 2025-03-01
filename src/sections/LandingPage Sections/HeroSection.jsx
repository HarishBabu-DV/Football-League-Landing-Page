import React from 'react'
import { vip2 } from '../../assets/asset'
const HeroSection = () => {
  return (
    <section className='h-dvh w-full flex flex-col  py-16 justify-between items-center'>      
      
      {/* Heading Section  */}
      <div className='w-full pt-16'>
        <p className='text-[1rem] leading-[18.75px] font-normal text-center heading-section-firstline '>
          Kerala truly global with a commitment to grow all facets of the sport by 
        </p>
        <h2 className='text-[2rem] leading-[54.64px] text-center heading-section-secondline font-semibold'>
          Developing top-quality <span className='heading-section-secondline-football'>Football</span> talent
        </h2>
      </div>

      {/* VIP Description  */}
      <div className='w-full flex justify-center'>

        {/* Charu Sharma  */}
        <div className='w-[40%] flex'>
          <div className='w-[280px] h-[350px]'> 
            <img src="https://blackhattalent.com/wp-content/uploads/2023/08/Charu-Sharma5.jpg" alt="" className='w-full h-full rounded-xl  border-[1px]'  />
          </div>
          <div className='w-1/2 flex flex-col px-8'>
            <p className='text-white text-[1.1rem] leading-[1.7rem] py-10 font-extralight'>
              The reowned sports personality with years of experience in promoting top leagues like Pro Kabbadi, RCB (IPL), joins Kerala Super League.
            </p>
            <div className=' flex flex-col leading-7 '>
              <h3 className='uppercase text-white font-semibold text-[1.6rem] tracking-[0.001rem] border-t-[1px] w-fit  pt-3 '>charu sharma</h3>
              <h3 className='uppercase text-white font-semibold text-[1.4rem]'>board member</h3>
              <h3 className='uppercase text-white font-semibold text-[1.2rem]'>(non executive)</h3>
            </div>
          </div>
        </div>

        {/* I.M.Vijayan  */}
        <div className='w-[40%] flex'>
          <div className='w-[280px] h-[350px]'> 
              <img src={vip2} alt="" className='w-full h-full rounded-xl  border-[1px]'  />
            </div>
            <div className='w-1/2 flex flex-col px-8'>
              <p className='text-white text-[1.1rem] leading-[1.7rem] py-10 font-extralight'>
               I.M.Vijayan, a legendary national and international football figure, has taken up the esteemed position of the Ambassador of Kerala Super League
              </p>
              <h2 className='uppercase text-white  flex flex-col leading-7  font-semibold'>
                <span className='text-[1.6rem] tracking-[0.001rem] border-t-[1px] w-fit  pt-3 '>i.m.  vijayan</span>
                <span className='text-[1.4rem]'>kerala's icon</span>
               
              </h2>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroSection