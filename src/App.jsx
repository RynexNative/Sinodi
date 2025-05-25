import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css"

import Login from './pages/Login'
import Tdashboard from './component/layout/Tdashboard'
import ProtectedRoute from './utils/ProtectedRoute';
import Dashiboard from './pages/Dashiboard';
import Lessonplan from './pages/Lessonplan';
import Notfound from './pages/404page';
import Notes from './pages/Notes';
import Attendance from './pages/Attendance';
import Schemeofwork from './pages/Schemeofwork';
import Setting from './pages/Setting';
import AttendanceView from './pages/AttendanceView';
import LessonPlanView from './pages/LessonplanView';
import LessonplanAdd from './pages/LessonplanAdd';
import Profile from './pages/Profile';
import Levels from './pages/Levels';
import SchemeOfWorkForm from './pages/SchemeOfWorkForm';
import Table from './pages/Table';
import LessonplanEdit from './pages/LessonplanEdit';
import Managestudent from './pages/Managestudent';
import Timetable from './pages/Timetable';
import Student_registrationform from './pages/Student_registrationform';

function App() {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        element={
          <ProtectedRoute />
        }>
        <Route element={<Tdashboard />}>

          {/* test routes */}
          <Route path='/table' element={<Table />} />
          <Route path='/level' element={<Levels />} />
          <Route path='/profile' element={<Profile />} />

          {/* Dashboard */}
          <Route path='/dashboard' element={<Dashiboard />} />

          {/* Manage student */}
          <Route path='/manage-students' element={<Managestudent/>} />
          <Route path='/manage-students/register-student/' element = {<Student_registrationform/>}/>

          {/* Time Table Management */}
          <Route path='time-table' element={<Timetable />}/>


          {/* Lesson Plannign Routes */}
          <Route path='/lesson-planning' element={<Lessonplan />} />
          <Route path='/lesson-planning/lesson-view' element={<LessonPlanView />} />
          <Route path='/lesson-planning/add-lessonplanning' element={<LessonplanAdd />} />
          <Route path='/lesson-planning/edit-lessonplanning' element={<LessonplanEdit />} />

          {/* Notes Routes */}
          <Route path="/notes" element={<Notes />} />

          {/* Attendance Routes */}
          <Route path="/attendance" element={<Attendance />} ></Route>
          <Route path='/attendance/view-attendance' element={<AttendanceView />} />

          {/* Scheme of work Routes */}
          <Route path="/scheme-of-work" element={<Schemeofwork />} />
          <Route path='/scheme-of-work/add-scheme' element={<SchemeOfWorkForm />} />

          {/* Setting Routes */}
          <Route path="/setting" element={<Setting />} />

        </Route>
      </Route>
      <Route path='*' element={< Notfound />} />
    </Routes>
  )
}

export default App;
