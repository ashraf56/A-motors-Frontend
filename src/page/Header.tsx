/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import menu from '@/assets/menus.svg'
import logo from '@/assets/logo.png'
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { logout, useCurrentToken, useCurrentUser } from "@/redux/feature/auth/authSlice";
const Header = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(useCurrentToken)
    const UserRole: string | any = useAppSelector(useCurrentUser)

    return (

        <header className="flex h-14 w-full shrink-0 items-center sticky top-0 z-30 bg-black  px-4 md:px-6  font-CustomFont">
            <Link to={'/'} className="mr-6 flex">
                <div className="flex flex-row items-center justify-center gap-2 ">
                    <div><img src={logo} width={30} height={30} /></div>
                    <p className="text-white font-CustomFont font-extrabold uppercase text-xl tracking-widest">A Motors</p>
                </div>

            </Link>
            <nav className="ml-auto hidden lg:flex gap-6 text-white ">
                <Button variant={'ghost'} size={"default"} className="uppercase bg-transparent hover:bg-transparent" >
                    <Link to={'/'}
                    >
                        Home
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase "  >
                    <Link to={'/aboutus'}
                    >
                        About us
                    </Link>
                </Button>
                <Button variant={'ghost'} size={"default"} className="uppercase " >
                    <Link to={'/carlist'}
                    >
                        Car List
                    </Link>
                </Button>
                {user && <Button variant={'ghost'} size={"default"} className="uppercase " >
                    <Link to={`/booking`}
                    >
                        Booking
                    </Link>
                </Button>
                }
                {user && <Button variant={'ghost'} size={"default"} className="uppercase " >
                    <Link to={`/dashboard/${UserRole?.role}/overview`}
                    >
                        Dashboard
                    </Link>
                </Button>}
                {user ?
                    <Button variant={'ghost'} size={"default"} className="uppercase" onClick={() => dispatch(logout())}>


                        Logout

                    </Button>
                    :
                    <Button variant={'ghost'} size={"default"} className="uppercase" >
                        <Link to={'/login'}
                        >
                            Login
                        </Link>
                    </Button>
                }



            </nav>




            {/* this code   for mobile and tablet device */}
            <Sheet>
                <SheetTrigger asChild >
                    <Button variant="outline" className="block lg:hidden ml-auto">
                        <img src={menu} width={20} height={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <nav className="ml-auto flex flex-col gap-6 mt-5">
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/'}
                                    >
                                        Home
                                    </Link>
                                </Button>
                                <Button variant={'outline'} size={"default"} >
                                    <Link to={'/'}
                                    >
                                        About us
                                    </Link>
                                </Button>
                                {user && <Button variant={'ghost'} size={"default"} className="uppercase " >
                                    <Link to={`/booking`}
                                    >
                                        Booking
                                    </Link>
                                </Button>
                                }
                                {user && <Button variant={'outline'} size={"default"} className="uppercase " >
                                    <Link to={`/dashboard/${UserRole?.role}/overview`}
                                    >
                                        Dashboard
                                    </Link>
                                </Button>}
                                {user ?
                                    <Button variant={'outline'} size={"default"} className="uppercase" onClick={() => dispatch(logout())}>


                                        Logout

                                    </Button>
                                    :
                                    <Button variant={'outline'} size={"default"} className="uppercase" >
                                        <Link to={'/login'}
                                        >
                                            Login
                                        </Link>
                                    </Button>
                                }


                            </nav>

                        </SheetDescription>
                    </SheetHeader>

                </SheetContent>
            </Sheet>


        </header>

    );
};

export default Header;