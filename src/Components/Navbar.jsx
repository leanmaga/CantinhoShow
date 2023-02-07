import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    

        <ul className="navbar">
            <li className="navbar__item">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/home">Home</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/sobremi">About</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item ">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/contacto">Contact</NavLink>
            </li>
            <div className="vr"></div>
            <li className="navbar__item ">
                <NavLink className={ ({ isActive }) => `navbar__item-link ${ isActive ? 'active' : '' }`} to="/productos">Products</NavLink>
            </li>
                    
        </ul>
                
    
  )
}

export default Navbar
