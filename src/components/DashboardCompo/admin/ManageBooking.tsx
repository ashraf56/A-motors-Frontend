/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useGetallBookingQuery } from "@/redux/feature/bookings/bookingApi";
const ManageBooking = () => {
    const { data: allbooking, isLoading } = useGetallBookingQuery(undefined)
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont">
        <div className="pb-5" >
            <h1 className='text-3xl font-bold'>Manage User Bookings</h1>
        </div>
        <div className='w-full max-w-5xl mx-auto relative h-96 overflow-y-scroll'>
            <Table>
                <TableHeader>
                    <TableRow className="sticky  z-30">
                        <TableHead className="w-[200px]"> name</TableHead>
                        <TableHead className="w-[200px]">Email</TableHead>
                        <TableHead className='w-32'>Start time</TableHead>
                        <TableHead className='w-28 text-center'>bookingStatus</TableHead>
                        <TableHead className='w-28 text-center'>totalCost</TableHead>
                        <TableHead className=' text-center'>Customize</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="-z-30">
                    {allbooking?.data?.map((p: any) => (
                        <TableRow key={p._id}>
                            <TableCell className="font-medium">{p.car.name}</TableCell>
                            <TableCell className="font-medium">{p.user.email}</TableCell>
                            <TableCell className="font-medium">{p.startTime}</TableCell>
                            <TableCell className="font-medium text-center">{p.bookingStatus}</TableCell>
                            <TableCell className="font-medium text-center">{p.totalCost}</TableCell>

                            <TableCell className="font-medium flex gap-3 justify-center text-center items-center">

                                <Button size={'sm'}  > Approve</Button>
                                <Button size={'sm'}  >Cencle </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
    );
};

export default ManageBooking;