/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  CCard,
  CInputGroupText,
  CCardBody,
  CCol,
  CFormTextarea,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CFormCheck,
  CFormSelect,
  CCardHeader,
  CFormText,
} from "@coreui/react";
import axios from "axios";
import { Alert } from "bootstrap";
import { useNavigate } from "react-router-dom";
const JsonForm = () => {
  const [users, setUsers] = useState({});
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
const[claim,setClaim]=useState(null);
const[loading,setLoading]=useState(null)

  const navigate=useNavigate();
  var processInstanceKey = sessionStorage.getItem("key");
  var stringValue = String(processInstanceKey);

//console.log("pid",processInstanceKey);
  useEffect(() => {
    console.log("here..",stringValue)
    axios
      .get(
        // `http://localhost:8080/camunda/getformbyinstanceKey/${stringValue}`
        `http://localhost:8080/camunda/getformdata-byinstanceKeys/${stringValue}`
      )
      .then(function (response) {
        console.log("Response from JSON:", response.data);
        setUsers(response.data);
      })
      .catch(function (response) {
        console.log("Error in response:", response);
        setError(true);
      })
      .finally(function (response) {
        console.log("Finally executed!!");
      });
      const hasClaimedTask = sessionStorage.getItem("hasClaimedTask") === "true";
    setClaim(hasClaimedTask);
  }, []);
  const handleClaim = async () => {
    try {
      setLoading(true);

      const claimApiResponse = await axios.get(
        `http://localhost:8080/camunda/getClaimActiveTaskID/${stringValue}`
      );

      setData1(claimApiResponse.data);
      setClaim(true);

      setLoading(false);
    } catch (error) {
      console.error("Error in the claim API call:", error);
      setLoading(false);
    }
  };
  
  const handleUnclaim = async () => {
    try {
      setLoading(true);

      const unclaimApiResponse = await axios.get(
        `http://localhost:8080/camunda/getUnClaimActiveTaskID/${stringValue}`
      );

      setData2(unclaimApiResponse.data);
      setClaim(false);

      sessionStorage.setItem("hasClaimedTask", "false");

      setLoading(false);
    } catch (error) {
      console.error("Error in the unclaim API call:", error);
      setLoading(false);
    }
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const submitApiResponse = await axios.get(
        `http://localhost:8080/camunda/getCompleteActiveTaskID/${stringValue}`
      );

      console.log("Data from the submit API call:", submitApiResponse.data);

      setLoading(false);
    } catch (error) {
      console.error("Error in the submit API call:", error);
      setLoading(false);
    }
  };

  // const handleButtonClick = async () => {
  //   try {
  //    // First API call
  //     // const firstApiResponse = await axios.get(
  //     //   `http://localhost:8080/camunda/getClaimActiveTaskID/${stringValue}`
  //     // );
  //     // console.log("Data from the first API call:", firstApiResponse.data);
  //     // setData1(firstApiResponse.data);
  
  //     // Second API call
  //     console.log("Making the second API call...");
  //     alert("1.called")
  //     const secondApiResponse = await axios.get(
  //       `http://localhost:8080/camunda/getCompleteActiveTaskID/${stringValue}`
  //     );
  //     alert("callll......")
  //     console.log("Data from the second API call:", secondApiResponse.data);
  //     setData2(secondApiResponse.data);
  
  //   } catch (error) {
  //     console.error("Error in the API calls:", error);
  //   }
  // };
  
  

  

  const renderInput = (field, key) => {
    if (!field) {
      return null;
    }

    switch (field.Type) {
      case "text":
        return (
          <CFormInput
            key={key}
            type="text"
            id={field.Key}
            name={field.Key}
            value={formData[field.Key] }
          />
        );
      case "email":
        return (
          <CFormInput
            key={key}
            type="email"
            id={field.Key}
            name={field.Key}
            value={formData[field.Key] }
          />
        );
      case "textfield":
        return (
          <CFormInput
          type="text"
            key={key}
            id={field.ID}
            name={field.Key}
            value={formData[field.Key] }
          />
        );
      case "date":
        return (
          <input
            key={key}
            type="date"
            id={field.ID}
            name={field.Key}
            value={formData[field.Key] }
          />
        );
      case "number":
        return (
          <CFormInput
            key={key}
            type="number"
            id={field.Key}
            name={field.Key}
            value={formData[field.Key] }
          />
        );

      default:
        return null;
    }
  };

  const renderInputsForArray = (fieldsArray, arrayKey) => {
    return fieldsArray.map((field, index) => {
      const labelWithFieldType = `${field.Label}`;
      const key = `${arrayKey}_${index}`;
      return (
        <div key={key}>
          <CFormLabel htmlFor={field.Key}>{labelWithFieldType}</CFormLabel>
          {renderInput(field, key)}
        </div>
      );
    });
  };
  const handleCancel=()=>{
    navigate('/')
  }

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <CCol md="6">
        <CCard>
          <CCardHeader>USER FIELDS</CCardHeader>
          <CCardBody>
            <CForm>
              {Object.entries(users).map(([arrayKey, fieldsArray]) => (
                renderInputsForArray(fieldsArray, arrayKey)
              ))}
              {claim ? (
                <>
                  {renderInput()}
                  <CButton
                    type="submit"
                    color="danger"
                    className="m-3"
                    onClick={handleUnclaim}
                    disabled={loading}
                  >
                    Unclaim
                  </CButton>
                  <CButton
                    type="submit"
                    color="danger"
                    className="m-3"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    Submit
                  </CButton>
                </>
              ) : (
                <CButton
                  type="submit"
                  color="danger"
                  className="m-3"
                  onClick={handleClaim}
                  disabled={loading}
                >
                  Claim
                </CButton>
              )}
  
              <CButton
                type="submit"
                color="danger"
                className="m-3"
                onClick={handleCancel}
              >
                Cancel
              </CButton>  
             
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </div>
  );
};

export default JsonForm;
