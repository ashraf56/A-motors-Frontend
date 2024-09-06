import { baseApi } from "@/redux/api/baseApi";


const carsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getallCars: build.query({
            query: () => ({
                url: 'cars',
                method: "GET"
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


export const {useGetSingleCarsQuery,useGetallCarsQuery,  useGetallavailableCarsQuery} = carsApi