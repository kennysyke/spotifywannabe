import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tracksApi = createApi({
  reducerPath: 'tracksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online',
    tagTypes: ['Tracks'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access;
      //   console.log(token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    setLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
    setDislike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks', 'Playlist'],
    }),
  }),
});

export const { useSetLikeMutation, useSetDislikeMutation } = tracksApi;
