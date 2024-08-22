const mongoose=require("mongoose");
const PostSchema=new mongoose.Schema({
   name:{
     type:String,

   },
   Msg:{
    type:String
   },
   Picture:{
    type:String,
    required:true
}
});
const Post=mongoose.model("Post",PostSchema);
module.exports=Post;