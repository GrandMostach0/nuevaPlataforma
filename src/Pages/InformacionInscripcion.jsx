import { useState } from "react";
import NavBar from "../components/Layouts/NavBar";
import FooterBar from "../components/Layouts/FooterBar";
import CardInformacion from "../components/ui/inscripcion/cardInformacion";

import FormularioInscripcion from "../components/ui/inscripcion/FormularioInscripcion"
import Requisito from "../components/ui/inscripcion/Requisitos";
import PreguntasFrecuentes from "../components/ui/inscripcion/PreguntasFrecuentes";

function InformacionInscripcion() {

    const listaOpciones = ["Formulario", "Requisitos", "Preguntas Frecuentes"];
    const [opcion, setOpcion] = useState(listaOpciones[0]);

    const renderSecction = () => {
        switch(opcion) {
            case "Formulario":
                return <FormularioInscripcion />
            
            case "Requisitos":
                return <Requisito />
                
            case "Preguntas Frecuentes":
                return <PreguntasFrecuentes />
            
            default:
                return null
        }
    }

    return (
        <div>
            <NavBar />
            
            <section className="h-[40vh] text-center flex flex-col justify-center items-center gap-4">
                <h1 className="font-bold text-6xl">Inscribe tu equipo en la Liga</h1>
                <p className="text-lg">Forma parte de nuestra comunidad deportiva y compite en las mejores instalaciones con equipos de tu nivel.</p>
            </section>

            <main className="p-4">

                <div className="flex items-center justify-center gap-8 p-2">
                    <CardInformacion />
                    <CardInformacion />
                    <CardInformacion />
                </div>
                <br />
                <div className="flex items-center justify-between mx-20 mt-2 p-2 gap-7 bg-slate-200 rounded-lg">
                    {listaOpciones.map((item, index) => (
                        <p 
                            key={index}
                            className={`flex-1 text-center rounded-lg py-1 cursor-pointer ${opcion == item ? "bg-white": "text-gray-600"}`}
                            onClick={() => setOpcion(item)}
                        >{item}</p>
                    ))}
                </div>
                
                <section className="border mx-20 my-3 px-5 py-2 border-slate-300 rounded-lg">
                    {renderSecction()}
                </section>

            </main>

            <div className="text-center mt-15 mb-25">
                <h1 className="text-2xl font-semibold">¿Necesitas Información Adicional?</h1>
                <p className="my-2">Nuestro equipo está disponible para resolver cualquier duda sobre el proceso de inscripción.</p>
                <button className="block m-auto border px-4 py-2 bg-black text-white rounded-xl">Contactar al equipo de la liga</button>
            </div>

            <FooterBar />
        </div>
    )
}

export default InformacionInscripcion;