/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCurrentToken, useCurrentUser } from "@/redux/feature/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdmin = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(useCurrentToken)
    const user: any = useAppSelector(useCurrentUser)
    console.log(user);

    if (!token || user.role === 'user') {
        return <Navigate to='/' replace={true} />
    }
    return children
};

export default ProtectedAdmin;