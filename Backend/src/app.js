const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require("./models/postModel")
const cors = require("cors")

const app = express();
app.use(cors());
const upload = multer({storage:multer.memoryStorage()})
app.use(express.json());

app.post("/create-post" ,upload.single('image'), async(req , res)=>{
    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image: result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message: "Post created successfully",
        post
    })
})
app.get("/posts",async (req, res)=>{
    const posts = await postModel.find()
    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})

app.delete("/posts/:id", async (req, res)=>{
    try{
         const deletePost = await postModel.findByIdAndDelete(req.params.id)

         if(!deletePost){
            return res.status(404).json({
                message:"Post not found"
            })
         }else{
            return res.status(200).json({
                message:"Post deleted successfully"
            })
         }
    }catch(err){
        console.log(err)

        return res.status(500).json({
            message:"Server error"
        })
    }
   
})
module.exports = app;
