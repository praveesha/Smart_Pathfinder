import React from 'react';
import { Link } from 'react-router-dom';
import './TitleBar.css';
import logo from '../Assests/logo.png'; // Corrected the spelling of "Assets"

const Titlebar = () => {
  return (
    <nav className='container'>
      <Link to="/">
        <img src={logo} alt="UoM Logo" />
      </Link>
      <ul>
        <li>
          <Link to="/adminLogin">
            <button className='btn'>Admin Login</button>
          </Link>
        </li>
        <li>
          <Link to="/loginRegister">
            <button className='btn'>Admin Sign in</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Titlebar;
