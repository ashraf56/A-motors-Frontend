/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import logo from '@/assets/logo.png'
import { useState } from "react";
import { useCurrentUser } from "@/redux/feature/auth/authSlice";
import { useAppSelector } from "@/redux/hook";
import { adminroutes } from "@/routers/admin.route";
import { userRoutes } from "@/routers/user.route";
import { HomeIcon } from "@radix-ui/react-icons";
const Sidebar = () => {
    const [open, Setopen] = useState(true)
    const user: any = useAppSelector(useCurrentUser)
    return (
       
            <div className={` h-[100vh] bg-gradient-to-b from-[#ebf4f5] to-[#d3f3f1] font-CustomFont text-black p-5 border-r-2    ${open ? 'w-20 lg:w-60' : 'w-20 '} relative duration-300`}>

             
                    
                 <div className={` gap-2 items-center flex`}>
                        <img src={logo} width={50} height={50} alt='logo2' className="block" onClick={() => Setopen(!open)} />
                        <div onClick={() => Setopen(!open)} className={`${!open && 'lg:hidden'} hidden lg:block`}><h1 className={ ` font-CustomFont font-extrabold `}>A -Motors</h1></div>
                    </div>
            

                <ul className=' flex flex-col pt-20 '>

                    {
                        (user!.role === 'admin') ?
                            adminroutes?.map(l => (
                                <li key={l?.id} className=' flex gap-2 font-CustomFont  items-center hover:bg-slate-300 p-2 mt-2 rounded-md text-sm '>
                                    <Link to={l?.route} className=' flex gap-2 items-center '>
                                    <span className="w-6"
                                    >
                                   <img src={l.icon} alt="f"  />
                                    </span>
                                        <span className={`${!open && 'lg:hidden'} hidden lg:block `}> {l?.name}</span>
                                    </Link>
                                </li>
                            )) :
                            userRoutes?.map(l => (
                                <li key={l?.id} className=' flex gap-2 font-CustomFont  items-center hover:bg-slate-300 p-2 mt-2 rounded-md text-sm'>
                                    <Link to={l?.route} className=' flex gap-2 items-center '>
                                    <span className="w-6"
                                    >
                                   <img src={l?.icon} alt="f"  />
                                    </span>
                                        <span className={`${!open && 'lg:hidden'} hidden lg:block `}> {l?.name}</span>
                                    </Link>
                                </li>
                            ))
                    }

                    <li className=' flex gap-2 font-CustomFont  items-center  p-2 mt-2 rounded-md hover:bg-slate-300 text-sm'>
                        <Link to={'/'} className=' flex gap-2 items-center '>
                        <span className="w-6"
                                    >
                                    <HomeIcon className="w-6 h-6 "/>
                                    </span>
                            <span className={`${!open && 'lg:hidden'} hidden lg:block px-2`}> Back to Home</span>
                        </Link>
                    </li>

                </ul>


            </div>
       
    );
};

export default Sidebar;