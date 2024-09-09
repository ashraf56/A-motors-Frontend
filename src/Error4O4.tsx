/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useRouteError } from "react-router-dom";

const Error4O4 = () => {
    const { error, status }:any = useRouteError()
    return (
        <div className="flex flex-col justify-center h-screen p-5 items-center">
            <h1 className=" text-9xl font-extrabold font-CustomFont">{status || 404}</h1>
            <p >Error {status || 404}</p> 
            <p className=' font-semibold  mb-5'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='px-5 py-3 font-semibold  '
          >
            Back to homepage
          </Link>
        </div>
    );
};

export default Error4O4;