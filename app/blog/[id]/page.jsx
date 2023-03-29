// "use client"
import React from 'react'

export default async function Blog({params}) {
  const {id} = params
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const res = await data.json()
  return (
    <div className='container'>
      {
        res.title
      }
    </div>
  )
}
