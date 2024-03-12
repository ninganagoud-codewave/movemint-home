import React from 'react'

function LandingPage() {
  return (
    <div className='p-4'>
        <div className='flex justify-between mt-4'>
           <div className='flex flex-col gap-8 p-4 mt-8'>
            <p className='font-jost font-medium text-6xl text-white'>Your Gateway to Fitness</p>
            <p className='font-jost font-medium text-6xl text-white'>Greatness through Competition</p>
            <p className='font-jost font-normal text-2xl text-white'>Unleash Your Inner Champion with Movemint: Where Fitness Meets Competition!</p>
            <div className='flex gap-4'>
              <img src={'/images/apple.svg'} alt="apple-store"/>
              <img src={'/images/google.svg'} alt="play-store"/>
            </div>
           </div>
           <div className='p-4'><img src={'/images/landingPageMobile.svg'} alt="mobile" /></div>
        </div>
    </div>
  )
}

export default LandingPage
