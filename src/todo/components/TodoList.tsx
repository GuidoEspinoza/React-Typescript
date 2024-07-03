import { useTodos } from "../hooks/useTodos"; // Importa el custom hook useTodos desde su ubicación
import { TodoItem } from "./TodoItem"; // Importa el componente TodoItem desde su ubicación

// Componente funcional TodoList que muestra una lista de Todos
export const TodoList = () => {
    const { todos } = useTodos(); // Utiliza el custom hook useTodos para obtener la lista de Todos y su lógica asociada

    return (
        <ul> {/* Renderiza una lista no ordenada */}
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} />) // Mapea cada Todo en la lista y renderiza un componente TodoItem para cada uno
            }
        </ul>
    );
};
