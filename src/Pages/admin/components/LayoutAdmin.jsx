import { Outlet } from "react-router-dom";
import SliderBar from "./SliderBar";

function LayoutAdmin(){
    return (
        <div className="flex">
            <SliderBar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default LayoutAdmin;