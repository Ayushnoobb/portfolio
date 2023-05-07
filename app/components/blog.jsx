import Link from "next/link";
import React from "react";
import getPosts from "@/lib/post";

export default async function Blog(){
  const blogs = await getPosts();
  let id = 0 ;
  // console.log(blogs)
  return(
    <>
      {
        blogs.map((blog)=>{
          // {console.log(blog.content)}
          return(
          <>
            <Link key={blog.id} className="pt-4 hover:shadow-xl shadow-lg  blog odd:bg-gray-300 even:bg-slate-300" href={`/blog/${blog.id}`}>
              <div className="mb-8 border-dotted border-b pb-8 border-gray-300 px-4">
                <h2 className="capitalize">
                  <span className="block">{blog.title}</span>
                </h2>
                <p className="excerpt text-slate-500 font-medium no-underline">{blog.description}</p><p className="tag text-slate-500  text-sm">Category : {blog.category}</p>
                <span className="block md:inline md:float-right  created-date text-sm text-slate-500">{blog.date}</span>
                {/* dangerouslySetInnerHTML={{__html: JSON.stringify(blog.content)}} */}
              </div>
            </Link>
          </>
          )
        })
      }
    </>

  )
}
