import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signin.css';
import { NavLink } from "react-router-dom";
// import MyDatePicker from './MyDatePicker';
import MyDatePicker from "./MyDatePicker.jsx";



export default function Signin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogIn = async (event) => {

    event.preventDefault();
    let response

    try {
      response = await axios.post('http://localhost:3000/login', {
        username,
        password
      })
      if(response.data.ok) {
        props.showalert("Sign-In successfully.", "success");
        console.log(response.data.message)
        navigate('/Session')
      } else {
        props.showalert("Invalid Credentials.", "danger");
        console.log(response.data.message)
      }
    } catch (error) {
      console.log(error.message, response.data.message)
    }
    // button satyam shubham
    try {
      const result = await axios.post('http://127.0.0.1:4000/main', {
        username
      })
      console.log(result)
    } catch (err) {
      console.log({ 'error': err, 'message': err.message, })
    }
  } 

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ml-52">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="src/component/img/ILl1.png" className="h-60 image-to-slide-and-bounce" alt="Logo" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" method="POST" onSubmit={ handleLogIn }>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900  text-left">
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={username}
                onChange={ (e) => {setUsername(e.target.value) }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
<div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white
                   shadow-sm hover:bg-orange-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
