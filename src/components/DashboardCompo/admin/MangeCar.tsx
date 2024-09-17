/* eslint-disable @typescript-eslint/no-explicit-any */
import {  TrashIcon } from '@heroicons/react/24/outline';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useDeleteSingleCarMutation, useGetallCarsQuery } from '@/redux/feature/cars/carsApi';
import CreateCar from './Carmanagement/CreateCar';
import { toast } from 'sonner';
import Updatecar from './Carmanagement/Updatecar';
const MangeCar = () => {
  const { data, isLoading } = useGetallCarsQuery(undefined, { pollingInterval: 3000 })
   const[deleteSingleCar]=useDeleteSingleCarMutation()
  if (isLoading) {
    return <p>loading...</p>
  }

const handleDeleteCar = async(id:string)=>{
  const loading = toast.loading('loading....')
  try {
   const res = await deleteSingleCar(id)
    if (res.data.success === true) {
      toast.success('Car deleted successfully',{id:loading,duration:2000})
    }
  
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
      <div className='w-full  max-w-full mx-auto h-96 overflow-y-scroll overflow-x-scroll'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Car Image</TableHead>
              <TableHead className="">Car name</TableHead>
              <TableHead className=''>price per hour</TableHead>
              <TableHead className=' text-center '>Color</TableHead>
              <TableHead className=' text-center '>Car status</TableHead>
              <TableHead className=' text-center '>Car Type</TableHead>
              <TableHead className='  text-center'>Manage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((p: any) => (
              <TableRow key={p._id}>
                <TableCell className="font-medium "><img src={p.image} alt="img"  className='w-20 h-20 rounded-xl object-contain' /></TableCell>
                <TableCell className="font-medium">{p.name}</TableCell>
                <TableCell className="font-medium">${p.pricePerHour}</TableCell>
                <TableCell className="font-medium text-center ">{p.color}</TableCell>
                <TableCell className="font-medium text-center">{p.status}</TableCell>
                <TableCell className="font-medium text-center ">{p.carType}</TableCell>

                <TableCell className="font-medium flex mt-5 gap-3 justify-center w-full  items-center">
                    <div className='w-8' onClick={()=>handleDeleteCar(p._id)}>
                       <TrashIcon className={` 'h-2' 'w-2' ${p.isDeleted === "true" ? 'text-red-600': 'text-green-600'} `} />  
                    </div>
                   
                  <Updatecar p={p}/>
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