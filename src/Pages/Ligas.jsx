import { useState } from "react";
import NavBar from "../components/Layouts/NavBar";
import CardLiga from "../components/ui/CardLiga";
import FooterBar from "../components/Layouts/FooterBar";

function Ligas(){

    const listaLigas = ["Fútbol Infatil", "Fútbol Juvenil", "Fútbol Mayor"];
    const [opcionMenu, setOpcionMenu] = useState(listaLigas[0]);

    return(
        <div>
            <NavBar />
            
            <main className="p-5">
                <section className="mt-5">
                    <h1 className="text-3xl font-bold mb-1.5">Ligas</h1>
                    <p>Explora todas nuestras competiciones</p>
                    <br />

                    <div className="p-2 bg-gray-100 rounded-lg font-semibold">
                        {listaLigas.map((item, index) => (
                            <p
                                key={index}
                                className={`rounded-lg inline-block px-2 py-1 mx-3 cursor-pointer ${opcionMenu == item ? "bg-white" : " text-gray-400"}`}
                                onClick={() => setOpcionMenu(item)}
                            > {item} </p>
                        ))}
                    </div>

                </section>
                
                <section className="my-8">
                    <h1 className="font-bold text-2xl">{listaLigas[0]}</h1>
                    <br />
                    <div className="grid grid-cols-4 gap-4">
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                    </div>
                </section>

                <section className="my-8">
                    <h1 className="font-bold text-2xl">{listaLigas[1]}</h1>
                    <br />
                    <div className="grid grid-cols-4 gap-4">
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                    </div>
                </section>

                <section className="my-8">
                    <h1 className="font-bold text-2xl">{listaLigas[2]}</h1>
                    <br />
                    <div className="grid grid-cols-4 gap-4">
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                        <CardLiga />
                    </div>
                </section>

                
            </main>

            <FooterBar />

        </div>
    )
}

export default Ligas;