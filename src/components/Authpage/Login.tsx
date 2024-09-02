/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginUserMutation } from "@/redux/feature/auth/authApi";
import { setUser } from "@/redux/feature/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { tokenVerify } from "@/utills/Tokenverify";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const dispatch = useAppDispatch()
    const [loginUser, { data }] = useLoginUserMutation()
    console.log(data);

    const onsubmit: SubmitHandler<FieldValues> = async (data) => {

        const toast1 = toast.loading('loading...', { duration: 2000 })
        try {
            const res = await loginUser(data).unwrap()
            const user = tokenVerify(res.data.token) as any
            dispatch(setUser({ user: user, token: res.data.token }))

            toast.success('Logged in', { id: toast1, duration: 2000 });


        } catch (error) {
            toast.error('Log in faild', { id: toast1, duration: 2000 });
        }


    }
    return (
        <div className="flex flex-col justify-center items-center h-[80vh] my-10 md:my-0">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Log in now</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="grid w-full items-center gap-4">

                            <div className="flex flex-col space-y-1.5 w-full max-w-full">
                                <Label htmlFor="name">Email</Label>
                                <Input id="email" type="email" placeholder="your email" {...register('email', {
                                    required: true
                                })} />
                                {errors.email && <span className="text-sm text-red-700">
                                    {errors.email?.message as string} </span>}
                            </div>


                            <div className="flex flex-col space-y-1.5 mb-2 w-full max-w-full">
                                <Label htmlFor="name">Password</Label>
                                <Input id="password" type="password" placeholder="enter your password" {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters'
                                    },
                                })} />
                                {errors.password && <span className="text-sm text-red-700"> {errors.password?.message as string} </span>}
                            </div>


                        </div>

                        <CardFooter className="flex justify-center mt-10">
                            <Button type="submit" size={'default'} className="w-full">Log in </Button>
                        </CardFooter>

                    </form>
                </CardContent>

            </Card>
        </div>
    );
};

export default Login;