import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./../../utils/baseQuery";

interface GetUserData {
  status: number;
  message: {
    name: string;
    phone_number: number;
    password: string;
    user_city: string;
    user_id: number;
    city: string;
    reg_data: string;
    email: string;
  };
}

interface LoginUserPayload {
  email: string;
  password: string;
}

interface LoginUserData {
  status: number;
  user_id: number;
}

interface RegistrationUserPayload {
  name: string;
  phone_number: string;
  password: string;
  user_city: string;
  email: string;
}

interface RegistrationUserData extends RegistrationUserPayload{}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    addUser: builder.mutation<RegistrationUserPayload, RegistrationUserData>({
      query: (payload) => {
        return {
          url: "/registration",
          method: "POST",
          body: payload,
        };
      },
    }),
    loginUser: builder.mutation<LoginUserData, LoginUserPayload>({
      query: (payload) => {
        return {
          url: "/login",
          method: "POST",
          body: payload,
        };
      },
    }),
    getUser: builder.query ({
      query: (userId: string) => `/user/$(userId)`,
    }),
  }),
});

export const { useAddUserMutation, useLoginUserMutation, useGetUserQuery } = authApi;
