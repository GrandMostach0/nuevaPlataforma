import NavBar from "../components/Layouts/NavBar"
import FooterBar from "../components/Layouts/FooterBar"
import { Link } from "react-router-dom"

function PartidoDetalle(){
    return(
        <div>
            <NavBar />

            <section className="flex items-center px-6 py-4 border-t border-b border-slate-300 mb-5">
                <Link to={"/"} className="font-semibold text-lg mr-5">Volver a Partidos</Link> <span className="border px-2 py-1 text-xs rounded-xl mx-1 border-slate-300">Jornada 9</span> <span className="border px-2 py-1 text-xs rounded-xl mx-1 border-blue-500 bg-blue-200">Programado</span>
            </section>

            <main className="p-4">
                <section className="border-2 px-3 py-8 rounded-2xl border-slate-300">
                    <h1 className="text-center text-4xl font-bold mb-1">FC Tigres vs Eagles United</h1>
                    <p className="text-center text-gray-400 font-semibold">U15 - Primera Divisón</p>

                    <div className="flex items-center justify-around">
                        
                        <div>
                            <div className="w-30 h-30 rounded-full bg-slate-300"></div>
                            <h1 className="text-center text-2xl font-bold">FC Trigers</h1>
                            <p className="text-gray-500 text-center">Local</p>
                        </div>

                        
                        <div className="text-gray-400">
                            <h1 className="text-center text-7xl font-bold mb-1">15:00</h1>
                            <p className="text-center text-sm">Miércoles, 24 de Enero de 2024</p>
                        </div>
                        
                        <div>
                            <div className="w-30 h-30 rounded-full bg-slate-300"></div>
                            <h1 className="text-center text-2xl font-bold">FC Trigers</h1>
                            <p className="text-gray-500 text-center">Local</p>
                        </div>

                    </div>

                    <div className="my-2 flex items-center justify-around w-[80%] m-auto">
                        <p>24/1/2024</p>
                        <p>15:00</p>
                        <p>Tigers Stadium</p>
                        <p>Carlos Mendez</p>
                    </div>
                </section>

                <div className="p-5">
                    <h1 className="text-xl font-bold mb-2"> 👀 Información del Partido</h1>

                    <div className="pl-3 mb-2 flex items-center gap-3">
                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">Fecha</p>
                            <p className="pl-2">Miércoles, 24 de enero 2024</p>
                        </div>

                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">Hora</p>
                            <p className="pl-2">15:00 p.m</p>
                        </div>
                    </div>

                    <div className="pl-3 mb-2 flex items-center gap-3">
                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">Estadio</p>
                            <p className="pl-2">Tigers Stadium</p>
                        </div>

                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">Árbitro</p>
                            <p className="pl-2">Carlos Mendez</p>
                        </div>
                    </div>

                    <div className="pl-3 mb-2 flex items-center gap-3">
                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">Categoría: </p>
                            <p className="pl-2">U15</p>
                        </div>

                        <div className="flex-1">
                            <p className="text-gray-500 font-semibold">División: </p>
                            <p className="pl-2">Primera División</p>
                        </div>
                    </div>

                </div>

            </main>

            <FooterBar />
        </div>
    )
}

export default PartidoDetalle