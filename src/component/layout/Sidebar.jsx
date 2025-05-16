import Dashiboard from "../../pages/Dashiboard";
import "../../styles/layoutstyle/Sidebar.css"
import { Link, NavLink, useNavigate, replace } from 'react-router-dom';
import {Authcontext} from "../../context/authContext"
import { useContext } from "react";

function Sidebar() {
  const {logout} = useContext(Authcontext)
  const navigate = useNavigate();

  const handlelogout =() => {
    try {
      logout();
      navigate("", {replace:true});

    }catch(error){
      console.log(error);
    }

  }
  return (
    <aside className="sidebar" id="sidebar">
        <div className="logo">SAS</div>
        <ul>
            <NavLink to= "/dashboard" replace><i className="fas fa-chart-line"></i> Dashboard</NavLink>
            <NavLink to = "/lesson-planning"><i className="fas fa-book"></i> Lesson Plans</NavLink>
            <NavLink to= "notes"><i className="fas fa-file-upload"></i> Notes</NavLink>
            <NavLink to ="attendance"><i className="fas fa-calendar-check"></i> Attendance</NavLink>
            <NavLink to = "scheme-of-work"><i className="fas fa-download"></i> Scheme of Work</NavLink>
            <NavLink to = 'setting'><i className="fas fa-cog"></i> Settings</NavLink>
            <button onClick={handlelogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
        </ul>
    </aside>
  )
}

export default Sidebar