import axios from 'axios'
import React, {useEffect, useState}from 'react'
import JsonForm from './jsonForm'
export default function FormData() {
const[users,setUsers]=useState([])
    const [error,setError]=useState([])
    useEffect(() => {
        axios
          .get('http://localhost:8080/getformbyinstanceKey/2251799813685253')
          .then(function (response) {
            console.log('response from json', response.data)
            setUsers(response.data)
          })
          .catch(function (response) {
            console.log('response', response)
            setError(true)
          })
          .finally(function (response) {
            console.log('response', response)
          })
      },[])
    
  return (
    <div>
    hii
    </div>
  )
}
