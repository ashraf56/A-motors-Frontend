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
import { useGetUpdateUserInfoMutation } from "@/redux/feature/auth/authApi";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
const UserUpdateinfo = ({ userinfo }: any) => {
    // const usersInfo:any = useAppSelector(useCurrentUser)

    const { register, handleSubmit, reset   } = useForm();
 const [ getUpdateUserInfo] = useGetUpdateUserInfoMutation()
    const onSubmit = async (data: any) => {
        
        const updatedUserinfo = {
            id: userinfo._id,
            info: {
                name: data.name,
                email:data.email,
                address:data.adress,
                phone:data.phone 
            }
        }
        const loading = toast.loading('loading...', {duration:2000})
        try {
            const res:any = await getUpdateUserInfo(updatedUserinfo)
           
            if (res?.data.success === true) {
                toast.success( res?.data.message, { id: loading , duration:2000})
                  reset()
            }
           
        } catch (error) {
            toast.error('Something error', { id: loading ,duration:2000})
        }


    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'icon'} variant={'outline'} className="rounded-full" ><PencilIcon className="w-5 h-5"/></Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-3xl font-CustomFont">
                    <DialogHeader>
                        <DialogTitle>{userinfo.name}</DialogTitle>

                    </DialogHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-1 gap-4 py-4">

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    name
                                </Label>
                                <Input type="text" defaultValue={userinfo.name} {...register('name')} className="col-span-3" />
                                
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                   Email
                                </Label>
                                <Input type="email" defaultValue={userinfo.email} {...register('email')} className="col-span-3" />
                                
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Phone 
                                </Label>
                                <Input type="number" defaultValue={userinfo.phone} {...register('phone')} className="col-span-3" />
                                
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                Address 
                                </Label>
                                <Input type="text" defaultValue={userinfo.address} {...register('address')} className="col-span-3" />
                                
                            </div>

                          



                        </div>
                        <DialogFooter>
                            <Button type="submit">Update now</Button>
                        </DialogFooter></form>
                </DialogContent>

            </Dialog>
        </div>
    );
};

export default UserUpdateinfo;