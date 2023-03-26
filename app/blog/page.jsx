import React from 'react'
import Link from 'next/link'



export default async function Blog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  const res = await data.json()
  return (
    <>
      <div className="container">
      {
        res.map((post)=>{
          return (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <h2>{post.title}</h2>
          </Link>
          )
        })
      }
      </div>
    </>
  )
}
