import NavBar from "../components/Layouts/NavBar";
import FooterBar from "../components/Layouts/FooterBar";
import CardFutbolEncuentro from "../components/ui/CardFutbolEncuentro";

import { useState } from "react";

function Partidos() {

    const listaCategorias = ["Todas las Categorías", "Fútbol Mayor", "Fútbol Infantil", "Fútbol Femenil"];
    const listaOpcionesPartidos = ["Próximos Partidos", "Resultados", "Calendario"];
    const [opcionTipoPartido, setOpcionTipoPartido] = useState(listaOpcionesPartidos[0]);
    const [subMenu, setSubMenu] = useState(true);
    const [opcionSeleccionado, setOpcionSeleccionado] = useState(listaCategorias[0]);

    return (
        <div>
            <NavBar />

            <section className="h-[40vh] text-center flex flex-col justify-center items-center gap-4">
                <h1 className="font-bold text-6xl">Partidos</h1>
                <p className="text-lg">Consulta todos los partidos de nuestras competiciones, resultados y próximos encuentros.</p>
            </section>

            <main className="p-4">
                <section className="flex items-center justify-between p-1">
                    <form action="#">
                        <input className="border rounded-lg mr-2 px-2 py-1 w-60" type="search" placeholder="Buscar partido..."/>
                        <button className="border px-2 py-1 bg-black text-white rounded-lg" type="submit">Buscar</button>
                    </form>

                    <div className="flex gap-4">
                        <div className="relative">
                            <p className="border border-slate-300 px-4 py-1 rounded-lg cursor-pointer w-45 text-center" onClick={() => setSubMenu(!subMenu)}>{opcionSeleccionado}</p>

                            <div className={`absolute border border-slate-300 mt-2 w-full p-2 bg-white rounded-lg cursor-pointer ${subMenu == true ? "hidden": "block"}`}>
                                <p className="font-bold">{listaCategorias[0]}</p>
                                {listaCategorias.slice(1).map((item, index) => (
                                    <p
                                        key={index}
                                        className={`my-1`}
                                        onClick={() => {
                                            setOpcionSeleccionado(item)
                                            setSubMenu(!subMenu)
                                        }}
                                    >{item}</p>
                                ))}
                            </div>
                        
                        </div>

                        <div className="border border-slate-300 px-4 py-1 rounded-lg cursor-pointer">
                            <p>12 de Diciembre de 2025</p>
                        </div>

                    </div>
                </section>

                <section className="my-3 p-2 rounded-lg bg-slate-100 font-semibold inline-block">
                    {listaOpcionesPartidos.map((item, index) => (
                        <p 
                            key={index}
                            className={`inline-block mx-2 px-2 py-1 rounded-lg cursor-pointer ${opcionTipoPartido == item ? "bg-white": "text-gray-400"}`}
                            onClick={() => setOpcionTipoPartido(item)}
                        >{item}</p>
                    ))}
                </section>

                <div className="my-2">
                    <p className="font-semibold text-lg">Sábado, 10 Mayo 2025</p>
                    <div className="grid grid-cols-3 gap-4 my-2">
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                    </div>
                </div>

                <div className="my-2">
                    <p className="font-semibold text-lg">Domingo, 11 Mayo 2025</p>
                    <div className="grid grid-cols-3 gap-4 my-2">
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                        <CardFutbolEncuentro />
                    </div>
                </div>
                <br />
                <button className="m-auto w-fit block px-6 py-1.5 bg-black text-white rounded-lg cursor-pointer">Ver calendario Completo</button>
                <br /><br />
            </main>

            <FooterBar />

        </div>
    )
}

export default Partidos;