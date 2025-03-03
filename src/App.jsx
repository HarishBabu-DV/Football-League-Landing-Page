import React from 'react'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import { Routes,Route } from 'react-router'
import Footer from './components/Footer'

const App = () => {
  return (
    <main  className='max-w-[1920px] w-full bg-[#000000] '>
      {/* Header  */}
      <Header />
      <Routes>
        {/* Landing Page  */}
        <Route path='/' element={<LandingPage />  } />
      </Routes>
      {/* Footer  */}
      <Footer />
    </main>
  )
}

export default App