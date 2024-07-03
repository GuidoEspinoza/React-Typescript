import { useForm } from "../hooks/useForm" // Importa el custom hook "useForm"

// Interfaz que define la estructura de los datos del formulario
interface FormData {
    postal: number,
    ciudad: string,
    pais: string
}

// Componente funcional Formulario2
export const Formulario2 = () => {
    // Utiliza el custom hook "useForm" para manejar el estado del formulario
    const { formulario, handleChange } = useForm<FormData>({
        postal: 123456,
        ciudad: 'Santiago',
        pais: 'Chile'
    })

    // Extrae los valores del formulario del estado retornado por el hook
    const { postal, ciudad, pais } = formulario

    return (
        // Contenedor principal con clases de estilo para diseño y espaciado
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Fomulario con Custom Hook</h2> {/* Título del formulario */}
            <form autoComplete="off"> {/* Formulario con autocompletado desactivado */}
                <div className="mb-3"> {/* Contenedor para el campo de código postal */}
                    <label className="form-label">Código  postal:</label> {/* Etiqueta del campo de código postal */}
                    <input
                        type="number"
                        className="form-control"
                        name="postal" // Nombre del campo de código postal
                        value={postal} // Valor del campo obtenido del estado del formulario
                        onChange={handleChange} // Maneja los cambios en el campo de código postal
                    />
                </div>
                <div className="mb-3"> {/* Contenedor para el campo de ciudad */}
                    <label className="form-label">Ciudad:</label> {/* Etiqueta del campo de ciudad */}
                    <input
                        type="text"
                        className="form-control"
                        name="ciudad" // Nombre del campo de ciudad
                        value={ciudad} // Valor del campo obtenido del estado del formulario
                        onChange={handleChange} // Maneja los cambios en el campo de ciudad
                    />
                </div>
                <div className="mb-3"> {/* Contenedor para el campo de país */}
                    <label className="form-label">País:</label> {/* Etiqueta del campo de país */}
                    <input
                        type="text"
                        className="form-control"
                        name="pais" // Nombre del campo de país
                        value={pais} // Valor del campo obtenido del estado del formulario
                        onChange={handleChange} // Maneja los cambios en el campo de país
                    />
                </div>
            </form>
            <span>{JSON.stringify(formulario)}</span> {/* Muestra el estado actual del formulario en formato JSON */}
        </div>
    )
}
