import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Book, Users, Award, Edit2, Camera, MapPin, MessageSquare, Bell, Bookmark } from 'lucide-react'
import studylogos from '../assets/studylogos.png'
import profiledefault from '../assets/profiledefault.png'
import Topbar from '@/components/Topbar'
export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    username: '@alexj2023',
    major: 'Computer Science',
    year: 'Junior',
    bio: 'Passionate about algorithms and data structures. Always looking for study buddies!',
    location: 'University of Tech, Building A',
    studyGroups: 5,
    coursesEnrolled: 5,
    courses1: "Computer Organization and Assembly",
    courses2: "General Electrical Engineering",
    courses3: "Human Computer Interaction",
    courses4: "Object Oriented Programming",
    courses5: "organization Management",
    achievementPoints: 1250
  })

  return (
      <div className="max-w-4xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
      <Navbar/>
      <Topbar/>
        <div className="bg-white shadow rounded-largex overflow-hidden"> 
          {}
          <div className=" h-[250px] bg-gradient-to-r from-blue-500 to-teal-500 relative">
          <div class="flex justify-center items-center">
          <img 
                  className=" flex mt-6 h-[200px] w-[200px] rounded-full ring-4 ring-white"
                  src={profiledefault}
                  alt="Profile"
                />
               
            <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md">
              <Camera className="h-5 w-5 text-gray-600" />
              <span className="sr-only">Change cover photo</span>
            </button>
          </div>
          </div>
          {}
          <div className="">
            <div className="flex items-end">
              <div className="relative">
              </div>
              <div className="ml-4 sm:ml-6 flex-1">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">{user.name}</h1>
                <p className="text-sm text-gray-500">{user.username}</p>
                <p className="mt-1 text-sm text-gray-500">{user.major} • {user.year}</p>
              </div>
              <div className="flex space-x-3">
                
              </div>
            </div>
            <div className="mt-4 mr-8 ml-8 text-sm text-gray-700">{user.bio}</div>
            <div className="mt-3 mb-2 flex items-center text-sm text-gray-500">
              <MapPin className=" ml-11 flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
              {user.location}
            </div>
          </div>

          {}
          <div className="border-t border-gray-200 px-4 py-5 sm:p-2">
          <dl className="divide-y divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-1 gap-5 ">
                <dt className="flex mt-3 mr-8 ml-8 text-lg font-medium text-gray-500">Study Groups {user.studyGroups}</dt>
              </div>
              
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-1 gap-5 ">
                <dt className="flex mt-3 mr-8 ml-8 text-lg font-medium text-gray-500">enrolled Courses</dt>
                <dd className="flex mt-3 mr-8 ml-8 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.courses1}</dd>
                <dd className="flex mt-3 mr-8 ml-8 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.courses2}</dd>
                <dd className="flex mt-3 mr-8 ml-8 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.courses3}</dd>
                <dd className="flex mt-3 mr-8 ml-8 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.courses4}</dd>
                <dd className="flex mt-3 mr-8 ml-8 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{user.courses5}</dd>
              </div>        
            </dl>
          </div>       
        </div>
      </div>
  )
}