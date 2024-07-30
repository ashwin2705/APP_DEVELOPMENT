import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">BOATHOUSE BOOKING</Link>
    </div>
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/Login">Logout</Link>
    </div>
  </nav>
  )
}
