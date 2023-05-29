import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (userData) => ({
        url: '/user/signup/',
        method: 'POST',
        body: userData,
      }),
    }),
    getToken: builder.mutation({
      query: () => '/user/token/',
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: '/user/token/refresh/',
        method: 'POST',
        body: { refresh: refreshToken },
      }),
    }),
    getAllTracks: builder.query({
      query: () => '/catalog/track/all/',
    }),
    addToFavorites: builder.mutation({
      query: (id) => `track/${id}/favorite/`,
      method: 'POST',
    }),
    removeFromFavorites: builder.mutation({
      query: (id) => `track/${id}/favorite/`,
      method: 'DELETE',
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetTokenMutation,
  useRefreshTokenMutation,
  useGetAllTracksQuery,
  useAddToFavoritesMutation,
  useRemoveFromFavoritesMutation,
} = api;
