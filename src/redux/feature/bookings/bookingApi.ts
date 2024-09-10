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
       
        getSingleBooking: build.query({
            query: (slug:string) => ({
                url: `bookings/${slug}`,
                method: "GET",
            }),
          
        }),
        CreateABooking: build.mutation({
            query: (data) => ({
                url: 'bookings/book-car',
                method: "POST",
                body:data
            }),
          
        }),
       
       

    })
})


export const {
  useGetallBookingQuery,
  useGetSingleBookingQuery,
  useCreateABookingMutation
} = bookingApi