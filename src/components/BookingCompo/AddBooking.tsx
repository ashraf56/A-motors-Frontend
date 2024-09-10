
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useCreateABookingMutation } from "@/redux/feature/bookings/bookingApi";
import { useAppSelector } from "@/redux/hook";
import { useCurrentUser } from "@/redux/feature/auth/authSlice";

const AddBooking = ({book}) => {
    const currentUser:any = useAppSelector(useCurrentUser)
    const[CreateABooking] = useCreateABookingMutation()

    const { register, handleSubmit,  } = useForm();
    const onSubmit = async (data: any) => {
        console.log(data);
        const bookinginfo ={
            car:book._id,
            startTime:data.startTime,
            date:data.date

        }
const loading = toast.loading('loading...')
try {
    const res = await CreateABooking(bookinginfo)
    if (res) {
        toast.success('booking under process', {id:loading})
    }
} catch (error) {
    toast.error('booking not completed', {id:loading})
}


    }
    return (
        <div>
        <Dialog>
        <DialogTrigger asChild>
            <Button size={'sm'} >Make a book</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] font-CustomFont">
            <DialogHeader>
                <DialogTitle>{book.name}</DialogTitle>

            </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4 py-4">

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          NID/Passport
                        </Label>
                        <Input  {...register('nid/passport')}  className="col-span-3" />
                    </div>
                    
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                        Driving License
                        </Label>
                        <Input type="number"  {...register('DrivingLicense')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                           payment number
                        </Label>
                        <Input type="number" {...register('payment')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                           Start time
                        </Label>
                        <Input type="time" {...register('startTime')} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                         Date
                        </Label>
                        <Input type="date" {...register('date')} className="col-span-3" />
                    </div>
                                      
                    

                </div>
                <DialogFooter>
                    <Button type="submit">Make</Button>
                </DialogFooter></form>
        </DialogContent>

    </Dialog>
</div>
    );
};

export default AddBooking;