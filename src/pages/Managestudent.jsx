import React from 'react'
import '../styles/layoutstyle/managestudent.css'
import { Link } from 'react-router-dom'

function Managestudent() {
  return (
    <div class="main">
    <div class="header">
      <h1>Manage Students</h1>
    </div>
    
    <div>
      <Link to='register-student' className='actions button'>Register New Student</Link>
    </div>

    <div class="search-box">
      <input type="text" id="searchInput" placeholder="Search by name..." />
    </div>

    <table id="studentsTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Class</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="studentsBody">
        {/* <!-- JavaScript will inject students here --> */}
      </tbody>
    </table>
  </div>
  )
}

export default Managestudent