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
import { useReturnCarMutation } from "@/redux/feature/cars/carsApi";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
const Returncar = ({ book }: any) => {
    const [returnCar] = useReturnCarMutation()
    const { register, handleSubmit, reset , formState: { errors } } = useForm();
    const onSubmit = async (data: any) => {
        const time = data.endTime
        // const [hr, min] = time.split(':')
        // const timeperiod = hr >= 12 ? "PM" : "AM"

        // const formatedHr = (hr % 12) || 12;

        // const formatedEndTime = `${formatedHr}:${min} ${timeperiod}`

        const returnCArinfo = {
            bookingId: book._id,
            endTime: time,
        }


        const loading = toast.loading('loading...', {duration:2000})
        try {
            const res:any = await returnCar(returnCArinfo)
           
            if (res?.data.success === true) {
                toast.success( res.data.message, { id: loading , duration:2000})
                  reset()
            }else{
                toast.error('Car return not success', { id: loading , duration:2000})
          
            }
           
        } catch (error) {
            toast.error('Something error', { id: loading ,duration:2000})
        }


    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'sm'} variant={'outline'} >Return car</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-3xl font-CustomFont">
                    <DialogHeader>
                        <DialogTitle>{book.car.name}</DialogTitle>

                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=" gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Enter End time
                                </Label>
                                <Input type="time" {...register('endTime', {required:'Enter end time '})} className="col-span-3" />
                                
                            </div>

                            {
                                    errors.endTime?.message && <span className="text-sm text-red-700">
                                {errors.endTime?.message as string} </span>
                                }



                        </div>
                        <DialogFooter>
                            <Button type="submit">Return now</Button>
                        </DialogFooter></form>
                </DialogContent>

            </Dialog>
        </div>
    );
};

export default Returncar;