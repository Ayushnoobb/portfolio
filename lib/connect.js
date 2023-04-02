import mongoose from "mongoose";
mongoose.set('strictQuery' , true)

export async function connectDB(){
  try{
    await mongoose.connect(process.env.MONGOOSE_URI);
    return ("connected to db")
  }catch(error){
    console.log(error)
  }
}