'use client'

import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <section className='px-4 py-24'>
        <div className='lg:flex lg:flex-row sm:flex sm:gap-24 sm:flex-col md:flex-col justify-around items-center'>
        <Link href={'/category/'}>Hot</Link>
        <Link href={'/category/'}>Hot</Link>
        <Link href={'/category/'}>Hot</Link>
        <Link href={'/category/'}>Hot</Link>
        </div>
    </section>
  )
}

export default Category