import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Create an API with endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "xxxxxxxxxxxxxxxxxxxxxx",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: "users",
        method: "POST",
        body: userData,
        credentials: "include",
      }),
    }),
    updateUser: builder.mutation({
      query: (userData) => ({
        url: `users/${userData.id}`,
        method: "PUT",
        body: userData,
        credentials: "include",
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `users/${userId}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

// Export generated hooks for each endpoint
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;
