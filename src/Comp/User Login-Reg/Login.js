import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
   
    console.log(`Email: ${email}, Password: ${password}`);
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg bg-gray-100 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <Link to={'/Homepage'}>
        <button
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        </Link>
        <p className="mt-4 text-gray-600 text-sm text-center">
          Don't have an account?{' '}
           <Link to={'/Reg'}>
          <a href="/Registeruser" className="text-blue-500 hover:underline ">
            Register here
          </a>
          </Link>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
