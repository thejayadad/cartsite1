'use client'

import React from 'react'
import ProductItem from '../Product/ProductItem'

const ShowCase = ({products}) => {
  return (
    <section className='px-4 py-24'>
        <div className='flex lg:flex-row justify-between md:flex-col sm:flex-col sm:gap-24 items-center md:gap-24'>
        {products?.map((product) => (
            <ProductItem key={product._id} product={product} />
        ))}
        </div>
    </section>
  )
}

export default ShowCase