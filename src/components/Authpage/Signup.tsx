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
import { useSignUpUserMutation } from "@/redux/feature/auth/authApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";


const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()
    const [SignUpUser, { data }] = useSignUpUserMutation()
    console.log({ data });

    const onsubmit: SubmitHandler<FieldValues> = async (data) => {

        const toast1 = toast.loading('loading...', { duration: 2000 })
        const userData = {
            name: data.name,
            email: data.email,
            role: 'user',
            password: data.password,
            phone: data.phone,
            address: data.address

        }
        console.log({ userData });

        try {
            const res = await SignUpUser(userData)

            if (res) {
                toast.success('Registration completed', { id: toast1, duration: 2000 });
            }
            reset()

        } catch (error) {
            toast.error('Registration  faild', { id: toast1, duration: 2000 });
        }


    }
    return (
        <div className="flex flex-col justify-center font-CustomFont items-center h-[100vh] my-10 md:my-0">
            <Card className="w-full max-w-lg">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="grid w-full items-center gap-4">
                            <div className=" md:flex gap-3 ">
                                <div className="flex flex-col space-y-1.5 w-full max-w-full mb-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" type="text" placeholder="Enter Name" {...register('name',
                                        { required: true })} />
                                </div>
                                <div className="flex flex-col space-y-1.5 w-full max-w-full">
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="email" type="email" placeholder="your email" {...register('email', {
                                        required: true,
                                        pattern: {
                                            value: /^[^@]+@[^@]+\.[^@]+$/,
                                            message: 'Please enter a valid email address',
                                        },
                                    })} />
                                    {errors.email && <span className="text-sm text-red-700">
                                        {errors.email?.message as string} </span>}
                                </div>
                            </div>
                            <div className="md:flex gap-2 ">
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
                                <div className="flex flex-col space-y-1.5 w-full max-w-full">
                                    <Label htmlFor="name">Confirm Password</Label>
                                    <Input id="cp" type="password" placeholder="enter your password"  {...register("cpassword", {
                                        required: true,
                                        validate: (value) =>
                                            value === watch("password") || "The password does not match"
                                    })} />
                                    {errors.cpassword && <span className="text-sm text-red-700">
                                        {errors.cpassword?.message as string} </span>}
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Phone</Label>
                                <Input id="phone" type="number" placeholder="enter phone number" {...register('phone', { required: true })} />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Address</Label>
                                <Input id="address" placeholder="enter phone address" {...register('address')} />
                            </div>

                            <div className="text-sm"                            >
                                <p>Already have an account? <Link to={'/login'}>Log in now</Link></p>
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <Input id="terms"
                                    type="checkbox"
                                    {...register('terms', {
                                        required: {
                                            value: true,
                                            message: 'Please Accept the terms and conditions '
                                        }
                                    })}
                                    className="w-4"
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    <a href="https://www.termsfeed.com/public/uploads/2021/12/sample-terms-conditions-agreement.pdf" target="_blank">Accept terms and conditions</a>
                                </label>

                            </div>
                            {errors.terms && <span className="text-sm text-red-700">
                                {errors.terms?.message as string} </span>}
                              
                        </div>

                        <CardFooter className="flex justify-center mt-10">
                            <Button type="submit" size={'default'} className="w-full">Sing up</Button>
                        </CardFooter>

                    </form>
                </CardContent>

            </Card>
        </div>
    );
};

export default Signup;