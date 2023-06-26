import './App.css';
import { Route, Link, BrowserRouter, Routes, Navigate, useNavigate } from 'react-router-dom'
import {useState} from "react";
import Axios from 'axios';
import Navbar from './Navbar';

function Login() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true
    const handleSubmit = ((e)=>
    {
        e.preventDefault()
        const user = {username, password}
        Axios.post('http://localhost:5000/api/users', user)
        .then((response) => {
            console.log("response")
            console.log(response)
            localStorage.setItem('username', JSON.stringify(username))
                navigate('/');
        }) 
    })
    return (
        <div>
        <Navbar/>
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
      </div>
      );
  }

  export default Login