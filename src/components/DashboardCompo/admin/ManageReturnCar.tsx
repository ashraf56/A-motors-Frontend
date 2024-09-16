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


const ManageReturnCar = () => {
    const { data: allbooking, isLoading } = useGetallBookingQuery(undefined,{pollingInterval:3000})

    
 
 
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
                        <TableHead className=""> name</TableHead>
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
                    {allbooking?.data?.map((p: any) => (
                        <TableRow key={p._id}>
                            <TableCell className="font-medium">{p.car.name}</TableCell>
                            <TableCell className="font-medium">{p.user.email}</TableCell>
                            <TableCell className="font-medium">{p.car.status}</TableCell>
                            <TableCell className="font-medium">{p.startTime}</TableCell>
                            <TableCell className="font-medium">{p.endTIme||'N/A'}</TableCell>
                            <TableCell className="font-medium text-center">{p.bookingStatus}</TableCell>
                            <TableCell className="font-medium text-center">{p.totalCost}</TableCell>

                            <TableCell className="font-medium flex gap-3 justify-center text-center items-center">
<Button variant={'outline'} size={'sm'}>Return car</Button>
                               
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