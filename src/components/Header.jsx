import React from 'react'
import { firstnavItems, secondNavItems,logo } from '../assets/asset'
import { Link, useLocation } from 'react-router'

const Header = () => {
    //Retrieving routes
    const location=useLocation()
    const {pathname}=location
  return (

      // Header 
      <header className='w-full h-[10vh] relative'>   
        {/* Heading and Logo Container  */}
        <div className='bg-white absolute z-10 top-0 w-full h-full flex justify-center items-center top-heading-container'>
            {/* Logo Container  */}
            <div className='w-[100px] h-[52px] '>
                <img src={logo} alt="logo" className='w-full h-full'  />
            </div>
        </div>
        {/* Navbar  */}
        <nav className='w-full h-full flex justify-between px-40'>
            <div className='flex items-end gap-x-4   '>
                {
                    firstnavItems.map((navItem)=>(
                        <Link key={navItem.id} style={pathname==="/" && navItem.id===1 ?{backgroundColor:"#E92229"}:null} className='text-white text-[1rem] px-4 py-1 rounded-[5px]'>{navItem.title}</Link>
                    ))
                }
            </div>
            <div className='flex items-end gap-x-4   '>
                {
                    secondNavItems.map((navItem)=>(
                        <Link key={navItem.id} className='text-white text-[1rem] px-4 py-1 rounded-[5px]'>{navItem.title}</Link>
                    ))
                }
            </div>
        </nav>
    </header>
  )
}

export default Header