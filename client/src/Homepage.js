import {Link} from 'react-router-dom'
function Homepage() {
    return (
        <div>
        <h1>Homepage</h1>
        <Link to="/Signup" >
          
      <button className="homepage-button">Sign Up</button>
   </Link>
   <Link to="/Login" >
          
      <button className="homepage-button">Login</button>
   </Link>
    <Link to="/Post">
   <button>Post</button>
   </Link>
   <Link to="/ReadPost">
   <button>Read posts</button>
   </Link>
   </div>
   
        
    )
}

export default Homepage