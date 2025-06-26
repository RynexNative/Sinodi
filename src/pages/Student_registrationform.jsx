import React, { useEffect, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import '../styles/layoutstyle/Student_registrationform.css'
import axiosAuthApi from '../utils/http';



function Student_registrationform() {

  const {selectclass} = useOutletContext()


  const navigate = useNavigate()

  const [studentDetail, setStudentDetail] = useState({
    first_name: '',
    sec_name: '',
    last_name: '',
    gender: '',
    date_of_birth: '',
    student_id: '',
    class_assigned: '',
    class_type: '',
    academic_year: '',
    address: '',
    guardian_name: '',
    guardian_phone: '',

  });


  // const filteredclass = selectclass.sort()


  const handlechanges = (e) => {
    e.preventDefault()
    const casa = e.target
    studentDetail[casa.name] = casa.value

    console.log(studentDetail)

  }

  const handlesubmit = async(e) => {
    e.preventDefault()

    try{
      const resp = await axiosAuthApi.post('/students/create-student/', {...studentDetail})
      navigate('/manage-students')
      console.log(resp)
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className="main">
      <h1>Register New Student</h1>

      <div className="form-section">
        <form id="studentForm">
          <div className="form-group">
            <label for="fullName">First Name</label>
            <input
              type="text"
              id="fullName"
              name='first_name'
              onChange={handlechanges}
              required
            />

            <label for="fullName">Second Name</label>
            <input
              type="text"
              id="fullName"
              name='sec_name'
              onChange={handlechanges}
              required
            />

            <label for="fullName">Last Name</label>
            <input
              type="text"
              id="fullName"
              name='last_name'
              onChange={handlechanges}
              required />
          </div>

          <div className="form-group">
            <label for="gender">Gender</label>
            <select id="gender" name='gender' onChange={handlechanges} required>
              <option value="" selected disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label for="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name='date_of_birth'
              onChange={handlechanges}
              required
            />
          </div>

          <div className="form-group">
            <label for="studentId">Student ID</label>
            <input
              type="text"
              id="studentId"
              name='student_id'
              onChange={handlechanges}
              required
            />
          </div>

          <div className="form-group">
            <label for="classLevel">Class</label>
            <select id="classLevel" name='class_assigned' onChange={handlechanges} required>
              <option value="" selected disabled>Select Class</option>
              {selectclass?.map((classd)=>(
                <option value={classd.id}>{classd.name}</option>
              ))}
              
            </select>

            <label for='class-type' className='class-type'>Class Type(Optional)</label>
            <input
              type="text"
              className='class-type'
              id='class-type'
              placeholder='e.g. Form 1A, Form 1B, Form 2A'
              name='class_type'
              onChange={handlechanges}
            />
          </div>

          <div className="form-group">
            <label for="academicYear">Academic Year</label>
            <input
              type="text"
              id="academicYear"
              placeholder="e.g. 2024"
              name='academic_year'
              onChange={handlechanges}
              required />
          </div>

          <div className="form-group">
            <label for="address">Address</label>
            <textarea
              id="address"
              rows="2"
              name='address'
              onChange={handlechanges}
              required
            >
            </textarea>
          </div>

          <div className="form-group">
            <label for="guardianName">Guardian Name</label>
            <input
              type="text"
              id="guardianName"
              name='guardian_name'
              onChange={handlechanges}
              required
            />
          </div>

          <div className="form-group">
            <label for="guardianPhone">Guardian Phone</label>
            <input
              type="tel"
              id="guardianPhone"
              name='guardian_phone'
              onChange={handlechanges}
              required
            />
          </div>

          <button type="submit" className="submit-btn" onClick={handlesubmit}>Register Student</button>
        </form>
      </div>
    </div>
  )
}

export default Student_registrationform