import React, { useEffect, useState } from 'react'
import '../styles/layoutstyle/LessonplanAdd.css';
import axiosAuthApi from '../utils/http';

function LessonplanAdd() {
  const [rows, setRows] = useState([
    { stage_name: 'eg: introduction', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' },
    { stage_name: 'eg: Competence Development', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' },
    { stage_name: 'eg: Design', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' },
    { stage_name: 'eg: Realisation', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' }
  ])

  const [obj, setObj] = useState({
    school_name: "",
    teacher: "",
    class_assigned: "",
    subject: "",
    date: "",
    time: "",
    registered_girls: 0,
    registered_boys: 0,
    present_girls: 0,
    present_boys: 0,
    main_competence: "",
    specific_competence: "",
    main_activity: "",
    specific_activity: "",
    teaching_resources: "",
    references: "",
    steps: rows,
    remarks: "",
  })

  const Addrow = (e) => {
    setRows([...rows, { stage_name: '', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' }])
  }


  const handlechange = (index, field, value) => {
    const newRow = [...rows]
    newRow[index][field] = value;

    setRows(newRow);

  }

  const handleObjchange = (e) => {
    const newObj = { ...obj }
    newObj[e.target.name] = e.target.value;

    setObj(newObj)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    obj.steps = rows
    console.log(obj);


    try {
      const resp = await axiosAuthApi.post('/lesson-planning/create-lesson-planning', { ...obj })
      console.log(resp)
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>ADD LESSON PLAN</h1>

        <div className="section row">
          <div>
            <label>School:</label>
            <input type="text" placeholder="Enter school name" name='school_name' onChange={handleObjchange} />
          </div>
          <div>
            <label>Teacher:</label>
            <input type="text" placeholder="Enter teacher name" name='teacher' onChange={handleObjchange} />
          </div>
        </div>

        <div className="section row">
          <div>
            <label>Class/Form:</label>
            <input type="text" placeholder="Enter class or form" name='class_assigned' onChange={handleObjchange} />
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" placeholder="Enter subject" name='subject' onChange={handleObjchange} />
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name='date' onChange={handleObjchange} />
          </div>
        </div>

        <div className="section row">
          <div>
            <label>Time:</label>
            <input type="text" placeholder="e.g. 10:40AM - 11:20AM" name='time' onChange={handleObjchange} />
          </div>
        </div>

        <div className="section">
          <h3>Student Attendance Summary</h3>
          <table>
            <thead>
              <tr>
                <th colSpan="3">Registered</th>
                <th colSpan="3">Present</th>
              </tr>
              <tr>
                <th>Girls</th>
                <th>Boys</th>
                <th>Total</th>
                <th>Girls</th>
                <th>Boys</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="number" name='registered_girls' onChange={handleObjchange} /></td>
                <td><input type="number" name='registered_boys' onChange={handleObjchange} /></td>
                <td><input type="number" readOnly /></td>
                <td><input type="number" name='present_girls' onChange={handleObjchange} /></td>
                <td><input type="number" name='present_boys' onChange={handleObjchange} /></td>
                <td><input type="number" readOnly /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <label>Main Competence:</label>
          <textarea rows="2" name='main_competence' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <label>Specific Competence:</label>
          <textarea rows="2" name='specific_competence' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <label>Main Activity:</label>
          <textarea rows="2" name='main_activity' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <label>Specific Activities:</label>
          <textarea rows="2" name='specific_activity' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <label>Teaching and Learning Resources:</label>
          <textarea rows="2" name='teaching_resources' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <label>References:</label>
          <textarea rows="2" name='references' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <h3>Teaching and Learning Process</h3>


          <table className="process-table">
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

              {rows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name='stage_name'
                      placeholder={row.stage_name}
                      onChange={(e) => handlechange(index, 'stage_name', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name='duration_minutes'
                      value={row.time}
                      onChange={(e) => handlechange(index, 'duration_minutes', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <textarea
                      rows="1"
                      name='teaching_activities'
                      value={row.teaching_activity}
                      onChange={(e) => handlechange(index, 'teaching_activities', e.target.value)}
                      required
                    >

                    </textarea>
                  </td>
                  <td>
                    <textarea
                      rows="1"
                      name='learning_activities'
                      value={row.learning_activity}
                      onChange={(e) => handlechange(index, 'learning_activities', e.target.value)}
                      required
                    >

                    </textarea>
                  </td>
                  <td>
                    <textarea
                      rows="1"
                      name='assessment_criteria'
                      value={row.assessment_criteria}
                      onChange={(e) => handlechange(index, 'assessment_criteria', e.target.value)}
                      required
                    >

                    </textarea>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={Addrow}>Add Row</button>
        </div>

        <div className="section">
          <label>Remarks:</label>
          <textarea rows="3" name='remarks' onChange={handleObjchange}></textarea>
        </div>

        <div className="section">
          <button type="submit" className="submit-btn">Save Lesson Plan</button>
        </div>
      </div>
    </form>
  )
}


export default LessonplanAdd;