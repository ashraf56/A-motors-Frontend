import { baseApi } from "@/redux/api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: "POST",
                body: data
            })
        }),
        SignUpUser: build.mutation({
            query: (data) => ({
                url: 'auth/signup',
                method: "POST",
                body: data
            })
        })
    }),



})


export const { useLoginUserMutation, useSignUpUserMutation } = authApi