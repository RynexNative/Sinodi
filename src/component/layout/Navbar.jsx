import { useState, useEffect, useContext } from "react";
import "../../styles/layoutstyle/Navbar.css";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useOutletContext } from "react-router-dom";
// import { useUser } from "../../context/userContext";


function Navbar(profile) {
  const [theme, setTheme] = useState("light");
  const context = useOutletContext();

  const profileinfo = profile?.profile
  // //console.log(profile?.profile)

  useEffect(
    () => {
      document.body.className = theme;
    },
    [theme]);
  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  const isAuthenticated = true;

  if (isAuthenticated) {
    return (
      <div className="navbar" id="navbar">
        <div className="logo">YAMS</div>
        <div className="left-info">
          
          <div className="icons">
            <i className="fas fa-bell"></i>
            <i className="fas fa-sun theme-toggle" id="themeToggle" onClick={handleTheme}></i>
          </div>

          <div className="profile">
            <img src={profileinfo?.profile?.profile_picture} alt="Profile Picture" />
            <span><strong>{profileinfo?.first_name}</strong></span>
          </div>

        </div>
      </div>
    )

  } else {

  }
}

export default Navbar;