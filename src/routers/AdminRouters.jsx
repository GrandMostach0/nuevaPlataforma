import { Routes, Route  } from "react-router-dom";
import AdminiHome from "../Pages/admin/adminHome";
import LayoutAdmin from "../Pages/admin/components/LayoutAdmin";
import Configuracion from "../Pages/admin/Configuracion";
import Apariencia from "../Pages/admin/Apariencia";
import Sistema from "../Pages/admin/components/Sistema";

function AdminRouters(){
    return (
        <Routes >
            <Route element={<LayoutAdmin />}>
                <Route path="/" element={<AdminiHome />} />
                <Route path="/configuracion" element={<Configuracion />} />
                <Route path="/apariencia" element={<Apariencia />} />
                <Route path="/sistema" element={<Sistema />} />
            </Route>
        </Routes>
    )
}

export default AdminRouters;