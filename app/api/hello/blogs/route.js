export async function GET(request) {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res =>res.json())
  .then(blog =>{
    return new Response(blog)
  })
}
