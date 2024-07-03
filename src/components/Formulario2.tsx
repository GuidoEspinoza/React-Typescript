import { useForm } from "../hooks/useForm"

interface FormData {
    postal: number,
    ciudad: string,
    pais: string
}

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm<FormData>({
        postal: 123456,
        ciudad: 'Santiago',
        pais: 'Chile'
    })

    const { postal, ciudad, pais } = formulario

    return (
        <div className="d-flex flex-column mt-5 border p-4 row-gap-4 w-50">
            <h2>Fomulario con Custom Hook</h2>
            <form autoComplete="off">
                <div className="mb-3">
                    <label className="form-label">Código  postal:</label>
                    <input
                        type="number"
                        className="form-control"
                        name="postal"
                        value={postal}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ciudad:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">País:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="pais"
                        value={pais}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <span>{JSON.stringify(formulario)}</span>
        </div>
    )
}
