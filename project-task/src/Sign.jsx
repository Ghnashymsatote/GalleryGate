import Axios from "axios"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Sign(){
    const navigate=useNavigate();
    let [data,setData]=useState({
        name:"",
        email:"",
        password:""
    });
    let sub=async(evt)=>{
        evt.preventDefault();
        console.log(data);

        try{
            const res=await Axios.post("http://localhost:2000/signData?" + new URLSearchParams({
                name:data.name,          
                email:data.email,
                password:data.password
            }))
            console.log(res.data);
            
            navigate("/middle",{state:{xyz:data}})
        }catch(e){
            console.log("Error",e);
        }
        setData({
            name:"",
            email:"",
            password:""
        })
    }
    let putData=(event)=>{
        setData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })
    }
    let body=document.querySelector("body");
    body.style.display='flex';
    body.style.justifyContent='center'
    body.style.backgroundColor='#2C3E50'
  
   return(
    <>
        <div style={{backgroundColor:"lightGray", padding:"20px", borderRadius:"4px", border:"2px solid black", marginTop:"150px", textAlign:"center"}}>
            <h3>Sign up</h3>
       <form onSubmit={sub}>

        <TextField type="text" id="user"  label="Username" variant="standard" name='name' onChange={putData} value={data.name}/>
        <br /><br />
 
        <TextField type="email" id="email"  label="E-Mail" variant="standard" name='email' onChange={putData} value={data.email}/>
        <br /><br />
       
        <TextField type="password" id="pass"  label="Password" variant="standard" name='password' onChange={putData} value={data.password}/>
        <br /><br />
        <Button variant="contained" type='submit'>Sign Up</Button>
            <br /><br />
            <h4>you already have account plaesed  <a href="/loginPage">Login</a></h4>

            </form>
            </div>
    </>
   )
}