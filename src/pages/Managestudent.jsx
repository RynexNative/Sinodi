import React, { useEffect, useState } from 'react'
import '../styles/layoutstyle/managestudent.css'
import { Link } from 'react-router-dom'
import axiosAuthApi from '../utils/http';

function Managestudent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true) 

  const get_student = async () => {
    try{
      const resp = await axiosAuthApi.get('/students/')
      setData(resp)
      console.log(resp)
      setIsLoading(false)
    }catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    get_student();
  },[])
  return (
    <div className="main">
    <div className="header">
      <h1>Manage Students</h1>
    </div>
    
    <div>
      <Link to='register-student' className='actions button'>Register New Student</Link>
    </div>

    <div className="search-box">
      <input type="text" id="searchInput" placeholder="Search by name..." />
    </div>

    <table id="studentsTable">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Class</th>
          <th>Gender</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="studentsBody">
        {/* <!-- JavaScript will inject students here --> */}
        {isLoading? (<>
                {[...Array(5)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {[...Array(6)].map((_, cellIndex) => (
                      <td key={cellIndex}>
                        <div
                          style={{
                            width: '200px',
                            height: '25px',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '4px',
                            animation: 'pulse 1.5s infinite'
                          }}
                        ></div>
                      </td>
                    ))}
                  </tr>
                ))}
              </>
              ) : data && data.length > 0? (data.map((datad, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{datad.first_name} {datad.sec_name} {datad.last_name}</td>
                <td>{datad.class_type}</td>
                <td>{datad.gender}</td>
                <td>{datad.academic_year}</td>
                <td>
                  <button className='Edit-button'>Edit</button>
                  <button className='View-button'>View</button>
                </td>
              </tr>
            ))):
              (
                <tr>
                  <td>No Data</td>
                </tr>
              )}
      </tbody>
    </table>
  </div>
  )
}

export default Managestudent