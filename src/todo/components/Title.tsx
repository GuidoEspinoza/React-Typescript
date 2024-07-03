import { useTodos } from "../hooks/useTodos"; // Importa el custom hook useTodos desde su ubicación

// Componente funcional Title que muestra el número de Todos pendientes
export const Title = () => {
    const { pendingTodos } = useTodos(); // Utiliza el custom hook useTodos para obtener la cantidad de Todos pendientes

    return (
        <h1>
            Todos pendientes: {pendingTodos} {/* Muestra el número de Todos pendientes */}
        </h1>
    );
};
