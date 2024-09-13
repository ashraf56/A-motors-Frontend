import Sidebar from "@/components/DashboardCompo/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
     
            <div className=' flex gap-2 font-CustomFont'>
            <Sidebar></Sidebar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;