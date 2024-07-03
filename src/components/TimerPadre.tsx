import { useState } from "react";
import { Timer } from "./Timer";

// Componente funcional TimerPadre
export const TimerPadre = () => {
    // Declaración de un estado llamado "milisegundos" con su setter "setMilisegundos", inicializado en 1000
    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <span>Milisegundos {milisegundos}</span> {/* Muestra el valor actual de "milisegundos" */}

            {/* Botón para establecer "milisegundos" a 1000 */}
            <button
                className="btn btn-outline-success w-25"
                onClick={() => setMilisegundos(1000)}>
                1000
            </button>

            {/* Botón para establecer "milisegundos" a 2000 */}
            <button
                className="btn btn-outline-success w-25"
                onClick={() => setMilisegundos(2000)}>
                2000
            </button>

            {/* Renderiza el componente Timer con el valor actual de "milisegundos" */}
            <Timer milisegundos={milisegundos} />
        </div>
    );
};
