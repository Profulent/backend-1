import express from "express"
import multer from "multer"
import uploadFile from "./services/storage.service.js"
import postModel from "./models/post.model.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())


const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req, res)=> {
  

  const result = await uploadFile(req.file.buffer)
  
  const post = await postModel.create({ // saving url and caption in database
    image:result.url,
    caption:req.body.caption
  })

  return res.status(201).json({
    message:"post created successfully",
    post
  })
})


app.get("/posts", async(req,res)=>{
  
  const posts = await postModel.find()

  return res.status(200).json({
    message:"Posts fetched successfully.",
    posts
  })
})







export default app


// see we have image and caption , so in postman we used not the raw format but form data format
// since there is a change of format, we cant use app.use(express.json()) anymore
// use multer middleware 