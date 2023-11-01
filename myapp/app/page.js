import Category from '@/components/Category/Category'
import Hero from '@/components/Hero/Hero'
import ShowCase from '@/components/ShowCase/ShowCase'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='max-w-screen-xl mx-auto'>
    <Hero />
    <Category />
    <ShowCase />
    
   </main>
  )
}
