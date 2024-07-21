
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './Dashboard.css';

const Dashboard = ({ students, setStudents }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [studentsPerPage] = useState(5);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const generateInvoice = (student) => {
    const doc = new jsPDF();
    doc.text(`Invoice for ${student.name}`, 10, 10);
    doc.autoTable({
      startY: 20,
      head: [['Roll Number', 'Fees', 'Payment Status']],
      body: [
        [student.rollNumber, student.fees, student.paymentStatus]
      ],
    });
    doc.save(`invoice_${student.rollNumber}.pdf`);
  };

  const offset = currentPage * studentsPerPage;
  const currentStudents = students
    .filter((student) => student.name.toLowerCase().includes(search.toLowerCase()))
    .slice(offset, offset + studentsPerPage);

  return (
    <div className="container">
      <h2 className="my-4">Dashboard</h2>
      <input
        type="text"
        className="form-control mb-3"
        value={search}
        onChange={handleSearch}
        placeholder="Search students"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll Number</th>
            <th>Fees</th>
            <th>Payment Status</th>
            <th>Actions</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.fees}</td>
              <td>{student.paymentStatus}</td>
              <td>
                <button
                  className="btn btn-info btn-sm mr-2"
                  onClick={() => navigate(`/student/${student._id}`)}
                >
                  View
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => generateInvoice(student)}
                >
                  {student.paymentStatus === 'Unpaid' ? 'Send Invoice' : 'Invoice Sent'}
                </button>
              </td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(students.length / studentsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
      />
    </div>
  );
};

export default Dashboard;
