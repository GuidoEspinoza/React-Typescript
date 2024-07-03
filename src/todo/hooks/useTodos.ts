import { useContext } from "react"; // Importa el hook useContext desde react
import { TodoContext } from "../context/TodoContext"; // Importa el contexto TodoContext desde su ubicación

// Custom hook useTodos para gestionar la lógica relacionada con los Todos
export const useTodos = () => {
    // Obtiene el estado y las funciones del contexto TodoContext mediante el hook useContext
    const { todoState, toggleTodo } = useContext(TodoContext);
    const { todos } = todoState; // Extrae la lista de Todos del estado todoState

    return {
        todos: todos, // Retorna la lista completa de Todos
        pendingTodos: todos.filter(todo => !todo.completed).length, // Calcula la cantidad de Todos pendientes
        toggleTodo // Retorna la función toggleTodo para cambiar el estado de un Todo
    };
};
