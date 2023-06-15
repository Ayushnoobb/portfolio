import { NextRequest } from "next/server";

export  async function POST(req , res){
  if(req.method === 'POST'){
    console.log(req.body);
    console.log("req")
    
  }
}