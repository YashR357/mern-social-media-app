import logo from './logo.svg';
import './App.css';

function App() {
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
    <input type="password" class="password"></input>
    <br/>
    <button class="login-btn">Login</button>
    <button class="sign-up-btn">Sign Up</button>
 
    </div>
  );
}

export default App;
