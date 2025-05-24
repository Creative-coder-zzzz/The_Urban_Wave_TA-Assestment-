import React, { useState, useEffect } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';
import { useSearchParams, useLocation } from 'react-router-dom';

const Login = () => {
  const [mode, setMode] = useState('sign-in');
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const fromRedirect = searchParams.get('redirect');
    if (fromRedirect === 'signup') {
      setMode('sign-in');
    }
  }, [searchParams]);

 
  const isVerifying = location.pathname.includes('verify');

  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center text-black px-2 mt-[-90px] md:mt-0 lg:mt-0 ">
      {mode == "sign-in" ? <h1 className="text-blue-600">To view cart or access other pages you must login first</h1> : null}

      {!isVerifying && (
        <div className="mb-6flex gap-4">
          <button
            onClick={() => setMode('sign-in')}
            className={`px-4 py-2 border-b-2 ${
              mode === 'sign-in' ? 'border-black font-semibold' : 'border-transparent text-gray-500'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('sign-up')}
            className={`px-4 py-2 border-b-2 ${
              mode === 'sign-up' ? 'border-black font-semibold' : 'border-transparent text-gray-500'
            }`}
          >
            Sign Up
          </button>
        </div>
      )}

      <div className="w-full max-w-md">
        {isVerifying ? (
          <SignIn path="/login" routing="path" />
        ) : mode === 'sign-in' ? (
          <SignIn path="/login" routing="path" signUpUrl="/login" />
        ) : (
          <SignUp
            path="/login"
            routing="path"
            signInUrl="/login?redirect=signup"
            fallbackRedirectUrl="/login?redirect=signup"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
