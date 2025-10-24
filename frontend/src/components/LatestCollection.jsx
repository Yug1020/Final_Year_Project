import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
// import ProductItem from './ProductItem';
import UniversitySlider from "./UniversitySlider";

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'TOP'} text2={'UNIVERSITIES'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover Your Dream Study Abroad Destination
          </p>
      </div>

      {/* Rendering Products */}
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6'>
        {products.slice(0,4).map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div> */}
      
      {/* Slide show */}
      <UniversitySlider />

    </div>
  )
}

export default LatestCollection
