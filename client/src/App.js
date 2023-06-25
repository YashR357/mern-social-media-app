// import useState from 'react';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Post from './Post';
import Read from './Read';
import Axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [loginStatus, setLoginStatus] = useState("")
  Axios.defaults.withCredentials= true
  useEffect(() => {
    Axios.get("http://localhost:5000/api/users", {
      headers: {
        withcredentials: true
      }
    }).then((response) =>{
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user.username);
      }
      

      console.log("Hi", response)
    })
  })
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='/' element={<Homepage loggedIn = {loginStatus}/>}/>

     <Route path='/Login' element={<Login />}/>

    <Route path='/SignUp' element={<SignUp/>}/>
    
    <Route path='/Post' element={<Post loggedIn = {loginStatus}/>}/>

    <Route path="/ReadPost" element={<Read loggedIn = {loginStatus}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
