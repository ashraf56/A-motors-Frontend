/* eslint-disable @typescript-eslint/no-explicit-any */
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useDeleteSingleCarMutation, useGetallCarsQuery } from '@/redux/feature/cars/carsApi';
import { Button } from '@/components/ui/button';
import CreateCar from './Carmanagement/CreateCar';
import { toast } from 'sonner';
const MangeCar = () => {
  const { data, isLoading } = useGetallCarsQuery(undefined, { pollingInterval: 1000 })
   const[deleteSingleCar]=useDeleteSingleCarMutation()
  if (isLoading) {
    return <p>loading...</p>
  }

const handleDeleteCar = async(id:string)=>{
  const loading = toast.loading('loading....')
  try {
   await deleteSingleCar(id)
    toast.success('Car deleted successfully',{id:loading,duration:2000})
  
  } catch (error: any) {
    toast.error(error,{id:loading,duration:2000})
  }
}

  return (
    <div className='mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont'>
      <div >
        <h1 className='text-3xl font-bold'>Manage Car</h1>
      </div>
      <div className='flex flex-col my-5 w-full container gap-4'>
        <div className=' flex justify-end  w-full'>
          <CreateCar />
        </div>


      </div>
      <div className='w-full max-w-5xl mx-auto h-96 overflow-y-scroll'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Car name</TableHead>
              <TableHead className="w-[200px]">Description</TableHead>
              <TableHead className='w-32'>price per hour</TableHead>
              <TableHead className='w-28 text-center'>Color</TableHead>
              <TableHead className='w-28 text-center'>Car starus</TableHead>
              <TableHead className='w-28 text-center'>Car Type</TableHead>
              <TableHead className=' text-center'>Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((p: any) => (
              <TableRow key={p._id}>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell className="font-medium">{p.description.slice(0, 40)}...</TableCell>
                <TableCell className="font-medium">{p.pricePerHour}</TableCell>
                <TableCell className="font-medium text-center">{p.color}</TableCell>
                <TableCell className="font-medium text-center">{p.status}</TableCell>
                <TableCell className="font-medium text-center">{p.carType}</TableCell>

                <TableCell className="font-medium flex gap-3 justify-center text-center items-center">

                  <Button size={'icon'} variant={'outline'} onClick={()=>handleDeleteCar(p._id)}  >
                    <TrashIcon className={` 'h-6' 'w-6' ${p.isDeleted === true ? 'text-red-600': 'text-green-600'} `}/>   </Button>
                  <Button size={'icon'}  ><PencilSquareIcon className="h-6 w-6 text-white" /> </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MangeCar;