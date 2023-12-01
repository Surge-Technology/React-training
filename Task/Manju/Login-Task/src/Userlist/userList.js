import React, { useState, useEffect } from 'react';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';
import { json, useNavigate ,useLocation} from 'react-router-dom'; 
import AddForm from '../AddForm/addForm';

export default function UserList() {
  const navigate = useNavigate(); 
  const location= useLocation();
  const [users, setUsers] = useState([]);
//location.reload()
  function handleChange(event) {
    event.preventDefault();
    navigate('/addForm'); 
  }

  const handleAddUser = (newUser) => {
    const updateUsers = [...users, newUser];
    setUsers(updateUsers);
    localStorage.setItem('users', JSON.stringify(updateUsers));
  }
  const handleEditUser=(userId)=>{
    const userToEdit=users.filter(user=>user.id===userId);
    setUsers(userToEdit);
    localStorage.setItem('editUser',JSON.stringify(userToEdit));
    navigate('/addForm', { state: { editUser: userToEdit } })
     

  }
 
  const handleDeleteUser=(userId)=>{
    const shouldDelete = window.confirm('Are you sure you want to delete this user?');
    if (shouldDelete) {
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers));
  
     // window.alert('User deleted successfully!');
    }

  }
  useEffect(() => {
    
    const storingUser = JSON.parse(localStorage.getItem('users') || []);
    setUsers(storingUser);
  }, []);

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div>
              <h3>USER LIST</h3>
            </div>
            <div className="d-flex ml-auto">
              <button
                className="btn btn-info m-2"
                type="button"
                id="AddButton"
                onClick={handleChange}
              >
                Add User
              </button>
              {/* <AddForm onAddUser={handleAddUser} /> */}
            </div>
          </div>
          <hr />
          <div className="card-body">
            <table className="table table-striped user-table mt-4" id="dataTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button className="btn btn-warning mr-2" onClick={() => handleEditUser(user.id)}>
                        Edit
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
