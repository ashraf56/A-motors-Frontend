
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

const AddBooking = ({ book }: any) => {
    const [CreateABooking] = useCreateABookingMutation()
    const usersInfo: any = useAppSelector(useCurrentUser)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data: any) => {
        const time = data.startTime
        // const [hr, min] = time.split(':')
        // const timeperiod = hr >= 12 ? "PM" : "AM"

        // const formatedHr = (hr % 12) || 12;

        // const formatedStartTime = `${formatedHr}:${min} ${timeperiod}`

        const bookinginfo = {
            car: book._id,
            nid: data.nid,
            user: usersInfo!.id!,
            license: data.DrivingLicense,
            startTime: time,
            date: data.date,
            bookingStatus: 'processing',
            paymentStatus: 'pending'

        }

        const loading = toast.loading('loading...')
        try {
            const res = await CreateABooking(bookinginfo)
            if (res.data.success === true) {
                toast.success('booking under processing', { id: loading, duration: 2000 })
                reset()
            }

        } catch (error) {
            toast.error('booking not completed', { id: loading, duration: 2000 })
        }


    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'sm'} >Make Request for booking</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] font-CustomFont">
                    <DialogHeader>
                        <DialogTitle>{book.name}</DialogTitle>

                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    NID
                                </Label>
                                <Input  {...register('nid')} className="col-span-3" />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Driving License
                                </Label>
                                <Input type="text"  {...register('DrivingLicense')} className="col-span-3" />
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
                            <Button type="submit">Request now</Button>
                        </DialogFooter></form>
                </DialogContent>

            </Dialog>
        </div>
    );
};

export default AddBooking;