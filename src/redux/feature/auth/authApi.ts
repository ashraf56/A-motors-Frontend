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
        }),
        getAllUser: build.query({
            query: () => ({
                url: 'auth',
                method: "GET",
            }),
            providesTags: ['auth']
        }),
        getUpdateUserInfo: build.query({
            query: (data) => ({
                url: `auth/${data.id}`,
                method: "PUT",
                body:data.info
            }),
        }),
        getSingleUser: build.query({
            query: (id) => ({
                url: `auth/${id}`,
                method: "GET",
            }),
            providesTags: ['auth']
        }),
      
    }),



})


export const { useLoginUserMutation, useSignUpUserMutation , useGetAllUserQuery , useGetSingleUserQuery,useGetUpdateUserInfoQuery} = authApi