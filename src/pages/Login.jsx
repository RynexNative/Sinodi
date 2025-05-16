import React, { useState } from "react";
import "../styles/login.css";
import AuthForm from "./AuthForm";

export default function Login() {
    const [isSignup, setIsSignup] = useState(false);

    const toggleForm = () => {
        setIsSignup((prev) => !prev);
    };

    return (
        <div className="body">
            <div className={`auth-wrapper ${isSignup ? "signup-active" : ""}`}>
                <div className="toggle-area">
                    <div className="toggle-content">
                        <h2>{isSignup ? "Already have an account?" : "Don't have an account?"}</h2>
                        <button onClick={toggleForm}>{isSignup ? "Login" : "Signup"}</button>
                    </div>
                </div>

                <div className="panel login-panel">
                    {!isSignup && <AuthForm type="login" />}
                </div>

                <div className="panel signup-panel">
                    {isSignup && <AuthForm type="signup" />}
                </div>
            </div>
        </div>
    );
}
