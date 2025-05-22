import React, { useState } from 'react';
import '../styles/layoutstyle/SchemeOfWorkForm.css';

const SchemeOfWorkForm = () => {
 const [info, setInfo] = useState({
  school: '',
  teacher: '',
  subject: '',
  year: '',
  term: '',
  class: ''
 });

 const [rows, setRows] = useState([
  new Array(14).fill('')
 ]);

 const handleInfoChange = (e) => {
  setInfo({ ...info, [e.target.name]: e.target.value });
 };

 const handleCellChange = (rowIndex, cellIndex, value) => {
  const newRows = [...rows];
  newRows[rowIndex][cellIndex] = value;
  setRows(newRows);
 };

 const addRow = () => {
  setRows([...rows, new Array(14).fill('')]);
 };

 const handleSubmit = () => {
  console.log('Submitted Info:', info);
  console.log('Scheme Table:', rows);
  alert('✅ Scheme submitted (placeholder action)');
 };

 return (
  <div className="container">
   <h1>Scheme of Work Entry Form</h1>

   <div className="form-infoscheme">
    {Object.entries(info).map(([key, value]) => (
     <div key={key}>
      <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
      <input
       type="text"
       id={key}
       name={key}
       value={value}
       onChange={handleInfoChange}
       placeholder={`Enter ${key}`}
      />
     </div>
    ))}
   </div>

   <div className="controlsscheme">
    <button onClick={addRow}>+ Add Row</button>
   </div>

   <table className='tablescheme'>
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
     {rows.map((row, rowIndex) => (
      <tr key={rowIndex}>
       {row.map((cell, cellIndex) => (
        <td key={cellIndex}>
         <textarea
          rows="2"
          value={cell}
          onChange={(e) => handleCellChange(rowIndex, cellIndex, e.target.value)}
         />
        </td>
       ))}
      </tr>
     ))}
    </tbody>
   </table>

   <div style={{ textAlign: 'right' }}>
    <button className="submit-btnscheme" onClick={handleSubmit}>Submit Scheme</button>
   </div>
  </div>
 );
};

export default SchemeOfWorkForm;
