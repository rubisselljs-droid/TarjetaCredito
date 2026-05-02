import React, { useState } from "react";
import "./carrucelE.css";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
export default function CarrucelE() {
  const [fotoP, setfotop] = useState(0);
  const Fotos = [
    {
      id: 1,
      url: "https://i.pinimg.com/1200x/7f/19/b8/7f19b8c5df66dc0e7e94edbce8237336.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/736x/c9/65/1e/c9651e85e977131f556c50ca697541fa.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/736x/5f/de/48/5fde48259cc98a35ce2588bcda8e4746.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/736x/8c/24/9d/8c249d8fded5dfb618467fd46174f984.jpg",
    }
  ];

  const Izquierda = () => {
    if (fotoP === 0) {
      setfotop(Fotos.length - 1);
    } else {
      setfotop(fotoP - 1);
    }
  };

  const Derecha = () => {
    if (fotoP === Fotos.length - 1) {
      setfotop(0);
    } else {
      setfotop(fotoP + 1);
    }
  };

  return (
    <div className="contenedor">
      <div className="carrusel">
        <div
          className="carrusel-tira"
          style={{ transform: `translateX(-${fotoP * 100}%)` }}
        >
          {Fotos.map((emp, index) => {
            return (
              <div key={index} className="con-image">
                <img src={emp.url} className="foto" />
              </div>
            );
          })}
        </div>

        <button className="btn" onClick={Izquierda}>
          <FaAnglesLeft />
        </button>
        <button className="btn" onClick={Derecha}>
          <FaAnglesRight />
        </button>
      </div>

      <div className="contenedores-brn">
        {Fotos.map((emp, index) => {
          return (
            <button
              key={index}
              className={fotoP === index ? "pun" : "btn"}
              onClick={() => setfotop(index)}
            >
              <FaStar height={'100%'} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
