import React, { useState } from 'react';
import './Input.css';

const Input = ({ nombre, configuracion, value, onChange }) => {
  const [error, setError] = useState("");

  if (!configuracion) return null;

  const validar = (texto) => {

    //si el campo no es requerido y el texto está vacío, no hay error y marca valido 
    if (!configuracion.requerido && texto === "") return true;
    
    if (configuracion.requerido && texto.trim() === "") {
      setError("Error al llenar el campo");
      return false;
    }
    
    if (configuracion.pattern) {
      const regex = new RegExp(configuracion.pattern);
      if (!regex.test(texto)) {
        setError("Dato inválido");
        return false;
      }
    }
    
    setError("");
    return true;
  };


  //procesamos el cambio del input, validamos el nuevo valor y luego llamamos al
  //  onChange para actualizar el estado en el componente padre
  const manejarChange = (e) => {
    const nuevoValor = e.target.value;
    validar(nuevoValor);
    onChange(e);
  };

  return (
    <div className="input-container">
      {configuracion.label && (
        <label className="input-label">
          {configuracion.label}
        </label>
      )}
      
      <input
        name={nombre}
        type={configuracion.type || "text"}
        value={value}
        onChange={manejarChange}
        placeholder={configuracion.placeholder}
        maxLength={configuracion.maxLength}
        className={`input-campo ${error ? 'input-campo-error' : ''}`}
      />

      {error && (
        <span className="input-error-mensaje">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;