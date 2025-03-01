import React from 'react'
const HeroSection = () => {
  return (
    <section className='h-dvh w-full flex flex-col justify-center items-center'>      
      
      {/* Heading Section  */}
      <div className='w-full'>
        <p className='text-[1rem] leading-[18.75px] text-center heading-section-firstline '>
          Kerala truly global with a commitment to grow all facets of the sport by 
        </p>
        <h2 className='text-[2.5rem] leading-[54.64px] text-center heading-section-secondline'>
          Developing top-quality <span className='heading-section-secondline-football'>Football</span> talent
        </h2>
      </div>

      {/* VIP Description  */}
      <div className='w-full flex'>
        <div className='w-1/2'>
          <div className='w-1/2 h-full'> 
            <img src="https://blackhattalent.com/wp-content/uploads/2023/08/Charu-Sharma5.jpg" alt="" />
          </div>
          <div>
            <p>
              The reowned sports personality with years of experience in promoting top leagues like Pro Kabbadi, RCB (IPL), joins Kerala Super League.
            </p>
            <h2 className='uppercase text-white'>
              <span>chandru sharma</span>
              <span>board member</span>
              <span>(non executive)</span>
            </h2>
          </div>
        </div>

        <div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection