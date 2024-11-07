// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import WelcomeSection from './componentes/WelcomeSection';
import JoinSection from './componentes/JoinSection';
import PiePagina from './componentes/PiePagina';
import Registro from './componentes/Registro';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Eliminamos el contenedor .content */}
        <Routes>
          <Route path="/" element={
            <>
              <WelcomeSection />
              <JoinSection />
            </>
          } />
          <Route path="/registro" element={<Registro />} />
        </Routes>
        <PiePagina /> {/* Footer permanece al final de la estructura */}
      </div>
    </Router>
  );
}

export default App;



