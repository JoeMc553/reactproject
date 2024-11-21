import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import { HiHome } from "react-icons/hi2"
import { IoSearchOutline, IoPerson  } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className= ' flex space-x-9 items-center justify-center bg-gray-200 p-11 fixed bottom-0 left-0 right-0 "'>
        <Link to = "/reactproject/dashboard"><HiHome size={30} className='-mt-5  text-[var(--primaryB-darker)] mr-2'/></Link>
        <Link to = "/reactproject/findgroup"><FiSearch  size={30} className='-mt-5 text-[var(--primaryB-darker)] mr-2'/></Link>
        <Link to = "/reactproject/friends"><FaUserFriends size={30} className='-mt-5 text-[var(--primaryB-darker)] mr-2'/></Link>
        <Link to = "/reactproject/resources"><GrResources size={30}className='-mt-5 text-[var(--primaryB-darker)] mr-2'/></Link>
        <Link to = "/reactproject/profile"><IoPerson size={28} className='-mt-5 text-[var(--primaryB-darker)] mr-2'/></Link>
    </div>
  )
}

export default Navbar