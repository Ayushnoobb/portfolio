import mongoose from 'mongoose';
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: {
    type : String,
    require : true,
  }, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  description:{
    type : String,
    require : true ,

  }
});

export default mongoose.model("Blog" , blogSchema)

