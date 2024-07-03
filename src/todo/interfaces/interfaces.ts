// Definición de la interfaz Todo que describe la estructura de un elemento Todo
export interface Todo {
    id: string,          // Identificador único del Todo
    desc: string,        // Descripción del Todo
    completed: boolean   // Estado de completitud del Todo (true si está completado, false si no)
}

// Definición de la interfaz TodoState que describe el estado de los Todos
export interface TodoState {
    todoCount: number,   // Número total de Todos
    todos: Todo[],       // Lista de Todos
    completed: number,   // Cantidad de Todos completados
    pending: number      // Cantidad de Todos pendientes
}
