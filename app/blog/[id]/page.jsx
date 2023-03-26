// "use client"
import React from 'react'

export default async function Blog({params}) {
  const {id} = params
  console.log(id)
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const res = await data.json()
  console.log(res)
  return (
    <div className='container'>
      {
        res.title
      }
    </div>
  )
}
