import { useReducer } from "react"; // Importa el hook useReducer desde react
import { TodoState } from "../interfaces/interfaces"; // Importa la interfaz TodoState desde su ubicación
import { TodoContext } from "./TodoContext"; // Importa el contexto TodoContext desde su ubicación
import { todoReducer } from "./todoReducer"; // Importa el reducer todoReducer desde su ubicación

// Estado inicial para el contexto TodoProvider
const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Recolectar las gemas del infinito',
            completed: false
        },
        {
            id: '2',
            desc: 'Piedra del alma',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
};

// Propiedades esperadas por TodoProvider
interface Props {
    children: JSX.Element | JSX.Element[]; // Componentes hijos del provider
}

// Componente TodoProvider que provee el contexto y el estado de los Todos
export const TodoProvider = ({ children }: Props) => {
    // Utiliza useReducer para manejar el estado de los Todos mediante todoReducer y el estado inicial INITIAL_STATE
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    // Función para cambiar el estado completado de un Todo específico
    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } }); // Dispara la acción toggleTodo con el id del Todo
    };

    // Retorna el proveedor TodoContext.Provider que envuelve a los componentes hijos con el estado y funciones necesarias
    return (
        <TodoContext.Provider value={{
            todoState, // Estado global de los Todos
            toggleTodo // Función para cambiar el estado completado de un Todo
        }}>
            {children} {/* Renderiza los componentes hijos dentro del proveedor */}
        </TodoContext.Provider>
    );
};
