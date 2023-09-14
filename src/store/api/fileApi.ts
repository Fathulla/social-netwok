import { createApi } from "@reduxjs/toolkit/dist/query";
import { baseQuery } from "../../utils/baseQuery";
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const fileApi = createApi ({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({baseUrl: baseQuery, jsonContentType: 'multipart/form-data'}),
    endpoints: builder => ({
        uploadFile: builder.mutation<any, any>({
            query: (payload) => {
                return {
                    url: '/add-photo',
                    method: 'POST',
                    body: payload
                }
            }
        })
    })
})