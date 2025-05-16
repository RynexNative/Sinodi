// src/hooks/useAuthStatus.js
import { useState } from "react";

let externalSetters = [];

export const useAuthStatus = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register setters globally
  externalSetters = [setIsAuthenticated, setLoading];

  return {
    isAuthenticated,
    loading,
    setIsAuthenticated,
    setLoading,
  };
};

// Function ya ku-reset state kutoka kwingine (mf. axiosInstance)
export const resetAuthStatus = () => {
  if (externalSetters.length === 2) {
    const [setIsAuthenticated, setLoading] = externalSetters;
    setIsAuthenticated(false);
    setLoading(false);
  }
};
