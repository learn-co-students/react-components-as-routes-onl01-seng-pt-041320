import React from 'react'
import { NavLink } from 'react-router-dom';


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'MediumPurple',
    textDecoration: 'none',
    color: 'white',
  }
  
  const Navbar = () => 
    <div>
      <NavLink to="/" exact style={link} activeStyle={{ background: 'LightSkyBlue' }}>Home</NavLink> 
  
      <NavLink to="/about" exact style={link} activeStyle={{ background: 'LightSkyBlue'}}>About</NavLink>
      
      <NavLink to="/login" exact style={link} activeStyle={{ background: 'LightSkyBlue'}}>Login</NavLink>
    </div>;

    export default Navbar;