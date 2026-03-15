// isme imagekit ka code likhenge.
import dotenv from "dotenv";
dotenv.config()
import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({

  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {
  console.log(buffer)


  const result = await imagekit.files.upload({
    file:buffer.toString("base64"),
    fileName:"image.jpg"
  })

  return result;
}

export default uploadFile