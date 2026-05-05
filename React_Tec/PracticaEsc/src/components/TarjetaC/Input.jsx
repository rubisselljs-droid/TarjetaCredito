import React, { useState } from 'react';
import './Input.css'; // Importamos los estilos

const Input = ({ nombre, configuracion, value, onChange }) => {
  const [esTocado, setEsTocado] = useState(false);

  if (!configuracion) return null;

  const tieneError = configuracion.requerido && esTocado && String(value).trim() === "";

  return (
    <div className="input-group">
      {configuracion.label && (
        <label className={`input-label ${tieneError ? 'label-error' : ''}`}>
          {configuracion.label}
        </label>
      )}
      
      <input
        name={nombre}
        type={configuracion.type || "text"}
        value={value}
        onChange={onChange}
        placeholder={configuracion.placeholder}
        maxLength={configuracion.maxLength}
        pattern={configuracion.pattern}
        onBlur={() => setEsTocado(true)} 
        // Aplicamos clases dinámicas según el estado
        className={`input-field ${tieneError ? 'input-error' : ''}`}
      />

      {tieneError && (
        <span className="error-message">
          ⚠ Este campo es obligatorio
        </span>
      )}
    </div>
  );
};

export default Input;