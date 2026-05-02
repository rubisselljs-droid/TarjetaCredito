import React, { useState } from "react";
import FilaAlumno from "../../components/FilaAlumno";

const TablaAlumnos = () => {
  const [alumnos, setAlumnos] = useState([
    { id: 1, matricula: "001", nombre: "Juan Pérez", practica: "", formativo: "", sumativo: "" },
    { id: 2, matricula: "002", nombre: "María López", practica: "", formativo: "", sumativo: "" },
    { id: 3, matricula: "003", nombre: "Carlos Gómez", practica: "", formativo: "", sumativo: "" },
    { id: 4, matricula: "004", nombre: "Ana Torres", practica: "", formativo: "", sumativo: "" },
  ]);

  const actualizarAlumno = (matricula, campo, valor) => {
    setAlumnos((prevAlumnos) =>
      prevAlumnos.map((alumno) =>
        alumno.matricula === matricula ? { ...alumno, [campo]: valor } : alumno
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-extrabold text-gray-800 border-l-4 border-blue-500 pl-3">
          Control de Calificaciones
        </h1>
      </header>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="p-4">ID</th>
              <th className="p-4">Matrícula</th>
              <th className="p-4">Nombre del Alumno</th>
              <th className="p-4 text-center">Práctica</th>
              <th className="p-4 text-center">Formativo</th>
              <th className="p-4 text-center">Sumativo</th>
              <th className="p-4 text-center bg-blue-50">Promedio Final</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <FilaAlumno
                key={alumno.matricula}
                alumno={alumno}
                onChange={actualizarAlumno}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaAlumnos;