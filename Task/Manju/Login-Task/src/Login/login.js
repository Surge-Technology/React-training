import React, { useState } from 'react';
import './login.css'
import UserList from '../Userlist/userList';
const Login = (props) => {
  const initialLoggedInState = localStorage.getItem('isLoggedIn') === 'true';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(initialLoggedInState);
  
//localStorage.setItem('isLoggedIn', 'true');

  const validateCredentials = (event) => {
    event.preventDefault();

    setUserNameError('');
    setPasswordError('');
    

    const trimmedUsername = username.trim();
    if (trimmedUsername === '') {
      setUserNameError('UserName is required.');
    } else if (!emailValidate(trimmedUsername)) {
      setUserNameError('Invalid email format.');
    }

    if (password === '') {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should contain at least 6 characters');
    }
      if (trimmedUsername && password.length >= 6) {
        console.log('Login successful');
        console.log('Setting isLoggedIn to true');
     
      }
     

    console.log('Username:', trimmedUsername);
    console.log('Password:', password);
   
      if (username !== "" && password !== "") {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var user = users.find(u => u.email === username && u.password === password);
        setLoggedIn(true);
        if (user) {
          localStorage.setItem("isLoggedIn", "true");
          alert('Login successful!');
        } else {
          alert('Invalid email or password. Please try again.');
        }
      } else {
        alert('Email and password are required.');
      }
    
    
   
  };

  const emailValidate = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  return (
    <div className="container">
        {isLoggedIn?(<UserList/>):(
      <div className="row justify-content-center login-container">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header text-center">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={validateCredentials} >
                <div className="form-group">
                  <label htmlFor="username" className='text-left' style={{float:'left'}}><b>UserName:</b></label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="error" id="userNameError">
                    {userNameError}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password" className='text-left'style={{float:'left'}}><b>Password:</b></label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="error" id="passwordError">
                    {passwordError}
                  </div>
                </div>
                <div className='form-group'>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
)}
    </div>
  );
};

export default Login;
