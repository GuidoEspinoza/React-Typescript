import { ChangeEvent, useState } from "react"

//* Alternativa a la declaración con arrow function usando función regular
// export function useForm<T>(initialState: T) {
export const useForm = <T extends Object>(initialState: T) => {

    // Declaración de un estado llamado "formulario" con su setter "setFormulario", inicializado con el estado inicial recibido
    const [formulario, setFormulario] = useState(initialState)

    // Función para manejar los cambios en los inputs del formulario
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target // Extrae el nombre y el valor del input que disparó el evento

        // Actualiza el estado del formulario con el nuevo valor del input
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    // Retorna el estado actual del formulario y la función para manejar cambios en los inputs
    return {
        formulario,
        handleChange
    }
}
