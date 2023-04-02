import { connectDB } from "@/lib/connect"


export  function GET(){
  const response =  connectDB()
  return new Response(response)

}