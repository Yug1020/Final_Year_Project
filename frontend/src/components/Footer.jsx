import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleContact = (type) => {
    if (type === 'phone') {
      window.location.href = 'tel:+1-212-456-7890';
    } else if (type === 'email') {
      window.location.href = 'mailto:contact@furnivers.com';
    }
  };

  const handleCopyright = () => {
    alert('© 2024 FurniVers - Interior Design & AR Furniture Visualization');
  };

  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <span className='text-lg'>Mentor</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-[#f39c12] mx-[-5px] text-lg">
              Map
            </span>
            <p className='w-full md:w-2/3 text-gray-600'>
            MentorMap is a career guidance platform that connects students with mentors, helping them make informed academic and career choices. We empower learners to discover their true potential and build a path toward success.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleNavigate('/')}>Home</li>
                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleNavigate('/collection')}>Browse Mentor</li>
                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleNavigate('/contact')}>Top Universities</li>
                                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleNavigate('/about')}>About us</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleContact('phone')}>+91 9594230580</li>
                <li className='cursor-pointer hover:text-black transition-colors' onClick={() => handleContact('email')}>yugandhardhore@gmail.com</li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
