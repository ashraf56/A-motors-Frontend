import App from "@/App";
import Auth from "@/Auth";
import Login from "@/components/Authpage/Login";
import Signup from "@/components/Authpage/Signup";
import CarDetails from "@/components/CarlistingCompo/CarDetails";
import ProtectedRoute from "@/components/Protectedroute/ProtectedRoute";
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
    
])


