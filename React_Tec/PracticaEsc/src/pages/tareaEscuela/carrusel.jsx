import { useState } from "react";

export default function () {
  const [imagen, setImagen] = useState(0);

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
    },
  ];

  const irDerecha = () => {
    setImagen(imagen===0 ? Fotos.length - 1 : imagen + 1);
  };

  const irIzquierda = () => {
    setImagen(imagen===Fotos.length - 1 ? 0 : imagen - 1);
  };
  return (
    <div>
      <div>
        <div>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
