import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div className="text-center">
            <h2 className="text-3xl py-16">Página no encontrada</h2>
            <Link to="/" className="cursor-pointer border px-8 py-2 rounded-2xl">Volver</Link>
        </div>
    )
}

export default NotFound