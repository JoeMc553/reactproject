import Navbar from '../components/Navbar' 
import React, { useState } from 'react'
import { Users, Clock, MapPin, BookOpen } from 'lucide-react'

function StudyGroupInfoBox({ group }) {
  const { name, members, time, location, description } = group

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg mx-auto mb-12">
      <Navbar/>
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name || 'Group Name'}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="h-5 w-5 mr-2" />
          <span>{members || 0} members</span>
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
      <div className="px-6 py-4 bg-gray-100">
        <button className="bg-[var(--primaryB)] hover:bg-[var(--primaryB-darker)] text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Join Group
        </button>
      </div>
    </div>
  )
}

export default function CreateStudyGroup() {
  const [groupData, setGroupData] = useState({
    name: '',
    members: '',
    time: '',
    location: '',
    description: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setGroupData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Submitting group data:', groupData)
    // You could also add validation here before submitting
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Create a New Study Group</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Group Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="members">
                  Number of Members
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="members"
                  type="number"
                  placeholder="Enter number of members"
                  name="members"
                  value={groupData.members}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                  Meeting Time
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Enter group description"
                  name="description"
                  value={groupData.description}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-[var(--primaryB)] hover:bg-[var(--primaryB-darker)] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create Group
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