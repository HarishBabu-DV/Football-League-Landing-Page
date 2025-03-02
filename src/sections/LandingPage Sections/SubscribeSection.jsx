import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='w-full min-h-dvh subscribe-section-container'>
        {/* Quotes Description */}
        <div>
            <p className='quotes-line1'>Stay in the loop. Get the latest updates from SLK.</p>
            <h3 className='quotes-line2'>
                <span>Stay</span>
                <span>Connected</span>
            </h3>
            <h1 className='super-league-kerala-heading'>Super League Kerala</h1>
        </div>
        {/* Email input  */}
        <input type="email" name='email' id='email' placeholder='Email' className=''/>
        
        {/* Subscribe us button */}
        <input type="submit" value="Subscribe us" className=''/>

    </section>
  )
}

export default SubscribeSection