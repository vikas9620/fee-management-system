
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './StudentDetail.css';

const StudentDetail = ({ students, setStudents }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const student = students.find((s) => s._id === id);

  const [name, setName] = useState(student.name);
  const [rollNumber, setRollNumber] = useState(student.rollNumber);
  const [fees, setFees] = useState(student.fees);
  const [paymentStatus, setPaymentStatus] = useState(student.paymentStatus);

  const handleSave = () => {
    const updatedStudent = { _id: id, name, rollNumber, fees, paymentStatus };
    const updatedStudents = students.map((s) => (s._id === id ? updatedStudent : s));
    setStudents(updatedStudents);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Student Details</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input type="text" className="form-control" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Fees</label>
          <input type="text" className="form-control" value={fees} onChange={(e) => setFees(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Payment Status</label>
          <select className="form-control" value={paymentStatus} onChange={(e) => setPaymentStatus(e.target.value)}>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default StudentDetail;
