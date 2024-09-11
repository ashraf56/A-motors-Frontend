/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const bookingApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallBooking: build.query({
            query: () => ({
                url: 'bookings',
                method: "GET",
            }),
            providesTags: ['booking']
        }),
       
        getSingleBooking: build.query({
            query: (slug:string) => ({
                url: `bookings/${slug}`,
                method: "GET",
            }),
            providesTags: ['booking']
        }),
        CreateABooking: build.mutation({
            query: (data) => ({
                url: 'bookings/book-car',
                method: "POST",
                body:data
            }),
          invalidatesTags:['booking']
        }),
       
       

    })
})


export const {
  useGetallBookingQuery,
  useGetSingleBookingQuery,
  useCreateABookingMutation
} = bookingApi