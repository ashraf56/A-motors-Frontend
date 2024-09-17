/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllUserQuery } from "@/redux/feature/auth/authApi";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
const UserManegment = () => {
    const { data: allusers, isLoading } = useGetAllUserQuery(undefined)
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className="mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont">
            <div className="pb-5" >
                <h1 className='text-3xl font-bold'>Manage User</h1>
            </div>
            <div className='w-full max-w-5xl mx-auto relative h-96 overflow-y-scroll'>
                <Table>
                    <TableHeader>
                        <TableRow className="sticky  z-30">
                            <TableHead className="w-[200px]"> name</TableHead>
                            <TableHead className="w-[200px]">Email</TableHead>
                            <TableHead className='w-32'>role</TableHead>
                            <TableHead className='w-28 text-center'>Phone</TableHead>
                            <TableHead className='w-28 text-center'>Adress</TableHead>
                            <TableHead className=' text-center'>Customize</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="-z-30">
                        {allusers?.data?.map((p: any) => (
                            <TableRow key={p._id}>
                                <TableCell className="font-medium">{p.name}</TableCell>
                                <TableCell className="font-medium">{p.email}</TableCell>
                                <TableCell className="font-medium">{p.role}</TableCell>
                                <TableCell className="font-medium text-center">{p.phone}</TableCell>
                                <TableCell className="font-medium text-center">{p.address}</TableCell>

                                <TableCell className="font-medium flex gap-3 justify-center text-center items-center">

                                    <Button size={'sm'}  > remove</Button>
                                    <Button size={'sm'}  >Make admin </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default UserManegment;
