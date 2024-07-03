import { useEffect, useState } from "react";

// Definición del tipo de los argumentos que el componente Timer recibirá
type TimerArgs = {
  milisegundos: number;
};

// Componente funcional Timer
export const Timer = ({ milisegundos }: TimerArgs) => {
  // Declaración de un estado llamado "segundos" con su setter "setSegundos", inicializado en 0
  const [segundos, setSegundos] = useState(0);

  // Hook useEffect para manejar el intervalo de tiempo
  useEffect(() => {
    // Crea un intervalo que actualiza el estado "segundos" cada cierto tiempo especificado por "milisegundos"
    const interval = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1); // Incrementa el contador de segundos en 1
    }, milisegundos);

    // Limpia el intervalo cuando el componente se desmonte o cuando "milisegundos" cambie
    return () => clearInterval(interval);
  }, [milisegundos]); // Se ejecuta cada vez que "milisegundos" cambia

  return (
    <>
      <h2>
        Timer: <small>{segundos}</small> {/* Muestra el valor actual del contador de segundos */}
      </h2>
    </>
  );
};
