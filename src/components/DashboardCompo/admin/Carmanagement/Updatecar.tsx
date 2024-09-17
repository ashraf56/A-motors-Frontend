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
import { useEffect, useState } from "react";
import { ImageUplodonCloudinery } from "@/utills/ImageUplodonCloudinery";
import { useUpdateSingleCarMutation } from "@/redux/feature/cars/carsApi";
import { toast } from "sonner";
import { PencilSquareIcon } from "@heroicons/react/24/outline";


const animatedComponents = makeAnimated();

const Updatecar = ({ p }: any) => {
    const [selectFeature, setSelectFeature] = useState([])

    const [updateSingleCar] = useUpdateSingleCarMutation()

    const handleOnchange = (soption: any) => {
        setSelectFeature(soption)

    }
    const { register, handleSubmit, setValue} = useForm();


    useEffect(() => {
        if (p) {
            setValue('name', p.name);
            setValue('description', p.description);
            setValue('pricePerHour', p.pricePerHour);
            setValue('color', p.color);
            setValue('carType', p.carType);
            setValue('image', p.image);
            setValue('isElectric', p.isElectric);
            setValue('isDeleted', p.isDeleted);
            setValue('features', p.features);
        }
    }, [p, setValue]);



    const onSubmit = async (data: any) => {
        const file = data.image[0];
        const uploadedImageUrl = await ImageUplodonCloudinery(file);


        const selectedFeature = selectFeature.map((option: any) => option.value);
        data.select = selectedFeature
        const updatedcarinfo = {
            id: p._id,
            info: {
                name: data.name,
                description: data.description,
                pricePerHour: Number(data.pricePerHour),
                image: uploadedImageUrl,
                color: data.color,
                carType: data.carType,
                features: data.select,
                isElectric: data.isElectric, 
                isDeleted:data.isDeleted,
            }
        }
   
      
        
        const toast1 = toast.loading('loading...')
        try {
            const res:any = await updateSingleCar(updatedcarinfo)

            if (res?.error?.data?.success === false) {
                toast.error(res?.error?.data?.message, { id: toast1, duration: 2000 });
            }
           else{
             toast.success(res.data.message, { id: toast1, duration: 2000 })
            
           }

        } catch (error) {   
            toast.error('Something wrong', { id: toast1, duration: 2000 });
        }

    }

    return (
        <div className="font-CustomFont h-full">
            <Dialog >
                <DialogTrigger asChild>
                    <Button variant="ghost"><PencilSquareIcon className="w-6 h-6 " /></Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-5xl font-CustomFont">

                    <DialogHeader>
                        <DialogDescription>
                            Update a Car.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    name
                                </Label>
                                <Input defaultValue={p.name} {...register('name')} placeholder=" name" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Description
                                </Label>
                                <Textarea defaultValue={p.description} placeholder="Type product description here." {...register('description')} className='col-span-3' />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label className="text-right">
                                    Price Per Hour
                                </Label>
                                <Input type="number" defaultValue={p.pricePerHour} {...register('pricePerHour')} className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Color
                                </Label>
                                <Input type="text" {...register('color')} defaultValue={p.color} className="col-span-3" />
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
                                <select defaultChecked={p.carType} {...register("carType")} className="col-span-3 font-CustomFont border-2 p-1 rounded-md">
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
                                <select {...register("isElectric")} defaultChecked={p.isElectric} className="col-span-3 font-CustomFont border-2 p-1 rounded-md">

                                    <option value={'true'}>true</option>
                                    <option value={'false'}>false</option>

                                </select>

                            </div>
                            <div className="grid  grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Is Deleted
                                </Label>
                                <select {...register("isDeleted")} defaultChecked={p.isDeleted} className="col-span-3 font-CustomFont border-2 p-1 rounded-md">

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
                                    defaultValue={p.features.map((f: any) => ({ label: f, value: f }))}
                                    options={carFeatures.filter(
                                        (carFeature: { value: any; }) => {
                                            const selectedFeature = p?.features?.map((fe: any) => fe) || [];
                                            return !selectedFeature.includes(carFeature.value);
                                        }
                                    )}
                                />
                            </div>

                        </div>
                        <DialogFooter >
                            <Button type="submit">Update  now</Button>
                        </DialogFooter></form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Updatecar;