import React from 'react'
import { firstnavItems, secondNavItems,logo } from '../assets/asset'
import { Link } from 'react-router'

const Header = () => {
  return (

    // Header 
    <header className='w-full h-[12vh] bg-slate-200 relative'>   
        {/* Heading and Logo Container  */}
        <div className='bg-white absolute z-10 top-0 w-full h-full flex  justify-center top-heading-container'>
            {/* Logo Container  */}
            <div className='w-[200px] h-[100px] '>
                <img src={logo} alt="logo" className='w-full h-full'  />
            </div>
        </div>
        {/* Navbar  */}
        <nav className='w-full h-full flex justify-between'>
            <div className='flex items-end gap-x-6   '>
                {
                    firstnavItems.map((navItem)=>(
                        <Link key={navItem.id} className='text-white'>{navItem.title}</Link>
                    ))
                }
            </div>
            <div className='flex items-end gap-x-6   '>
                {
                    secondNavItems.map((navItem)=>(
                        <Link key={navItem.id} className='text-white'>{navItem.title}</Link>
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Header