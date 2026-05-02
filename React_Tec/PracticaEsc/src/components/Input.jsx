import React, { useState } from 'react';

const CustomInput = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  placeholder, 
  required = false,
  errorMessage = "Este campo es obligatorio" 
}) => {
  const [isTouched, setIsTouched] = useState(false);

 
  const showError = required && isTouched && value.trim() === "";

  return (
    <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
      {label && <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>{label}</label>}
      
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={() => setIsTouched(true)} 
        
        placeholder={placeholder}
        style={{
          padding: '10px',
          borderRadius: '8px',
          border: `2px solid ${showError ? '#e74c3c' : '#ccc'}`,
          outline: 'none',
          transition: '0.3s'
        }}
      />

     
      {showError && (
        <span style={{ color: '#e74c3c', fontSize: '12px', marginTop: '5px' }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default CustomInput;