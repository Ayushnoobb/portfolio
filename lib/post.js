import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { Html } from "next/document";

const postDirectory = path.join(process.cwd(),"blogs")

export default async function getPosts (){
  const fileName = fs.readdirSync(postDirectory)
  const allPostData = fileName.map((fileName)=>{
    const id = fileName.replace(/\.md$/,'');

    const fullPath = path.join(postDirectory , fileName);
    const fileContents = fs.readFileSync(fullPath,'utf-8');

    const matterResult = matter(fileContents);

    // const processHTML = await remark().use(Html).process(matterResult.co) ; 

    const blogPost ={

      title : matterResult.data.title,
      date : matterResult.data.date,
      category : matterResult.data.category,
      description : matterResult.data.description,
      id : matterResult.data.id,
      content : matterResult.content

    }
    return blogPost;
  })
  return allPostData;
}