import React from 'react'
import HeroSection from '../sections/LandingPage Sections/HeroSection'
import ChallengesSection from '../sections/LandingPage Sections/ChallengesSection'
import ProsSection from '../sections/LandingPage Sections/ProsSection'
import OurMediaSection from '../sections/LandingPage Sections/OurMediaSection'

const LandingPage = () => {
  return (
    <section className='w-full'>
        <HeroSection />
        <ChallengesSection />
        <ProsSection />
        <OurMediaSection />
    </section>
  )
}

export default LandingPage