import React, { useState } from "react";
import "../styles/Navbar.scss";
import Pregunta from "./Pregunta";
import Pregunta1 from "./Pregunta1";
import Pregunta2 from "./Pregunta2";
import Pregunta3 from "./Pregunta3";

function Navbar() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);

  const mostrarComponente = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className="navbar">
      <ul>
        <li onClick={() => mostrarComponente("componenteUno")}>Barça Quiz</li>
        <li onClick={() => mostrarComponente("componenteDos")}>Madrid Quiz</li>
        <li onClick={() => mostrarComponente("componenteTres")}>
          Champions Quiz
        </li>
        <li onClick={() => mostrarComponente("componenteCuatro")}>Liga Quiz</li>
      </ul>
      {opcionSeleccionada === "componenteUno" && <Pregunta />}
      {opcionSeleccionada === "componenteDos" && <Pregunta1 />}
      {opcionSeleccionada === "componenteTres" && <Pregunta2 />}
      {opcionSeleccionada === "componenteCuatro" && <Pregunta3 />}
    </div>
  );
}

export default Navbar;
