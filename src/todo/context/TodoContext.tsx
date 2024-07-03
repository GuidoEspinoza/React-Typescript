import { createContext } from "react"; // Importa la función createContext desde react
import { TodoState } from "../interfaces/interfaces"; // Importa la interfaz TodoState desde su ubicación

// Definición de las propiedades esperadas en el contexto TodoContext
export type TodoContextProps = {
    todoState: TodoState,         // Estado global de los Todos
    toggleTodo: (id: string) => void // Función para cambiar el estado completado de un Todo específico
};

// Crea y exporta el contexto TodoContext utilizando createContext
export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

