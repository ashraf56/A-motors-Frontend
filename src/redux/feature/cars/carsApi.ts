/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";


const carsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallCars: build.query({
            query: (searchTerm) =>({

                    url: 'cars',
                    method: "GET",
                    params: {
                        search: searchTerm || '',
                    }

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

    })
})


export const { useGetSingleCarsQuery, useGetallCarsQuery, useGetallavailableCarsQuery, useLazyGetallCarsQuery } = carsApi