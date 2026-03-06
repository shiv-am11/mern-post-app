const ImageKit = require('@imagekit/nodejs');

const imageKit = new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:"https://ik.imagekit.io/599ln8cxh"
})
async function uploadFile(buffer){
   const result = await imageKit.files.upload({
     file: buffer.toString("base64"),
     fileName:"image.jpg",
   })
   return result
} 
module.exports = uploadFile;