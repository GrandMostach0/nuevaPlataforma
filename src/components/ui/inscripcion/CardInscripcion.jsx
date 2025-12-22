export default function CardInscripcion(){
    return(
        <section className="border p-3 rounded-lg border-slate-300">
            <h1 className="font-semibold text-lg">Plantilla de Jugadores</h1>
            
            <ul className="text-sm text-gray-500">
                <li>Mínimo 15 jugadores, máximo 25 jugadores por equipo</li>
                <li>Todos los jugadores deben cumplir con los requisitos de edad de la categoría</li>
                <li>Cada jugador debe tener una ficha de registro con foto reciente</li>
            </ul>
        </section>
    )
}