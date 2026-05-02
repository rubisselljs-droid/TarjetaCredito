import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import TablaAlumnos from "./components/TareaEsc/TablaAlumnos";

function App() {
  
  return (<div className="App">
      {/* 2. Aquí "llamas" a la página para que se muestre */}
      <TablaAlumnos />
    </div>)
}


export default App;
