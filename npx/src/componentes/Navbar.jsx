// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo2.png'; // Asegúrate de que el logo esté en esta ruta

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Diabetixx Logo" />
        <span>Diabetixx</span>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="#module">Módulo Educativo</Link></li>
        <li><Link to="#forum">Foro</Link></li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/registro" className="navbar-button">Regístrate</Link>
        <Link to="#profile" className="navbar-button profile-button">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;
