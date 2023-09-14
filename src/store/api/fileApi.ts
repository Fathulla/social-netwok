import { createApi } from "@reduxjs/toolkit/dist/query";
import { baseQuery } from "../../utils/baseQuery";
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UploadFilePayload {
    post_id: number;
    photo_file: string;
}

interface UploadFileResponce{
    status: number;
    file_id: number;
}

export const fileApi = createApi ({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({baseUrl: baseQuery, jsonContentType: 'multipart/form-data'}),
    endpoints: builder => ({
        uploadFile: builder.mutation<UploadFileResponce, any>({
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