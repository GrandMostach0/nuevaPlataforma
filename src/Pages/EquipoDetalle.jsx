import NavBar from "../components/Layouts/NavBar";
import CardBienvenida from "../components/ui/CardBienvenida";
import FooterBar from "../components/Layouts/FooterBar";

function EquipoDetalle() {
    return (
        <div>
            <NavBar />

            <section className="h-[40vh] bg-gray-300 flex items-center px-10">
                <div className="flex  items-center gap-4"> 
                    <div className="w-30 h-30 bg-black rounded-lg"></div>
                    <div>
                        <h1 className="text-4xl font-semibold mb-2">FC Tigers</h1>
                        <p className="text-center">Liga Sub 15</p>
                    </div>
                </div>
            </section>

            <main className="p-4">
                <div className="flex items-center justify-around">
                    <CardBienvenida />
                    <CardBienvenida />
                    <CardBienvenida />
                    <CardBienvenida />
                </div>

                <section className="flex my-3 gap-8">

                    <div className="flex-2">
                        <br />
                        <h1 className="text-2xl font-bold my-2">Información del Equipo</h1>
                        <br />
                        <p>FC Tigers es un equipo juvenil fundado en 2010 con el objetivo de formar jugadores de élite. Ha ganado 3 campeonatos en su categoría y es reconocido por su estilo de juego ofensivo.</p>

                        <div className="flex items-center mt-3 mb-2">
                            <div className="flex-1">    
                                <p><strong>Fundado</strong></p>
                                <p>2010</p>
                            </div>

                            <div className="flex-1">    
                                <p><strong>Liga</strong></p>
                                <p>Sub 15</p>
                            </div>
                        </div>

                        <div className="py-2">    
                            <p><strong>Stadio</strong></p>
                            <p>Tigers Stadium</p>
                        </div>

                        <div className="py-2">    
                            <p><strong>Entreador</strong></p>
                            <p>Michael Johnson</p>
                        </div>

                        <div className="flex items-center justify-around">
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>YouTube</p>
                        </div>

                    </div>

                    <div className="flex-3">
                        <br />
                        <h1 className="text-2xl font-bold my-2">Detalles del Equipo</h1>
                        <br />
                        <table className="w-full">
                            <thead>
                                <tr>  
                                    <th className="p-2">#</th>
                                    <th>Jugador</th>
                                    <th>Posición</th>
                                    <th>Edad</th>
                                    <th>Goles</th>
                                    <th>Asist.</th>
                                    <th>TA</th>
                                    <th>TR</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr className="">
                                    <td className="p-2">1</td>
                                    <td>Alex johnson</td>
                                    <td>Delantero</td>
                                    <td>15</td>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">1</td>
                                    <td>Alex johnson</td>
                                    <td>Delantero</td>
                                    <td>15</td>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr><tr className="">
                                    <td className="p-2">1</td>
                                    <td>Alex johnson</td>
                                    <td>Delantero</td>
                                    <td>15</td>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr><tr className="">
                                    <td className="p-2">1</td>
                                    <td>Alex johnson</td>
                                    <td>Delantero</td>
                                    <td>15</td>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr><tr className="">
                                    <td className="p-2">1</td>
                                    <td>Alex johnson</td>
                                    <td>Delantero</td>
                                    <td>15</td>
                                    <td>8</td>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>

            </main>
            <FooterBar />
        </div>
    )
}

export default EquipoDetalle;