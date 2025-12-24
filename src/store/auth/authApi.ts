import { apiEndpoints } from "@/store/apiEndpoints";
import { baseQuery } from "@/store/baseQuery";
import { handleErrorResponse, handleSuccessResponse } from "@/store/hooks";
import { GET, POST } from "@/store/http";
import { removeLocalStorageItem, setLocalStorageItem } from "@/utils/localStorage";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  LoginResponse,
  SignupRequest,
  SignupResponse,
  User,
} from "./authTypes";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    // Login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => POST({ url: apiEndpoints.auth.login, body }),
      transformResponse: (response: any) => {
        const data: LoginResponse = response.data;
        setLocalStorageItem("USER_TOKEN", data.token);
        handleSuccessResponse({ data, message: response.message });
        return data;
      },
      transformErrorResponse: handleErrorResponse,
    }),

    // Signup
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (body) => POST({ url: apiEndpoints.auth.signup, body }),
      transformResponse: (response: any) => {
        const data: SignupResponse = response.data;
        setLocalStorageItem("USER_TOKEN", data.token);
        handleSuccessResponse({ data, message: response.message });
        return data;
      },
      transformErrorResponse: handleErrorResponse,
    }),

    // Get user profile
    getProfile: builder.query<User, void>({
      query: () => GET(apiEndpoints.auth.profile),
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
      providesTags: ["Auth"],
    }),

    // Logout (optional, depending on API)
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => POST({ url: apiEndpoints.auth.logout }),
      transformResponse: (response: any) => {
        removeLocalStorageItem("USER_TOKEN");
        handleSuccessResponse({
          data: response,
          message: response.message || "Logged out successfully",
        });
        return response;
      },
      transformErrorResponse: handleErrorResponse,
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useGetProfileQuery,
  useLogoutMutation,
} = authApi;
