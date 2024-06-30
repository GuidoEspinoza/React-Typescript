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
        <div>
            <h3>Usuario: useState</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }
        </div>
    )
}
