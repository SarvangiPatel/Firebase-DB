import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo...</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/signin" className="nav-link">SignIn</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
