import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-y-12 py-36 subscribe-section-container'>
        {/* Quotes Description */}
        <div className='flex flex-col justify-center gap-y-8 '>
            <p className='text-[1rem] text-center quotes-line1'>Stay in the loop. Get the latest updates from SLK.</p>
            <h3 className='font-semibold text-3xl text-center quotes-line2 flex items-center justify-center gap-2'>
                <span className='quotes-line2-stay'>Stay</span>
                <span className='quotes-line2-connected'>Connected</span>
            </h3>
            <h1 className='font-semibold text-center text-5xl super-league-kerala-heading'>Super League Kerala</h1>
        </div>
        {/* Email input  */}
        <input type="email" name='email' id='email' placeholder='Email' className='bg-[#bcbcbc] text-center rounded-md px-4 py-5 text-[#171717] w-[45%] email-input-section '/>
        
        {/* Subscribe us button */}
        <input type="submit" value="Subscribe us" className='font-normal text-xl text-white px-14 py-4  rounded-lg subscribe-us-button'/>

    </section>
  )
}

export default SubscribeSection