
import React, { useEffect, useState, useRef } from 'react';
import '../styles/layoutstyle/LessonplanView.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import axiosAuthApi from '../utils/http';

const LessonPlanView = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate()
  const location = useLocation()
  // const contentRef = useRef();
  const lesson = location.state?.lesson
  
  const [lpd, setLessonPlannDetails] = useState(null); 
  // console.log(lesson)
  useEffect(()=>{
    if(!lesson){
      navigate('/lesson-planning')
    }
    const lessonplanndetails = async () => {
      try{
        const resp = await axiosAuthApi.get(`/lesson-planning/${lesson.id}/`);
        console.log(resp);
        setLessonPlannDetails(resp)
      }catch(err){
        console.log(err)
      }
    }
    
    lessonplanndetails()
  },[])


  
  if (!lpd){
    return <div>nodata</div>
  }

  // const handlePrint = useReactToPrint({
  //   content: () => contentRef.current, // Rejelea elementi
  // });

  const total_register = lpd.registered_girls + lpd.registered_boys
  const total_present = lpd.present_girls + lpd.present_boys
  

  
  return (
    <div className="container" ref={contentRef}>
      <button className="print-btn">
        🖨️ Print
      </button>

      <h1>LESSON PLAN</h1>
      <div className="section row">
        <div><strong>School:</strong> {lpd.school_name}</div>
        <div><strong>Teacher:</strong> {lpd.teacher}</div>
      </div>
      <div className="section row">
        <div><strong>Class/Form:</strong> {lpd.class_name}</div>
        <div><strong>Subject:</strong> {lpd.subject_name}</div>
        <div><strong>Date:</strong> {lpd.date}</div>
      </div>
      <div className="section row">
        <div><strong>Time:</strong> {lpd.time}</div>
      </div>

      <div className="section">
        <h3>Student Attendance Summary</h3>
        <table className='studentNo'>
          <thead>
            <tr>
              <th colSpan="7">Number of Students</th>
            </tr>
            <tr>
              <th colSpan="3">Registered</th>
              <th></th>
              <th colSpan="3">Present</th>
            </tr>
            <tr>
              <th>Girls</th>
              <th>Boys</th>
              <th>Total</th>
              <th></th>
              <th>Girls</th>
              <th>Boys</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lpd.registered_girls}</td>
              <td>{lpd.registered_boys}</td>
              <td>{total_register}</td>
              <td></td>
              <td>{lpd.present_girls}</td>
              <td>{lpd.present_boys}</td>
              <td>{total_present}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>Main Competence</h3>
        <p>{lpd.main_competence}</p>
      </div>

      <div className="section">
        <h3>Specific Competence</h3>
        <p>{lpd.specific_competence}</p>
      </div>

      <div className="section">
        <h3>Main Activity</h3>
        <p>{lpd.main_activity}</p>
      </div>

      <div className="section">
        <h3>Specific Activities</h3>
        <p>{lpd.specific_activity}</p>
      </div>

      <div className="section">
        <h3>Teaching and Learning Resources</h3>
        <p>{lpd.teaching_resources}</p>
      </div>

      <div className="section">
        <h3>References</h3>
        <p>{lpd.references}</p>
      </div>

      <div className="section">
        <h3>Teaching and Learning Process</h3>
        <table className='Viewtable'>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Time (min)</th>
              <th>Teaching Activities</th>
              <th>Learning Activities</th>
              <th>Assessment Criteria</th>
            </tr>
          </thead>
          <tbody>
            {lpd.steps.map((step) => <tr key={step.id}>
              <td>{step.stage_name}</td>
              <td>{step.duration_minutes}</td>
              <td>{step.teaching_activities}</td>
              <td>{step.learning_activities}</td>
              <td>{step.assessment_criteria}</td>

            </tr>)}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h3>Remarks</h3>
        <p>{lpd.remarks}</p>
      </div>
    </div>
  );
}

export default LessonPlanView;
