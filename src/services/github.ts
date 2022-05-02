import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Profile } from "../modules/Info";
import { IRepo } from "../modules/Repository";

export const githubApi = createApi({
    reducerPath: "githubApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.github.com",
    }),
    endpoints: (builder) => ({
        repos: builder.query<IRepo[], void>({
            query: () => `/users/olaleye-blessing/repos?per_page=20`,
        }),
        profile: builder.query<Profile, void>({
            query: () => `/users/olaleye-blessing`,
        }),
    }),
});

export const { useReposQuery, useProfileQuery } = githubApi;
