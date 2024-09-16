/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useGetmyAllBookingQuery } from "@/redux/feature/bookings/bookingApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
const PaymentManegment = () => {
  const { data, isLoading } = useGetmyAllBookingQuery(undefined)


  if (isLoading) {
    return <p>loading...</p>
  }


  return (

    <div className='mx-auto flex flex-col justify-center items-center container my-6  font-CustomFont'>
      <div >
        <h1 className='text-3xl font-bold'>Manage your Payment </h1>
      </div>
      <div className='flex flex-col my-5 w-full container gap-4'>
        <div className=' flex justify-end  w-full'>

        </div>


      </div>
      <div className='w-full   mx-auto justify-center items-center h-96 overflow-y-scroll overflow-x-scroll'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className=''>Date</TableHead>
              <TableHead className="">Car name</TableHead>
              <TableHead className="">User name</TableHead>
              <TableHead className=' text-center '>StartTime</TableHead>
              <TableHead className='text-center '>End time</TableHead>
              <TableHead className='text-center '>Booking status</TableHead>
              <TableHead className='  text-center'>Total cost</TableHead>
              <TableHead className='  text-center'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((p: any) => (
              <TableRow key={p._id}>

                <TableCell className="font-medium">{p.date}</TableCell>
                <TableCell className="font-medium">{p.car?.name}</TableCell>
                <TableCell className="font-medium ">{p.user?.name}</TableCell>
                <TableCell className="font-medium text-center ">{p.startTime}</TableCell>
                <TableCell className="font-medium text-center">{p.endTime || 'N/A'}</TableCell>
                <TableCell className="font-medium text-center ">{p.bookingStatus}</TableCell>
                <TableCell className="font-medium text-center ">{p.totalCost}</TableCell>

                <TableCell className="font-medium flex gap-3 justify-center   items-center">

                  <Button size={'sm'} variant={'outline'}  >Complete booking  </Button>        
                  

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>

  );
};

export default PaymentManegment;