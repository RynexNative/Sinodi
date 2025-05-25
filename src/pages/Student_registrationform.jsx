import React from 'react'

import '../styles/layoutstyle/Student_registrationform.css'

function Student_registrationform() {
  return (
    <div class="main">
    <h1>Register New Student</h1>

    <div class="form-section">
      <form id="studentForm">
        <div class="form-group">
          <label for="fullName">First Name</label>
          <input type="text" id="fullName" required />

          <label for="fullName">Second Name</label>
          <input type="text" id="fullName" required />

          <label for="fullName">Last Name</label>
          <input type="text" id="fullName" required />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="dob">Date of Birth</label>
          <input type="date" id="dob" required />
        </div>

        <div class="form-group">
          <label for="studentId">Student ID</label>
          <input type="text" id="studentId" required />
        </div>

        <div class="form-group">
          <label for="classLevel">Class</label>
          <select id="classLevel" required>
            <option value="">Select Class</option>
            <option value="Grade 1">Grade 1</option>
            <option value="Grade 2">Grade 2</option>
            <option value="Grade 3">Grade 3</option>
            <option value="Form 1">Form 1</option>
            <option value="Form 2">Form 2</option>
            <option value="Form 3">Form 3</option>
            <option value="Form 4">Form 4</option>
          </select>
        </div>

        <div class="form-group">
          <label for="academicYear">Academic Year</label>
          <input type="text" id="academicYear" placeholder="e.g. 2024" required />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <textarea id="address" rows="2" required></textarea>
        </div>

        <div class="form-group">
          <label for="guardianName">Guardian Name</label>
          <input type="text" id="guardianName" required />
        </div>

        <div class="form-group">
          <label for="guardianPhone">Guardian Phone</label>
          <input type="tel" id="guardianPhone" required />
        </div>

        <button type="submit" class="submit-btn">Register Student</button>
      </form>
    </div>
  </div>
  )
}

export default Student_registrationform