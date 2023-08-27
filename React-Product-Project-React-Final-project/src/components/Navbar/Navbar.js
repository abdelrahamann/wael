import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link  } from 'react-router-dom'; 
import '../Navbar/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link className="nav-link " to="/products" >Products</Link></li>
        <li><Link className="nav-link" to="/login">Login</Link></li>
        <li><Link className="nav-link" to="/signup">Signup</Link></li>
        <li><Link className="nav-link" to="/aboutus">About Us</Link></li>
        <li><Link className="nav-link" to="/contactus">Contact Us</Link></li>
        <li><Link className="nav-link" to="/info" >Info</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;