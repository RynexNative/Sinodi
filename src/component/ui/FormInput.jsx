import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function FormInput({name, lable, placeholder, type, value}){
    return <input 
    name={name}
    type={type}
    placeholder={placeholder}
    value={value}

    />
}