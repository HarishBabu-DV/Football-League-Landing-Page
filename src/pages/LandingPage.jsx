import React from 'react'
import HeroSection from '../sections/LandingPage Sections/HeroSection'
import ChallengesSection from '../sections/LandingPage Sections/ChallengesSection'
import ProsSection from '../sections/LandingPage Sections/ProsSection'

const LandingPage = () => {
  return (
    <section className='w-full'>
        <HeroSection />
        <ChallengesSection />
        <ProsSection />
    </section>
  )
}

export default LandingPage