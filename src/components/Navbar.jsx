import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router-dom'
/*isActive ka naam change nahi kar sakti — woh React Router ka built-in prop hai.
Sirf CSS class ka naam tum apni marzi ka rakh sakti ho, isActive fix hota hai.*/
/*NavLink tag ke provide ke gai class ka naam "active" hota h agr is ko kisi aik menu item main dy den to pakion k liy react router automatically is ko active kar deta ha
  lkn agr is k ilawaa koi naam jesa k "active-link" use kren to wo automatically baki sab k liy active nai ho ge humen sepratly sab menu items par apply karni pary ge*/
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
        
            <NavLink to="/" className={({isActive})=>isActive ? "active-link" :""}>
            
               Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/about"  className={({isActive})=>isActive ? "active" :""}>
             About
            </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard">
            DashBoard
                
            </NavLink>
        </li>
        <li>
            <NavLink to="/contact" >
            Contact 
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
