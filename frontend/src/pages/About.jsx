import React from 'react'
import { useNavigate } from 'react-router-dom'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  const navigate = useNavigate();
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'TOP'} text2={'COUNTRIES'} />
      </div>
      <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {/* USA */}
        <div className='border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white'>
          <img className='w-full h-40 object-cover' src={assets.USA} alt='Study in USA' />
          <div className='p-4'>
            <h3 className='font-semibold text-gray-900 mb-3'>Study In USA</h3>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li>2.5 lakh Indian students</li>
              <li>4000+ universities</li>
              <li>₹ 40 lakhs per year tuition fee</li>
              <li>3 year stayback</li>
              <li>4% Unemployment Rate</li>
            </ul>
            <button onClick={()=>navigate('/collection?country=USA')} className='mt-4 w-full border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-md py-2 text-sm'>Learn More</button>
          </div>
        </div>

        {/* UK */}
        <div className='border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white'>
          <img className='w-full h-40 object-cover' src={assets.UK} alt='Study in UK' />
          <div className='p-4'>
            <h3 className='font-semibold text-gray-900 mb-3'>Study In UK</h3>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li>1.4 lakh Indian students</li>
              <li>165+ universities</li>
              <li>₹ 25 lakhs per year tuition fee</li>
              <li>2 year stayback</li>
              <li>4.5% Unemployment Rate</li>
            </ul>
            <button onClick={()=>navigate('/collection?country=United%20Kingdom')} className='mt-4 w-full border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-md py-2 text-sm'>Learn More</button>
          </div>
        </div>

        {/* Germany */}
        <div className='border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white'>
          <img className='w-full h-40 object-cover' src={assets.Germany} alt='Study in Germany' />
          <div className='p-4'>
            <h3 className='font-semibold text-gray-900 mb-3'>Study In Germany</h3>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li>38k Indian students</li>
              <li>400+ universities</li>
              <li>₹ 25 lakhs per year tuition fee</li>
              <li>18 months stayback</li>
              <li>3% Unemployment Rate</li>
            </ul>
            <button onClick={()=>navigate('/collection?country=Germany')} className='mt-4 w-full border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-md py-2 text-sm'>Learn More</button>
          </div>
        </div>

        {/* New Zealand */}
        <div className='border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white'>
          <img className='w-full h-40 object-cover' src={assets.new_zealand} alt='Study in New Zealand' />
          <div className='p-4'>
            <h3 className='font-semibold text-gray-900 mb-3'>Study In New Zealand</h3>
            <ul className='text-sm text-gray-600 space-y-2'>
              <li>29k Indian students</li>
              <li>8+ universities</li>
              <li>₹ 30 lakhs per year tuition fee</li>
              <li>3 year stayback</li>
              <li>4.5% Unemployment Rate</li>
            </ul>
            <button onClick={()=>navigate('/collection?country=New%20Zealand')} className='mt-4 w-full border border-rose-300 text-rose-600 hover:bg-rose-50 rounded-md py-2 text-sm'>Learn More</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
