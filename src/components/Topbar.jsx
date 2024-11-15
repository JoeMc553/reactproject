import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'

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
          <p>9-8pm</p>
        </div>
        <div className= 'hidden md:flex items-center px-6'>
          <AiFillPhone size={30} className='text-[var(--primaryB)] mr-2'/>
          <p className= 'text-sm text-grey-700'>805 233-2322</p>
        </div>
        <button>
          Get a free quote
        </button>
      </div>
  </div>
  )
}

export default Topbar