import { useState } from "react"
import CardInscripcion from "./CardInscripcion";

export default function Requisito(){
    const acordiones = [
        { titulo: "Requisitos específicos por categoría", contenido: "Contenido del formulario" },
        { titulo: "Proceso de Validación"},
    ];

    const [isOpen, setIsOpen] = useState(null);
    return (
        <div>

            <h1 className="font-bold text-2xl">Requisitos para la Inscripción</h1>
            <p>Todos los equipos deben cumplir con estos requisitos para participar en nuestras ligas.</p>
            <br />

            <div className="grid grid-cols-2 gap-4">
                <CardInscripcion />
                <CardInscripcion />
                <CardInscripcion />
                <CardInscripcion />
            </div>
            <br />

            {acordiones.map((item, index) => (
                <div className="mb-2 acordion border-b border-slate-300" key={index}>
                    <p className="cursor-pointer p-3 font-semibold hover:underline" onClick={() => setIsOpen(isOpen === index ? null : index)}>{item.titulo}</p>

                    <div
                        className={`overflow-hidden px-3 transition-all duration-300 ease-in-out
                        ${isOpen === index ? "max-h-90 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                        <p><strong> Fútbol Mayor (18+ años) </strong></p>
                        <ul className="mb-3">
                            <li>Todos los jugadores deben ser mayores de 18 años</li>
                            <li>Se permite un máximo de 2 jugadores profesionales por equipo</li>
                            <li>Certificado médico de aptitud física para cada jugador</li>
                        </ul>
                        <p><strong> Fútbol Juvenil (15-17 años) </strong></p>
                        <ul className="mb-3">
                            <li>Autorización firmada por padres o tutores</li>
                            <li>Comprobante de estudios vigente</li>
                            <li>Certificado médico de aptitud física para cada jugador</li>
                        </ul>
                        <p><strong> Fútbol Infantil (9-14 años) </strong></p>
                        <ul className="mb-3">
                            <li>Autorización firmada por padres o tutores</li>
                            <li>Acta de nacimiento o documento oficial que acredite la edad</li>
                            <li>Certificado médico de aptitud física para cada jugador</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}