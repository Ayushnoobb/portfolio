// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import  './page.css'
import  './globals.css'

import { Permanent_Marker } from 'next/font/google'
const marker = Permanent_Marker({ subsets: ['latin'] , weight:"400"})

export default function Home() {
  return (
    <>
      <section className='description bg-grey'>
        <div className='container'>
          <div className='flex justify-end  py-16 '>
            <div className='image-holder relative w-2/4'>
              <div className='image absolute'>
              </div>
            </div>
            <div className='flex flex-col justify-between w-2/4 text-slate-700 font-bold'>
              <h2 className='text-4xl'><span className={marker.className}>Hello<span className='text-4xl wave'>👋</span><br/>
                <span className='text-4xl'>I am Ayush</span></span></h2>
              <h3>
                I am Full Stack Developer
              </h3>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
