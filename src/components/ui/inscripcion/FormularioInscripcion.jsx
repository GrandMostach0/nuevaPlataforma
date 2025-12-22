export default function FormularioInscripcion(){
    return(
        <div>
            <form action="#">
                <h1 className="text-lg font-semibold">Informació del Equipo</h1>
                <p>Proporciona los datos básicos de tu equipo para la inscripción.</p>

                <div className=" p-2 flex items-center justify-between mt-2">
                    <div className="flex-1">
                        <label htmlFor="NombreEquipo" className="font-semibold">Nombre del Equipo</label>
                        <input type="text" name="NombreEquipo" id="NombreEquipo" placeholder="Nombre del Equipo"/>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="FechaFundacion" className="font-semibold">Fecha de Fundación</label>
                        <input type="date" name="FechaFundacion" id="FechaFundacion" placeholder="Fecha Fundación"/>
                    </div>
                </div>

                <div className=" p-2 flex items-center justify-between">
                    <div className="flex-1">
                        <label htmlFor="CategoriaEquipo" className="font-semibold">Categoría</label>
                        <select name="CategoriaEquipo" id="CategoriaEquipo">
                            <option value="0">Selecciona una categoría</option>
                            <option value="1">Juvenil</option>
                            <option value="2">Mayor</option>
                            <option value="3">Femenil</option>
                        </select>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="DivisionEquipo" className="font-semibold">Divisón</label>
                        <select name="DivisionEquipo" id="DivisionEquipo">
                            <option value="0">Seleccione una divisón</option>
                            <option value="1">Primera división</option>
                            <option value="2">Segunda división</option>
                            <option value="3">Tercera división</option>
                        </select>
                    </div>
                </div>
                <br />

                <h1 className="text-lg font-semibold">Información de Contacto</h1>
                <p>Datos de la persona responsable del equipo.</p>

                <div className=" p-2 flex items-center justify-between mt-2">
                    <div className="flex-1">
                        <label htmlFor="Nombres" className="font-semibold">Nombres</label>
                        <input type="text" name="Nombres" id="Nombres" placeholder="Jorge Alonso"/>
                    </div>

                    <div className="flex-1">
                        <label htmlFor="PrimerApellido" className="font-semibold">Primer Apellido</label>
                        <input type="input" name="PrimerApellido" id="PrimerApellido" placeholder="Fernandez"/>
                    </div>

                    
                    <div className="flex-1">
                        <label htmlFor="SegundoApellido" className="font-semibold">Segundo Apellido</label>
                        <input type="text" name="SegundoApellido" id="SegundoApellido" placeholder="Hernandez"/>
                    </div>
                </div>

                <div className=" p-2 flex items-center justify-between mt-2">
                    <div className="flex-1">
                        <label htmlFor="Telefono" className="font-semibold">Télefono</label>
                        <input type="text" name="Telefono" id="Telefono" placeholder="9994552047"/>
                    </div>
                    
                    <div className="flex-1">
                        <label htmlFor="Correo" className="font-semibold">Correo eléctronico:</label>
                        <input type="input" name="Correo" id="Correo" placeholder="user@gmail.com"/>
                    </div>
                </div>

                <div className=" p-2 flex items-center justify-center mt-2 gap-8">
                    <button className="border px-4 py-2 flex-1 rounded-lg cursor-pointer bg-black text-white">Enviar Solicitud de Inscripción</button>
                    <button className="border-none px-4 py-2 flex-1 rounded-lg cursor-pointer bg-red-300 font-semibold">Cancelar</button>
                </div>

            </form>
        </div>
    )
}