import React from 'react'

const Condidates = () => {
  return (
    <div id='forCondidates' className='w-screen'>
        <div className='w-[92%] xl:w-[86%]  mx-auto bg-condidateMobile md:bg-condidates bg-cover bg-center bg-no-repeat  py-24 text-center rounded-3xl overflow-hidden '>
            <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-white leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px]'>Candidates</h1>
            <p className='font-normal text-xs sm:text-sm md:text-base xl:text-lg  leading-4 sm:leading-5 lg:leading-[24px] text-white mt-6  md:mt-14 px-6'>Get in touch! Email your resume to <a href="mailto:team@innercircletalent.com" className='underline'>team@innercircletalent.com</a></p>
            <a href="mailto:team@innercircletalent.com">
              <button className='mt-10 xl:mt-36 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-white'>CONTACT US</button>
            </a>
        </div>
    </div>
  )
}

export default Condidates