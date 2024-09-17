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
import { Textarea } from "@/components/ui/textarea";
import Select from 'react-select';
import { useForm } from "react-hook-form";
import makeAnimated from 'react-select/animated';
import { carCategories, carFeatures } from "../../Constant/constant";
import { useState } from "react";
import { ImageUplodonCloudinery } from "@/utills/ImageUplodonCloudinery";
import { useCreateACarMutation } from "@/redux/feature/cars/carsApi";
import { toast } from "sonner";


const animatedComponents = makeAnimated();

const CreateCar = () => {
    const [selectFeature, setSelectFeature] = useState([])

    const [CreateACar] = useCreateACarMutation()

    const handleOnchange = (soption: any) => {
        setSelectFeature(soption)

    }
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data: any) => {
        const file = data.image[0];
        const uploadedImageUrl = await ImageUplodonCloudinery(file);


        const selectedFeature = selectFeature.map((option: any) => option.value);
        data.select = selectedFeature
        const carinfo = {
            name: data.name,
            description: data.description,
            pricePerHour: Number(data.pricePerHour),
            image: uploadedImageUrl,
            color: data.color,
            carType: data.carType,
            features: data.select,
            status: 'available',
            isDeleted: 'false',
            isElectric: data.isElectric
        }
        const toast1 = toast.loading('loading...')
        try {
            const res:any = await CreateACar(carinfo)
           console.log({res});
           
            if (res?.error?.data?.success === false) {
                toast.error(res?.error?.data?.message, { id: toast1, duration: 2000 });
            }
           else{
             toast.success(res.data.message, { id: toast1, duration: 2000 })
            reset()
           }

        } catch (error) {   
            toast.error('Something wrong', { id: toast1, duration: 2000 });
        }

    }

    return (
        <div className="font-CustomFont h-full">
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="outline">  Create a Car.</Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-5xl font-CustomFont">

                    <DialogHeader>
                        <DialogDescription>
                            Create a Car.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    name
                                </Label>
                                <Input  {...register('name')} placeholder=" name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Description
                                </Label>
                                <Textarea placeholder="Type product description here." {...register('description')} className='col-span-3' />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Price Per Hour
                                </Label>
                                <Input type="number" {...register('pricePerHour')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Color
                                </Label>
                                <Input type="text" {...register('color')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Image
                                </Label>
                                <Input type="file" {...register('image')} className="col-span-3" />
                            </div>
                            <div className="grid  grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Car type
                                </Label>
                                <select {...register("carType")} className="col-span-3 font-CustomFont border-2 p-1 rounded-md">
                                    {
                                        carCategories.map(c => (
                                            <option key={c.value} value={c.value}>{c.label}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className="grid  grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Is Electric
                                </Label>
                                <select {...register("isElectric")} className="col-span-3 font-CustomFont border-2 p-1 rounded-md">

                                    <option value={'true'}>true</option>
                                    <option value={'false'}>false</option>

                                </select>

                            </div>
                            <div className="grid  grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Features
                                </Label>
                                <Select className="w-full col-span-3"
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    isMulti
                                    onChange={handleOnchange}
                                    defaultValue={selectFeature}
                                    options={carFeatures}
                                />
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

export default CreateCar;