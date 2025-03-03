import React from 'react'
import { footBallTeams, keralaCities, logowhite } from '../../assets/asset'

const ChallengesSection = () => {
  return (
    <section className='w-[90%] mx-auto'>

        {/* Challenges Heading  */}
        <div className='bg-white h-[10vh] challenges-heading-container flex justify-center items-center'>   
            <h2 className='uppercase text-center text-[1.6rem] challenges-heading font-semibold'>challenges</h2>
        </div>

        {/* Challenges Description  */}
        <div className= 'w-full bg-white flex flex-col rounded-md px-12'>
            {/* Super League Kerala Scouting phase 2 heading*/}
            <h2 className='capitalize py-6 flex justify-center font-semibold text-[1.7rem] scouting-phase-heading '>
                super league kerala scouting phase
            </h2>
            {/* Super League kerala Teams Container */}
            <div className='w-full h-[90dvh] super-league-kerala-teams-container rounded-lg flex flex-col justify-between items-center py-12'>
                {/* Super league kerala logo container  */}
                <div className='w-[180px] h-[120px]'>
                    <img src={logowhite} alt="" className='w-full h-full' />
                </div>
                {/* Football Teams  */}
                <div className='flex items-center gap-6'>
                    {
                        footBallTeams.map((team)=>(
                            <div key={team.id} className='flex flex-col items-center gap-y-2'>
                                <div className='w-[100px] h-[70px]'>
                                    <img src={team.imageUrl} className='w-full h-full' alt={`${team.teamName} logo`} />
                                </div>
                                <p className='uppercase text-white text-[.8rem] flex flex-col font-medium football-team-names'>
                                    <span className='text-center'>{team.teamName}</span>
                                    <span className='text-center'>{team.teamNameSuffix}</span>    
                                </p>
                            </div>
                        ))
                    }
                </div>
                {/* kerala's own Football league and  Season 1 */}
                <div className='flex flex-col items-center'>     
                    {/* kerala's own Football league  */}
                    <h1 className='text-4xl text-white font-semibold uppercase kerala-own-football-league'>kerala's own football league</h1>
                    {/* Season */}
                    <p className='uppercase text-xl text-white font-normal'>season 1</p>
                </div>
            </div>

            {/* Kerala cities and Kerala super league description*/}
            <div className='flex flex-col items-center gap-y-6 py-10'>
                {/* Kerala cities  */}
                <div className='flex items-center gap-6 justify-center'>
                    {
                        keralaCities.map((city)=>(
                            <p key={city.id} className='flex items-center gap-1'>
                                <span><city.icon className='text-[1.4rem]' /></span>
                                <span className='capitalize'>{city.cityName}</span>
                            </p>
                        ))
                    }
                </div>
                {/* Kerala super league description  */}
                <p>
                The mission of Super League Kerala is to be a <b>professional, respectful </b>and <b>premium football league</b> providing the platform and the tools for everyone to succeed in the game through sustainable community building, healthy competition,youth development and wholesome entertainment.
                </p>
            </div>
        </div>
        
      
    </section>
  )
}

export default ChallengesSection