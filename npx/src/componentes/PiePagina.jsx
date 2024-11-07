// src/components/PiePagina.jsx
import React from 'react';
import '../styles/PiePagina.css';

const PiePagina = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Diabetixx. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#features">Nuestras Funcionalidades</a></li>
          <li><a href="#privacy">Política de Privacidad</a></li>
          <li><a href="#terms">Términos y Condiciones</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <div className="footer-social">
          <a href="#twitter" className="social-icon">🐦</a>
          <a href="#facebook" className="social-icon">📘</a>
          <a href="#instagram" className="social-icon">📷</a>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
