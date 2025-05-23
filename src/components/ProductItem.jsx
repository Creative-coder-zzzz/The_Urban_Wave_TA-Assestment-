import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
const ProductItem = ({ id, image, name, price , rating, review}) => {

  const { currency } = useContext(ShopContext);
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const totalStars = 5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} className='w-3.5' src={assets.star_icon} alt='star' />);
    }
    for (let i = fullStars; i < totalStars; i++) {
      stars.push(<img key={`dull-${i}`} className='w-3.5' src={assets.star_dull_icon} alt='star' />);
    }

    return stars;
  };
  return (
    <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)} className='text-gray-700 cursor-pointer'>
      
      <div className='hover:scale-110 duration-300 shadow-lg p-2'>
        <img src={image[0]} className='max-h-54 objext-cover' />
        <p className='font-bold'>{name}</p>
        <div className='flex items-center gap-1 mt-2'>

                       {renderStars()}
                       <p>({review})</p>
                  </div>
                  <div className='flex justify-between items-center mt-2'>
           <p className='font-bold'>{currency}{price}</p>
          <button className='p-1 bg-black text-white rounded-lg'>View Product</button>
          </div>
      </div>
      
    </Link>
  )
}

export default ProductItem