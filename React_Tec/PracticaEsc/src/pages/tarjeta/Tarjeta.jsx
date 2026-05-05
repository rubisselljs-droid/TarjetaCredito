import { useState } from "react";

import CardTarjeta from "../../components/TarjetaC/cardTarjeta";
import GeneroInput from "../../components/TarjetaC/GeneroInput";
import "./Tarjeta.css";

import Input from "../../components/TarjetaC/Input";
import Barrita from "../../components/TarjetaC/Barrita";
import { confiIn } from "../../constants/confiIn";

export default function Tarjeta() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    rfc: "",
    curp: "",
  });
  const [sexo, setSexo] = useState("");
  const [cantidad, setCantidad] = useState("");

  const DatosIngresados = (e) => {
    const { name, value } = e.target;
    const val = name === "rfc" || name === "curp" ? value.toUpperCase() : value;
    setFormulario({ ...formulario, [name]: val });
  };

  const Enviar = () => {};

  return (
    <div className="component-main">
      <div className="component-card">
        <CardTarjeta
          nombre={formulario.nombre}
          apellido={formulario.apellido}
          sexo={sexo}
          cantidad={cantidad}
        />
      </div>

      <div className="component-input">
        <h2 className="form-title">Información de la Tarjeta</h2>
        <Barrita value={cantidad} onChange={setCantidad} />

        <Input
          nombre="nombre"
          configuracion={confiIn.nombre}
          value={formulario.nombre}
          onChange={DatosIngresados}
        />

        
          
        <Input
          nombre="apellido"
          configuracion={confiIn.apellido}
          value={formulario.apellido}
          onChange={DatosIngresados}

        />

        <Input
          nombre="email"
          configuracion={confiIn.email}
          value={formulario.email}
          onChange={DatosIngresados}
        />

        <Input
          nombre="telefono"
          configuracion={confiIn.telefono}
          value={formulario.telefono}
          onChange={DatosIngresados}
        />

        <Input
          nombre="rfc"
          configuracion={confiIn.rfc}
          value={formulario.rfc}
          onChange={DatosIngresados}
        />

        <Input
          nombre="curp"
          configuracion={confiIn.curp}
          value={formulario.curp}
          onChange={DatosIngresados}
        />

        <GeneroInput
          label="Género"
          value={sexo}
          onChange={(e) => setSexo(e.target.value)}
        />
      </div>
    </div>
  );
}
