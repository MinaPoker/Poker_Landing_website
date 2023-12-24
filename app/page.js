import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Explore from "@/sections/Explore"
import { Roadmap } from '@/sections/Index'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero/>
    <div className="gradient-03 z-0" />
      <Explore />
    </div>

    <div className='relative'>
    <GetStarted />
      <div className='relative'>
        <Roadmap />
      </div>
    </div>

    <div className='relative'>
    <Insights />
    </div>
      <About />
    </main>
  )
}
