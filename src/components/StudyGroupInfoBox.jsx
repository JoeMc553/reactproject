import React from 'react'
import { Users, Clock, MapPin, BookOpen } from 'lucide-react'

export default function StudyGroupInfoBox({ group }) {
  //pass in the group data as a prop
  // default group object
  const defaultGroup = {
    name: "Calculus 3",
    members: 8,
    maxmembers: 8,
    time: "Tuesday 4:00 PM - 6:00 PM",
    location: "Math Building, Room 301",
    description: "going over the exam 2 practice problems and discusing the homework. bring a laptop and note takeing suplies."
  }

  const { name, members, maxmembers, time, location, description } = group || defaultGroup

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm ">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="h-5 w-5 mr-2" />
          <span>{members}/{maxmembers} members</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Clock className="h-5 w-5 mr-2" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{location}</span>
        </div>
        <div className="flex items-start text-gray-600">
          <BookOpen className="h-5 w-5 mr-2 mt-1" />
          <p className="flex-1">{description}</p>
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