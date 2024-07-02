import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {
    const [milisegundos, setMilisegundos] = useState(1000);

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <span>Milisegundos {milisegundos}</span>
            <button
                className="btn btn-outline-success w-25"
                onClick={() => setMilisegundos(1000)}
            >
                1000
            </button>
            <button
                className="btn btn-outline-success w-25"
                onClick={() => setMilisegundos(2000)}
            >
                2000
            </button>
            <Timer milisegundos={milisegundos} />
        </div>
    );
};
