import React, { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState('');
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserNameError("");
    setPasswordError("");
    setLoginError("");

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

    if (!showError) {
      const jsonInput = {
        name: userName,
        password: password,
      };
      
      axios
      .post("http://localhost:8080/camunda/startWorkflow", jsonInput)
      .then((response) => {
        sessionStorage.setItem("key", response.data);
        let key = response.data;
        console.log("key...", key);
        sessionStorage.setItem("key", key)
        navigate("/jsonForm");

     })
      .catch((error) => {
        console.error("Error fetching data from camunda:", error);
        console.log("Response details:", error.response);
        setLoginError("An error occurred during login.");
          });
    }
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

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    {passwordError && (
                      <div className="text-danger">{passwordError}</div>
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
              <CCard
                className="text-white bg-primary py-5"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>React Training database </p>
                    <Link to="/register">
                      <CButton
                        color="primary"
                        className="mt-3"
                        active
                        tabIndex={-1}
                      >
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
