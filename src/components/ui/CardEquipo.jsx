import { Link } from "react-router-dom"

export function CardEquipo() {
    return(
        <div className="border p-4 border-slate-300 rounded-lg">

            <section className="flex items-center gap-4 mb-2">
                <div className="w-20 h-20 bg-black rounded-2xl"></div>
                <div>
                    <h1 className="font-semibold text-2xl mb-1">FC Trigres</h1>
                    <span className="text-xs p-1 mr-2 rounded-lg border">Primera División</span>
                    <span className="text-xs px-3 py-1 mr-2 rounded-lg border">#2</span>
                </div>
            </section>

            <p className="text-gray-500 font-semibold">Equipo con gran tradición en la liga, conocido por su juego ofensivo.</p>

            <div className="border-b pb-2 border-gray-400 py-2">
                <div className="flex items-center gap-4 text-gray-500">
                    <p>Jugadores: <span className="text-black font-semibold">18</span></p>
                    <p>Puntos: <span className="text-black font-semibold">39</span></p>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <p>Ciudad Norte</p>
                    <p>Fundado: <span className="text-black font-semibold">2010</span></p>
                </div>
            </div>

            <div className="flex items-center justify-around p-2 font-semibold text-gray-500">
                <p>V: 12</p>
                <p>E: 3</p>
                <p>D: 2</p>
            </div>

            <Link to={"/equipoDetalle"} className="border w-full block py-2 border-slate-300 rounded-lg cursor-pointer text-center">Ver Equipo</Link>

        </div>
    )
}