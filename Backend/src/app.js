import express from "express"
import multer from "multer"
import uploadFile from "./services/storage.service.js"
import postModel from "./models/post.model.js"
import cors from "cors"

const app = express()

app.use(cors()) // cross origin means that our frontend and backend are running on different ports so we need to enable cors to allow our frontend to communicate with our backend. if we dont enable cors then we will get a cors error in the browser console when we try to make a request from the frontend to the backend. so we need to enable cors in our backend to allow our frontend to communicate with our backend.
app.use(express.json())


// image.jpg (on user's device)
//         ↓
// sent via form-data
//         ↓
// multer reads it
//         ↓
// stored as buffer in memory
//         ↓
// req.file.buffer

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => { // there are three parameters in this route. first is the route path, second is the multer middleware which is responsible for handling the file upload and third is the route handler which is responsible for handling the request and sending the response. upload.single("image") means that we are expecting a single file with the field name "image" in the form data. this will read the file from the form data and store it in memory as a buffer and make it available in req.file.buffer.


  const result = await uploadFile(req.file.buffer) // we got req.file.buffer from multer middleware from the above line.  

  const post = await postModel.create({ // saving url and caption in database
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "post created successfully",
    post
  })
})


app.get("/posts", async (req, res) => {

  const posts = await postModel.find() // this will return all the posts from the database. 

  return res.status(200).json({
    message: "Posts fetched successfully.",
    posts
  })
})







export default app


// see we have image and caption , so in postman we used not the raw format but form data format
// since there is a change of format, we cant use app.use(express.json()) anymore
// use multer middleware 