import React from 'react'

const ChallengesSection = () => {
  return (
    <section className='w-[90%] mx-auto h-dvh bg-red-900'>

        {/* Challenges Heading  */}
        <div className='bg-white h-[8vh] challenges-heading-container flex justify-center items-center'>
            <h2 className='uppercase text-center text-[1.6rem] challenges-heading'>challenges</h2>
        </div>
        {/* Super League Kerala  */}
        <div className='bg-white'>
            
            {/* Super League Kerala Scouting phase heading*/}
            <h2 className='capitalize flex justify-center font-semibold text-[1.7rem] scouting-phase-heading'>
                super league kerala scouting phase
            </h2>

            {/* Super League kerala Teams  */}
            <div className='super-league-kerala-teams-container'>
                
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default ChallengesSection