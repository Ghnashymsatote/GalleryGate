import { useState } from "react"
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function Login(){
    const navigate=useNavigate();
    let[logdata,setLogData]=useState({
        name:"",
        password:""
    });
    let Logged=async(event)=>{
        event.preventDefault();
        console.log(logdata);  
        try{
                const res=await Axios.post("http://localhost:2000/LoginData?" + new URLSearchParams({
                name:logdata.name, 
                password:logdata.password
            }))
             navigate("/middle",{state:{xyz:logdata}})
            console.log(res.data);
         

        }catch(e){
            console.log("Error",e);
        }
        setLogData({
            name:"",
            password:""
        })
    }
    let changeData=(event)=>{
        setLogData((currData)=>{
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
                <h3>Login</h3>        
                <form onSubmit={Logged}>

                
                <TextField type="text" id="user"  label="Username" variant="standard" name='name' onChange={changeData} value={logdata.name}/>
                <br />
                <br />
                
                <TextField type="password" id="password"  label="Password" variant="standard" name='password' onChange={changeData} value={logdata.password}/>
                <br />
                <br />
                <br />
                <Button type="submit" variant="contained">Login</Button>
            </form>
            <br />
            <h4>you don't have acount Pleased <a href="/">Sign up</a></h4>
            </div>
        </>
        
    )
}