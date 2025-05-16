import React, { useEffect, useState } from "react";
import "../styles/layoutstyle/Lessonplan.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import axiosAuthApi from "../utils/http";

const Lessonplan = () => {

  // hizi ni ooutlet...
  const navigate = useNavigate();
  const context = useOutletContext();

  // hizi ni inlet...
  const [isLoading, setIsLoading] = useState(true);
  const [lesson_plann, setLessonPlann] = useState(null);

  // hizi ni inlet filter...
  const [level,setLevel] = useState('all')
  const [classes, setClasses] = useState('all')

  useEffect(() => {
    const lessonPlanns = async () => {
      const response = await axiosAuthApi.get('/lesson-planning/', {})

      setLessonPlann(response)
      setIsLoading(false)
      console.log(response)
    }

    lessonPlanns()
  }, [])

  const handlefilter = lesson_plann?.filter((lesson)=>{
    const matchclasses = 
      classes==='all' || classes === lesson.class_name

    const matchlevel = 
      level === 'all' || level === lesson.class_level

    return matchclasses && matchlevel
  })

  // //console.log(context)


  // if(isLoading){
  //   return <div>ina lodding........</div>
  // }
  return (
    <div className="lesson-dashboard">
      <h2>📘 Lesson Planning Dashboard</h2>

      {/* Mini Stats */}
      <div className="stats">
        <div className="stat-card">
          <h4>Total Plans</h4>
          <p>{handlefilter?.length}</p>
        </div>
        <div className="stat-card">
          <h4>Completed</h4>
          <p>{handlefilter?.filter((lesson) => lesson.status === 'complete').length}</p>
        </div>
        <div className="stat-card">
          <h4>Pending</h4>
          <p>{handlefilter?.filter((lesson) => lesson.status === 'pending').length}</p>
        </div>
        <div className="stat-card">
          <h4>Subjects Covered</h4>
          <p>8</p>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <select
          value={level}
          onChange={(e)=>setLevel(e.target.value)}
        >
          <option value='all'>Select Level</option>
          {context?.selectlevel?.map((level) => (
            <option value={level.name}>{level.name}</option>
          ))}
        </select>
        <select 
          value={classes}
          onChange={(e)=>setClasses(e.target.value)}
          >
          <option value="all">All class</option>
          {context?.selectclass?.map((classes) => (
            <option value={classes.name}>{classes.name}</option>
            ))}
        </select>
        <input type="date" />
        <button onClick={() => { navigate('add-lessonplanning') }} className="add-btn">+ Add Lesson Plan</button>
      </div>

      {/* Table */}
      <table className="lesson-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Status</th>
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
            handlefilter.map((lesson, index) => (
              <tr key={lesson.id}>
                <td>{lesson.main_competence}</td>
                <td>{lesson.class_name}</td>
                <td>{lesson.subject_name}</td>
                <td>{lesson.date}</td>
                <td>{lesson.status}</td>
                <td>
                  <button onClick={() => navigate('lesson-view', { state: { lesson } })}>
                    View
                  </button>
                  <button onClick={()=> navigate('edit-lessonplanning', {state:{lesson}})}>
                    Edit
                  </button>
                  <button>Delete</button>
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

export default Lessonplan;
