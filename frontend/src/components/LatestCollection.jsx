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
    <div className='my-10 py-10 w-[120%] -ml-[10%] bg-[linear-gradient(to_bottom,transparent_0%,rgba(189,195,199,0.2)_10%,rgba(189,195,199,0.4)_15%,rgba(189,195,199,0.6)_20%,rgba(189,195,199,0.8)_25%,rgb(189,195,199)_30%,rgb(189,195,199)_70%,rgba(189,195,199,0.8)_75%,rgba(189,195,199,0.6)_80%,rgba(189,195,199,0.4)_85%,rgba(189,195,199,0.2)_90%,transparent_100%),linear-gradient(to_right,transparent_0%,rgba(189,195,199,0.2)_5%,rgba(189,195,199,0.4)_10%,rgba(189,195,199,0.6)_15%,rgba(189,195,199,0.8)_20%,rgb(189,195,199)_25%,rgb(189,195,199)_75%,rgba(189,195,199,0.8)_80%,rgba(189,195,199,0.6)_85%,rgba(189,195,199,0.4)_90%,rgba(189,195,199,0.2)_95%,transparent_100%)] rounded-3xl overflow-x-hidden'>
      <div className='text-center py-8 text-3xl '>
          <Title text1={'BEST'} text2={'MENTORS'} />
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Looking to apply for Masters ? Our mentors will guide you through the whole process.
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
