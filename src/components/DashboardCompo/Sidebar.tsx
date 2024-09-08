import { Link } from "react-router-dom";
import logo from '@/assets/logo.png'
import { useState } from "react";
const Sidebar = () => {
    const [open, Setopen] = useState(true)
    const menulist = [
        { id: 1, name: 'Home', route: '/dashboard' },
        { id: 2, name: 'Task', route: '/dashboard/task' },
        { id: 3, name: 'Analytics', route: '/dashboard' },
        { id: 4, name: 'Projects', route: '/dashboard/task' },
        { id: 5, name: 'Setting', route: '/dashboard/team', space: true },
        { id: 5, name: 'Team', route: '/dashboard/team' }

    ]
    return (
        <div>
            <div className={` h-screen bg-slate-200 font-CustomFont text-black p-5 border-r-2 border-content1-foreground ${open ? 'w-60' : 'w-20 '} relative duration-300`}>

                {!open ?
                    <div className='w-11'>
                        <img src={logo} width={50} height={50} alt='logo1' className={`${open ? 'hidden' : ''} rounded-md `} onClick={() => Setopen(!open)} />
                    </div>
                    :
                    <div className={`${open ? '' : 'hidden'} gap-2 items-center flex`}>
                        <img src={logo} width={50} height={50} alt='logo2' onClick={() => Setopen(!open)} />
                        <div onClick={() => Setopen(!open)}><h1 className=" font-CustomFont font-extrabold">A -motores</h1></div>
                    </div>
                }

                <ul className=' flex flex-col pt-20 '>

                    {
                        menulist?.map(l => (
                            <li key={l?.id} className=' flex gap-2 font-CustomFont  items-center hover:bg-primary-300 p-2 mt-2 rounded-md'>
                                <Link to={l?.route} className=' flex gap-2 items-center '>
                                    <span className={`${!open && 'hidden'}`}> {l?.name}</span>
                                </Link>
                            </li>
                        ))
                    }



                </ul>


            </div>
        </div>
    );
};

export default Sidebar;