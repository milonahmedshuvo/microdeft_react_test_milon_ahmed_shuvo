/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'




const CreateData = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [badge_text, setBadge_text] = useState("")
  const [badge_color, setBadge_color] = useState("")
  const [instructor_name, setInstructor_name] = useState("")
  const [loading, setLoading] = useState("")
  const [data, setData] = useState({})



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const token = localStorage.getItem('authToken')

    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/course', { title, description, badge_text, badge_color, instructor_name },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      )

      setData(response)




      toast.success('Create Successful.');
    } catch (err) {
      if (err.response?.status === 422) {
        toast.error('Invalid credentials login.');
      } else {
        toast.error('An error login. Please try again.');
      }
    } finally {
      setLoading(false)
      setTitle('')
      setDescription('')
      setBadge_text('')
      setBadge_color('')
      setInstructor_name('')
    }

  }







  return (
    <div>

      <p className='text-center text-[#4F5465] font-serif text-xl mt-10' >Please Add Your Data</p>
      <h2 className='text-center text-[36px] text-[#1D1D1F] font-[700]  '>You add to building data for business begins here.</h2>
      <p className='text-center text-[20px] text-[#4F5465] font-[500]'>You have built your business week by week, year by year.</p>
      <p className='text-center text-[20px] text-[#4F5465] font-[500]'>Its time for a marketing and sales strategy that works as hard as you do.</p>

      <div className="w-full flex justify-center items-center p-4">
        <form className='w-full lg:w-5/6' onSubmit={handleSubmit} >
          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='mt-6 w-1/2'>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1' >Title</label>
              <input
                type="text"
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 text-[15px] border border-gray-400 rounded focus:outline-none "
                placeholder="Enter your title"
                required
              />
            </div>


            <div className='mt-6 w-1/2'>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1' >Instructor_name</label>
              <input
                type="text"
                id='instructor_name'
                value={instructor_name}
                onChange={(e) => setInstructor_name(e.target.value)}
                className="w-full px-4 py-3 text-[15px] border border-gray-300 rounded focus:outline-none "
                placeholder="Enter your instructor_name"
                required
              />
            </div>
          </div>



          <div className='flex flex-col md:flex-row justify-between gap-4'>
            <div className='mt-6 w-1/2'>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1' >Dadge_text</label>
              <input
                type="text"
                id='badge_text'
                value={badge_text}
                onChange={(e) => setBadge_text(e.target.value)}
                className="w-full px-4 py-3 text-[15px] border border-gray-400 rounded focus:outline-none "
                placeholder="Enter your badge_text"
                required
              />
            </div>


            <div className='mt-6 w-1/2'>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1' >Dadge_color</label>
              <input
                type="text"
                id='badge_color'
                value={badge_color}
                onChange={(e) => setBadge_color(e.target.value)}
                className="w-full px-4 py-3 text-[15px] border border-gray-400 rounded-lg focus:outline-none "
                placeholder="Enter your badge_color"
                required
              />
            </div>
          </div>


          {/* discription */}
          <div className='mt-6'>
            <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-1' >Description</label>
            <textarea
              type="text"
              id='description'
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 text-[15px] border border-gray-400 rounded focus:outline-none "
              placeholder="Enter your description"
              required
            ></textarea>
          </div>




          <button
            type='submit'
            className='w-full bg-blue-600 text-white font-medium py-2 mt-8 rounded hover:bg-blue-700 focus:ring-4 focus:ring-blue-300'
            disabled={loading}
          >
            {loading ? 'Creating in..' : 'Submit'}
          </button>
        </form>
      </div>


    </div>
  )
}

export default CreateData;