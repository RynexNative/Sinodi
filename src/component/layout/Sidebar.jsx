import Dashiboard from "../../pages/Dashiboard";
import "../../styles/layoutstyle/Sidebar.css"
import { Link, NavLink, useNavigate, replace } from 'react-router-dom';
import { Authcontext } from "../../context/authContext"
import { useContext, useEffect, useState } from "react";

function Sidebar() {
  const { logout } = useContext(Authcontext)
  const navigate = useNavigate();

  const handlelogout = () => {
    try {
      logout();
      navigate("", { replace: true });

    } catch (error) {
      console.log(error);
    }

  }

  const [sideHide, setSideHide] = useState('')

  useEffect(() => {
    document.querySelector('ul').className = sideHide;
    const eye = document.querySelector('ul').className;
    // const text = node.textContent;
  }, [sideHide])
  const tagglelist = () => {
    sideHide === "" ? setSideHide("clicked") : setSideHide("");
  }
  console.log(sideHide)
  return (
    <aside className="sidebar" id="sidebar">
      <ul>
        <NavLink to="/dashboard" onClick={tagglelist} replace><i className="fas fa-chart-line"></i> Dashboard</NavLink>
        <NavLink to='/manage-students' onClick={tagglelist}><i className="fas fa-users"></i> Manage Students</NavLink>
        <NavLink to='/time-table' onClick={tagglelist}> <i className="fas fa-clock"></i>Time Table</NavLink>
        <NavLink to="attendance" onClick={tagglelist}><i className="fas fa-calendar-check"></i> Attendance</NavLink>
        <NavLink to="notes" onClick={tagglelist}><i className="fas fa-file-upload"></i> Notes</NavLink>
        <NavLink to="/lesson-planning" onClick={tagglelist}><i className="fas fa-book"></i> Lesson Plans</NavLink>
        <NavLink to="scheme-of-work" onClick={tagglelist}><i className="fas fa-file"></i> Scheme of Work</NavLink>

        <NavLink to='/draft' onClick={tagglelist}><i className="fas fa-save"></i> Draft</NavLink>

        <NavLink to='setting' onClick={tagglelist}><i className="fas fa-cog"></i> Settings</NavLink>
        <button onClick={handlelogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
      </ul>
      <div className="acroname">YIITI ACADEMIC MANAGEMENT SYST</div>
      <NavLink className="fas fa-menu list" onClick={tagglelist}>
        <i className="fa fa-list">List</i>
      </NavLink>
    </aside>
  )
}

export default Sidebar