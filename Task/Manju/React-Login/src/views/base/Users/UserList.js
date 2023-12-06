/* eslint-disable prettier/prettier */
import React ,{useState}from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 
  CButton ,
  CTable,
  CTableBody,
  CTableRow,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
} from '@coreui/react';
import { DocsExample } from 'src/components';
import AddUser from './AddUser';
import { useNavigate } from 'react-router-dom';
const UserList=() =>{
const navigate= useNavigate();
  const [users, setUsers] = useState([
    {  name: 'John Doe', email: 'john@example.com' ,password:'12345678'},
    {  name: 'Jane Doe', email: 'jane@example.com',password:'9rctfvgyb' },
  ]);
  const AddNewUser=()=>{
    navigate('/userList/addUser')
  }
  const editUser=()=>{
    navigate('/userList/editUser')
  }
  return (
    <div>
      <CCard>
      <h3>UserList</h3>
      <div className="d-grid justify-content-md-end">
  <CButton color="primary" onClick={AddNewUser}>Add</CButton>
</div>
    <CTable hover>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">Name</CTableHeaderCell>
        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
        <CTableHeaderCell scope="col">Password</CTableHeaderCell>
        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
                {users.map((user) => (
                  <CTableRow key={user.id}>
                    <CTableDataCell>{user.name}</CTableDataCell>
                    <CTableDataCell>{user.email}</CTableDataCell>
                    <CTableDataCell>{user.password}</CTableDataCell>
                   <CTableDataCell>
                   <CButton type="submit" color="primary" onClick={editUser}>Edit</CButton>
                   <CButton type="submit" color="danger">Delete</CButton>

                   </CTableDataCell>
                  </CTableRow>
                  
                ))}
              </CTableBody> 
  </CTable>
  </CCard>
  </div>
  );
}
export default UserList;
