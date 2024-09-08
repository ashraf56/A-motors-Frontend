/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
const AddBooking = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (info: any) => {

       console.log(info);
       
      reset()
    }

    return (
        <div>
             <Dialog >
                <DialogTrigger asChild>
                    <Button variant="outline">Book now</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px] font-CustomFont">

                    <DialogHeader>
                        <DialogDescription>
                            Create a product.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Product name
                                </Label>
                                <Input  {...register('name')} placeholder="product name" className="col-span-3" />
                            </div>
                            
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Price
                                </Label>
                                <Input type="number" {...register('price')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Stock
                                </Label>
                                <Input type="number" {...register('stockQuantity')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    rating
                                </Label>
                                <Input type="text" {...register('rating')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Image
                                </Label>
                                <Input type="text" {...register('image')} className="col-span-3" />
                            </div>
                            

                        </div>
                        <DialogFooter >
                            <Button type="submit">Create now</Button>
                        </DialogFooter></form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AddBooking;