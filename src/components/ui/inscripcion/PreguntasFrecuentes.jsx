import { useState } from "react";

function PreguntasFrecuentes(){

    const acordion = [
        {titulo: "¿Cuándo Comienza la próxima temporada?", contenido: "NOSE"},
        {titulo: "¿Cuál es el costo de inscripción?", contenido: "NOSE"},
        {titulo: "¿Puedo inscribir jugadores durante la temporada?", contenido: "NOSE"},
        {titulo: "¿Qué sucede si no tenemos campo propio?", contenido: "NOSE"},
        {titulo: "¿Cómo se organiza los playoffs?", contenido: "NOSE"},
        {titulo: "¿Qué documentos necesito para inscribir a mi equipo?", contenido: "NOSE"},
        {titulo: "¿Hay premios para los equipos ganadores?", contenido: "NOSE"},
    ]

    const [isOpen, setIsOpen] = useState(null);

    return(
        <div>
            <h1 className="text-2xl font-semibold">Preguntas Frecuentes</h1>
            <p>Respuestas a las dudas más comunes sobre el proceso de inscripción.</p>
            <br />

            {acordion.map((item, index) => (
                <div className="mb-2 acordion border-b border-slate-300" key={index}>
                    <p className="cursor-pointer p-3 font-semibold hover:underline" onClick={() => setIsOpen(isOpen === index ? null : index)}>{item.titulo}</p>

                    <div
                        className={`overflow-hidden px-3 transition-all duration-300 ease-in-out
                        ${isOpen === index ? "max-h-90 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        {item.contenido}
                    </div>

                </div>
            ))}

        </div>
    )
}

export default PreguntasFrecuentes;