/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router'



const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const [data, setData] = useState({})




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setName('')
    setEmail('')
    setPassword('')
    console.log({ name, email, password })

    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/register', { name, email, password },
        {
          headers: {
            Accept: 'application/json'
          }
        }
      )

      setData(response)
      const { token } = response.data.data
      localStorage.setItem('authToken', token)
      if (response?.data?.status === true) {
        toast.success('Register is successfull.')
      }
    } catch (err) {
      if (err?.message) {
        toast.error('Register failed. Please check your data')
      }
    } finally {
      setLoading(false)
    }

  }







  return (
    <div className="px-3 md:px-5">
      <div className="lg:w-2/5 mx-auto my-16">
        <form className="w-full py-8 px-5 md:px-10 bg-gray-100 rounded" onSubmit={handleSubmit} >
          <h2 className='text-xl text-center text-gray-600 font-bold uppercase'>Register</h2>


          <div className='mt-6'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1' >Name</label>
            <input
              type="text"
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 text-[15px] border border-gray-300 rounded  focus:outline-none "
              placeholder="Enter your name"
              required
            />
          </div>


          <div className='mt-6'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1' >Email</label>
            <input
              type="email"
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg focus:outline-none "
              placeholder="Enter your email"
              required
            />
          </div>

          <div className='mt-3'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1' >password</label>
            <input
              type="password"
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 text-[15px] border border-gray-300 rounded-lg focus:outline-none "
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white font-medium py-2 text-sm md:text-lg mt-8 rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
            disabled={loading}
          >
            {loading ? 'Register in..' : 'Register'}
          </button>
          <p className="mt-3">Already have an account? please <Link className="font-semibold text-blue-600" to='/' >Login</Link></p>
        </form>
      </div>

    </div>
  )
}

export default Register;