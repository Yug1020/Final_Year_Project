import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Product = () => {

  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('')
  const [similarSizeProducts, setSimilarSizeProducts] = useState([]);

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  // AR view removed per new design

  useEffect(() => {
    fetchProductData();
  }, [productId,products])

  useEffect(() => {
    if (productData && products.length > 0) {
      // Find products with the same sizes
      const sameSize = products.filter(item => 
        item._id !== productData._id && // Don't include current product
        item.sizes.some(size => productData.sizes.includes(size))
      );
      
      // Take only the first 5 products
      setSimilarSizeProducts(sameSize.slice(0, 5));
    }
  }, [productData, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*----------- Product Data-------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/*---------- Product Image (single) ------------- */}
        <div className='flex-1'>
          <div className='w-full'>
            <img className='w-full h-auto rounded-lg' src={image || productData.image[0]} alt={productData.name} />
          </div>
        </div>

        {/* -------- Product Info ---------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className=' flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

          {productData.details && (
            <div className='mt-6'>
              <h2 className='text-lg font-semibold mb-3'>Mentor's Detail</h2>
              <p className='text-sm text-gray-700 leading-6 whitespace-pre-line md:w-4/5'>{productData.details}</p>
            </div>
          )}

          {/* CTAs removed per request */}
          
          <div className='flex gap-4 mt-8'>
            <button onClick={()=>addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>Book Session</button>
          </div>
          
          <hr className='mt-8 sm:w-4/5' />
          {/* <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within 7 days.</p>
          </div> */}
        </div>
      </div>

      {/* ---------- Description Section (removed per request) ------------- */}

      {/* <div className='mt-6 md:w-4/5'>
        <button
          onClick={() => { addToCart(productData._id); navigate('/place-order'); }}
          className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded'
        >
          Book Session
        </button>
      </div> */}

      {/* --------- display related products ---------- */}

      {/* <RelatedProducts category={productData.category} subCategory={productData.subCategory} /> */}

      {/* --------- display products with similar sizes ---------- */}
      {/* {similarSizeProducts.length > 0 && (
        <div className='my-24'>
          <div className='text-center text-3xl py-2'>
            <Title text1={'SIMILAR'} text2={'SIZES'} />
          </div>
          <div className='mt-6'>
            <p className='mb-4 text-gray-600'>Products available in similar sizes:</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
              {similarSizeProducts.map((item, index) => (
                <div key={index} className='border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-3 bg-white'>
                  <div className='overflow-hidden rounded-md mb-2'>
                    <img 
                      src={item.image[0]} 
                      alt={item.name} 
                      className='w-full h-48 object-cover hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                  <h3 className='font-medium text-gray-800 truncate'>{item.name}</h3>
                  <div className='flex justify-between items-center mt-2'>
                    <p className='font-bold text-gray-900'>{currency}{item.price}</p>
                    <div className='text-xs bg-gray-100 px-2 py-1 rounded-full'>
                      {item.sizes.join(', ')}
                    </div>
                  </div>
                  <button 
                    onClick={() => window.location.href = `/product/${item._id}`}
                    className='w-full mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded text-sm transition-colors'
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
      } */}
    </div>
  ) : <div className=' opacity-0'></div>
}

export default Product
