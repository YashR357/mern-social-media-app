import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import { Route, Link, BrowserRouter, Routes, Navigate, useNavigate } from 'react-router-dom'
import Homepage from './Homepage'
import Post from './Post';
import Read from './Read';
import Axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  Axios.defaults.withCredentials= true
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('logged_user') !== null
  );

  const [username, setUsername] = useState('')
  useEffect(() => {
      localStorage.setItem('logged_user', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/users", {
      headers: {
        withcredentials: true
      }
    }).then((response) =>{
      if (response.data.loggedIn == true) {
        setIsLoggedIn(true);
        console.log(response.data.user)
      }
      

      console.log("Hi", response)
    })
  })
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='/' element={isLoggedIn ? <Homepage/> : <Navigate to='/Login'/>}/>

     <Route path='/Login' element={<Login />}/>

    <Route path='/SignUp' element={<SignUp/>}/>
    
    <Route path='/Post' element={isLoggedIn ? <Post/> : <Navigate to='/Login'/>}/>

    <Route path="/ReadPost" element={isLoggedIn ? <Read/> : <Navigate to='/Login'/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
