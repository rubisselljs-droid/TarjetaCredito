import React, { useState } from 'react';
import './Genero.css';

export default function GeneroInput({ label, value, onChange }) {
  const [fueTocado, setFueTocado] = useState(false);



  const opciones = [
    { id: 'mujer', texto: 'Femenino' },
    { id: 'hombre', texto: 'Masculino' },
    { id: 'otro', texto: '39 Tipos de Gays' }
  ];

  return (
    <div className="gender-container">
      <label className="gender-title">{label}</label>
      
      <div className="radio-list">
        {opciones.map((op) => (
          <label key={op.id} className="radio-option">
            <input
              type="radio"
              name="genero" 
              value={op.id}
              checked={value === op.id}
              onChange={(e) => {
                setFueTocado(true);
                onChange(e);
              }}
            />
            <span className="custom-radio"></span>
            <span className="radio-text">{op.texto}</span>
          </label>
        ))}
      </div>

     
    </div>
  );
}