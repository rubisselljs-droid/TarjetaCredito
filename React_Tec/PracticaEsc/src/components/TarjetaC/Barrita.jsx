import React, { useState } from 'react';

const Barrita = ({ value, onChange }) => {
  // Función para obtener el nivel según el valor
  const obtenerNivel = (valor) => {
    if (valor >= 500 && valor < 25000) return "Estándar";
    if (valor >= 25000 && valor < 200000) return "Gold  ";
  if (valor >= 200000) return "ILIMITADA";
    return "Estándar";
  };

  const handleChange = (e) => {
    const nuevoValor = Number(e.target.value);
    onChange(nuevoValor);
  };

  return (
    <div>
      <input
        type="range"
        min="500"
        max="200000"
        step="100"
        value={value}
        onChange={handleChange}
        style={{ width: '100%' }}
      />
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        marginTop: '8px',
        fontSize: '14px'
      }}>
        <span>$500</span>
        
        <span>$200,000</span>
      </div>
      <div style={{ 
        textAlign: 'center', 
        marginTop: '8px',
        fontWeight: 'bold'
      }}>
        ${value.toLocaleString()} - {obtenerNivel(value)}
      </div>
    </div>
  );
};

export default Barrita;