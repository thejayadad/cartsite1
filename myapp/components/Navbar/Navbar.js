'use client'


import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'


const Navbar = () => {
  return (
    <header className='px-4 py-8'> 
        <div className='flex justify-between max-w-screen-xl mx-auto'>
        <Link href={'/'}>MarketShare</Link>
        <div className='flex gap-2'>
        <AiOutlineShoppingCart size={30} />
        <span className='rounded-full bg-gray-300 text-black'>
        0
        </span>
        </div>
        </div>
    </header>
  )
}

export default Navbar