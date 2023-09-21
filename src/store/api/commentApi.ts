import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../../utils/baseQuery";

interface AddCommentPayload {
    user_id: number;
    comment_text: string;
}

interface AddCommentResponce {
    status: number;
    comment_id: number;
}

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    getCommentList: builder.query({
      query: () => "/comment",
    }),
    getCommentItem: builder.query({
      query: (commentId: number) => `/comment/${commentId}`,
    }),
    addNewComment: builder.mutation<AddCommentResponce, AddCommentPayload>({
        query: (payload) => {
            return {
              url: "/comment",
              method: "POST",
              body: payload,
            };
        }
    })
  }),
});

export const { 
    useLazyGetCommentListQuery, 
    useGetCommentItemQuery, 
    useAddNewCommentMutation, } = commentApi;
