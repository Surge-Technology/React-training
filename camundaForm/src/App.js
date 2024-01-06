import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import JsonForm from './components/jsonForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/jsonForm" element={<JsonForm />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
