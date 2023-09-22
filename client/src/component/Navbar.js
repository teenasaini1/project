import { Link } from 'react-router-dom'
import React from 'react'
import logo from './image/logo.png'

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-sm offset-md-1'>
        <div className='container-fluid'>
          <img src={logo} className='logo-image' alt='logo'></img>
          <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbar'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="about">About</Link>
              </li>
              <li className='nav-item'>
              <Link className='nav-link' to="service">Our Services</Link>
              </li>
              </ul>
              <h1>Cake Town</h1>
              {/* <li className='nav-item'>
                <Link className='nav-link' to=""><h1>Cake Town</h1></Link>
              </li> */}
              <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link' to="menu">Menu & Price</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="gallery">Gallery</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to="contact">Contact</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
