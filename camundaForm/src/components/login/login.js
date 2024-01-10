import React, { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import CIcon from '@coreui/icons-react';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
} from "@coreui/react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email,setEmail]=useState('');
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNoError, setMobileNoError] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserNameError("");
    setPasswordError("");
    setEmailError('');
    setMobileNoError('');

    setLoginError("");
    setLoading(true);

    let showError = false;

    if (!userName.trim() || userName !== "sam") {
      setUserNameError(userName.trim() ? "Invalid username" : "Enter username");
      showError = true;
    }

    if (password.trim().length < 4 || password !== "1234") {
      setPasswordError(
        password.trim().length < 4 ? "Enter Password" : "Incorrect password"
      );
      showError = true;
    }
    if (!isValidEmail(email)) {
      setEmailError(email.trim() ? "Invalid Email Format" : "Enter Email");
      showError = true;
    }
  
    if (!isValidMobile(mobileNo)) {
      setMobileNoError(
        mobileNo.trim() ? "Invalid Mobile Number Format" : "Enter Mobile Number"
      );
      showError = true;
    }
    // if (email !== "sam@gmail.com") {
    //   setEmailError(
    //     password.trim().length < 4 ? "Enter Email" : "Incorrect EmailId"
    //   );
    //   showError = true;
    // }
    // if (password.trim().length < 4 || password !== "1234") {
    //   setPasswordError(
    //     password.trim().length < 4 ? "Enter Password" : "Incorrect password"
    //   );
    //   showError = true;
    // }
    

    if (!showError) {
      const jsonInput = {
        UserName: userName,
        password: password,
        Email:email,
        MobileNum:mobileNo

      };
      
      axios
      .post("http://localhost:8080/camunda/startWorkflow", jsonInput)
      .then((response) => {
        sessionStorage.setItem("key", response.data);
        let key = response.data;
        console.log("key...", key);
        sessionStorage.setItem("key", key)
        // navigate("/jsonForm");
        setTimeout(() => {
          navigate("/jsonForm");
        }, 3000);
     })
      .catch((error) => {
        console.error("Error fetching data from camunda:", error);
        console.log("Response details:", error.response);
        setLoginError("An error occurred during login.");
          });
    }
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const isValidMobile = (mobile) => {
    return /^\d{10}$/.test(mobile); // Assuming a 10-digit mobile number format
  };
  
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CFormLabel htmlFor="userName">UserName</CFormLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                        </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                    </CInputGroup>

                    {userNameError && (
                      <div className="text-danger">{userNameError}</div>
                    )}
                    <CFormLabel htmlFor="password">password</CFormLabel>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                      
                      <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {passwordError && (
                      <div className="text-danger">{passwordError}</div>
                      )}
                      <CFormLabel htmlFor="email">Email</CFormLabel>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                      
                      <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </CInputGroup>
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                      )}
                      <CFormLabel htmlFor="mobileNo">Mobile No</CFormLabel>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                      
                      <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      
                      <CFormInput
                        type="number"
                        placeholder="MobileNo"
                        value={mobileNo}
                        onChange={(e) => setMobileNo(e.target.value)}
                      />
                    </CInputGroup>
                    {mobileNoError && (
                      <div className="text-danger">{mobileNoError}</div>
                    )}

                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
        {loading && (
          <div className="d-flex justify-content-center mt-3">
            <CSpinner color="primary" />
          </div>
        )}
      </CContainer>
    </div>
  );
};

export default Login;
