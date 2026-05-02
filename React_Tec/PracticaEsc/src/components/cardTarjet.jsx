import rubanck from "../assets/img/image.png";
import mastercard from "../assets/img/mastercard.png";
import { SiSonarqubeserver } from "react-icons/si";
import "./cardTarjet.css";

export default function cardTarjet({
  nombre,
  apellido,
  sexo,
  color,
  cvv,
  fecha,
  cantidad,
}) {
  const dia = "15/29";
  // manera en la que podemos hacer que la parte del color de las tarjetas cambie dependiendo del genero
  const optenerColor = (generoMF) => {
    switch (generoMF) {
      case "mujer":
        return "sombra-rosa";
        break;
      case "hombre":
        return "sombra-azul";
        break;
      case "otro":
        return "sombra-negra";
        break;
    }
  };

  const optenerTarjeta = (monto) => {
    switch (monto) {
      case '500':
        return "tarjeta-Rojo";
        break;
      case "25,000":
        return "tarjeta-Dorado";
        break;
      case "200000":
        return "tarjeta-Platino";
        break;
    }
  };

  return (
    <div className={`card ${optenerColor(sexo)}`}>
      <div className={`card-color ${optenerTarjeta(cantidad)}`}>
        <div>
          <img src={rubanck} alt="logo" width="100px" />
          <img src={mastercard} alt="mastercard" width="100px" />
        </div>

        <div>
          
          <span>
            <p>{nombre} {apellido}</p>
            <p>credito  <SiSonarqubeserver/> </p>
          </span>
        </div>
      </div>
    </div>
  );
}
