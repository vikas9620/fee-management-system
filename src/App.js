
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import StudentDetail from './components/StudentDetail';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([
    { _id: '1', name: 'John Doe', rollNumber: '001', fees: '$2000', paymentStatus: 'Unpaid' },
    { _id: '2', name: 'Jane Smith', rollNumber: '002', fees: '$1500', paymentStatus: 'Paid' },
    { _id: '3', name: 'Sam Johnson', rollNumber: '003', fees: '$1800', paymentStatus: 'Unpaid' },
    { _id: '4', name: 'Alice Brown', rollNumber: '004', fees: '$1700', paymentStatus: 'Paid' },
    { _id: '5', name: 'Bob Davis', rollNumber: '005', fees: '$1900', paymentStatus: 'Unpaid' },
    { _id: '6', name: 'Charlie Miller', rollNumber: '006', fees: '$1600', paymentStatus: 'Paid' },
    { _id: '7', name: 'David Wilson', rollNumber: '007', fees: '$2100', paymentStatus: 'Unpaid' },
    { _id: '8', name: 'Eve Harris', rollNumber: '008', fees: '$2200', paymentStatus: 'Paid' },
    { _id: '9', name: 'Frank Clark', rollNumber: '009', fees: '$2300', paymentStatus: 'Unpaid' },
    { _id: '10', name: 'Grace Lewis', rollNumber: '010', fees: '$2400', paymentStatus: 'Paid' },
    { _id: '11', name: 'Hank Young', rollNumber: '011', fees: '$2500', paymentStatus: 'Unpaid' },
    { _id: '12', name: 'Ivy King', rollNumber: '012', fees: '$2600', paymentStatus: 'Paid' },
  ]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard students={students} setStudents={setStudents} />} />
          <Route path="/student/:id" element={<StudentDetail students={students} setStudents={setStudents} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
