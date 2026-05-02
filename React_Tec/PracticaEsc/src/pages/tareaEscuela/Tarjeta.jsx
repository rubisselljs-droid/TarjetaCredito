import { useState, useEffect } from "react";
import CardTarjeta from "../../components/cardTarjet";
import Input from "../../components/Input";
import NumeroInput from "../../components/NumeroInput";

import "./Tarjeta.css";
export default function Tarjeta() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [curp, setCurp] = useState("");
  const [RFC, setRFC] = useState("");
  const [sexo, setSexo] = useState("");
  const [edad, setEdad] = useState(0);
  const [numero, setNumero] = useState('');
  const [cantidad, setCantidad] = useState("");

  

  // reutlizamos la parte del onchange para no escribir la misma funcion en los inputs
  const DatoVal = (setState) => (e) => {
    setState(e.target.value);
  };

 

  return (
    <div className="conponent-main">
      <div className="component-input">

        <Input
          type="text"
          value={nombre}
          onChange={DatoVal(setNombre)}
          required={true}
          placeholder="Digita tu nombre"
        />
        <Input
          type="text"
          value={apellido}
          onChange={DatoVal(setApellido)}
          required={true}
          placeholder="Digita tu apellido"
          errorMessage="APELLIDO ES OBLIGATORIO"
        />

        <NumeroInput
          value={numero}
          placeholder="Digita tu numero de telefono"
          onChange={setNumero}
        />

        <Input
          type="text"
          value={sexo}
          onChange={DatoVal(setSexo)}
          required={true}
          placeholder="Mujer/Hombre/Otro"
          errorMessage="SEXO ES OBLIGATORIO"
        />

        <Input
          type="text"
          value={cantidad}
          onChange={DatoVal(setCantidad)}
          required={true}
          placeholder="CANTIDAD AQUI"
          errorMessage="CANTIDAD ES OBLIGATORIO"
        />

      </div>

      <div className="conponent-card">
        <CardTarjeta nombre={nombre} apellido={apellido} sexo={sexo} cantidad={cantidad} />
      </div>
    </div>
  );
}
