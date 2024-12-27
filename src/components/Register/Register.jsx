/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'



const Register = () => {
  const [name, setName ] = useState("")  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const [data, setData] = useState({})
  const navigate = useNavigate()

  console.log("data::", data)
  console.log('message', data?.data?.status_message)
 
  useEffect(() => {
    if (data?.data?.data.status_message) {
      toast.success('Success! Register successful.')
    }
  }, [data])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setName('')
    setEmail('')
    setPassword('')
    console.log({name, email, password})

    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/register', { name, email, password },
        {
            headers : {
                Accept: 'application/json'
            }
        }
      )

      setData(response)
      const { token } = response.data.data
      localStorage.setItem('authToken', token)
      navigate('/home')
    } catch (err) {
      if (err?.message) {
        toast.error('Request failed with status code 422')
      }
    } finally {
      setLoading(false)
    }

  }




  


  return (
    <div>
      <div className="w-full flex justify-center items-center bg-gray-100 p-4 mt-20">
        <form className='w-full  lg:w-1/3' onSubmit={handleSubmit} >
          <h2 className='text-2xl text-center text-gray-800 font-bold '>Register</h2>
          <Link to='/home' >home</Link>

          <div className='mt-6'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1' >Name</label>
            <input
              type="text"
              id='name'
              value={name}
              onChange={(e) =>setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type='submit'
            className='w-full bg-blue-600 text-white font-medium py-2 mt-8 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
            disabled={loading}
          >
            {loading ? 'Register in..' : 'Register'}
          </button>

        </form>
      </div>

    </div>
  )
}

export default Register