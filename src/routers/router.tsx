import App from "@/App";
import Signup from "@/components/Authpage/Signup";
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
                path: '/signup',
                element: <Signup />
            }
        ]
    }
])


