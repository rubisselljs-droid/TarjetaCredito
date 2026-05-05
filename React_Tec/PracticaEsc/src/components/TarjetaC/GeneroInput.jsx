import React, { useState } from 'react';
import './Genero.css';

export default function GeneroInput({ label, value, onChange }) {
  const [fueTocado, setFueTocado] = useState(false);

  const tieneError = fueTocado && !value;

  const opciones = [
    { id: 'mujer', texto: 'Mujer' },
    { id: 'hombre', texto: 'Hombre' },
    { id: 'otro', texto: 'Prefiero no decirlo' }
  ];

  return (
    <div className="gender-container">
      <label className="gender-title">{label}</label>
      
      <div className="radio-list">
        {opciones.map((op) => (
          <label key={op.id} className="radio-option">
            <input
              type="radio"
              name="genero" // Importante: mismo name para que sean excluyentes
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

      {tieneError && (
        <span className="gender-error-msg">
          ⚠ Seleccionar un género es obligatorio
        </span>
      )}
    </div>
  );
}