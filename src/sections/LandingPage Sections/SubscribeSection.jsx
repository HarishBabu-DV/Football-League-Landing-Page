import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='w-full min-h-dvh subscribe-section-container'>
        {/* Quotes Description */}
        <div className='flex flex-col justify-center gap-y-2 '>
            <p className='text-[1rem] quotes-line1'>Stay in the loop. Get the latest updates from SLK.</p>
            <h3 className='font-medium text-3xl quotes-line2'>
                <span className='quotes-line2-stay'>Stay</span>
                <span className='quotes-line2-connected'>Connected</span>
            </h3>
            <h1 className='font-semibold text-5xl super-league-kerala-heading'>Super League Kerala</h1>
        </div>
        {/* Email input  */}
        <input type="email" name='email' id='email' placeholder='Email' className='bg-[#bcbcbc] rounded-md px-4 py-3 text-[#171717] w-[50%]'/>
        
        {/* Subscribe us button */}
        <input type="submit" value="Subscribe us" className=''/>

    </section>
  )
}

export default SubscribeSection