import { env } from "@/config/env";
import { ROUTES } from "@/config/routes";
import { HTTP_STATUS } from "@/config/statusCodes";
import { logout } from "@/store/auth/authSlice";
import { getLocalStorageItem, removeLocalStorageItem } from "@/utils/localStorage";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: env.API_BASE_URL,
  prepareHeaders: (headers) => {
    const token = getLocalStorageItem<string>("USER_TOKEN");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (
    result.error?.status === HTTP_STATUS.UNAUTHORIZED ||
    result.error?.status === HTTP_STATUS.FORBIDDEN
  ) {
    removeLocalStorageItem("USER_TOKEN");
    api.dispatch(logout());

    if (typeof window !== "undefined") {
      window.location.href = ROUTES.LOGIN;
    }
  }

  return result;
};
