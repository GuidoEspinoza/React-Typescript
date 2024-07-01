import { useState } from "react"

interface User {
    id: string,
    name: string
}

export const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            id: '1234',
            name: "Guido Espinoza"
        })
    }

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h3>Usuario:</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary w-25">
                Login
            </button>
            {
                (!user)
                    ? <p>No hay usuario</p>
                    : <p>{JSON.stringify(user)}</p>
            }
        </div>
    )
}
