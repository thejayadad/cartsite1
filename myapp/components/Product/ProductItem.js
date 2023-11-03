'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'


const ProductItem = ({product}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleMouseEnter = () => {
      setShowDetails(true);
    };
  
    const handleMouseLeave = () => {
      setShowDetails(false);
    };
  return (
    <Link href={`/product/${product._id}`} className='group relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='relative'>
        <Image src={product.image} alt={product.name} width={700} height={400} />
        <div
          className={`${
            showDetails ? 'block' : 'hidden'
          } group-hover:block absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-xl font-semibold`}
        >
          <p className='text-center'>
            {product.name} - ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductItem