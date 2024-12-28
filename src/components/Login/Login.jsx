/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { Link, useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await axios.post(
        "https://react-interview.crd4lc.easypanel.host/api/login",
        { email, password }
      )

      const { token } = response.data.data

      if (response?.data?.status === true) {
        toast.success("Login successful!")
        localStorage.setItem("authToken", token)
        navigate('/home')
      } else {
        toast.error("Login failed. Please check your data");
      }
    } catch (err) {
      if (err.response && err.response.status === 422) {
        toast.error("Request failed")
      } else {
        toast.error("Failed Login. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  };

  const handleDataLogin = (e) => {
    e.preventDefault();
    setEmail("naim.microdeft@gmail.com")
    setPassword("12345678")
  };

  return (
    <div className="px-3 md:px-5">
      <div className="lg:w-2/5 mx-auto my-16">

          <form
            className="w-full py-8 px-5 md:px-10 bg-gray-100 rounded"
            onSubmit={handleSubmit}
          >
            <h2 className="text-xl text-center text-gray-600 font-bold uppercase">
              Log in
            </h2>
            {/* <Link to='/home' >home</Link> */}
            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border text-[15px] border-gray-300 rounded focus:outline-none "
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border text-[15px] border-gray-300 rounded focus:outline-none "
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 mt-8 text-sm md:text-lg rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
              disabled={loading}
            >
              {loading ? "Logging in.." : "Login"}
            </button>
            <p className="mt-3">Are you create new account? <Link className="font-semibold text-blue-600" to='/register' >Register</Link></p>
          </form>



          <div className="w-full flex justify-center items-center mt-8 py-8 px-5 md:px-10 bg-gray-100 rounded">
            <div className="w-full text-xs md:text-[15px]">
              <p className="mb-2">Email: naim.microdeft@gmail.com </p>
              <p>Password: 12345678 </p>
            </div>

            <button
              onClick={handleDataLogin}
              className="text-white text-xs md:text-[15px] bg-blue-400 hover:bg-blue-500 duration-300 px-2 md:px-4 py-1 md:py-2 font-semibold rounded"
            >
              Login
            </button>
          </div>
   
      </div>
    </div>
  );
};

export default Login;
