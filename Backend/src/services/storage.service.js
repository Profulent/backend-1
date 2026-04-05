// isme imagekit ka code likhenge.
import dotenv from "dotenv";
dotenv.config()
import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({

  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) { // buffer is a raw binary data.
  console.log(buffer)


  const result = await imagekit.files.upload({ // sending this to imagekit for uploading the file.
    file: buffer.toString("base64"),  // buffer is converted to base64 string before uploading to imagerkit
    fileName: "image.jpg"
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