import { apiEndpoints } from "@/store/apiEndpoints";
import { baseQuery } from "@/store/baseQuery";
import { handleErrorResponse, handleSuccessResponse } from "@/store/hooks";
import { GET, POST } from "@/store/http";
import { removeCookieItem, setCookieItem } from "@/utils/cookies";
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
        if (response?.accessToken) {
          setLocalStorageItem("USER_TOKEN", response.accessToken);
          setCookieItem("USER_TOKEN", response.accessToken, { path: "/" });
        }

        if (response?.data?.role) {
          setCookieItem("USER_ROLE", response.data.role, { path: "/" });
        }
        handleSuccessResponse({ data: response.data, message: response.message });
        return {
          user: response.data,
        };
      },
      transformErrorResponse: handleErrorResponse,
    }),

    // Signup
    signup: builder.mutation<SignupResponse, SignupRequest>({
      query: (body) => POST({ url: apiEndpoints.auth.signup, body }),
      transformResponse: (response: any) => {
        const data: SignupResponse = response.data;

        setLocalStorageItem("USER_TOKEN", data.token);
        setCookieItem("USER_TOKEN", data.token, { path: "/" });
        setCookieItem("USER_ROLE", data.user.role, { path: "/" });

        handleSuccessResponse({ data, message: response.message });
        return data;
      },
      transformErrorResponse: handleErrorResponse,
    }),

    // Get user profile
    getProfile: builder.query<User, void>({
      query: () => GET({ url: apiEndpoints.auth.profile }),
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
      providesTags: ["Auth"],
    }),

    // Logout (optional, depending on API)
    logout: builder.mutation<{ success: boolean }, void>({
      query: () => POST({ url: apiEndpoints.auth.logout }),
      transformResponse: (response: any) => {
        removeLocalStorageItem("USER_TOKEN");
        removeCookieItem("USER_TOKEN", { path: "/" });
        removeCookieItem("USER_ROLE", { path: "/" });

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
