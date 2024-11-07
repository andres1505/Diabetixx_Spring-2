// src/components/JoinSection.jsx
import React from 'react';
import '../styles/JoinSection.css';
import joinImage from '../assets/Habitos.png'; // Asegúrate de tener una imagen aquí

const JoinSection = () => {
  return (
    <section className="join-section">
      <div className="join-content">
        <h2>Únete a Diabetixx y Transforma tu Vida</h2>
        <p>
          Descubre herramientas y recursos diseñados para mejorar tu salud y bienestar.
        </p>
        <a href="#start" className="join-button">
          Comienza Ahora &rarr;
        </a>
      </div>
      <div className="join-image-container">
        <img src={joinImage} alt="Join Diabetixx" className="join-image" />
      </div>
    </section>
  );
};

export default JoinSection;
