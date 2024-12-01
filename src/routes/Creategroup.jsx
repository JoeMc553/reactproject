import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Users, Clock, MapPin, BookOpen } from 'lucide-react'

function StudyGroupInfoBox({ group }) {
  const { name, maxMembers, time, location, description,  } = group

  return (
    <div className="bg-[var(--primaryB-light)] shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name || 'Group Name'}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="h-5 w-5 mr-2" />
          <span>0 / {maxMembers || 0} members</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-5 w-5 mr-2" />
          <span>{time || 'Meeting Time'}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{location || 'Meeting Location'}</span>
        </div>
        <div className="flex items-start text-gray-600">
          <BookOpen className="h-5 w-5 mr-2 mt-1" />
          <p className="flex-1">{description || 'Group Description'}</p>
        </div>
      </div>
    </div>
  )
}
export default function CreateStudyGroup() {
  const [groupData, setGroupData] = useState({
    name: '',
    maxMembers: '',
    time: '',
    location: '',
    description: ''
  })
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGroupData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await axios.post('http://localhost:8000/api/study-groups', groupData)
      console.log('Study group created:', response.data)
       navigate('/reactproject/dashboard')
    } catch (err) {
      console.error('Error creating study group:', err.response ? err.response.data : err.message)
      setError(err.response?.data?.message || 'Error creating study group. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

 
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <Navbar/>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create a New Study Group</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="bg-[var(--primaryB-light)] shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
              {error && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Group Name
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter group name"
                  name="name"
                  value={groupData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="maxMembers">
                  Maximum Number of Members
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="maxMembers"
                  type="number"
                  placeholder="Enter maximum number of members"
                  name="maxMembers"
                  value={groupData.maxMembers}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                  Meeting Time
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="text"
                  placeholder="Enter meeting time"
                  name="time"
                  value={groupData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Meeting Location
                </label>
                <input
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Enter meeting location"
                  name="location"
                  value={groupData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Group Description
                </label>
                <textarea
                  className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Enter group description"
                  name="description"
                  value={groupData.description}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-[var(--primaryB)] text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Group'}
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview</h2>
            <StudyGroupInfoBox group={groupData} />
          </div>
        </div>
      </div>
    </div>
  )
}