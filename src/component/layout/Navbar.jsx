import { useState, useEffect, useContext } from "react";
import "../../styles/layoutstyle/Navbar.css";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useUser } from "../../context/userContext";

function Navbar() {
    const [theme, setTheme] = useState("light");
    const {userProfile} = useUser();

    useEffect(
        () => {
            document.body.className = theme;
        },
    [theme]);
    const handleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    const isAuthenticated = true;
    const userimage = userProfile?.profile?.profile_picture

    // console.log(userimage)

    // console.log(user);


    if(isAuthenticated){
        return (
            <div className="navbar" id="navbar">
        <div className="profile">
          <img src={userimage} alt="Profile Picture" />
          <span>Welcome, <strong>{userProfile?.first_name}</strong></span>
        </div>
        <div className="icons">
          <i className="fas fa-bell"></i>
          <i className="fas fa-sun theme-toggle" id="themeToggle" onClick={handleTheme}></i>
        </div>
      </div>
        )

    } else {

    }
}

export default Navbar;