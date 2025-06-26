import React, { useContext, useState } from "react";
import { Authcontext } from "../context/authContext";
import { replace, useNavigate} from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google';
import axiosAuthApi from "../utils/http";



const AuthForm = ({ type }) => {

  const {login} = useContext(Authcontext)
  const navigate = useNavigate()

  const [isAuth , setisAuth] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const google = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axiosAuthApi.post(
          "http://localhost:8000/api/auth/google/",
          { access_token: tokenResponse.access_token },  // <-- CHANGE HERE
          {
            withCredentials: true,  // ruhusu cookie kutoka backend
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
  
        // console.log("✅ User Logged In:", res.user);
        // console.log(res)
        if (res) {
            const auth = res.isAuthenticated

            if(auth)
            navigate('/dashboard', replace)
          }
        return res;

  
      } catch (err) {
        console.error("❌ Backend Error", err.response?.data || err.message);
      }
    },
    onError: () => {
      console.log("❌ Google Login Failed");
    },
    flow: "implicit",  // hutumika kwa kutoa access_token
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${type.toUpperCase()} DATA:`, formData);
    // Hapa unaweza kutuma data kwenda backend

    if(type === 'login'){
      try {
        const response = await login( formData.email , formData.password)
        if(response){
          // console.log(response.isAuthenticated)
          setisAuth(response.isAuthenticated)
          const auth = response.isAuthenticated
          if(auth){
            console.log('acha haraka.....')
            navigate('/dashboard', replace);
          }
        }
      }catch(error) {
        console.log(error)
      }
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>{type === "login" ? "Login" : "Signup"}</h2>

      {type === "signup" && (
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      )}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">{type === "login" ? "Login" : "Signup"}</button>

      <div className="social-login">
        <span>Or {type} with</span>
        <div className="social-buttons">
          <button onClick={()=>google()} type="button">
            <img src="https://img.icons8.com/color/48/google-logo.png" />
            Google
          </button>
          <button type="button">
            <img src="https://img.icons8.com/fluency/48/facebook-new.png" />
            Facebook
          </button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
