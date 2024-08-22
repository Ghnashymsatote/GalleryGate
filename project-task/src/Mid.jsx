import { useState ,useEffect } from "react";
import Axios  from "axios";
import { json, Navigate, useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Mid(){
    const location=useLocation();
    const navigate=useNavigate();
   let ok=location.state.xyz;
  let body=document.querySelector("body");
  let[datas,setDt]=useState(["Sample Text"]);
  useEffect(()=>{
      Axios.get('http://localhost:2000/Middle').then(res=>{
          setDt(res.data);
      }).catch(errror=>{
          console.log(errror)
      })
  },[])
   
   let Add=()=>{
        navigate("/Middle/Post");
   }
   
   let b=document.querySelector("body");
   b.style.backgroundColor="lightgrey";
   b.style.display="flex";

 

    return(
        <>
        <nav>
            <div>
            
            <Button onClick={Add} variant="contained">Add Post</Button>
            <h1>{ok.name}</h1>
            </div>
        </nav>
            
           
           
           
           <div className="card">
                {





                    datas.map((tds)=>{
                         return <div key={tds._id} style={{height:"300px", width:"500px", display:"flex",
                          flexDirection:"column"}} >
                                    <div style={{display:"flex"}} className="pic"><img src={tds.Picture}
                                     alt="IMAGE" width={300} height={300} /></div>
                                    <div style={{flex:"1"}}> <h3>Name :</h3>{tds.name} <h3>Message :</h3> 
                                    {tds.Msg}</div>
                                    <br /><br /><br />
                            </div>                  
                       
                    })
                }
                <hr />
           </div>
                   
           <br /><br /><br />
          
          
            
           
        </>
    )
}