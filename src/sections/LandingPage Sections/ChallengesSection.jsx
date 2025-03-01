import React from 'react'
import { logowhite } from '../../assets/asset'

const ChallengesSection = () => {
  return (
    <section className='w-[90%] mx-auto h-dvh bg-red-900'>

        {/* Challenges Heading  */}
        <div className='bg-white h-[8%] challenges-heading-container flex justify-center items-center'>
            <h2 className='uppercase text-center text-[1.6rem] challenges-heading'>challenges</h2>
        </div>
        {/* Super League Kerala  */}
        <div className= 'w-full h-[92%] bg-yellow-100'>
            {/* Super League Kerala Scouting phase heading*/}
            <h2 className='capitalize flex justify-center font-semibold text-[1.7rem] scouting-phase-heading'>
                super league kerala scouting phase
            </h2>

            {/* Super League kerala Teams Container */}
            <div className='w-full h-[60%] super-league-kerala-teams-container rounded-lg'>
                
                {/* Super league kerala logo container  */}
                <div>
                    <img src={logowhite} alt="" />
                </div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default ChallengesSection