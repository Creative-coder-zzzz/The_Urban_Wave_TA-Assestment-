// src/components/CheckAuth.jsx
import React from 'react';
import { useUser } from '@clerk/clerk-react';
import { Navigate, useLocation } from 'react-router-dom';

const CheckAuth = ({ children }) => {
  const { isSignedIn } = useUser();
  const location = useLocation();

  if (!isSignedIn) {
    return <Navigate to={`/login?redirectTo=${location.pathname}`} replace />;
  }

  return children;
};

export default CheckAuth;
