import './App.css';
import { Route, Link, BrowserRouter, Routes, Navigate, useNavigate } from 'react-router-dom'
import {useState} from "react";
// import { useNavigate } from "react-router-dom"


function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = ((e)=>
    {
        e.preventDefault()
        const user = {username, password}
        // alert(fetch('http://localhost:5000/api/users'))
        fetch('http://localhost:5000/api/users').then((response)=>
        {
            // console.log(response.json());
            return response.json() 
        }).then((data)=> {
            console.log(data)
            let users = data;
            users.forEach((profile)=>
            {
                if (user.username === profile.username && user.password === profile.password) {
                    console.log("logged in")
                    navigate("/")                   
                }
                else {
                    console.log("Couldn't find username or password, please try again")
                }
            })
        })
    })
    return (
  
    <form onSubmit={handleSubmit}>
    <div className="login">
      <h2 className="login-header">
        Login
      </h2>
      <label htmlFor=".username">Username </label>
      <br/>
      <input type="text" className="username" value={username} onChange={e => setUsername(e.target.value)}></input>
      <br/>
      <label htmlFor=".password"> Password </label>
      <br/>
      <input type="password" className="password" value={password} onChange={e => setPassword(e.target.value)}>
      </input>
      <br/>
      <button className="login-button" type="submit">Login</button>
      <Link to="/Signup" >
          
      <button className="login-button">Sign Up</button>
   </Link>
      </div>
      </form>
      );
  }

  export default Login