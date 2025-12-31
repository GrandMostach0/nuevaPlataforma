import CardInfo from "./components/CardInfo";
import FooterBar from "../../components/Layouts/FooterBar"

function AdminiHome(){
    return (
        <div className="border-2 border-green-600 p-5">
            <h1 className="text-3xl font-semibold">Panel de administración</h1>
            <p className="text-slate-600">Bienvenido al centro de control de la liga</p>
            <div className="flex items-center justify-between my-8">
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
            </div>


            <section className="flex justify-between gap-8">
                <div className="border flex-1 p-4 rounded-lg">
                    <h1 className="text-lg font-semibold">Actividad Reciente</h1>
                    <p className="text-slate-600 text-sm">Últimas acciones en el sistema</p>

                    <section className="flex items-center justify-between text-sm my-3 border p-2 rounded-lg text-slate-600">
                        <p>LOGO</p>
                        <div>
                            <p className="font-semibold text-black text-base">Nueva liga creada</p>
                            <span>Liga Juvenil 2025 - División Norte</span>
                        </div>
                        <p>Hace 1h</p>
                    </section>

                    <section className="flex items-center justify-between text-sm my-3 border p-2 rounded-lg text-slate-600">
                        <p>LOGO</p>
                        <div>
                            <p className="font-semibold text-black text-base">Nueva liga creada</p>
                            <span>Liga Juvenil 2025 - División Norte</span>
                        </div>
                        <p>Hace 1h</p>
                    </section>

                    <section className="flex items-center justify-between text-sm my-3 border p-2 rounded-lg text-slate-600">
                        <p>LOGO</p>
                        <div>
                            <p className="font-semibold text-black text-base">Nueva liga creada</p>
                            <span>Liga Juvenil 2025 - División Norte</span>
                        </div>
                        <p>Hace 1h</p>
                    </section>

                    <section className="flex items-center justify-between text-sm my-3 border p-2 rounded-lg text-slate-600">
                        <p>LOGO</p>
                        <div>
                            <p className="font-semibold text-black text-base">Nueva liga creada</p>
                            <span>Liga Juvenil 2025 - División Norte</span>
                        </div>
                        <p>Hace 1h</p>
                    </section>

                </div>

                <div className="border flex-1 p-4 rounded-lg">
                    <h1 className="text-lg font-semibold">Acciones Rápidas</h1>
                    <p className="text-slate-600 text-sm">Atajos para tareas comunes</p>
                    <br />
                    <div className="grid grid-cols-2 gap-10">

                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>

                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>
                        
                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>

                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>
                        
                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>

                        <section className="border p-2 rounded-lg text-center">
                            <p>logo</p>
                            <p>Nueva liga</p>
                        </section>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default AdminiHome;