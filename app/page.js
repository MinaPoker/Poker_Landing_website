import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    
    </div>
      <About />
    </main>
  )
}
