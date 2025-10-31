import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      
      <div>
        <img src={assets.coach} className='w-7 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Expert Guidance from Top University Mentors</p>
        <p className=' text-gray-400'>Our mentors have successfully navigated the admissions process for elite universities like Harvard, Stanford, and Princeton. They offer firsthand insights, ensuring top-quality mentorship.</p>
      </div>
      <div>
        <img src={assets.support_img} className='w-7 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Personalized Support Tailored to Teens</p>
        <p className=' text-gray-400'>Our mentors were in your shoes just a few years back. They understand you and will be your elder siblings through this process.</p>
      </div>
      <div>
        <img src={assets.consultant} className='w-7 m-auto mb-5' alt="" />
        <p className=' font-semibold'>Committed Mentors Who Go the Extra Mile</p>
        <p className=' text-gray-400'>Our mentors have assisted our students in building passion projects, writing essays, getting a good grade on their calculus test, landing internships, getting a good SAT score and so much more.</p>
      </div>

    </div>
  )
}

export default OurPolicy



