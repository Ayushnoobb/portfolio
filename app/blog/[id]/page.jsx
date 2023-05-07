// "use client"
import getPosts from '@/lib/post'
import React from 'react'
import md from "markdown-it";

export default async function Blog({params}) {
  const {id} = params
  


  const blogs = await getPosts();

  return (
    <div className='container'>
      {
        blogs.map(blog => {
          if(id == blog.id){
            return(
              <div dangerouslySetInnerHTML={{ __html: md().render(blog.content) }} key={blog.id}/>
            )
          }
        })
      }
    </div>
  )
}
