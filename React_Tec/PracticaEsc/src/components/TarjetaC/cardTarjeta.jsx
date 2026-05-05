import rubanck from "../../assets/img/image.png";
import mastercard from "../../assets/img/mastercard.png";
import { SiSonarqubeserver } from "react-icons/si";
import "./cardTarjeta.css";

export default function CardTarjeta({
  nombre,
  apellido,
  sexo,
  color,
  cvv,
  fecha,
  cantidad,
}) {
  const obtenerColor = (generoMF) => {
    switch (generoMF) {
      case "mujer":
        return "sombra-rosa";
      case "hombre":
        return "sombra-azul";
      case "otro":
        return "sombra-negra";
      default:
        return "";
    }
  };
  const obtenerTarjeta = (monto) => {
    if (monto >= 500 && monto < 25000) return "tarjeta-Rojo";
    if (monto >= 25000 && monto < 200000) return "tarjeta-Dorado";
    if (monto >= 200000) return "tarjeta-Platino";
    return "tarjeta-Platino";
  };

  //me sirve para calcular el porcentaje de la barra de límite de crédito en la parte trasera de la tarjeta
  const porcentajeBarra = Math.min((cantidad / 200000) * 100, 100);

  return (
    <div className={`card ${obtenerColor(sexo)}`}>
      <div className="card-inner">
        {/* Cara Frontal */}
        <div className={`card-front ${obtenerTarjeta(cantidad)}`}>
          <div className="card-header">
            <img src={rubanck} alt="logo" className="bank-logo" />
            <SiSonarqubeserver className="chip-icon" size={38} />
          </div>

          <div className="card-body">
            <h2 className="card-holder-name">{nombre} {apellido}</h2>
          </div>

          <div className="card-footer">
            <p className="card-label">Crédito Personalizado</p>
            <img src={mastercard} alt="mastercard" className="network-logo" />
          </div>
        </div>

        {/* Cara Trasera */}
        <div className={`card-back ${obtenerTarjeta(cantidad)}`}>
          <div className="magnetic-strip"></div>
          <div className="signature-area">
            <span>{cvv}</span>
          </div>
          <div className="back-details">
            <div className="expiry-info">
              <small>VALID THRU</small>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{fecha}</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
