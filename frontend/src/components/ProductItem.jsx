import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name}) => {
  const { products } = useContext(ShopContext);
  const product = products.find((p) => p._id === id);
  const description = product?.description || '';

  return (
    <Link onClick={() => scrollTo(0, 0)} className='block border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden bg-[#FEE8C9] p-3' to={`/product/${id}`}>
      <div className='overflow-hidden rounded-md mb-3'>
        <img className='w-70 h-60 object-cover' src={image[0]} alt={name} />
      </div>
      <div className='px-1'>
        <h3 className='font-medium text-gray-800 truncate text-sm sm:text-base'>{name}</h3>
        <p className='text-gray-600 text-xs sm:text-sm mt-2 line-clamp-3'>{description}</p>
      </div>
    </Link>
  )
}

export default ProductItem
