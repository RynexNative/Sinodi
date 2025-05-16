import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import axiosAuthApi from "../utils/http"

function LessonplanEdit() {

  const navigate = useNavigate();
  const location = useLocation();
  // const contentRef = useRef();
  const lesson = location.state?.lesson

  const [lpd, setLessonPlannDetails] = useState(null);

  const [rows, setRows] = useState([lpd])

  // const [obj, setObj] = useState({lpd})
  // console.log(lesson)
  useEffect(() => {
    if (!lesson) {
      navigate('/lesson-planning')
    }
    const lessonplanndetails = async () => {
      try {
        const resp = await axiosAuthApi.get(`/lesson-planning/${lesson.id}/`);
        // console.log(resp);
        setLessonPlannDetails(resp)
      } catch (err) {
        console.log(err)
      }
    }

    lessonplanndetails()
  }, [])



  if(lpd){
    // console.log(rows, lpd)
  }

  const Addrow = (e) => {
    setRows([...rows?.steps, { stage_name: '', duration_minutes: '', teaching_activities: '', learning_activities: '', assessment_criteria: '' }])
  }

  const handlechange = (index, field, value) => {
    const newRow = [...rows]
    newRow[index][field] = value;

    setRows(newRow);

  }

  const handleObjchange = (e) => {
    const newObj = { ...lpd }
    newObj[e.target.name] = e.target.value;

    setLessonPlannDetails(newObj)

    // console.log(newObj)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    lpd.steps = rows
    console.log(lpd);

  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>ADD LESSON PLAN</h1>

        <div className="section row">
          <div>
            <label>School:</label>
            <input type="text" placeholder="Enter school name" name='school_name' onChange={handleObjchange} value={lpd?.school_name}/>
          </div>
          <div>
            <label>Teacher:</label>
            <input type="text" placeholder="Enter teacher name" name='teacher' onChange={handleObjchange} value={lpd?.teacher_name}/>
          </div>
        </div>

        <div className="section row">
          <div>
            <label>Class/Form:</label>
            <input type="text" placeholder="Enter class or form" name='class_assigned' onChange={handleObjchange} value={lpd?.class_name}/>
          </div>
          <div>
            <label>Subject:</label>
            <input type="text" placeholder="Enter subject" name='subject' onChange={handleObjchange} value={lpd?.subject_name}/>
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name='date' onChange={handleObjchange} value={lpd?.date}/>
          </div>
        </div>

        <div className="section row">
          <div>
            <label>Time:</label>
            <input type="text" placeholder="e.g. 10:40AM - 11:20AM" name='time' onChange={handleObjchange} value={lpd?.time}/>
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
                <td><input type="number" name='registered_girls' onChange={handleObjchange} value={lpd?.registered_girls}/></td>
                <td><input type="number" name='registered_boys' onChange={handleObjchange} value={lpd?.registered_boys}/></td>
                <td><input type="number" readOnly /></td>
                <td><input type="number" name='present_girls' onChange={handleObjchange} value={lpd?.present_girls}/></td>
                <td><input type="number" name='present_boys' onChange={handleObjchange} value={lpd?.present_boys}/></td>
                <td><input type="number" readOnly /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <label>Main Competence:</label>
          <textarea rows="2" name='main_competence' onChange={handleObjchange} value={lpd?.main_competence}></textarea>
        </div>

        <div className="section">
          <label>Specific Competence:</label>
          <textarea rows="2" name='specific_competence' onChange={handleObjchange} value={lpd?.specific_competence}></textarea>
        </div>

        <div className="section">
          <label>Main Activity:</label>
          <textarea rows="2" name='main_activity' onChange={handleObjchange} value={lpd?.main_activity}></textarea>
        </div>

        <div className="section">
          <label>Specific Activities:</label>
          <textarea rows="2" name='specific_activity' onChange={handleObjchange} value={lpd?.specific_activity}></textarea>
        </div>

        <div className="section">
          <label>Teaching and Learning Resources:</label>
          <textarea rows="2" name='teaching_resources' onChange={handleObjchange} value={lpd?.teaching_resources}></textarea>
        </div>

        <div className="section">
          <label>References:</label>
          <textarea rows="2" name='references' onChange={handleObjchange} value={lpd?.references}></textarea>
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

              {lpd?.steps?.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name='stage_name'
                      value={row.stage_name}
                      placeholder={row.stage_name}
                      onChange={(e) => handlechange(index, 'stage_name', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      name='duration_minutes'
                      value={row.duration_minutes}
                      onChange={(e) => handlechange(index, 'duration_minutes', e.target.value)}
                      required
                    />
                  </td>
                  <td>
                    <textarea
                      rows="1"
                      name='teaching_activities'
                      value={row.teaching_activities}
                      onChange={(e) => handlechange(index, 'teaching_activities', e.target.value)}
                      required
                    >

                    </textarea>
                  </td>
                  <td>
                    <textarea
                      rows="1"
                      name='learning_activities'
                      value={row.learning_activities}
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
          <textarea rows="3" name='remarks' onChange={handleObjchange} value={lpd?.remarks}></textarea>
        </div>

        <div className="section">
          <button type="submit" className="submit-btn">Save Changes</button>
        </div>
      </div>
    </form>
  )
}

export default LessonplanEdit