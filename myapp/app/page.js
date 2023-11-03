'use client'
import Category from '@/components/Category/Category'
import Hero from '@/components/Hero/Hero'
import ShowCase from '@/components/ShowCase/ShowCase'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  useEffect(() => {
    axios.get('/api/product') 
      .then((response) => {
        setFeaturedPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching featured posts:', error);
      });
  }, []);
  return (
   <main className='max-w-screen-xl mx-auto'>
    <Hero />
    <Category />
    <ShowCase products={featuredPosts} />
    
   </main>
  )
}

