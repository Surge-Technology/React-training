import React from 'react'
import './header.css'
import Login from '../Login/login';
import { useNavigate } from 'react-router';
export const Header = (props) => {
    const navigate=useNavigate();
    const headerStyle={
        backgroundColor:'rgb(3, 53, 128)',
    };
    function redirectToLogin() {
        localStorage.removeItem("isLoggedIn");
        console.log("Logging out and redirecting to login");

        navigate('/');
        }
   


  return (
    <div className="header" style={headerStyle}>
    <div className="left-corner">My Website</div>
    <button type="button" className="btn btn-primary" id="logoutButton" onClick={redirectToLogin}>
      Logout <i className="bi bi-box-arrow-right"></i>
    </button>
  </div>
  )
}
