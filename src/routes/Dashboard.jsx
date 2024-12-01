import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Users, Clock, MapPin, BookOpen, Loader2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Topbar from '@/components/Topbar'
export default function Dashboard() {
  const [studyGroups, setStudyGroups] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const currentUserId = "user123"

  useEffect(() => {
    fetchStudyGroups()
  }, [])

  const fetchStudyGroups = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:8000/api/study-groups')
      setStudyGroups(response.data)
      setLoading(false)
    } catch (err) {
      console.error('Error fetching study groups:', err)
      setError('Failed to load study groups. Please try again later.')
      setLoading(false)
    }
  }

  const handleJoinGroup = async (groupId) => {
    try {
      const response = await axios.post(`http://localhost:8000/api/study-groups/${groupId}/join`, {
        userId: 'TEST1234'
      })
      
      alert(response.data.message)
      await fetchStudyGroups()
    } catch (err) {
      console.error('Error joining study group:', err)
      setError(err.response?.data?.message || 'Failed to join the study group. Please try again.')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center mt-8 text-red-500">
        
        <p>{error}</p>
        <button 
          onClick={fetchStudyGroups}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div>
    <div className="">
        <Navbar/>
      <div className="flex-grow container mx-auto px-4 py-8 pb-16">
      <h1 className="text-3xl font-bold mb-8 text-center">My Study Groups</h1>
      <Topbar/>
      {studyGroups.length === 0 ? (
          <p className="text-center text-gray-500">No study groups available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyGroups.map((group) => (
              <div key={group._id} className="bg-[var(--primaryB-light)] shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{group.name}</h2>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{group.members.length} / {group.maxMembers} members</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{group.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{group.location}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-600 mb-4">
                    <BookOpen className="h-5 w-5 mr-2 mt-1" />
                    <p className="flex-1">{group.description}</p>
                  </div>
                  <button
                    onClick={() => handleJoinGroup(group._id)}
                    className={`w-full py-2 px-4 rounded font-bold ${
                      group.members.length >= group.maxMembers
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-700 text-white'
                    }`}
                    disabled={group.members.length >= group.maxMembers}
                  >
                    {group.members.length >= group.maxMembers ? 'Group Full' : 'Join Group'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="mt-8 text-center">
          
        </div>
      </div>
    </div>
    
    </div>
  )
}
