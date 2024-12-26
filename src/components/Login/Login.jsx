/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'



const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const [data, setData] = useState({})

  console.log({ data })
  useEffect(() => {
    if (data?.data?.status_message) {
      toast.success('Success! Login successful.')
    }
  }, [data])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setEmail('')
    setPassword('')

    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/login', { email, password })

      setData(response)
      const { token } = response.data.data
      // console.log({response})
      localStorage.setItem('authToken', token)
    } catch (err) {
      if (err?.message) {
        toast.error('Request failed with status code 422')
      }
    } finally {
      setLoading(false)
    }

  }




  const handleDataLogin = (e) => {
    e.preventDefault()
    setEmail('naim.microdeft@gmail.com')
    setPassword('12345678')
  }


  return (
    <div>
      <div className="w-full flex justify-center items-center bg-gray-100 p-4 mt-20">


        <form className='w-full  lg:w-1/3' onSubmit={handleSubmit} >

          <h2 className='text-2xl text-center text-gray-800 font-bold '>Login</h2>

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
            {loading ? 'Logging in..' : 'Login'}
          </button>

        </form>

      </div>


      <div className='w-full flex justify-center items-center mt-8'>
        <div className='w-full  lg:w-1/4'>
          <p>Email: naim.microdeft@gmail.com </p>
          <p>Password: 12345678 </p>
        </div>

        <button onClick={handleDataLogin} className='text-white bg-blue-400 px-4 py-1 font-semibold rounded' >Login</button>
      </div>


    </div>
  )
}

export default Login