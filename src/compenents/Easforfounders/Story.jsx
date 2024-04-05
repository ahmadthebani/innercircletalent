import React from 'react';
import Diversity from '../../images/Diversity.png';
import Remote from '../../images/Remote.png';
import Delegation from '../../images/Delegation.png';

const Story = () => {
  return (
    <div id='ourStory' className='w-screen'>
      <div className='w-[92%] xl:w-[86%] mx-auto py-[40px] md:py-[50px] lg:py-[70px] xl:py-[98px]'>
        <h1 className='font-gothic-a1 font-semibold text-2xl sm:text-3xl md:text-5xl xl:text-[52px] text-[#0C0405] leading-[30px] sm:leading-[40px] md:leading-[50px] xl:leading-[65px] text-center'>Our Story</h1>
        <p className='mt-3 sm:mt-6 md:mt-9 max-w-[820px] m-auto font-normal leading-[15px] sm:leading-[18px] md:leading-[24px] text-xs sm:text-sm md:text-base xl:text-lg text-center text-[#0C0405]'>Our team has worked at early stage startups for collective decades and we get it. The pain of figuring out every domain, of being unable to delegate and getting drowned in minutia, and the numerous distractions from just building the damn thing. Our foundation is built on three core beliefs :</p>
        <div className='mt-8 flex justify-center items-start w-full gap-10 sm:gap-20 flex-wrap'>
          <div className='max-w-[280px] flex justify-center items-center flex-col'>
            <img src={Diversity} alt="Diversity" className='w-[35px] h-[35px] sm:w-[83px] sm:h-[83px]' />
            <h3 className='my-2 sm:my-8 font-gothic-a1 font-bold text-base sm:text-[28px] leading-4 md:leading-5 lg:leading-7 xl:leading-9 text-center'>Speed</h3>
            <p className='text-center font-semibold text-[10px] sm:text-base leading-3 sm:leading-5'>The first idea is never the final one, and the quicker you get in front of potential customers, the quicker you can iterate your way to something that clicks. Your early stage advantage against incumbents is speed, but in the earliest days it’s hard to balance moving quickly against the slowness of learning new functions and doing everything yourself.</p>
          </div>
          <div className='max-w-[280px] flex justify-center items-center flex-col'>
            <img src={Remote} alt="Remote" className='w-[35px] h-[35px] sm:w-[83px] sm:h-[83px]' />
            <h3 className='my-2 sm:my-8 font-gothic-a1 font-bold text-base sm:text-[28px] leading-4 md:leading-5 lg:leading-7 xl:leading-9 text-center'>Remote</h3>
            <p className='text-center font-semibold text-[10px] sm:text-base leading-3 sm:leading-5'>That remote teams have power to transcend geographical boundaries and achieve remarkable outcomes.</p>
          </div>
          <div className='max-w-[280px] flex justify-center items-center flex-col'>
            <img src={Delegation} alt="Delegation" className='w-[35px] h-[35px] sm:w-[83px] sm:h-[83px]' />
            <h3 className='my-2 sm:my-8 font-gothic-a1 font-bold text-base sm:text-[28px] leading-4 md:leading-5 lg:leading-7 xl:leading-9 text-center'>Delegation</h3>
            <p className='text-center font-semibold text-[10px] sm:text-base leading-3 sm:leading-5'>That delegation to trusted employees allows executives and leaders to concentrate on their most impactful work, knowing that their vision is being amplified by a competent team spread across time zones, turning potential logistical challenges into advantages.</p>
          </div>
        </div>
        <div className='text-center'>
          <a href="/#/contact">
            <button className='mt-6 sm:mt-8 md:mt-10 xl:mt-36 text-xs sm:text-sm md:text-base xl:text-lg leading-[24px] text-white rounded-[60px] py-3 xl:py-[15px] px-8 xl:px-[60px] border-2 border-solid border-[#0C0405] bg-[#0C0405]'>Start Hiring Today</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Story
