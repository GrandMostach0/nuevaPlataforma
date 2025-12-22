import { Link } from "react-router-dom";

function CardFutbolEncuentro({
    categoria = "categoria",
    subCategoria = "subcategoria",
    equipoLocal = "Equipo Local",
    equipoVisitante = "Equipo Visitante",
    fechaPartido = "DD MM AA",
    horaPartido = "HH:HH",
    ubicacionPartido = "Ubicación"
}){
    return(
        <div className="border border-gray-400 rounded-xl mb-4">
            <div className="border-b border-gray-400 py-2 px-5">
                <p className="border border-gray-400 text-xs inline-block px-2 font-bold rounded-2xl">{categoria} - {subCategoria}</p>
            </div>

            <div className="p-4 text-gray-600 font-semibold">

                <div className="flex justify-between items-center text-black">
                    <div className="flex items-center">
                        <div className="w-15 h-15 bg-gray-600 rounded-full mr-2"></div>
                        <p>{equipoLocal}</p>
                    </div>

                    <p className="text-sm">VS</p>

                    <div className="flex items-center">
                        <p>{equipoVisitante}</p>
                        <div className="w-15 h-15 bg-gray-600 rounded-full ml-2"></div>
                    </div>

                </div>

                <p>{fechaPartido} • {horaPartido}</p>
                <p>{ubicacionPartido}</p>

                <Link to={"/partidoDetalle"} className="border border-gray-400 text-center text-black block w-full my-2 p-1 rounded-2xl cursor-pointer">Detalles del partido</Link>
            </div>

        </div>
    )
}

export default CardFutbolEncuentro;