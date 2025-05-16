import { useContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import {Authcontext} from "../context/authContext";
import axiosAuthApi from "./http";
import { useAuthStatus } from "./AuthBus"


const ProtectedRoute = () => {
    // const { isAuthenticated } = useContext(Authcontext);
    const {
        isAuthenticated,
        loading,
        setIsAuthenticated,
        setLoading,
      } = useAuthStatus();

    const CheckAuth = async () => {
        try {
            setLoading(true); // Start loading
    
            const response = await axiosAuthApi.post("/auth/check-auth/");
            console.log(response)
            const authStatus = response?.isAuthenticated;
    
            setIsAuthenticated(!!authStatus);
            // setAuth(!!authStatus);
        } catch (error) {
            setIsAuthenticated(false);
            // setAuth(false);
            setLoading(false)
        } finally {
            setLoading(false); // End loading
        }
    };

    useEffect(() => {
        CheckAuth();
    }, []);

    if (loading) {
        // You can return a spinner or loader here
        return <div>Checking authentication...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="" replace />;
    }

    return <Outlet />;
};


export default ProtectedRoute;