import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div class="card text-center">
  
  <div class="card-body bg-dark text-light py-4">
    <h5 class="card-title">Made with Love</h5>
    <p class="card-text">By KALAIVANAN  </p>
  
  <NavLink to="/"><button className='btn btn-primary'>Home Page</button></NavLink>

  </div>
</div>
  )
}

export default Footer;
