// isme imagekit ka code likhenge.
import dotenv from "dotenv";
dotenv.config()
import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({

  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) { // the parameter buffer is the file data that we got from multer middleware in the route handler in app.js. this buffer is stored in memory by multer and we can access it using req.file.buffer in the route handler. this buffer contains the actual file data that we want to upload to imagekit. so we will pass this buffer to the uploadFile function and then we will upload it to imagekit and return the result which contains the URL of the uploaded image and other metadata.  
  console.log(buffer)


  const result = await imagekit.files.upload({ // sending this to imagekit for uploading the file // this line is responsible for uploading the file to imagekit.
    file: buffer.toString("base64"),  // buffer is converted to base64 string before uploading to imagerkit
    fileName: "image.jpg" // here file and fileName are the parameters required by imagekit to upload the file. file is the actual file data and fileName is the name of the file that we want to give to the uploaded file in imagekit. image.jpg is just an example name, you can give any name you want but the question is how to generate a unique name for each uploaded file. we can use the current timestamp to generate a unique name for each uploaded file. like this: `${Date.now()}.jpg` this will generate a unique name for each uploaded file based on the current timestamp. so we can replace "image.jpg" with `${Date.now()}.jpg` to generate a unique name for each uploaded file.
  })

  return result;
  // result DOES NOT contain the original buffer, it contains the URL of the uploaded image and other metadata.
  // { { //like this.
  // "url": "https://ik.imagekit.io/abc/image.jpg",
  // "fileId": "123",
  // "name": "image.jpg",
  // "size": 24567

  // uploadFile function takes buffer as input and  uploads it to imagekit and returns the result which contains the URL of the uploaded image and other metadata.
}

export default uploadFile