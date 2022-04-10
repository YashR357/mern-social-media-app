import './App.css';
import { Route, Link, BrowserRouter, Routes, Navigate, useNavigate } from 'react-router-dom'
import {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom"
import axios from "axios"
import Navbar from './Navbar';


function Read() {
    const navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/posts').then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch(err => {
            console.log(err)
        })
    })
    var post = []
    // fetch('http://localhost:5000/api/posts').then((response)=>
    //     {
    //         // console.log(response.json());
    //         return response.json() 
    //     }).then((data)=> {
    //         console.log(data)
    //         // setPost(data.data)
    //         // setPost(data);
    //         data.forEach((posts)=>{
    //             post.push(posts)
    //         })
    //         // post.push(data);
    //         console.log("this is push", post, post[0]);
    //         // data.forEach((posted)=> {
    //         //     post.push(posted);
    //         // })
    //     })
    //     // console.log("j")
    //     console.log(post)
    //     const posts1 = post.forEach( (post1) => {
    //         console.log(post1.username);
    //         return <div>{post1.username}</div>
        // })
    return (
        <div>

        <Navbar/>
        <div>
            {posts.map(post => <li >{post.post}</li>)}
        </div>
        </div>
//     <form onSubmit={handleSubmit}>
//     <div className="login">
//       <h2 className="login-header">
//         Login
//       </h2>
//       <label htmlFor=".username">Username </label>
//       <br/>
//       <input type="text" className="username" value={username} onChange={e => setUsername(e.target.value)}></input>
//       <br/>
//       <label htmlFor=".password"> Password </label>
//       <br/>
//       <input type="password" className="password" value={password} onChange={e => setPassword(e.target.value)}>
//       </input>
//       <br/>
//       <button className="login-button" type="submit">Login</button>
//       <Link to="/Signup" >
          
//       <button className="login-button">Sign Up</button>
//    </Link>
//       </div>
    //   </form>
      );
  }

  export default Read

//   const fetchData = () => {
//       return axios.get(('http://localhost:5000/api/posts').then(function(response)
//       {
//           // console.log(response.json());
//           console.log(response);
//       }).then((data)=> {
//           console.log(data)
//           // setPost(data);
//           data.forEach((posts)=>{
//               post.push(posts)
//           })
//           // post.push(data);
//           console.log("this is push", post, post[0]);
//           return data;
//           // data.forEach((posted)=> {
//           //     post.push(posted);
//           // })
//       }));
//   }