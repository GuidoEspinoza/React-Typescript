import { useState } from "react"

// Definición de la interfaz del usuario
interface User {
    id: string,
    name: string
}

// Componente funcional Usuario
export const Usuario = () => {
    // Declaración de un estado llamado "user" con su setter "setUser", inicializado como indefinido (null o undefined)
    const [user, setUser] = useState<User>()

    // Función para simular el inicio de sesión del usuario
    const login = () => {
        setUser({
            id: '1234',
            name: "Guido Espinoza"
        })
    }

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Usuario:</h2> {/* Título del componente */}

            {/* Botón para simular el inicio de sesión */}
            <button
                onClick={login} // Ejecuta la función login al hacer clic
                className="btn btn-outline-primary w-25">
                Login
            </button>

            {/* Condicional para mostrar el estado del usuario */}
            {
                (!user) // Si no hay usuario
                    ? <p>No hay usuario</p> // Muestra un mensaje indicando que no hay usuario
                    : <p>{JSON.stringify(user)}</p> // Muestra los datos del usuario en formato JSON
            }
        </div>
    )
}
