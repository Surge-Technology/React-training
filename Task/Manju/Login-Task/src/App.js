import './App.css';
import React,{useEffect} from 'react';
import { Routes,Route,useNavigate } from 'react-router';
import Login from './Login/login';
import UserList from './Userlist/userList';
import AddForm from './AddForm/addForm';
import { Header } from './Header/header';
import { Footer } from './Footer/footer';
function App() {
//   const navigate = useNavigate();

// useEffect(() => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn');
//   if (!isLoggedIn || isLoggedIn !== 'true') {
//     navigate('/'); 
//   }
// }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/userList' element={<UserList/>}/>
        <Route path='/addForm' element={<AddForm/>}/>
        
      </Routes>
     
      
    </div>
  );
}

export default App;
