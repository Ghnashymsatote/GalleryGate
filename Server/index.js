const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Post=require("./Model/Post")
const cors=require("cors")
app.use(express.urlencoded({extended:true}));
let port=1000;
app.use(cors());
main().then((res)=>{
    console.log("Connecion Successfull REST");
}).catch(err =>console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/REST")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

app.post("/Post/new",async(req,res)=>{
    let{name,post}=req.query;
   
    let PostData=new Post({
        name:name,
        post:post
    })
    PostData.save().then((dt)=>{
        console.log("Post was Save");
    }).catch((e)=>{
        console.log(e)
    })
    NewPost=await Post.find();
    res.send(NewPost);
    console.log(NewPost)
})


  app.listen(port,()=>{
    console.log(` app is running ${port}`)
})