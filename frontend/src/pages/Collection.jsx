import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

  const { products , search , showSearch } = useContext(ShopContext);
  const [filterProducts,setFilterProducts] = useState([]);
  const location = useLocation();

  useEffect(()=>{
    let productsCopy = products.slice();
    // search filter, if active
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    // country filter from query param
    const params = new URLSearchParams(location.search);
    const country = params.get('country');
    if (country) {
      const countryLower = country.toLowerCase();
      productsCopy = productsCopy.filter(item => (item.mastersCountry || '').toLowerCase() === countryLower)
    }
    setFilterProducts(productsCopy)
  },[search,showSearch,products,location.search])

  return (
    <div className='pt-10 border-t'>
      <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
        <Title text1={'ALL'} text2={'COLLECTIONS'} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))
        }
      </div>
    </div>
  )
}

export default Collection
