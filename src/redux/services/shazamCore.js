import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseurl: "https://shazam-core.p.rapidapi.com/v1",
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "X-RapidAPI-Key",
    //     "fabf70dad5mshbc11a9b5a369599p18acdfjsne631d0041f2e"
    //   );
    //   headers.set("X-RapidAPI-Host", "shazam-core.p.rapidapi.com");
    //   return headers;
    // },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({
        url: "/charts/world",
        headers: {
          "X-RapidAPI-Key":
            "fabf70dad5mshbc11a9b5a369599p18acdfjsne631d0041f2e",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      }),
    }),
  }),
});

//redux allows to use the getTopCharts function to export as a hook
export const { useGetTopChartsQuery } = shazamCoreApi;
