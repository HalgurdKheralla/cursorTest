import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiBaseUrl = (process.env.EXPO_PUBLIC_API_BASE_URL as string) || 'https://dummyjson.com';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiBaseUrl }),
  tagTypes: ['Products'],
  endpoints: () => ({}),
});

export default api;
