import React from 'react'
import '../styles/layoutstyle/AttendanceView.css'
import {useNavigate, Link} from 'react-router-dom'



function AttendanceView() {
 const navigate = useNavigate()
 return (
  <div className="container2">
   <div className="header">
    <h2>Attendance Record</h2>
    <div>
     <strong>Date:</strong> April 20, 2025 <br />
     <strong>Class:</strong> Form 2 A
    </div>
   </div>

   <div className="summary">
    <div>✅ Present: 18</div>
    <div>❌ Absent: 2</div>
    <div>🕒 Late: 1</div>
    <div>📝 Excused: 0</div>
   </div>

   <div className="actions">
    <button><i className="fa fa-file-pdf"></i> Download PDF</button>
    <button><i className="fa fa-file-excel"></i> Download Excel</button>
   </div>

   <table>
    <thead>
     <tr>
      <th>#</th>
      <th>Student Name</th>
      <th>Status</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>1</td>
      <td>Amina Yusuf</td>
      <td className="status-present">Present</td>
     </tr>
     <tr>
      <td>2</td>
      <td>Bakari Omary</td>
      <td className="status-absent">Absent</td>
     </tr>
     <tr>
      <td>3</td>
      <td>Charles Damas</td>
      <td className="status-late">Late</td>
     </tr>
     <tr>
      <td>4</td>
      <td>Diana Grace</td>
      <td className="status-present">Present</td>
     </tr>
     <tr>
      <td>5</td>
      <td>Elikana Joseph</td>
      <td className="status-excused">Excused</td>
     </tr>
     {/* <!-- Add more students as needed --> */}
    </tbody>
   </table>

   {/* <Link to='/attendance' className="back-btn"><i className="fa fa-arrow-left"></i> Back to List</Link> */}

   <button onClick={(e)=> window.history.back()} className="back-btn"><i className="fa fa-arrow-left"></i> Back to List</button>
  </div>
 )
}

export default AttendanceView