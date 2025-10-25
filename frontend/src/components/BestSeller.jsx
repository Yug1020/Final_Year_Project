// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// // import ProductItem from './ProductItem';

// const BestSeller = () => {

//     // const {products} = useContext(ShopContext);
//     // const [bestSeller,setBestSeller] = useState([]);

//     // useEffect(()=>{
//     //     const bestProduct = products.filter((item)=>(item.bestseller));
//     //     setBestSeller(bestProduct.slice(0,5))
//     // },[products])

//   return (
//     <div className='my-10'>
//       <div className='text-center text-3xl py-8'>
//         <Title text1={'BEST'} text2={'MENTORS'}/>
//         <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
//         Looking to apply to abroad for master? Our student will guide you through the whole process.
//         </p>
//       </div>

//       {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6'>
//         {bestSeller.map((item,index)=>(
//           <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
//         ))}
//       </div> */}

      
//     </div>
//   )
// }

// export default BestSeller


import React from "react";
import Title from "./Title";
import MentorsSection from "./MentorsSection";

const BestSeller = () => {
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="MENTORS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Looking to apply abroad for a master's? Our students will guide you through every step.
        </p>
      </div>

      <MentorsSection />
    </div>
  );
};

export default BestSeller;
