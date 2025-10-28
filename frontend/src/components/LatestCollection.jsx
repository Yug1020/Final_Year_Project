import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    // Split products into two rows (even and odd indices)
    const rowA = products.filter((_, i) => i % 2 === 0);
    const rowB = products.filter((_, i) => i % 2 === 1);

    // Duplicate arrays for seamless infinite scroll
    const rowADuplicated = [...rowA, ...rowA];
    const rowBDuplicated = [...rowB, ...rowB];

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
          <Title text1={'LATEST'} text2={'COLLECTIONS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Discover our latest collection, featuring elegant designs, innovative layouts, and timeless decor pieces tailored to elevate every corner of your home.
          </p>
      </div>

      {/* Infinite Scroll Rows */}
      <div className="flex flex-col gap-10 overflow-hidden my-6">
        {/* Row A - Scrolls Left */}
        <div className="flex animate-scroll gap-6">
          {rowADuplicated.map((item, index) => (
            <div key={`${item._id}-a-${index}`} className="flex-shrink-0 w-[280px]">
              <ProductItem 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                // price={item.price} 
              />
            </div>
          ))}
        </div>

        {/* Row B - Scrolls Right (Reverse) */}
        <div className="flex animate-scroll-reverse gap-6">
          {rowBDuplicated.map((item, index) => (
            <div key={`${item._id}-b-${index}`} className="flex-shrink-0 w-[280px]">
              <ProductItem 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                // price={item.price} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Animations */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 35s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 35s linear infinite;
          }
        `}
      </style>
    </div>
  )
}

export default LatestCollection
