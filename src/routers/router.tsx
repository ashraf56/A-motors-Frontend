import App from "@/App";
import Auth from "@/Auth";
import Login from "@/components/Authpage/Login";
import Signup from "@/components/Authpage/Signup";
import CarDetails from "@/components/CarlistingCompo/CarDetails";
import AdminOverview from "@/components/DashboardCompo/admin/AdminOverview";
import ManageBooking from "@/components/DashboardCompo/admin/ManageBooking";
import ManageReturnCar from "@/components/DashboardCompo/admin/ManageReturnCar";
import MangeCar from "@/components/DashboardCompo/admin/MangeCar";
import UserManegment from "@/components/DashboardCompo/admin/UserManegment";
import PaymentManegment from "@/components/DashboardCompo/user/PaymentManegment";
import Userbooking from "@/components/DashboardCompo/user/Userbooking";
import UserOverview from "@/components/DashboardCompo/user/UserOverview";
import ProtectedRoute from "@/components/Protectedroute/ProtectedRoute";
import Dashboard from "@/Dashboard";
import Aboutus from "@/page/Aboutus";
import Booking from "@/page/Booking";
import Carlist from "@/page/Carlist";
import Home from "@/page/Home";
import { createBrowserRouter } from "react-router-dom";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/aboutus',
                element: <Aboutus />
            },
            {
                path: '/carlist',
                element: <Carlist />
            },
            {
                path: '/carlist/:id',
                element: <CarDetails />
            },
            {
                path: '/booking',
                element: <ProtectedRoute><Booking /></ProtectedRoute> 
            },
        ]
    },
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            {
                
                path:'admin/admin-overview',
                element:<AdminOverview/>
            },
            {
               
                path:'admin/manage-booking',
                element:<ManageBooking/>
            },
            {
               
                path:'admin/manage-car',
                element:<MangeCar/>
            },
            {
                
                path:'admin/manage-return-car',
                element:<ManageReturnCar/>
            },
            {
                
                path:'admin/user-management',
                element:<UserManegment/>
            },
            
        
            {
                
                path:'user/user-overview',
                element:<UserOverview/>
            },
            {
                
                path:'user/user-booking',
                element:<Userbooking/>
            },
            {
                
                path:'user/manage-payment',
                element:<PaymentManegment/>
            },

        
        ]
    },
    
])


