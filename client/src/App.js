import useState from 'react';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Post from './Post';
import Read from './Read';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>

     <Route path='/Login' element={<Login/>}/>

    <Route path='/SignUp' element={<SignUp/>}/>
    
    <Route path='/Post' element={<Post/>}/>

    <Route path="/ReadPost" element={<Read/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
