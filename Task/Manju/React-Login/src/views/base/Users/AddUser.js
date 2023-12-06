/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  CCard,
  CForm,
  CCol,
  CFormInput,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormCheck,
  CButton,
  CFormFeedback,
} from '@coreui/react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate();
const [users,setUsers]=useState([])
  const [validated, setValidated] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  
const handleSubmit=()=>{

}
const handleChange=(e)=>{
setFormData(e.target.value)
}
  const handleCancel = () => {
    navigate('/userList');
  };
  const handleAddUser = (newUser) => {
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    localStorage.setItem('usersLists', JSON.stringify(updateUsers));
    console.log(updateUsers);
  }
  const getItem=JSON.parse(localStorage.getItem('usersList'))
  console.log(getItem);
console.log('const',handleAddUser);
    return (
      <div>
        <CCard>
        <h2>ADD FORM</h2>
      <CForm
        className="row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
      <CCol md={4}>
          <CFormInput
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            
            id="validationCustom01"
            label="First name"
            required
          />
        </CCol>
        <CCol md={4}>
          <CFormInput
            type="text"
           // value={FormData.lastName}
           onChange={handleChange}
            id="validationCustom02"
            label="Last name"
            required
          />
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustomUsername">Email</CFormLabel>
          <CInputGroup className="has-validation">
            <CInputGroupText>@</CInputGroupText>
            <CFormInput
              type="email"
             onChange={handleChange}
            // value={'email'}
              aria-describedby="inputGroupPrependFeedback"
              feedbackInvalid="Please enter email."
              id="validationCustomUsername"
              required
            />
          </CInputGroup>
        </CCol>
       
    <CCol md={6}>
      <CFormInput
        type="text"
        aria-describedby="validationCustom03Feedback"
        feedbackInvalid="Please provide a valid password."
        id="validationCustom03"
        onChange={handleChange}
        label="password"
        required
      />
    </CCol>
   
        <CCol xs={12}>
          <CFormCheck
            type="checkbox"
            id="invalidCheck"
            label="Agree to terms and conditions"
            required
          />
          <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
        </CCol>
        <CCol xs={6}>
        <CButton color="danger" type="submit" onClick={handleCancel}>
         Cancel
          </CButton>
          <CButton color="primary" type="submit">
           Add User
          </CButton>
          
        </CCol>
      </CForm>
      </CCard>
      </div>
    )
}
