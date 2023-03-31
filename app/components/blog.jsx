import Link from "next/link";
import React from "react";

export default async function Blog() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();

  let toShowBlogs = [];

  // only 6 blog to display
  for (let i = 0; i < 4; i++) {
    toShowBlogs.push(res[i]);
  }
  return (
    <>
      {toShowBlogs.map((blog) => {
        return (
          <Link
            href={`/blog/${blog.id}`}
            key={blog.id}
            className="pt-4 hover:shadow-lg  blog odd:bg-gray-300 even:bg-slate-300"
          >
            <div className="mb-8 border-dotted border-b pb-8 border-gray-300 px-4">
              <h2 className="capitalize">
                <span className="block">{blog.title}</span>
              </h2>
              <p className="excerpt text-slate-500 font-medium">
                Brief description of the blog
              </p>

              <p className="tag text-slate-500  text-sm">category</p>

              <span className="block md:inline md:float-right  created-date text-sm text-slate-500">
                Blog creation date
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
}
