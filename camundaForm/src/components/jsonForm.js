/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState ,useRef} from "react";
import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CCard,
  CCardBody,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CCardHeader,
} from "@coreui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const JsonForm = () => {
  const [users, setUsers] = useState({});
  const [claim, setClaim] = useState(null);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);

  const navigate = useNavigate();
  const processInstanceKey = sessionStorage.getItem("key");
  const stringValue = String(processInstanceKey);
  // useEffect(() => {
  //   fetchData();
  //   checkAssigneeStatus();
  // }, []);

  // const fetchData = async () => {
  //   console.log("stringValue",stringValue);

  //   try {
  //     const apiRequestDelay = 3000;
  //     await new Promise((resolve) => setTimeout(resolve, apiRequestDelay));
  //     window.location.reload(); 

  //     const response = await axios.get(
  //       `http://localhost:8080/camunda/getformdata-byinstanceKey/${stringValue}`
  //     );
  //     setUsers(response.data);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Alert",
  //       text: "No form  here!",
  //     }).then((result) => {
  //       // If the user clicks "OK," navigate to the login page
  //       if (result.isConfirmed) {
  //         navigate("/");
  //       }
  //     });
  //     await checkAssigneeStatus();

  //     // After fetching data, check the assignee status
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
     
  //   }
  //   return () => {
  //     isMounted.current = false;
  //   };
  // };
  useEffect(() => {
    const fetchDataAndReload = async () => {
      try {
        // const apiRequestDelay = 1000;
        // await new Promise((resolve) => setTimeout(resolve, apiRequestDelay));
  
        const response = await axios.get(
          `http://localhost:8080/camunda/getformdata-byinstanceKey/${stringValue}`
        );
        if (!response.data) {
          Swal.fire({
            icon: "error",
            title: "Alert",
            text: "No form here!",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
          return; 
        }
        
        setUsers(response.data);
  
         await checkAssigneeStatus();
  
       // window.location.reload();
      } catch (error) {
        console.error("Error fetching data:", error);
  
        // Swal.fire({
        //   icon: "error",
        //   title: "Alert",
        //   text: "No form here!",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     navigate("/");
        //   }
        // });
      }
    };
  
    fetchDataAndReload();
  }, []);
  

  const handleClaim = async () => {
    setLoading(true);
    try {
      const claimApiResponse = await axios.get(
        `http://localhost:8080/camunda/getClaimActiveTaskID/${stringValue}`
      );
      // setClaim(true);
      // checkAssigneeStatus();
      await checkAssigneeStatus();
    setClaim(true);
    console.log(("claim",claimApiResponse.data));
    } catch (error) {
      console.error("Error in the claim API call:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUnclaim = async () => {
    setLoading(true);
    try {
    
      const  unclaimApiResponse = await axios.get(
        `http://localhost:8080/camunda/getUnClaimActiveTaskID/${stringValue}`
      );
      console.log("unclaim",unclaimApiResponse.data);
      setClaim(false);
      checkAssigneeStatus();
    } catch (error) {
      console.error("Error in the unclaim API call:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const submitApiResponse = await axios.get(
        `http://localhost:8080/camunda/getCompleteActiveTaskID/${stringValue}`
      );
      console.log("Data from the submit API call:", submitApiResponse.data);
      window.location.reload();
    } catch (error) {
      console.error("Error in the submit API call:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkAssigneeStatus = async () => {
    try {
      // const apiRequestDelay = 1000;
      //  await new Promise((resolve) => setTimeout(resolve, apiRequestDelay));

      setLoading(true);

      const assigneeCheckApiResponse = await axios.get(
        `http://localhost:8080/camunda/assigneeCheck/${stringValue}`
      );

      const assigneeState = assigneeCheckApiResponse.data.State;

      if (assigneeState === "UnAssigned") {
        console.log("State as ",assigneeState);
        setClaim(false);
      } else if(assigneeState === "Assigned"){
        console.log("State as",assigneeState);

        setClaim(true);
      }
    }
   catch (error) {
      console.error("Error in the assigneeCheck API call:", error);
    } finally {
      setLoading(false);
    }
  };


  // const renderInputs = (data, prefix = "") => {
  //   return claim
  //     ? Object.entries(data).map(([key, value]) => {
  //         const fullKey = prefix + key;
  //         if (typeof value === "object") {
  //           return renderInputs(value, fullKey + "_");
  //         } else {
  //           return renderInput(fullKey, key, value);
  //         }
  //       })
  //     : null; // Return null when claim is false
  // };
  const renderInputs = () => {
    return Object.entries(users).map(([key, value]) => (
      <div key={key}>
        <CFormLabel htmlFor={key}>{key}</CFormLabel>
        <CFormInput
          type="text"
          id={key}
          name={key}
          value={value || ""}
          readOnly={!claim} 
        />
      </div>
    ));
  };

  const renderInput = (key, label, value) => {
    return (
      <div key={key}>
        <CFormLabel htmlFor={key}>{label}</CFormLabel>
        <CFormInput type="text" id={key} name={key} value={value || ""} />
      </div>
    );
  };

  const handleCancel = () => {
    navigate("/");
  };
 
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100">
      <CCol md="6">
        <CCard>
          <CCardHeader>USER FIELDS</CCardHeader>
          <CCardBody>
         
            <CForm>
            {renderInputs()}

              {claim !== null && (
                <>
                  {claim ? (
                    <>
                      <CButton
                        type="button"
                        color="danger"
                        className="m-3"
                        onClick={handleUnclaim}
                        disabled={loading}
                      >
                        Unclaim
                      </CButton>
                      <CButton
                        type="button"
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
                      type="button"
                      color="danger"
                      className="m-3"
                      onClick={handleClaim}
                      disabled={loading}
                    >
                      Claim
                    </CButton>
                  )}
                </>
              )}

            <CButton
              type="button"
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
