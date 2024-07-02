import { useReducer } from "react"

const initialState = {
    contador: 0
}

type ActionType =
    | { type: 'incrementar' }
    | { type: 'decrementar' }
    | { type: 'custom', payload: number }

const contadorReducer = (state: typeof initialState, action: ActionType) => {

    switch (action.type) {
        case 'incrementar':
            return {
                ...state,
                contador: state.contador + 1
            }

        case 'decrementar':
            return {
                ...state,
                contador: state.contador - 1
            }

        case 'custom':
            return {
                ...state,
                contador: action.payload
            }

        default:
            return state;
    }
}

export const ContadorRed = () => {

    const [{ contador }, dispatch] = useReducer(contadorReducer, initialState)

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Contador: {contador}</h2>
            <button
                className="btn btn-outline-primary w-25"
                onClick={() => dispatch({ type: 'incrementar' })}>
                +1
            </button>
            <button
                className="btn btn-outline-primary w-25"
                onClick={() => dispatch({ type: 'decrementar' })}>
                -1
            </button>
            <button
                className="btn btn-outline-danger w-25"
                onClick={() => dispatch({ type: 'custom', payload: 100 })}>
                100
            </button>
        </div>
    )
}
