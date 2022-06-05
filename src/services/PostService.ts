import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// reducerPath уникальный ключь который будет определять текущий сервис
// опции который будут определять текущий сервис
export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (build) => ({
    fetchAllPosts: build.query({
      query: () => ({
        url: `/posts`,
      }),
    }),
  }),
});
