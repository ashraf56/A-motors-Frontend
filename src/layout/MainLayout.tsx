
import Header from "@/page/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-full min-h-screen relative">

            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;