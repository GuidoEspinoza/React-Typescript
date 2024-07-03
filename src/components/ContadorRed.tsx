import { useReducer } from "react"

// Estado inicial para el contador
const initialState = {
    contador: 0
}

// Definición de los tipos de acciones que se pueden enviar al reducer
type ActionType =
    | { type: 'incrementar' } // Acción para incrementar el contador
    | { type: 'decrementar' } // Acción para decrementar el contador
    | { type: 'custom', payload: number } // Acción para establecer un valor personalizado al contador

// Función reducer que maneja las actualizaciones del estado basadas en las acciones enviadas
const contadorReducer = (state: typeof initialState, action: ActionType) => {
    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1 // Incrementa el valor del contador en 1
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1 // Decrementa el valor del contador en 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload // Establece el valor del contador al valor especificado en el payload
            }

        default:
            return state; // Retorna el estado actual si la acción no es reconocida
    }
}

// Componente funcional que utiliza el useReducer para manejar el estado del contador
export const ContadorRed = () => {
    // Declaración del estado y la función dispatch utilizando useReducer con el reducer y el estado inicial
    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Contador: {contador}</h2> {/* Muestra el valor actual del contador */}

            {/* Botón para incrementar el contador enviando la acción 'incrementar' */}
            <button
                className="btn btn-outline-primary w-25"
                onClick={() => dispatch({ type: 'incrementar' })}>
                +1
            </button>

            {/* Botón para decrementar el contador enviando la acción 'decrementar' */}
            <button
                className="btn btn-outline-primary w-25"
                onClick={() => dispatch({ type: 'decrementar' })}>
                -1
            </button>

            {/* Botón para establecer el contador a 100 enviando la acción 'custom' con el payload 100 */}
            <button
                className="btn btn-outline-danger w-25"
                onClick={() => dispatch({ type: 'custom', payload: 100 })}>
                100
            </button>
        </div>
    )
}
