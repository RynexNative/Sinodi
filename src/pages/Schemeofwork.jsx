import React from 'react';
import '../styles/layoutstyle/Schemeofwork.css';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useEffect, useState } from "react";
import axiosAuthApi from "../utils/http";



const Schemeofwork = () => {
  const navigate = useNavigate();
  const context = useOutletContext();

  // hizi ni inlet...
  const [isLoading, setIsLoading] = useState(true);
  const [schemes, setSchemes] = useState(null);

  // hizi ni inlet filter...
  const [level,setLevel] = useState('all')
  const [classes, setClasses] = useState('all')

  const scheme_of_work = async () => {
    try{
      const response = await axiosAuthApi.get('/scheme-of-work/', {})
  
      setSchemes(response)
      setIsLoading(false)
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

  const handledelete = async(lessonId) => {
    try{
      const resp = await axiosAuthApi.delete(`/lesson-planning/${lessonId}/delete/`)
      lessonPlanns();
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    scheme_of_work()
  }, [])

  const handlefilter = schemes?.filter((scheme)=>{
    const matchclasses = 
      classes==='all' || classes === scheme.class_name

    const matchlevel = 
      level === 'all' || level === scheme.class_level

    return matchclasses && matchlevel
  })

  return (
    <div className="scheme-dashboard">
      <h2>📘 Scheme of Work Dashboard</h2>

      <div className="summary">
        <div className="card">
          <h4>Total Schemes</h4>
          <p>{schemes?.length}</p>
        </div>
        <div className="card">
          <h4>Completed</h4>
          <p>{schemes?.filter(s => s.status === 'Completed').length}</p>
        </div>
        <div className="card">
          <h4>In Progress</h4>
          <p>{schemes?.filter(s => s.status === 'In Progress').length}</p>
        </div>
      </div>

      <div className="table-actions">
        <input type="search" placeholder="Search by subject or teacher..." />
        <button className="create-btn" onClick={()=>navigate('add-scheme')}>+ Add New Scheme</button>
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
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {isLoading ? (
            <>
              {[...Array(9)].map((_, rowIndex) => (
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
          ) : handlefilter && handlefilter.length > 0 ? (
            handlefilter.map((scheme, index) => (
              <tr key={scheme.id}>
                <td>{scheme.subject_name}</td>
                <td>{scheme.class_name}</td>
                <td>{scheme.Year}</td>
                <td>{scheme.Term}</td>
                <td>{scheme.Teacher}</td>
                <td>{scheme.week}</td>
                <td>
                  <button onClick={() => navigate('view-scheme', { state: { scheme } })} className="View-button">
                    <i className="fas fa-eye"></i> View
                  </button>
                  <button onClick={()=> navigate('edit-lessonplanning', {state:{scheme}})} className='Edit-button'>
                    <i className="fas fa-edit"></i> Edit
                  </button>
                  <button className="button-delete" onClick={()=>handledelete(scheme.id)}> <i className="fas fa-trash"></i> Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Schemeofwork;
