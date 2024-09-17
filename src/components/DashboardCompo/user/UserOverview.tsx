/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetSingleUserQuery } from "@/redux/feature/auth/authApi";
import { useCurrentUser } from "@/redux/feature/auth/authSlice";
import { useGetmyAllBookingQuery } from "@/redux/feature/bookings/bookingApi";
import { useAppSelector } from "@/redux/hook";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@radix-ui/react-icons";

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import UserUpdateinfo from "./UserUpdateinfo";
const UserOverview = () => {
    const user: any = useAppSelector(useCurrentUser)
    const { data,isLoading } = useGetSingleUserQuery(user?.id)
    const { data: myBookings } = useGetmyAllBookingQuery(undefined, { pollingInterval: 3000 })
   if (isLoading) {
    return <p>loading...</p>
   }
    return (
        <div className=" w-full h-screen font-CustomFont overflow-y-scroll">
            <div className='bg-gradient-to-r from-[#ff1b6b] to-[#45caff] w-full h-44  rounded-b-2xl'>

            </div>
            <CardContent>

                <Avatar className="w-40 h-40 ml-4 -mt-20">
                    <AvatarFallback className="text-3xl font-extrabold bg-black text-white">{data?.data.name.slice(0, 1)}</AvatarFallback>
                </Avatar>

                <CardHeader>
                    <CardTitle className="flex gap-3 items-center"> <h1 className=" text-2xl font-bold ">
                        {data?.data.name}</h1>
                        <UserUpdateinfo userinfo={data?.data}/>
                    
                    </CardTitle>
                    <CardDescription>
                        <p className=" font-medium text-base py-2 flex gap-2 items-center">
                            <HomeIcon className="w-4 h-4 text-black" />{data?.data.address}</p>
                        <p className="  font-medium flex gap-2 items-center"><EnvelopeIcon className="w-4 h-4 text-black" /> {data?.data.email}</p>
                        <p className="font-medium py-2 flex gap-2 items-center">
                            <PhoneIcon className="w-4 h-4 text-black" /> {data?.data.phone}</p>
                    </CardDescription>

                </CardHeader>

                <CardDescription>
                    <h1>Your Booking History</h1>
                    <div className="py-5 flex flex-col gap-3">
                        {
                            myBookings?.data.length === 0 ? 'You have no complete booking history'
                                : myBookings?.data.filter((m: any) => m.bookingStatus == 'completed').map((mb: any) => (
                                    <Alert>
                                        <AlertTitle className="font-bold">{mb.car.name}</AlertTitle>
                                        <AlertDescription>
                                            {mb.date}
                                            <p > Total Cost <span className="text-red-500 font-bold">${mb.totalCost}</span></p>
                                        </AlertDescription>
                                    </Alert>
                                ))}
                    </div>
                </CardDescription>
            </CardContent>
        </div>
    );
};

export default UserOverview;