import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import calendar from '../assets/calendar.png';
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible,setVisible] = useState(false);

    const {setShowSearch , getCartCount , navigate, token, setToken, setCartItems} = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className='flex items-center justify-between py-5 text-2xl'>
      
      <Link to="/" className="flex items-center font-extrabold text-2xl">
        <span>Mentor</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e67e22] to-[#f39c12] mx-[-5px]">
          Map
        </span>
        </Link>


      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink
          to="/"
          className="relative text-[#2c3e50] no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full flex flex-col items-center gap-1">
          <p>HOME</p>
        </NavLink>

        <NavLink to='/collection' className="relative text-[#2c3e50] no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#667eea]after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px]after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2]after:transition-all after:duration-300 after:ease-in-out hover:after:w-full flex flex-col items-center gap-1">
            <p>Browse Mentors</p>
        </NavLink>
        <NavLink to='/about' className="relative text-[#2c3e50] no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full flex flex-col items-center gap-1">
            <p>Top Universities</p>
        </NavLink>
        <NavLink to='/contact' className="relative text-[#2c3e50] no-underline font-medium transition-colors duration-300 ease-in-out hover:text-[#667eea] after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#667eea] after:to-[#764ba2] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full flex flex-col items-center gap-1">
            <p>About Us</p>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
            {/* <img onClick={()=> { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" /> */}
            
            <div className='group relative'>
                <img onClick={()=> token ? null : navigate('/login') } className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                {/* Dropdown Menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>}
            </div> 
            <Link to='/cart' className='relative'>
                <img src={calendar} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link> 
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" /> 
      </div>

        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
                </div>
        </div>

    </div>
  )
}

export default Navbar
