import React from 'react'
import { useContext,useState } from 'react';
import { useNavigate } from "react-router-dom";
import noteContext from '../context/notes/notecontext';




export default function Login() {

    const navigate = useNavigate()

    const boom =useContext(noteContext)
    const {host}=boom

    const [credentials, setcredentials] = useState({email:"",password:""})
    
    const signin=async (a)=>{
        try{
        
        a.preventDefault();
        const response = await fetch(`${host}/api/auth/loginuser`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json',
            
           
          },
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
         // body data type must match "Content-Type" header
         body: JSON.stringify({"email":credentials.email,"password":credentials.password})
        });
        let res=await response.json(); // parses JSON response into native JavaScript objects
        if(res.success){
            localStorage.setItem("authtoken",res.authtoken)
            navigate("/")

        }else{
            alert("Enter valid details")
        }
      }catch(error){
        document.getElementById("signin_error").innerHTML=error
      }
    }


      const handleonchange=(e)=>{
          setcredentials({...credentials,[e.target.name]:e.target.value})
      }


    return (
        <>
        <div>
           <form>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" name="email" className="form-control"  id="exampleInputEmail1" onChange={handleonchange} aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="email">Password</label>
    <input type="password" name='password' className="form-control" id="email" onChange={handleonchange} placeholder="Password"/>
  </div>

  <button type="submit" onClick={signin} className="btn btn-primary my-3">Submit</button>
</form>
        </div>
        <p id='signin_error'>

        </p>
        </>
    )
}
