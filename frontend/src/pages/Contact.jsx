import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.MentorMap_logo} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>MentorMap is a career guidance platform designed to help students aspiring to pursue their master’s degrees. It connects users with experienced mentors who offer personalized support for career planning, course selection, and doubt-solving. Our goal is to simplify the journey of higher education by providing expert mentorship and real-world insights from professionals who have already achieved success in their respective fields.</p>
              <p>At MentorMap, we believe that the right mentor can make all the difference. Our platform helps students discover their interests, explore global education opportunities, and make confident decisions about their future. With an easy-to-use interface and dedicated guidance, MentorMap empowers learners to take the next step toward their dream career.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our Mission is to move beyond the traditional methods of career guidance and introduce a modern, accessible way for students to connect with mentors through our platform. MentorMap aims to create a mentoring experience that feels like having an elder sibling i.e someone who genuinely understands your journey, guides you with care, and helps you make the right choices which we call it as elder sibling approach. We are committed to providing students with maximum value, personalized mentorship, and meaningful insights at an affordable cost, ensuring every learner gets the guidance they need to achieve their goals.</p>
          </div>
      </div>

      {/* <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div> */}

      {/* <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>AR Visualization:</b>
            <p className=' text-gray-600'>Experience furniture in your space before purchasing with our cutting-edge augmented reality technology.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Expert Design Consultation:</b>
            <p className=' text-gray-600'>Our team of interior design professionals provides personalized advice to help create your perfect space.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Premium Craftsmanship:</b>
            <p className=' text-gray-600'>Each piece in our collection is selected for its quality, durability, and exceptional design to elevate your living spaces.</p>
          </div>
      </div> */}
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Office</p>
          <p className=' text-gray-500'>Vidyalankar Institute Of Technology <br /> Antop Hill,Wadala Road, Mumbai, India</p>
          <p className=' text-gray-500'>Mobile: +91 9594230580 <br /> Email: yugandhardhore@gmail.com</p>
          {/* <p className='font-semibold text-xl text-gray-600'>Careers at FurniVers</p> */}
          {/* <p className=' text-gray-500'>Learn more about our teams and job openings.</p> */}
          {/* <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button> */}
        </div>
      </div>


    </div>
  )
}

export default Contact
