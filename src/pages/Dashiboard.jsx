import React, { use, useEffect, useState } from 'react'
import '../styles/layoutstyle/Dashboard.css'
import { useOutletContext } from 'react-router-dom'
// import { useUser } from '../context/userContext'

function Dashiboard() {
    const context = useOutletContext();
    // const {userProfile} = useUser();
    const profileinfo = context?.profile
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());

        }, 1000)
        return () => clearInterval(timer)
    }, [])

    // console.log(profileinfo)
    // const userimage = userProfile?.profile
    return (

        <div className="dashboard fade-in">
            <div className="card welcome">
                <img src={profileinfo?.profile?.profile_picture} alt="" width={80} height={80} />
                <div>
                    <div>
                        <h3>Welcome back, {profileinfo?.first_name}</h3>
                        <p>Today is {currentTime.toLocaleDateString('en-TZ', {
                            weekday: 'long',
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric'
                        })}</p>
                    </div>
                    <div>
                        <h3>
                            Time: {currentTime.toLocaleTimeString('en-TZ')}
                        </h3>
                    </div>
                </div>
            </div>

            <div className="card">
                <h3>My Classes</h3>
                <ul className="class-list">
                    <li>Form 1 A - 45 Students</li>
                    <li>Form 2 B - 41 Students</li>
                    <li>Grade 6 Blue - 39 Students</li>
                </ul>
            </div>

            <div className="card">
                <h3>My Subjects</h3>
                <ul className="subject-list">
                    <li>Mathematics (2 lesson plans)</li>
                    <li>Science (5 notes uploaded)</li>
                </ul>
            </div>

            <div className="card">
                <h3>Upcoming Lesson</h3>
                <p>Mathematics - Form 1 A</p>
                <p>Time: 10:40AM - 11:20AM</p>
                <a href="#" className="button">View Timetable</a>
            </div>

            <div className="card">
                <h3>Lesson Planning</h3>
                <p>4 plans created this week.</p>
                <a href="#/lesson-planning" className="button">Create New</a>
            </div>

            <div className="card">
                <h3>Scheme of Work</h3>
                <p>Term 1 - Mathematics</p>
                <a href="#/lesson-planning" className="button">View / Download</a>
            </div>

            <div className="card">
                <h3>Upload Lesson Notes</h3>
                <p>PDF, DOCX up to 10MB</p>
                <a href="#/lesson-planning" className="button">Upload Now</a>
            </div>

            <div className="card">
                <h3>Attendance Snapshot</h3>
                <p>Form 1 A: 43/45</p>
                <p>Grade 6 Blue: 38/39</p>
                <a href="#/lesson-planning" className="button">Mark Attendance</a>
            </div>
        </div>
    )
}

export default Dashiboard