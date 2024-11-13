import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to = "/reactproject/">Home</Link>
        <Link to = "/dashboard">Dashboard</Link>
        <Link to = "/contact">Contact</Link>
        <Link to = "/signup">Signup</Link>
    </div>
  )
}

export default Navbar