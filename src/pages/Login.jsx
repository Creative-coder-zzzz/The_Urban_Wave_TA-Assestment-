import React, { useState } from 'react';
import { SignIn, SignUp } from '@clerk/clerk-react';

const Login = () => {
  const [mode, setMode] = useState('sign-in');

  return (
    <div className="flex flex-col items-center w-full min-h-screen justify-center  text-black px-4">
        <h1 className='text-blue-600'>To view cart or access other pages you must login first</h1>
      <div className="mb-6 flex gap-4">
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

      <div className="w-full max-w-md">
        {mode === 'sign-in' ? (
          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/login" // To stay on the same page if user switches
          />
        ) : (
          <SignUp
            path="/login"
            routing="path"
            signInUrl="/login"
          />
        )}
      </div>
    </div>
  );
};

export default Login;
