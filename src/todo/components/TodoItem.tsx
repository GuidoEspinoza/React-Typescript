import { Todo } from "../interfaces/interfaces"; // Importa la interfaz Todo desde su ubicación
import { useTodos } from "../hooks/useTodos"; // Importa el custom hook useTodos desde su ubicación

// Propiedades esperadas por el componente TodoItem
interface TodoItemsProps {
    todo: Todo; // Todo individual que se mostrará en este componente
}

// Componente funcional TodoItem que muestra un solo Todo
export const TodoItem = ({ todo }: TodoItemsProps) => {
    const { toggleTodo } = useTodos(); // Utiliza el custom hook useTodos para obtener la función toggleTodo

    return (
        <li
            style={{
                cursor: 'pointer', // Cambia el cursor a pointer para indicar que es clickable
                textDecoration: todo.completed ? 'line-through' : '' // Aplica una línea tachada si el Todo está completado
            }}
            onDoubleClick={() => toggleTodo(todo.id)}> {/* Maneja el doble clic para cambiar el estado completado del Todo */}
            {todo.desc} {/* Muestra la descripción del Todo */}
        </li>
    );
};
