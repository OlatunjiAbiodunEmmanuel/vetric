import React from 'react'
// import Chat from '../components/Chat'
import Hero from '../components/Hero'
import { ModeToggle } from '@/app/components/toggle'



const page = () => {
  return (
    <div className="mx-auto hscreen">
      <Hero/>
       {/* <Chat /> */}
       <div className="fixed bottom-4 right-4  md:hidden text-black dark:text-white">
            <ModeToggle/>
          </div>
    </div>
  )
}

export default page