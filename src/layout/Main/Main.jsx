import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="bg-[#f5f5f5]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};
export default Main;