/* eslint-disable @typescript-eslint/no-explicit-any */
import { Separator } from "@radix-ui/react-separator";

const Title = ({ name }: any) => {
    return (
        <div>
            <h1 className="uppercase text-center text-3xl font-bold ">{name}</h1>

            <Separator className="my-2 w-40 rounded-full mx-auto h-1 bg-[#BC274B]" />

        </div>
    );
};

export default Title;