import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/user/login/',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      }),
    }),
    signup: builder.mutation({
      query: (body) => ({
        url: '/user/signup/',
        method: 'POST',
        body: body,
      }),
    }),
    getToken: builder.mutation({
      query: (body) => ({ url: '/user/token/', method: 'POST', body: body }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      }),
    }),
    getFavTracks: builder.query({
      query: () => '/catalog/track/favourite/all/',
      method: 'GET',
    }),
    getSelectionById: builder.query({
      query: (id) => `/catalog/selection/${id}/`,
      method: 'GET',
    }),
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
  useGetFavTracksQuery,
  useGetSelectionByIdQuery,
  useGetAllTracksQuery,
} = api;
