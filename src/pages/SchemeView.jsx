
import React, { useEffect, useState, useRef } from 'react';
import '../styles/layoutstyle/SchemeView.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import axiosAuthApi from '../utils/http';

const SchemeView = () => {
  const contentRef = useRef(null);
  const navigate = useNavigate()
  const location = useLocation()
  // const contentRef = useRef();
  const scheme = location.state?.scheme
  
  const [lpd, setSchemeDetails] = useState(null); 
  // console.log(lesson)
  useEffect(()=>{
    if(!scheme){
      navigate('/scheme-of-work')
    }
    const schemedetails = async () => {
      try{
        const resp = await axiosAuthApi.get(`/scheme-of-work/${scheme?.id}/`);
        console.log(resp);
        setSchemeDetails(resp)
      }catch(err){
        console.log(err)
      }
    }
    
    schemedetails()
  },[])


  
  if (!lpd){
    return <div>nodata</div>
  }

  // const handlePrint = useReactToPrint({
  //   content: () => contentRef.current, // Rejelea elementi
  // });

  return (
    <div className="container" ref={contentRef}>
      <button className="print-btn">
        🖨️ Print
      </button>

      <h1>Scheme of Work </h1>
      <div className='form-infoscheme'>

      <div className="section row">
        <div><strong>School:</strong> {lpd.School}</div>
        <div><strong>Teacher:</strong> {lpd.Teacher}</div>
      </div>
      <div className="section row">
        <div><strong>Class/Form:</strong> {lpd.class_name}</div>
        <div><strong>Subject:</strong> {lpd.subject_name}</div>
        <div><strong>Term:</strong> {lpd.Term}</div>
      </div>
      <div className="section row">
      <div><strong>Year:</strong> {lpd.Year}</div>
      </div>
      </div>

      <div className="section22">
        <table className='Viewtable22'>
        <thead>
          <tr>
            {[
              'Main Competence', 'Specific Competences', 'Main Activities', 'Specific Activities',
              'Teaching Activities', 'Learning Activities', 'Month', 'Week', 'No. of Periods',
              'Methods', 'Resources', 'Assessment Tools', 'References', 'Remarks'
            ].map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
          <tbody>
            {lpd.Scheme_Steps.map((step) => <tr key={step.id}>
              <td>{step.main_competence}</td>
              <td>{step.specific_competence}</td>
              <td>{step.main_activity}</td>
              <td>{step.specific_activity}</td>
              <td>{step.teaching_activities}</td>
              <td>{step.learning_activities}</td>
              <td>{step.month}</td>
              <td>{step.week}</td>
              <td>{step.no_of_periods}</td>
              <td>{step.methods}</td>
              <td>{step.teaching_and_learning_resource}</td>
              <td>{step.assessment_tools}</td>
              <td>{step.references}</td>
              <td>{step.remarks}</td>

            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SchemeView;
