import React, { useState, useEffect } from 'react';
import '../styles/layoutstyle/SchemeOfWorkForm.css';
import axiosAuthApi from '../utils/http';

import { useNavigate, useOutletContext } from 'react-router-dom';



const SchemeOfWorkForm = () => {
  const navigate = useNavigate()

  // # list ya steps/data za lst kwenye Table ya scheme of work
  const [steps, setSteps] = useState([
    {
      main_competence: '',
      specific_competence: '',
      main_activity: '',
      specific_activity: '',
      teaching_activities: '',
      learning_activities: '',
      month: '',
      week: '',
      no_of_periods: '',
      methods: '',
      teaching_and_learning_resource: '',
      assessment_tools: '',
      references: '',
      remarks: '',
    },
    {
      main_competence: '',
      specific_competence: '',
      main_activity: '',
      specific_activity: '',
      teaching_activities: '',
      learning_activities: '',
      month: '',
      week: '',
      no_of_periods: '',
      methods: '',
      teaching_and_learning_resource: '',
      assessment_tools: '',
      references: '',
      remarks: '',
    },
    {
      main_competence: '',
      specific_competence: '',
      main_activity: '',
      specific_activity: '',
      teaching_activities: '',
      learning_activities: '',
      month: '',
      week: '',
      no_of_periods: '',
      methods: '',
      teaching_and_learning_resource: '',
      assessment_tools: '',
      references: '',
      remarks: '',
    },
    {
      main_competence: '',
      specific_competence: '',
      main_activity: '',
      specific_activity: '',
      teaching_activities: '',
      learning_activities: '',
      month: '',
      week: '',
      no_of_periods: '',
      methods: '',
      teaching_and_learning_resource: '',
      assessment_tools: '',
      references: '',
      remarks: '',
    },
  ])


  const handleStepChange = (index, field, value) => {
    const newSteps = [...steps]
    newSteps[index][field] = value;

    setSteps(newSteps);

  }

  const [info, setInfo] = useState({
    School: '',
    Teacher: '',
    Subject: '',
    Year: '',
    Term: '',
    class_id: '',
    Scheme_Steps: steps,
  });

  const handleInfochange = (e) => {
    const newInfo = { ...info }
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo)

  }

  const addRow = () => {
    const newsteps = [...steps, {
      main_competence: '',
      specific_competence: '',
      main_activity: '',
      specific_activity: '',
      teaching_activities: '',
      learning_activities: '',
      month: '',
      week: '',
      no_of_periods: '',
      methods: '',
      teaching_and_learning_resource: '',
      assessment_tools: '',
      references: '',
      remarks: '',
    }]
    setSteps(newsteps)
  };

  // # Draft hapa
  const [draft, setDraft] = useState(null)
  const handledraft = async () => {
    try {
      const resp = await axiosAuthApi.post('/drafts/', { type: "scheme_of_work", data: {} });
      setDraft(resp);
    } catch (err) {
      console.log(err)
    }
  }

  const handleupdate = async () => {

    const draftId = draft?.id
    const resp = await axiosAuthApi.patch(`/drafts/${draftId}/`, { data: { ...info } })
    console.log(draft?.id)
  }

  useEffect(() => {
    setTimeout(() => handledraft(), 10)

  }, [])

  useEffect(() => {
      if (draft && draft.data) {
        setInfo({ ...draft.data })
        if (draft.data.Scheme_Steps) {
          setSteps(draft.data.Scheme_Steps)  
        }
  
      }
    }, [draft])

    useEffect(() => {
    
        if (draft) {
          const timeout = setTimeout(() => {
            info.Scheme_Steps = steps
            handleupdate()
            console.log(draft.data)
            console.log(info)
          }, 1000);
    
          return () => clearTimeout(timeout)
        }
      }, [steps, info])


      const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(info);
        const draftId = draft?.id
    
        try {
          const resp = await axiosAuthApi.post(`/scheme-of-work/finalize-from-draft/${draftId}/`)
          console.log(resp)
    
          navigate('/scheme-of-work')
    
        } catch (error) {
          console.log(error)
        }
    
      }

  return (
    <div className="container">
      <h1>Scheme of Work Entry Form</h1>

      <div className="form-infoscheme">
        <div>
          <label htmlFor='school'>School</label>
          <input
            id='school'
            type="text"
            name='School'
            value={info.School ?? ''}
            placeholder='Enter School name '
            onChange={handleInfochange}
          />
        </div>
        <div>
          <label htmlFor='teacher'>Teacher</label>
          <input
            id='teacher'
            type="text"
            name='Teacher'
            value={info.Teacher ?? ''}
            placeholder='Enter Teacher name '
            onChange={handleInfochange}
          />

        </div>
        <div>
          <label htmlFor='subject'>Subject</label>
          <input
            id='subject'
            type="text"
            name='Subject'
            value={info.Subject ?? ''}
            placeholder='Enter Subject'
            onChange={handleInfochange}
          />

        </div>
        <div>
          <label htmlFor='year'>Year</label>
          <input
            id='year'
            type="text"
            name='Year'
            value={info.Year ?? ''}
            placeholder='Enter Year '
            onChange={handleInfochange}
          />

        </div>
        <div>
          <label htmlFor='term'>Term</label>
          <input
            id='term'
            type="text"
            name='Term'
            value={info.Term ?? ''}
            placeholder='Enter Term'
            onChange={handleInfochange}
          />

        </div>
        <div>
          <label htmlFor='class'>Class</label>
          <input
            id='class'
            type="text"
            name='class_id'
            value={info.class_id ?? ''}
            placeholder='Enter Class'
            onChange={handleInfochange}
          />

        </div>
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
          {steps.map((step, index) => (
            <tr key={index}>
              <td>
                <textarea name="main_competence"
                value={step.main_competence ?? ''}
                  onChange={(e) => handleStepChange(index, 'main_competence', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="specific_competence"
                value={step.specific_competence ?? ''}
                  onChange={(e) => handleStepChange(index, 'specific_competence', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="main_activity"
                value={step.main_activity ?? ''}
                  onChange={(e) => handleStepChange(index, 'main_activity', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="specific_activity"
                value={step.specific_activity ?? ''}
                  onChange={(e) => handleStepChange(index, 'specific_activity', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="teaching_activities"
                value={step.teaching_activities ?? ''}
                  onChange={(e) => handleStepChange(index, 'teaching_activities', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="learning_activities"
                value={step.learning_activities ?? ''}
                  onChange={(e) => handleStepChange(index, 'learning_activities', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="month"
                value={step.month ?? ''}
                  onChange={(e) => handleStepChange(index, 'month', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="week"
                value={step.week ?? ''}
                  onChange={(e) => handleStepChange(index, 'week', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="no_of_periods"
                value={step.no_of_periods ?? ''}
                  onChange={(e) => handleStepChange(index, 'no_of_periods', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="methods"
                value={step.methods ?? ''}
                  onChange={(e) => handleStepChange(index, 'methods', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="teaching_and_learning_resource"
                value={step.teaching_and_learning_resource ?? ''}
                  onChange={(e) => handleStepChange(index, 'teaching_and_learning_resource', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="assessment_tools"
                value={step.assessment_tools ?? ''}
                  onChange={(e) => handleStepChange(index, 'assessment_tools', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="references"
                value={step.references ?? ''}
                  onChange={(e) => handleStepChange(index, 'references', e.target.value)}
                ></textarea>
              </td>
              <td>
                <textarea name="remarks"
                value={step.remarks ?? ''}
                  onChange={(e) => handleStepChange(index, 'remarks', e.target.value)}
                ></textarea>
              </td>
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
