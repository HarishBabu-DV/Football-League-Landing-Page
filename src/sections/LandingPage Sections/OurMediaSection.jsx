import React from 'react'
import { ourMediaDescription } from '../../assets/asset'
import { Link } from 'react-router'

const OurMediaSection = () => {
  return (
    <section className='w-full'>
        <div className='bg-[#202020] rounded-md w-[90%]  mx-auto min-h-[80vh] flex flex-col gap-y-8 px-12 py-8'>
            {/* Our Media heading  */}
            <h2 className=' text-3xl'>
                <span className='text-white capitalize'>our</span>
                <span className='media-text capitalize'> media</span>
            </h2>

            {/* Our Media Description  */}
            <div className='flex items-center justify-between '>
                {
                    ourMediaDescription.map((content)=>(
                        <div key={content.id} className='w-[28%] flex flex-col items-center gap-y-4'>
                            <div className='w-full h-full  hover:scale-[1.05] transition-transform duration-200 hover:transition-transform hover:duration-200'>
                                <img src={content.imageContent} className='w-full h-full' alt={`${content.title} image`}/>
                            </div>
                            <h2 className='text-[#cccccc] capitalize media-description-title text-[1.2rem]'>{content.title}</h2>
                            <p className=' text-[#727272] text-xs capitalize media-description-description leading-6'>{content.description}</p>
                            <Link to="/" className='bg-[#E02B2A] text-white px-4 py-3 rounded-md transition-colors duration-300 hover:bg-white hover:text-[#E02B2A] hover:transition-colors hover:duration-300 '>{content.buttonText}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default OurMediaSection