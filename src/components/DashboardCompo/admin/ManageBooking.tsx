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
import { useApproveBookingMutation, useCencleBookingMutation, useGetallBookingQuery } from "@/redux/feature/bookings/bookingApi";
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/feature/auth/authSlice";
const ManageBooking = () => {
    const { data: allbooking, isLoading } = useGetallBookingQuery(undefined,{pollingInterval:3000})
   const [CencleBooking] = useCencleBookingMutation()
 const [ApproveBooking]= useApproveBookingMutation()
 const user:any = useAppSelector(useCurrentUser)
    const handleCencleBooking = async (id: string | null) => {
        const loading = toast.loading('loading....')
        try {
         const res = await CencleBooking(id)
         if (res?.data?.success === true) {
          toast.success('Booking cencled successfully', { id: loading, duration: 2000 })
         }
    
        } catch (error: any) {
          toast.error(error, { id: loading, duration: 2000 })
        }
      }
    const handleApproveBooking = async (id: string | null) => {
        const loading = toast.loading('loading....')
        try {
         const res = await ApproveBooking(id)
        if (res?.data?.success === true) {
          toast.success('Booking Approved successfully', { id: loading, duration: 2000 })
        }
    
        } catch (error: any) {
          toast.error(error, { id: loading, duration: 2000 })
        }
      }


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
                            <TableCell className="font-medium">{p.startTime}</TableCell>
                            <TableCell className="font-medium">{p.endTime||'N/A'}</TableCell>
                            <TableCell className={`font-medium text-center ${p.bookingStatus==='completed'&& 'text-green-600'}`}>{p.bookingStatus}</TableCell>                            <TableCell className="font-medium text-center">{p.totalCost}</TableCell>

                            <TableCell className="font-medium flex gap-3 justify-center text-center items-center">

                                <Button size={'sm'} onClick={()=>handleApproveBooking(p._id)} > Approve</Button>
                              {p.bookingStatus === 'approved' && user?.role !=='admin'  ? <Button size={'sm'} disabled>Cencle </Button> :<Button size={'sm'}  onClick={()=>handleCencleBooking(p._id)}>Cencle </Button>}
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