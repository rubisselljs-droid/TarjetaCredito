import React from "react";

const SelectorCalificacion = ({ valor, onChange, nombre }) => {
  const opciones = Array.from({ length: 11 }, (_, i) => i); // Genera [0, 1, ..., 10]

  return (
    <select
      className="border rounded p-1 bg-white focus:ring-2 focus:ring-blue-400 outline-none transition-all"
      value={valor}
      onChange={(e) => onChange(nombre, e.target.value)}
    >
      <option value="">-</option>
      {opciones.map((num) => (
        <option key={num} value={num}>
          {num}
        </option>
      ))}
    </select>
  );
};

export default SelectorCalificacion;