import React from 'react'
import hiringExpertsImg from '../../images/Rectangle 36.png'

const HiringExperts = () => {
  return (
    <div className='w-screen relative mb-10'>
        <img src={hiringExpertsImg} alt="" className='w-full lg:w-[80%] !h-full absolute left-0 top-0  -z-10  ' />
        <div className='w-[90%] xl:w-[80%]  h-full mx-auto pt-20 pb-14'>
            <h2 className='font-bold text-2xl md:text-3xl xl:text-[40px] leading-8 sm:leading-10 lg:leading-[53px] text-white'>We are hiring experts</h2>
            <p className='text-justify text-xs sm:text-lg leading-4 sm:leading-5 md:leading-7 lg:leading-[50px] w-full lg:w-[615px] text-white mt-8 font-normal' >Inner Circle is more than a recruiting firm; we're your partner in building a team that propels your mission forward. We scour the globe to bring you the highest quality affordable early stage help. We support onboarding and feedback structures to ensure your early team operates with a Growth Mindset, embracing experimentation and iterative improvement. And we train your assistants to take full advantage of the latest AI tools to accelerate your market testing and validation.</p>
            <a href="/#/contact">
              <button className='mt-6 sm:mt-8 md:mt-16 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-white'>Start Hiring Today</button>
            </a>
        </div>
    </div>
  )
}

export default HiringExperts