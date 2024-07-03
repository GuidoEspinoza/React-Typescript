import { Todo, TodoState } from "../interfaces/interfaces"; // Importa las interfaces Todo y TodoState desde su ubicación

// Definición de los tipos de acciones que el reducer puede manejar
type TodoAction =
    | { type: 'addTodo', payload: Todo } // Acción para agregar un Todo
    | { type: 'toggleTodo', payload: { id: string } } // Acción para cambiar el estado completado de un Todo

// Reducer para manejar el estado de los Todos
export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case 'addTodo':
            // Agrega un nuevo Todo al estado existente
            return {
                ...state,
                todos: [...state.todos, action.payload] // Añade el nuevo Todo al final del array de todos
            };

        case 'toggleTodo':
            // Cambia el estado completado de un Todo específico
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            completed: !todo.completed // Cambia el estado completado del Todo
                        };
                    }
                    return todo;
                })
            };

        default:
            return state; // Retorna el estado sin modificar si la acción no es reconocida
    }
};
