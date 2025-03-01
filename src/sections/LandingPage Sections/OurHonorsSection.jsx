import React from 'react'
import { vipDescription } from '../../assets/asset'

const OurHonorsSection = () => {
  return (
   <section className='max-w-[95%] rounded-lg w-full mt-32 mx-auto min-h-dvh bg-white our-honors-section-container'>
    {/* Our Honors heading  */}
        <div className='flex items-center justify-center w-full h-[10vh]'>
            <h1 className='capitalize text-3xl underline font-medium'>our honors</h1>
        </div>
    {/* Our Honors description  */}
    <div className='flex flex-col gap-y-6 py-14 bg-yellow-200'>
        {/* Top description  */}
        <div className='flex flex-col items-center'>
            <p className='font-normal'>Let us unite the spirit of football and rally behind our teams</p>
            <h3 className='special-thanks-to font-medium text-2xl'>Special thanks to:</h3>
        </div>
        {/* VIP description  */}
        <div className='flex flex-col items-center gap-y-6 px-12 '>
            {
                vipDescription.map((vip)=>(
                    <div style={vip.id===2?{flexDirection:"row-reverse"}:null} className='flex'>
                        <div className='w-1/2 flex justify-center'>
                            <div className='w-[500px] h-[350px]'>
                                <img src={vip.imageContent} className='w-full h-full' alt={`${vip.vipName} image`} />
                            </div>
                        </div>
                        <div className='w-1/2 flex flex-col items-center gap-y-4'>
                            <p>{vip.description}</p>
                            <h3 className='flex flex-col gap-2'>
                                <span>{vip.vipName}</span>
                                <span>{vip.vipPostName}</span>
                            </h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
   </section>
  )
}

export default OurHonorsSection