
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen relative">

            
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;