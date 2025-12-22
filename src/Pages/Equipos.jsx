import NavBar from "../components/Layouts/NavBar";
import { CardEquipo } from "../components/ui/CardEquipo";
import FooterBar from "../components/Layouts/FooterBar";
import { useState } from "react";

function Equipos() {

    const listaCategorias = ["Primera División", "Segunda División", "Tercera División"];
    const lsitaCiudades = ["Ciudad Norte", "Ciudad Sur", "Ciudad Este", "Ciudad Oeste", "Ciudad Centro",];

    const [mostrarSubMenu, setMostrarSubMenu] = useState(null);
 
    const [opcionCategoria, setOpcionCategoria] = useState(listaCategorias[0]);
    const [opcionCiudad, setOpcionCiudad] = useState(lsitaCiudades[0]); 

    return (
        <div>
            <NavBar />
            
            <main className="p-5">
                <section className="mt-5">
                    <h1 className="text-3xl font-bold mb-1.5">Equipos</h1>
                    <p>Descubre todos los equipos participantes en la liga</p>
                    <br />

                    <div className="flex justify-between items-center">
                        <form action="#">
                            <input  className="border border-slate-300 px-2 py-1 mr-2 rounded-lg w-60" type="search" placeholder="Buscar equipos ..."/>
                            <button className="border px-2 py-1 bg-black text-white rounded-lg cursor-pointer">Enviar</button>
                        </form>

                        <div>
                            
                            <div className="relative inline-block mx-2">
                                <p className="border text-center border-slate-300 px-4 py-1 rounded-lg cursor-pointer w-45" onClick={() => setMostrarSubMenu(mostrarSubMenu === 'categoria' ? null : "categoria")}>{opcionCategoria}</p>

                                <div className={`absolute border w-full mt-2 bg-white p-2 border-slate-300 rounded-lg ${mostrarSubMenu === "categoria" ? "block": "hidden"}`}>
                                    {listaCategorias.map((item, index) => (
                                        <p 
                                            key={index}
                                            className={`mb-1 cursor-pointer`}
                                            onClick={() => {
                                                setOpcionCategoria(item)
                                                setMostrarSubMenu(null)
                                            }}
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="relative inline-block mx-2">
                                <p className="border text-center border-slate-300 px-4 py-1 rounded-lg cursor-pointer w-45" onClick={() => setMostrarSubMenu(mostrarSubMenu === 'ciudad' ? null : 'ciudad')}>{opcionCiudad}</p>

                                <div className={`absolute border w-full mt-2 bg-white p-2 border-slate-300 rounded-lg ${mostrarSubMenu === 'ciudad' ? "block": "hidden"}`}>
                                    {lsitaCiudades.map((item, index) => (
                                        <p 
                                            key={index}
                                            className={`mb-1 cursor-pointer`}
                                            onClick={() => {
                                                setOpcionCiudad(item)
                                                setMostrarSubMenu(null)
                                            }}
                                        >
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section class="py-4 grid grid-cols-4 gap-6">
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                    <CardEquipo />
                </section>
                
            </main>

            <FooterBar />
        </div>
    )
}

export default Equipos;