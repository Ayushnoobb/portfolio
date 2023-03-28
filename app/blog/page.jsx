import React from 'react'
import Link from 'next/link'



export default async function Blog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await data.json()
  return (
    <>
      <div className="container mx-auto max-w-3xl p-8 grow">
      {
        res.map((post)=>{
          return (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <div className="mb-8 border-dotted border-b pb-8 border-gray-300">
                <h2 className='text-slate-700 font-bold underline text-lg'>
                  <span className="block capitalize">{post.title}</span>
                </h2>

                <p className="excerpt text-slate-500 font-medium">
                  How to decrement from a magic debug value to zero.
                </p>

                <p className="tag spirituality text-slate-500  text-sm">Spirituality</p>

                <span
                  className="block md:inline md:float-right  created-date text-sm text-slate-500"
                >
                  October 9, 2016
                </span>
              </div>
            </Link>
          )
        })
      }
      </div>
    </>
  )
}
