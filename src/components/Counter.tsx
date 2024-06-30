import { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = (numero: number = 1): void => {
        setCounter(counter + numero)
    }

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4">
            <h3>Counter:</h3>
            <span>Valor: {counter}</span>
            <div className='mt-2'>
                <button
                    className='btn btn-outline-primary mw-100'
                    onClick={() => incrementar()}>
                    +1
                </button>
                <button
                    className='btn btn-outline-primary mw-100'
                    onClick={() => incrementar(2)}>
                    +2
                </button>
            </div>
            <button
                className='btn btn-outline-primary mt-2 w-25'
                onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    )
}
