import { useState } from 'react'

// Componente funcional Counter
export const Counter = () => {

    // Declaración de un estado llamado "counter" con su setter "setCounter", inicializado en 0
    const [counter, setCounter] = useState(0)

    // Función para incrementar el valor del contador. Recibe un número opcional con valor predeterminado de 1
    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero) // Actualiza el estado sumando el valor recibido al contador actual
    }

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Counter:</h2> {/* Título del contador */}
            <span>Valor: {counter}</span> {/* Muestra el valor actual del contador */}

            {/* Botón para incrementar el contador en 1 */}
            <button
                className='btn btn-outline-primary w-25'
                onClick={() => incrementar()}>
                +1
            </button>

            {/* Botón para incrementar el contador en 2 */}
            <button
                className='btn btn-outline-primary w-25'
                onClick={() => incrementar(2)}>
                +2
            </button>

            {/* Botón para reiniciar el contador a 0 */}
            <button
                className='btn btn-outline-primary mt-2 w-25'
                onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
