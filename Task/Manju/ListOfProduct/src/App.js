import './App.css';
import React from 'react';
//import application from './components/listproduct';
import { BrowserRouter as  Route } from 'react-router-dom';
import MainApp from './pages/Mainapp';
import Table from './components/product';
function App() {
  return (
    <Route>
    <div className="App">
      rtyioiu
      {/* <application /> 
      <MainApp/> */}
      <Table/>
     </div>
     </Route>
  );
}

export default App;
