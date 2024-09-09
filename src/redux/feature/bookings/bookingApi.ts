/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallBooking: build.query({
            query: () => ({
                url: 'bookings',
                method: "GET",
            }),
            providesTags: ['cars']
        }),
       
       

    })
})


export const {
  useGetallBookingQuery
} = bookingApi