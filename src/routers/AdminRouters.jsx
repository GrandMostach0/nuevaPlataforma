import { Routes, Route  } from "react-router-dom";
import AdminiHome from "../Pages/admin/adminHome";

function AdminRouters(){
    return (
        <Routes >
            <Route path="/" element={<AdminiHome />} />
        </Routes>
    )
}

export default AdminRouters;