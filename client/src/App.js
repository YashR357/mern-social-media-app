
import './App.css';

function Login() {
  return (

  
  <div class="login">
    <h2 class="login-header">
      Login
    </h2>
    <label for=".username">Username </label>
    <br/>
    <input type="text" class="username"></input>
    <br/>
    <label for=".password"> Password </label>
    <br/>
    <input type="password" class="password">
    </input>
    <br/>
    <button class="login-btn">Login</button>
    <button class="sign-up-btn">Sign Up</button>
 
    </div>);
}
function SignUp() {
  return (
    <div class="sign-up-container">
    
      <h2 class = "sign-up-header">
        Sign Up
      </h2>
      {/* <div class="sign-up"> */}
      <div class="username-container grid-item">
      <label for=".username" class="grid-item">Username </label>
   <br/>
    <input type="text" class="username grid-item"></input>
    </div>
    <div class="password-container grid-item">
    <label for=".password" class="grid-item"> Password </label>
    <br/>
    <input type="password" class="password grid-item">
    </input>
    </div>
    

    <div class="email-container grid-item">
    <label for=".email" class="grid-item"> Email</label>
    <br/>
    <input type="text" class="email grid-item"></input>
    </div>

    <div class="name-container grid-item">
    <label for=".name" class="grid-item"> Name</label>
    <br/>
    <input type="text" class="name grid-item"></input>
    </div>

    <button class="sign-up-btn grid-item">Sign Up</button>
    <button class="login-btn grid-item">Login</button>
    
    </div>
    // </div>
    
  );
}
function App() {
  return (
    
    // <Login/>
    <SignUp/>
  );
}

export default App;
