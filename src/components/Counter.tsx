import { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero)
    }

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Counter:</h2>
            <span>Valor: {counter}</span>
            
                <button
                    className='btn btn-outline-primary w-25'
                    onClick={() => incrementar()}>
                    +1
                </button>
                <button
                    className='btn btn-outline-primary w-25'
                    onClick={() => incrementar(2)}>
                    +2
                </button>
            
            <button
                className='btn btn-outline-primary mt-2 w-25'
                onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
