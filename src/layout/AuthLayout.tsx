import Authfooter from '@/components/Authpage/Authfooter';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Authfooter />


        </div>
    );
};

export default AuthLayout;