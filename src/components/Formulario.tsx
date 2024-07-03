import { ChangeEvent, useState } from "react"

// Componente funcional Formulario
export const Formulario = () => {

    // Declaración de un estado llamado "formulario" con su setter "setFormulario", inicializado con campos vacíos para email y nombre
    const [formulario, setFormulario] = useState({
        email: '',
        nombre: ''
    })

    // Función para manejar los cambios en los inputs del formulario
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target; // Extrae el nombre y el valor del input que disparó el evento

        // Actualiza el estado del formulario con el nuevo valor del input
        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Formulario sin Custom Hook</h2> {/* Título del formulario */}
            <form autoComplete="off"> {/* Formulario con autocompletado desactivado */}
                <div className="mb-3"> {/* Contenedor para el campo de email */}
                    <label className="form-label">Email:</label> {/* Etiqueta del campo de email */}
                    <input
                        type="email"
                        className="form-control"
                        name="email" // Nombre del campo de email
                        onChange={handleChange} // Maneja los cambios en el campo de email
                    />
                </div>
                <div className="mb-3"> {/* Contenedor para el campo de nombre */}
                    <label className="form-label">Nombre:</label> {/* Etiqueta del campo de nombre */}
                    <input
                        type="text"
                        className="form-control"
                        name="nombre" // Nombre del campo de nombre
                        onChange={handleChange} // Maneja los cambios en el campo de nombre
                    />
                </div>
            </form>
            {/* Muestra el estado actual del formulario en formato JSON */}
            <span>{JSON.stringify(formulario)}</span>
        </div>
    )
}
