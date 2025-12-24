import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../styles/stylesIndex.css'

//vistas
import App from "../App";
import Ligas from "../Pages/Ligas";
import Partidos from "../Pages/Partidos";
import PartidoDetalle from "../Pages/PartidoDetalle";

import Equipos from "../Pages/Equipos";
import EquipoDetalle from "../Pages/EquipoDetalle";

import Home from "../Pages/Home";
import VentanaDos from "../VentanaDos";
import NotFound from "../Pages/NotFound";
import InformacionInscripcion from "../Pages/InformacionInscripcion";

import AdminRouters from "./adminRouters";

export default function AppRouters(){
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ligas" element={<Ligas />} />
                <Route path="/partidos" element={<Partidos />} />
                <Route path="/partidoDetalle" element={<PartidoDetalle />} />
                <Route path="/equipos" element={<Equipos />} />
                <Route path="/equipoDetalle" element={<EquipoDetalle />} />
                
                <Route path="/inscripcion" element={<InformacionInscripcion />} />
                <Route path="/dos" element={<VentanaDos />} />
                <Route path="/admin/*" element={<AdminRouters />} />
                

                {/* Error 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
