import './App.css';
import { Route, Link, BrowserRouter, Routes, Navigate, useNavigate } from 'react-router-dom'
import {useState} from "react";
import Navbar from './Navbar';

function Post() {
    const [username,setUsername] = useState('');
    const [post,setPost] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        const posted = {username, post}
        console.log(posted)
        fetch('http://localhost:5000/api/posts/addPost', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(posted)
            
        }).then(()=>
        {
            console.log("New Post added")
        })
    }
    return (
  <div>

  <Navbar/>
    <form onSubmit={handleSubmit}>
    <div className="login">
      <h2 className="login-header">
        Post a message
      </h2>
      <label htmlFor=".username">Username </label>
      <br/>
      <input type="text" className="username" value={username} onChange={e => setUsername(e.target.value)}></input>
      <br/>
      <label htmlFor=".post"> Post </label>
      <br/>
      <input type="textarea" className="post" value={post} onChange={e => setPost(e.target.value)}>
      </input>
      <br/>
      <button className="post-button" type="submit">Post</button>
      
          
      {/* <button className="login-button">Sign Up</button> */}
   
      </div>
      </form>
      </div>
      );
  }

  export default Post