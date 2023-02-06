import React from 'react';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <>
      <NavLink to="/details" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><h1>Pakistan</h1></NavLink>
    </>
  );
}

export default Hero;
