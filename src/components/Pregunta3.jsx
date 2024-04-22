import React, { useState } from "react";
import preguntas from "../utils/QuestionsLiga";
import "../styles/Pregunta.scss"; // Importa el archivo SCSS

function Pregunta3() {
  const [indicePregunta, setIndicePregunta] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const [mostrarSiguientePregunta, setMostrarSiguientePregunta] =
    useState(false);
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);

  const handleSeleccionRespuesta = (respuesta, respuestaCorrecta) => {
    setRespuestaSeleccionada(respuesta);

    setMostrarSiguientePregunta(true);
    if (respuesta === respuestaCorrecta) {
      setRespuestasCorrectas(respuestasCorrectas + 1);
    }
  };

  const mostrarSiguiente = () => {
    setIndicePregunta(indicePregunta + 1);
    setRespuestaSeleccionada(null);

    setMostrarSiguientePregunta(false);
  };

  const porcentajeAciertos = () => {
    return (respuestasCorrectas / preguntas.length) * 100;
  };

  return (
    <div className="pregunta-container">
      <h1>Liga Quizz</h1>
      {indicePregunta < preguntas.length && (
        <div className="pregunta">
          <h2 className="pregunta-texto">
            Pregunta: {preguntas[indicePregunta].pregunta}
          </h2>
          <div className="respuestas">
            {preguntas[indicePregunta].respuestas.map((opcion) => (
              <button
                key={opcion.opcion}
                onClick={() =>
                  handleSeleccionRespuesta(
                    opcion.opcion,
                    preguntas[indicePregunta].respuestaCorrecta
                  )
                }
                disabled={mostrarSiguientePregunta}
                className="respuesta"
              >
                {opcion.texto}
              </button>
            ))}
          </div>
          {respuestaSeleccionada && (
            <p>Tu respuesta: {respuestaSeleccionada}</p>
          )}
          {mostrarSiguientePregunta && (
            <button onClick={mostrarSiguiente} className="boton-siguiente">
              Siguiente
            </button>
          )}
        </div>
      )}
      {indicePregunta >= preguntas.length && (
        <div>
          <p>¡Has completado todas las preguntas!</p>
          <p>Porcentaje de aciertos: {porcentajeAciertos()}%</p>
        </div>
      )}
    </div>
  );
}

export default Pregunta3;
