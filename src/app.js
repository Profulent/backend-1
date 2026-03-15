import express from "express"
import multer from "multer"
import uploadFile from "./services/storage.service.js"



const app = express()

app.use(express.json())


const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req, res)=> {
  console.log(req.body)
  console.log(req.file)

  const result = await uploadFile(req.file.buffer)
  console.log(result)
})









export default app


// see we have image and caption , so in postman we used not the raw format but form data format
// since there is a change of format, we cant use app.use(express.json()) anymore
// use multer middleware 