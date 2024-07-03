import { Title } from "./components/Title"; // Importa el componente Title desde su ubicación
import { TodoList } from "./components/TodoList"; // Importa el componente TodoList desde su ubicación
import { TodoProvider } from "./context/TodoProvider"; // Importa el proveedor TodoProvider desde su ubicación

// Componente funcional Todo
export const Todo = () => {
    return (
        // Envuelve los componentes en el contexto proporcionado por TodoProvider
        <TodoProvider>
            <div className="d-flex flex-column justify-content-center mt-5 border p-4 row-gap-4">
                <Title /> {/* Renderiza el componente Title */}
                <TodoList /> {/* Renderiza el componente TodoList */}
            </div>
        </TodoProvider>
    )
}
