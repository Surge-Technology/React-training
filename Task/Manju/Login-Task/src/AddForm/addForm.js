import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

const AddForm = (editUser) => {
  const [fName, setFName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const editUser = JSON.parse(localStorage.getItem('editUser'));
    const formHeaderText = document.getElementById('formHeaderText');

    if (!isLoggedIn || isLoggedIn !== 'true') {
     // navigate('../loginForm/loginForm.html');
    }

    if (editUser) {
      formHeaderText.textContent = 'Edit Form';

      setFName(editUser.username);
      setEmail(editUser.email);
      setPassword(editUser.password);
    }
  }, [navigate]);
  // useEffect(() => {
  //   // If userId is present, fetch user data and pre-fill form fields
  //   if (userId) {
  //     const userToEdit = /* Fetch user data based on userId */;
  //     if (userToEdit) {
  //       setFName(userToEdit.username || '');
  //       setEmail(userToEdit.email || '');
  //       setPassword(userToEdit.password || '');
  //     }
  //   }
  // }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const nameError = document.getElementById('userNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    if (fName === '') {
      nameError.textContent = 'Name field cannot be blank.';
    } else if (fName.length < 3) {
      nameError.textContent = 'Name must be at least 3 characters long.';
    }
  
    if (email === '') {
      emailError.textContent = 'Email field cannot be blank.';
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email format.';
    }
  
    if (password === '') {
      passwordError.textContent = 'Password field cannot be blank.';
    } else if (password.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long.';
    }
  
    const users = JSON.parse(localStorage.getItem('users')) || [];

      const newUserId = users.length > 0 ? Math.max(...users.map((user) => user.id), 0) + 1 : 1;

    const newUser = {
      id: newUserId,
      username: fName,
      email: email,
      password: password,
    };

    const updatedUsers = [...users, newUser];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/userList');
  };
  
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCancel = () => {
    setFName('');
    setEmail('');
    setPassword('');
    setErrors({});
    localStorage.removeItem('editUser');
    navigate('/userList');
  };

  const redirectToLogin = () => {
    localStorage.removeItem('isLoggedIn');
  //  navigate('../loginForm/loginForm.html');
  };

  return (
    <div>
        <Header/>
    <div className="container">
      <div className="row justify-content-center login-container">
        <div className="col-md-6 col-lg-4">
          <div className="card">
            <div className="card-header text-center">
              <h4>
                <span id="formHeaderText">Add Form</span>
              </h4>
            </div>
            <div className="card-body">
              <form id="addForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                  />
                  <div className="error" id="userNameError" style={{ color: '#ff0202' }}></div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="error" id="emailError" style={{ color: '#ff0202' }}></div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="error" id="passwordError" style={{ color: '#ff0202' }}></div>
                </div>
                <center>
                  <div className='button sm-2' style={{paddingTop:'10px'}}>
                  <button type="button" id="cancelButton" className="btn btn-danger" onClick={handleCancel}>
                    Cancel
                  </button>
                  <span style={{ margin: '0 8px' }}></span>
               
                  < button type="submit" className="btn btn-primary" id="addUserForm">
                    Add
                  </button>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    {/* <footer className="footer">Reserved Rights @2023</footer> */}
    </div>
  );
};

export default AddForm;
