import axios from "axios";
import Axios  from "axios";
import IMG from "./"
import { useState,useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Post(){
    const navigate=useNavigate();
    const location=useLocation();
    let[imgs,setImgs]=useState(null);
    let[post,setPost]=useState({
        name:"",
        Msg:""
    });

    
    let back=async(event)=>{
        event.preventDefault();
        console.log(post);  
        try{
                const res=await Axios.post("http://localhost:2000/post?" + new URLSearchParams({
                name:post.name, 
                Msg:post.Msg,
                Picture:imgs
              
            }))
            navigate("/middle",{state:{
                xyz:{abc:res.data},
         
            }});
            
        }catch(e){
            console.log("Error",e);
        }
    } 
    let POST=(event)=>{
        let url=URL.createObjectURL(event.target.files[0]);
       setImgs(url); 
    }   
    let ChangePost=(event)=>{
        setPost((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }
  
    return(
        <>
            <nav>
                    <h1>Profile</h1>
            </nav>
            <form onSubmit={back}>
                
                <TextField id="outlined-basic" label="Outlined" variant="outlined" type="text" placeholder="input name" name="name" onChange={ChangePost} value={post.name}/>
                <br />
                <br />
                <textarea name="Msg" placeholder="write Something" onChange={ChangePost} value={post.Msg}></textarea>
                <br />
                <br />
                <div>
            <input type="file" onChange={POST} id="in"/>
                <br />
                <br />
            
             
            
            </div>
               
                <Button variant="contained" type="submit">Add Post</Button>
            </form>
           


           <div style={{height:"300", width:"500", display:"flex" }}>
                <div style={{backgroundColor:"red", flex:"2"}}></div>
                <div style={{backgroundColor:"yellow", flex:"1"}}></div>
           </div>
           
            {/* onClick={PicSave} */}
        </>
    )
}