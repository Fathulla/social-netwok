import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseQuery } from '../../utils/baseQuery';

export const postApi = createApi ({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: baseQuery}),
    endpoints: builder => ({
        getPostList: builder.query({
            query: () => '/post'
        }),
        getPostItem: builder.query({
            query: (postId: number) => `/post/${postId}`
        })
    })
})

export const { useGetPostListQuery, useGetPostItemQuery } = postApi