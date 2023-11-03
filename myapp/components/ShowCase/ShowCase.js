'use client'

import React from 'react'
import ProductItem from '../Product/ProductItem'

const ShowCase = ({products}) => {
  return (
    <section className='px-4 py-24'>
      <h2 className='text-center text-4xl mb-12'>Featured Donuts</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center'>
        {products?.map((product) => (
            <ProductItem key={product._id} product={product} />
        ))}
        </div>
    </section>
  )
}

export default ShowCase