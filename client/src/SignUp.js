import {useState} from "react";
import './App.css'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from "./Navbar";
function SignUp() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {username, password, email, name}
        fetch('http://localhost:5000/api/users/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        }).then(()=>
        {
            console.log("New User added")
        })
    }
    return (
      <div>
        <Navbar/>
         <form onSubmit={handleSubmit} className="sign-up-form" >
      <div className="sign-up-container">
      
        <h2 className = "sign-up-header">
          Sign Up
        </h2>
        {/* <div className="sign-up"> */}
       
        <div className="username-container grid-item">
        <label htmlFor=".username" className="grid-item">Username </label>
     <br/>
      <input type="text" className="username " value={username} onChange={(e)=> setUsername(e.target.value)}></input>
      </div>
      <div className="password-container grid-item">
      <label htmlFor=".password" className="grid-item"> Password </label>
      <br/>
      <input type="password" className="password" value={password} onChange={(e)=> setPassword(e.target.value)}>
      </input>
      </div>
      
  
      <div className="email-container grid-item">
      <label htmlFor=".email" className="grid-item"> Email</label>
      <br/>
      <input type="text" className="email " value={email} onChange={(e)=> setEmail(e.target.value)}></input>
      </div>
  
      <div className="name-container grid-item">
      <label htmlFor=".name" className="grid-item"> Name</label>
      <br/>
      <input type="text" className="name " value={name} onChange={(e)=> setName(e.target.value)}></input>
      </div>
  
      <button className="sign-up-button" type="submit">Sign Up</button>
      <Link to="/Login" >
      <button className="sign-up-button">Login</button>
      </Link>
      </div>
      </form>
      // </div>
      
    );
  }

  export default SignUp