/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetallBookingQuery } from "@/redux/feature/bookings/bookingApi";
import Returncar from "./Return/Returncar";


const ManageReturnCar = () => {
    const { data: allbooking, isLoading } = useGetallBookingQuery(undefined, { pollingInterval: 1000 })




    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont">
            <div className="pb-5" >
                <h1 className='text-3xl font-bold'>Manage Return car </h1>
            </div>
            <div className='w-full max-w-full mx-auto relative h-96 overflow-y-scroll'>
                <Table>
                    <TableHeader>
                        <TableRow className="sticky  z-30">
                            <TableHead className=""> name</TableHead>
                            <TableHead className=""> Date</TableHead>
                            <TableHead className="">Email</TableHead>
                            <TableHead className="">Car status</TableHead>
                            <TableHead className=''>Start time</TableHead>
                            <TableHead className=''>End time</TableHead>
                            <TableHead className=''>Booking Status</TableHead>
                            <TableHead className=''>totalCost</TableHead>
                            <TableHead className=' text-center'>Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="-z-30">
                        {allbooking?.data?.filter((ab:any)=> ab.bookingStatus != 'processing').map((p: any) => (
                            <TableRow key={p._id}>
                                <TableCell className="font-medium">{p.car.name}</TableCell>
                                <TableCell className="font-medium">{p.date}</TableCell>
                                <TableCell className="font-medium">{p.user.email}</TableCell>
                                <TableCell className="font-medium">{p.car.status}</TableCell>
                                <TableCell className="font-medium">{p.startTime}</TableCell>
                                <TableCell className="font-medium">{p.endTime || 'N/A'}</TableCell>
                                <TableCell className={`font-medium text-center ${p.bookingStatus==='completed'&& 'text-green-600'}`}>{p.bookingStatus}</TableCell>
                                <TableCell className="font-medium text-center">{p.totalCost}</TableCell>

                                <TableCell className="font-medium flex gap-3 justify-center text-center items-center">
                                    { p.totalCost <= 0 &&
                                    <Returncar book={p} />
                                    }
                                    

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default ManageReturnCar;