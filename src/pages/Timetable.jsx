import React, { useEffect, useState } from 'react'
import '../styles/layoutstyle/Timetable.css'
import axiosAuthApi from '../utils/http'

function Timetable() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [timetable, setTimeTable] = useState({
    day: '',
    start_time: '',
    end_time: '',
    subject: '',
    class_type: '',
  })

  const handlechanges = (e) => {
    e.preventDefault()

    const casa = e.target

    timetable[casa.name] = casa.value
    console.log(timetable)
  }

  const handlesubmit = async(e) => {
    e.preventDefault()

    try{
      const resp = await axiosAuthApi.post('/time-table/create-time-table/', {...timetable})

      console.log(resp)
      handledata()
    }catch(err){
      console.log(err)
    }
  }

  const handledata = async() => {
    try{
      const resp = await axiosAuthApi.get('/time-table/')
      console.log(resp)
      setData(resp)
      setIsLoading(false)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    handledata()
  },[])


  return (
    <div className="main">
      <h1>Manage Timetable</h1>

      <div className="timetable-form">
        <h3>Add Timetable Entry</h3>
        <label for="day">Day:</label>
        <select id="day" name='day' onChange={handlechanges}>
          <option value="" selected disabled>Select Day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
        </select>

        <label for="starttime">Starting Time:</label>
        <input
          type="time"
          id="starttime"
          name='start_time'
          onChange={handlechanges}
        />

        <label for="endtime">Ending Time:</label>
        <input
          type="time"
          id="endtime"
          name='end_time'
          onChange={handlechanges}
        />

        <label for="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          placeholder="e.g. Mathematics"
          name='subject'
          onChange={handlechanges}
        />

        <label for="class">Class:</label>
        <input
          type="text"
          id="class"
          placeholder="e.g. Form 1B"
          name='class_type'
          onChange={handlechanges}
        />

        <button onClick={handlesubmit}>Add Entry</button>
      </div>

      <div className="timetable-view">
        <h3>Weekly Timetable</h3>
        <table id="timetableTable">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Class</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- Entries will appear here --> */}
            {isLoading ? (
              <>
              {[...Array(5)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {[...Array(5)].map((_, cellIndex) => (
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
            ): data && data.length > 0? (
              data.map((datad)=>(
                <tr key={datad.id}>
                  <td>{datad.day}</td>
                  <td>{datad.start_time} - {datad.end_time}</td>
                  <td>{datad.subject}</td>
                  <td>{datad.class_type}</td>
                  <td>
                    <button className='button-delete'> Delete</button>
                    
                  </td>
                </tr>
              ))
            ):(
              <tr>
                <td>No data Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Timetable