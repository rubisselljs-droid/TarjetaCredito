import { useState } from "react";
import CardTarjeta from "../../components/TarjetaC/cardTarjeta";
import GeneroInput from "../../components/TarjetaC/GeneroInput";
import "./Tarjeta.css";
import Input from "../../components/TarjetaC/Input"; // Ensure this path is correct
import Barrita from "../../components/TarjetaC/Barrita";
import { confiIn } from "../../constants/confiIn";
import rubanck from "../../assets/img/image.png";
import Termino from "../../components/TarjetaC/Termino";

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
  const [esVisible, setEsVisible] = useState(false);
  
  const DatosIngresados = (e) => {
    const { name, value } = e.target;
    const val = name === "rfc" || name === "curp" ? value.toUpperCase() : value;
    setFormulario({ ...formulario, [name]: val });
  };

  const Enviar = () => {
    if (esVisible === false) {
      setEsVisible(true);
    } else {
      
      setEsVisible(false);
    }
  };

  return (
    <div className="tarjeta-page-container">
      <header className="page-header">
        <div className="header-brand">
          <img src={rubanck} alt="Rubank Logo" className="page-logo" />
          <div className="header-text">
            <h1>Rubank</h1>
            <p>Tu buen amigo el Hombre Araña</p>
          </div>
        </div>
      </header>

      <main className="main-layout">
        <section className="preview-section">
          <div className="sticky-card">
            <CardTarjeta
              nombre={formulario.nombre || "NOMBRE"}
              apellido={formulario.apellido || "APELLIDO"}
              sexo={sexo}
              cantidad={cantidad}
              cvv="***"
              fecha="12/28"
            />
            <p className="preview-hint">
              ¡Qué bonita se ve! ¿Acaso no quieres probarla? ¡No hay intereses
              en tu primera compra!
            </p>
          </div>
        </section>

        <section className="form-section">
          <div className="form-card">
            <h2 className="form-section-title">BIENVENIDO A RUBANK</h2>
            <Barrita value={cantidad} onChange={setCantidad} />

            <div className="input-grid">
              <div className="input-row">
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
              </div>
              <div className="input-row">
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
              </div>
            </div>

            <div className="gender-selection">
              <GeneroInput
                label="Selecciona  el Genero"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              />
            </div>
            <div className="input-grid">
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
            </div>

            <button className="btn-confirmar" onClick={Enviar}>
              enviar solicitud
            </button>
          </div>
        </section>
      </main>

      <div>
        {esVisible && (
           <Termino onClic={Enviar}/>
        )}
      </div>
    </div>
  );
}
