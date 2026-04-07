import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
  image: String,
  caption: String
}) // how will this look in database ->
// {
//   _id: ObjectId("123"),
//   image: "https://ik.imagekit.io/abc/image.jpg",
//   caption: "This is a caption"
// }


const postModel = mongoose.model("post", postSchema) // models are used to interact with the database. 
// we will use the model in 

export default postModel