import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import { HiHome } from "react-icons/hi2"
import { IoSearchOutline, IoPerson  } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";

const Topbar = () => {
  return (
    <div className= 'flex  justify-between items-center bg-white p-5 fixed top-0 left-0 right-0 px-4 py-2'>
      <div className='flex items-center'>
        <BsChatSquareDots size={30} className='text-[var(--primaryB)] mr-2'/>
        <h1 className= 'text-xl font-bold text-grey-700'>STUDY APP</h1>
      </div>
      <div className= 'flex'>
        <div className= 'hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={30} className='text-[var(--primaryB)] mr-2'/>
          <p>next studygroup at 4:30</p>
        </div>
        <button className= 'hidden md:flex items-center px-6'>
        <FaUserFriends  size={30} className='text-[var(--primaryB)] mr-2'/>
          findgroup
        </button>
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