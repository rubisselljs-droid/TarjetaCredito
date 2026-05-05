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
  const dia = "15/29";
  
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

  return (
    <div className={`card ${obtenerColor(sexo)}`}>
      <div className={`card-color ${obtenerTarjeta(cantidad)}`}>
        <div>
          <img src={rubanck} alt="logo" width="100px" />
          <img src={mastercard} alt="mastercard" width="100px" />
        </div>

        <div>
          <span>
            <p>
              {nombre} {apellido}
            </p>
            <p>
              credito <SiSonarqubeserver />{" "}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
