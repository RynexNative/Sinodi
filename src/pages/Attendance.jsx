import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/layoutstyle/Attendance.css'

function Attendance() {

 const handleView = () => {

 }
 return (
  <div className='attendance'>
   <div className="header">
    <h1>Attendance Overview</h1>
    <button onClick="alert('Add Attendance Page')">
     <i className="fas fa-plus"></i> Add Attendance
    </button>
   </div>

   {/* <!-- ✅ Mini Stats --> */}
   <div className="mini-title">
    <p className='mini-para'>
     Showing stats for: <strong>April 20, 2025</strong>
    </p>
    <input type="date" />

   </div>

   <div className="stats">
    <div className="card">
     <h3>Total Records</h3>
     <p>12</p>
    </div>
    <div className="card">
     <h3>Total Present</h3>
     <p>234</p>
    </div>
    <div className="card">
     <h3>Total Absent</h3>
     <p>31</p>
    </div>
    <div className="card">
     <h3>Total Late</h3>
     <p>9</p>
    </div>
   </div>

   {/* <!-- ✅ Filters --> */}
   <div className="filters">
    <select>
     <option>All Classes</option>
     <option>Form 1</option>
     <option>Form 2</option>
     <option>Grade 6</option>
    </select>

    <input type="date" />
    <input type="text" placeholder="Search by student or date..." />
   </div>

   {/* <!-- ✅ Table --> */}
   <div className="table-container">
    <table>
     <thead>
      <tr>
       <th>Date</th>
       <th>Class</th>
       <th>Present</th>
       <th>Absent</th>
       <th>Late</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>2025-04-20</td>
       <td>Form 1 A</td>
       <td>22</td>
       <td>3</td>
       <td>1</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>
         View
        </Link>
        <button className="download button" onClick="alert('Downloading PDF')">
         PDF
        </button>
       </td>
      </tr>
      <tr>
       <td>2025-04-19</td>
       <td>Grade 6 Blue</td>
       <td>18</td>
       <td>2</td>
       <td>0</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>
         View
        </Link>
        <button className="download button">PDF</button>
       </td>
      </tr>
      <tr>
       <td>2025-04-19</td>
       <td>Grade 6 Blue</td>
       <td>18</td>
       <td>2</td>
       <td>0</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>
         View
        </Link>                <button className="download button">PDF</button>
       </td>
      </tr>
      <tr>
       <td>2025-04-19</td>
       <td>Grade 6 Blue</td>
       <td>18</td>
       <td>2</td>
       <td>0</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>View</Link>
        <button className="download button">PDF</button>
       </td>
      </tr>
      <tr>
       <td>2025-04-19</td>
       <td>Grade 6 Blue</td>
       <td>18</td>
       <td>2</td>
       <td>0</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>
         View
        </Link>                <button className="download button">PDF</button>
       </td>
      </tr>
      <tr>
       <td>2025-04-19</td>
       <td>Grade 6 Blue</td>
       <td>18</td>
       <td>2</td>
       <td>0</td>
       <td className="actions">
        <Link to='view-attendance' className='button'>
         View
        </Link>                
        <button className="download button">PDF</button>
       </td>
      </tr>
      {/* <!-- More rows... --> */}
     </tbody>
    </table>
   </div>
  </div>
 )
}

export default Attendance