import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import { FaUserFriends } from "react-icons/fa";

import { IoMdAddCircleOutline } from "react-icons/io";

const Topbar = () => {
  return (
    
    <div className= 'flex  justify-between items-center bg-white p-5 fixed top-0 left-0 right-0 px-4 py-2'>
      <div className='flex items-center'>
       
        <h1 className= 'text-xl font-bold text-grey-700'>STUDY APP</h1>
      </div>
      <div className= 'flex'>
        <div className= 'hidden md:flex items-center px-6'>
        </div>
        <button>
        <Link to = "/reactproject/creategroup" className= 'flex items-center px-'>
        <IoMdAddCircleOutline size={30} className='text-[var(--primaryB)] mr-2'/>
          <p className= 'text-m text-grey-700'>create group</p>
          </Link>
        </button>
      </div>
  </div>
  )
}

export default Topbar