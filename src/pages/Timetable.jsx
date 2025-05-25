import React from 'react'
import '../styles/layoutstyle/Timetable.css'

function Timetable() {
  return (
    <div class="main">
    <h1>Manage Timetable</h1>

    <div class="timetable-form">
      <h3>Add Timetable Entry</h3>
      <label for="day">Day:</label>
      <select id="day">
        <option>Monday</option>
        <option>Tuesday</option>
        <option>Wednesday</option>
        <option>Thursday</option>
        <option>Friday</option>
      </select>

      <label for="time">Time:</label>
      <input type="time" id="time" />

      <label for="subject">Subject:</label>
      <input type="text" id="subject" placeholder="e.g. Mathematics" />

      <label for="class">Class:</label>
      <input type="text" id="class" placeholder="e.g. Form 1B" />

      <button onclick="addEntry()">Add Entry</button>
    </div>

    <div class="timetable-view">
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
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Timetable