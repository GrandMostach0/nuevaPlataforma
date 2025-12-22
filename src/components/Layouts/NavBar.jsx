import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="flex items-center py-2">

            <div className="flex flex-1 gap-8 items-center m-2">
                <h1 className="text-2xl font-bold">LOGO HERE</h1>
                <Link className="text-gray-500 hover:text-gray-900 hover:font-semibold px-2" to="/ligas">Ligas</Link>
                <Link className="text-gray-500 hover:text-gray-900 hover:font-semibold px-2" to="/equipos">Equipos</Link>
                <Link className="text-gray-500 hover:text-gray-900 hover:font-semibold px-2" to="/partidos">Partidos</Link>
                <Link className="text-gray-500 hover:text-gray-900 hover:font-semibold px-2" to="/clasificacion">Clasificacion</Link>
            </div>

            <div className="flex-1 flex justify-end items-center gap-3 p-2">
                <button className="p-1 cursor-pointer">Icon</button>
                <Link to={"/inscripcion"} className="px-4 py-1 hover:bg-slate-200 cursor-pointer rounded-2xl">Inscribe tu equipo</Link>
                <button className="px-4 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl cursor-pointer">Contacto</button>
            </div>
        </nav>
    )
}