import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
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
    <div className='bg-[#f7f5f0] rounded-2xl p-6 md:p-8 border  border-gray-200 shadow-md my-12'>
  {/*----------- Product Data-------------- */}
  <div className='flex gap-16 flex-col lg:flex-row max-w-6xl mx-auto px-6'>

    {/*---------- Product Image (single) ------------- */}
    <div className='flex-shrink-0'>
      <div className='w-full lg:w-80'>
        <img className='w-full h-auto rounded-2xl shadow-lg object-cover' src={image || productData.image[0]} alt={productData.name} />
      </div>
    </div>

    {/* -------- Product Info ---------- */}
    <div className='flex-1 max-w-2xl'>
      <h1 className='font-semibold text-3xl text-gray-900'>{productData.name}</h1>
      <div className='flex items-center gap-1 mt-3'>
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_icon} alt="" className="w-3.5" />
          <img src={assets.star_dull_icon} alt="" className="w-3.5" />
          <p className='pl-2 text-sm text-gray-600'>(122)</p>
      </div>
      <p className='mt-6 text-3xl font-semibold text-gray-900'>{currency}{productData.price}</p>
      <p className='mt-6 text-gray-600 leading-relaxed'>{productData.description}</p>

      {productData.details && (
        <div className='mt-8'>
          <h2 className='text-xl font-semibold mb-4 text-gray-900'>Mentor's Detail</h2>
          <p className='text-base text-gray-700 leading-7 whitespace-pre-line'>{productData.details}</p>
        </div>
      )}

      {/* CTAs removed per request */}
      
      <div className='flex gap-4 mt-10'>
        <button onClick={()=>addToCart(productData._id)} className='bg-gray-900 text-white px-10 py-3.5 text-sm font-medium rounded-lg hover:bg-gray-800 active:bg-gray-700 transition-colors'>Book Session</button>
      </div>
      
      <hr className='mt-10 border-gray-200' />
      {/* <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% Original product.</p>
          <p>Cash on delivery is available on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>
      </div> */}
    </div>
  </div>
</div>

  ) : <div className=' opacity-0'></div>
}

export default Product
