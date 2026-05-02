import React from "react";
import SelectorCalificacion from "./SelectorCalificacion";

const FilaAlumno = ({ alumno, onChange }) => {
  const { matricula, nombre, practica, formativo, sumativo } = alumno;

 
  const calcularPromedio = () => {
    const notas = [Number(practica), Number(formativo), Number(sumativo)];
   
    const notasValidas = notas.filter(n => !isNaN(n) && n !== 0 || alumno.practica !== "");
    
    if (practica === "" || formativo === "" || sumativo === "") return "-";
    
    const suma = notas.reduce((acc, curr) => acc + curr, 0);
    return (suma / 3).toFixed(1);
  };

  return (
    <tr className="hover:bg-gray-50 border-b transition-colors">
      <td className="p-3 font-medium text-gray-700">{matricula}</td>
      <td className="p-3 text-gray-600">{nombre}</td>
      
      <td className="p-3 text-center">
        <SelectorCalificacion 
          nombre="practica" 
          valor={practica} 
          onChange={(campo, val) => onChange(matricula, campo, val)} 
        />
      </td>
      <td className="p-3 text-center">
        <SelectorCalificacion 
          nombre="formativo" 
          valor={formativo} 
          onChange={(campo, val) => onChange(matricula, campo, val)} 
        />
      </td>
      <td className="p-3 text-center">
        <SelectorCalificacion 
          nombre="sumativo" 
          valor={sumativo} 
          onChange={(campo, val) => onChange(matricula, campo, val)} 
        />
      </td>

      <td className="p-3 text-center font-bold text-blue-600">
        {calcularPromedio()}
      </td>
    </tr>
  );
};

export default FilaAlumno;