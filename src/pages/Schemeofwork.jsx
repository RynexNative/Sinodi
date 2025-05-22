import React from 'react';
import '../styles/layoutstyle/Schemeofwork.css';
import { useNavigate } from 'react-router-dom';

const schemeData = [
  {
    id: 1,
    subject: 'Mathematics',
    class: 'Form 1A',
    year: '2025',
    term: 'Term 1',
    teacher: 'Mr. John Mwakyusa',
    weeks: 8,
    status: 'Completed'
  },
  {
    id: 2,
    subject: 'English',
    class: 'Form 2B',
    year: '2025',
    term: 'Term 2',
    teacher: 'Ms. Jane David',
    weeks: 6,
    status: 'In Progress'
  }
];

const Schemeofwork = () => {
  const navigate = useNavigate();

  return (
    <div className="scheme-dashboard">
      <h2>📘 Scheme of Work Dashboard</h2>

      <div className="summary">
        <div className="card">
          <h4>Total Schemes</h4>
          <p>{schemeData.length}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p>{schemeData.filter(s => s.status === 'Completed').length}</p>
        </div>
        <div className="card">
          <h4>In Progress</h4>
          <p>{schemeData.filter(s => s.status === 'In Progress').length}</p>
        </div>
      </div>

      <div className="table-actions">
        <input type="search" placeholder="Search by subject or teacher..." />
        <button className="create-btn">+ Add New Scheme</button>
      </div>

      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Class</th>
            <th>Year</th>
            <th>Term</th>
            <th>Teacher</th>
            <th>Weeks</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schemeData.map((item) => (
            <tr key={item.id}>
              <td>{item.subject}</td>
              <td>{item.class}</td>
              <td>{item.year}</td>
              <td>{item.term}</td>
              <td>{item.teacher}</td>
              <td>{item.weeks}</td>
              <td>
                <span className={`status ${item.status.replace(/\s/g, '').toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>
                <button onClick={()=>navigate('add-scheme')}>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schemeofwork;
