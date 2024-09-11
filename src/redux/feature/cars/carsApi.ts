/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const carsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallCars: build.query({
            query: () => ({
                url: 'cars',
                method: "GET",
            }),
            providesTags: ['cars']
        }),
        getallavailableCars: build.query({
            query: () => ({
                url: 'cars/available-car',
                method: "GET"
            }),
            providesTags: ['cars']
        }),
        getSingleCars: build.query({
            query: (slug: string) => ({
                url: `cars/${slug}`,
                method: "GET"
            }),
            providesTags: ['cars']
        }),
        deleteSingleCar: build.mutation({
            query: (slug: string) => ({
                url: `cars/${slug}`,
                method: "DELETE"
            }),
            invalidatesTags: ['cars']
        }),
        updateSingleCar: build.mutation({
            query: (slug: string) => ({
                url: `cars/${slug}`,
                method: "PUT"
            }),
            invalidatesTags: ['cars']
        }),
        CreateACar: build.mutation({
            query: (data) => ({
                url: 'cars/create-car',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['cars']
        }),


    })
})


export const {
    useGetSingleCarsQuery,
    useGetallCarsQuery,
    useGetallavailableCarsQuery,
    useCreateACarMutation,
    useDeleteSingleCarMutation,
    useUpdateSingleCarMutation
} = carsApi