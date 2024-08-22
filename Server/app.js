const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Sign=require("./Model/Sign");
const Post=require("./Model/Post")
const cors=require("cors")
let port=2000;
app.use(cors());
main().then((res)=>{
    console.log("Connecion Successfull new");
}).catch(err =>console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/TASK")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  app.post("/signData",async(req,res)=>{
    let{name,email,password}=req.query;
    let SignupData=new Sign({
        name:name,
        email:email,
        password:password
    })
    SignupData.save().then((dt)=>{
        console.log("Data was Save");
    }).catch((e)=>{
        console.log(e)
    })
    let User=await Sign.find({
        password:SignupData.password,
        });
    console.log(User);
   
    if(User.length > 1 ){
        console.log("try another");
        delUser=await Sign.findByIdAndDelete(SignupData._id);
    }else{
        NewUser=User;
        res.send(NewUser); 
    }  

});
app.post("/loginData",async(req,res)=>{
    let{name,password}=req.query;
    console.log(name,password);
    let Loginuser=await Sign.findOne({name:name});
    let NewUser=await Sign.find({name:name});
    
    let Loginpassword=await Sign.findOne({password:password});
    if(Loginuser){
        if(Loginpassword){
            console.log("Login succsesfull");
            res.send(NewUser);
        }else{
            console.log("not found");
        }
    }else{
        console.log("not found h");
    }
});
app.post("/post",async(req,res)=>{
    let{name,Msg,Picture}=req.query;
    
    
    let PostData=new Post({
        name:name,
        Msg:Msg,
        Picture
    })
    PostData.save().then((dt)=>{
        console.log("Post was Save");
       
    }).catch((e)=>{
        console.log(e)
    });
   
   res.send("Working")
  
    
})
app.get("/post",async(req,res)=>{
    try{
        let NewPost=await Post.find({});
        res.json(NewPost);
    }catch(err){
        res.send(err)
    }

})
app.get("/Middle",async(req,res)=>{
    try{
        let NewPost=await Post.find({});
        res.json(NewPost);
    }catch(err){
        res.send(err)
    }

})
app.listen(port,()=>{
    console.log(` app is running ${port}`)
})