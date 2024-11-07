// src/components/WelcomeSection.jsx
import React from 'react';
import '../styles/WelcomeSection.css'; // Asegúrate de que este archivo CSS exista
import Ensalada from '../assets/ensalada.jpg'; // Asegúrate de colocar la imagen en la carpeta `src/assets`

const WelcomeSection = () => {
  return (
    <section className="welcome-section">      
      <div className="content">
        <div className="image-container">
          <img src={Ensalada} alt="Healthy Radishes" className="radish-image" />
        </div>
        <div className="text-container">
          <h1 className="title">Bienvenido a Diabetixx: <br /> Un Futuro Saludable</h1>
          <p className="subtitle">
            <span>10+</span> Expertos en Salud
          </p>
          <button className="explore-button">EXPLORA MÁS &rarr;</button>
          <p className="description">
            Descubre cómo transformar tus hábitos alimenticios para mejorar tu bienestar y controlar la diabetes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
