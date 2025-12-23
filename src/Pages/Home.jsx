import { useState } from "react"
import NavBar from "../components/Layouts/NavBar"
import CardBienvenida from "../components/ui/CardBienvenida"
import CardFutbolEncuentro from "../components/ui/CardFutbolEncuentro";
import TablaPosiciones from "../components/ui/TablaPosiciones";
import FooterBar from "../components/Layouts/FooterBar";

import HomeLayout from "../components/Layouts/HomeLayout";

function Home(){
    
    const listaOpciones = ["Proximos", "Resultados"];
    const listaOpcionesClasificacion = ["Mayor", "Juvenil", "Infantil"];
    const [opcion, setOpcion] = useState(listaOpciones[0]);
    const [opcionClasificacion, setOpcionClasificacion] = useState(listaOpcionesClasificacion[0]);

    return(
        <div>
            <NavBar />

            <section className="h-[80vh] text-center flex flex-col justify-center items-center gap-4 bg-gray-300">
                <h1 className="font-bold text-6xl">Liga de Fútbol 2025</h1>
                <p className="text-lg">Toda la emoción del fútbol en un solo lugar. Sigue a tu equipo favorito en todas las categorías.</p>

                <div>
                    <button className="btn-base bg-black text-white">Ver Partidos</button>
                    <button className="btn-base border border-slate-400">Clasificación</button>
                </div>
            </section>

            <main className="px-2">
                <section className=" py-15">
                    <h1 className="font-bold text-4xl text-center">Bienvenido a la Liga de Fútbol</h1>
                    <p className="text-center w-[50%] my-3 mx-auto">Descubre toda la información sobre nuestras competiciones, equipos y jugadores. Mantente al día con los resultados, clasificaciones y próximos partidos.</p>
                    <div className="flex justify-around">
                        <CardBienvenida titleCard="Ligas" numero="12" contenido="3 mayores, 4 juveniles, 5 infantiles" />
                        <CardBienvenida titleCard="Equipos" numero="148" contenido="+12 desde la temporada pasada" />
                        <CardBienvenida titleCard="Partidos" numero="24" contenido="Este fin de semana" />
                        <CardBienvenida titleCard="Jugadores" numero="2,450" contenido="En todas las categorías" />
                    </div>
                </section>

                <section className="my-5 flex justify-center gap-2">

                    <div className="flex-1/2 p-2">
                        <div className="flex justify-between items-center">
                            <h1 className="font-bold text-2xl">Partidos</h1>

                            <div className="bg-gray-200 p-1 rounded-lg font-semibold">
                                {listaOpciones.map((item, index) => (
                                    <p
                                        key={index}
                                        onClick={() => setOpcion(item)}
                                        className={`cursor-pointer inline-block mx-2 px-1
                                        ${opcion === item ? "bg-white rounded-lg" : "text-gray-600"}
                                        `}
                                    >
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="mt-3">
                            <CardFutbolEncuentro />
                            <CardFutbolEncuentro />
                            <CardFutbolEncuentro />
                            <CardFutbolEncuentro />

                            <button className=" bg-black text-white text-center font-semibold block w-full my-2 p-1 rounded-2xl cursor-pointer">Ver todos los partidos +</button>
                        </div>
                    </div>

                    <div className="flex-1/3">
                        <h1 className="font-bold text-2xl">Clasificación</h1>

                        <div className="mt-2 flex gap-5 items-center justify-around py-1 px-3 bg-gray-200 rounded-lg font-semibold">
                            {listaOpcionesClasificacion.map((item, index) => (
                                <p
                                key={index}
                                onClick={() => setOpcionClasificacion(item)}
                                className={`flex-1 text-center rounded-lg cursor-pointer ${opcionClasificacion === item ? "bg-white" : " text-gray-600"}`}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                        <br />
                        <TablaPosiciones />
                        <button className=" bg-black text-white text-center font-semibold block w-full my-2 p-1 rounded-2xl cursor-pointer">Ver Clasificacion Completa </button>
                    </div>

                </section>

                <section className="my-15 p-5 text-center flex flex-col justify-center items-center gap-5">
                    <h1 className="font-bold text-6xl">Unete a nuestra Liga</h1>
                    <p className="text-lg w-[50%]">¿Quieres formar parte de nuestra comunidad? Inscribe a tu equipo en nuestras competiciones.</p>

                    <div>
                        <button className="cursor-pointer m-2 px-8 py-2 rounded-xl bg-black text-white">Inscribe tu equipo</button>
                        <button className="cursor-pointer m-2 px-8 py-2 rounded-xl border border-b-gray-600">Contactanos</button>
                    </div>
                </section>
            </main>

            <FooterBar />

        </div>
    )
}

export default Home