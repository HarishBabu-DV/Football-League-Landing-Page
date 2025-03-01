import React from 'react'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import { Routes,Route } from 'react-router'

const App = () => {
  return (
    <main  className='max-w-[1920px] w-full bg-red-950 '>
      {/* Header  */}
      <Header />
      <Routes>
        {/* Landing Page  */}
        <Route path='/' element={<LandingPage />  } />
      </Routes>
    </main>
  )
}

export default App