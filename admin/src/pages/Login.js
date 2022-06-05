import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from '../assets/axiosApi'


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLogin = async (e)=>{
        try {
          e.preventDefault()
        const data = { email, password}
        const res = await api.post('/auth/login', data)
        localStorage.setItem('user', JSON.stringify(res.data))
        } catch (error) {
          console.log('error', error)
        }
        
      }

    return (
        <>
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold sm:text-7xl uppercase text-slate-800">Login here!</h1>
            <p className="mt-6 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form action="" className="max-w-md mx-auto mt-8 mb-0 space-y-4" onSubmit={onLogin}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  onChange={(e)=> setEmail(e.target.value)}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full p-4 pr-12 text-sm border border-gray-300 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  onChange={(e)=> setPassword(e.target.value)}
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Already have account ? <br />
                <Link to="/register" className="underline text-teal-500" href="">
                  Sign Up
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block px-8 py-3 ml-3 uppercase font-medium text-white bg-teal-700 rounded-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="/image.jpg"
            alt=""
          />
        </div>
      </section>
        </>
    );
}

export default Login;
