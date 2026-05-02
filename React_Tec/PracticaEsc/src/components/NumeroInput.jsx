import React, { useState } from "react";

const NumeroInput = ({
  label,
  value,
  onChange,
  placeholder = "Ingresa 10 dígitos",
  required = true,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    let val = e.target.value;

    // eliminar cualquier carácter que no sea un dígito
    val = val.replace(/\D/g, "");

    //Limitar a que el usuario digite mas de 10 caracteres
    if (val.length > 10) {
      val = val.slice(0, 10);
    }

    onChange(val);
  };

  // Validación si a sido tocado el input y si el numero tiene menos de 10 caracteres o mas de 10 caracteres
  const isInvalid =
    isTouched && (value.length < 10 || value.length > 10);

  return (
    <div style={{ marginBottom: "1rem", display: "flex", flexDirection: "column" }}>
      {label && (
        <label style={{ marginBottom: "5px", fontWeight: "bold" }}>
          {label}
        </label>
      )}

      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={() => setIsTouched(true)}
        placeholder={placeholder}
        maxLength={10}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: `2px solid ${isInvalid ? "#e74c3c" : "#ccc"}`,
          outline: "none",
          transition: "0.3s",
        }}
      />

      {isInvalid && (
        <span style={{ color: "#e74c3c", fontSize: "12px", marginTop: "5px" }}>
          Número inválido (debe tener exactamente 10 dígitos)
        </span>
      )}
    </div>
  );
};

export default NumeroInput;