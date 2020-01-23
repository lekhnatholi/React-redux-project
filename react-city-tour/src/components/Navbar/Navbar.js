import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
export default function Navbar(){
     return <nav className="navbar">
         <img src={logo} alt="logo not found" />
         <ul className="nav-links">
            <li>
                <a className="nav-link">Home</a>
            </li>
            <li>
                <a className="nav-link">About</a>
            </li>
            <li>
                <a className="nav-link active" >Tour</a>
            </li>
         </ul>
     </nav>
 }
