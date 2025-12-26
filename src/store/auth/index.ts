import { ROUTES } from "@/config/routes";
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  useGetProfileQuery,
  useLoginMutation,
  useLogoutMutation,
  useSignupMutation,
} from "./authApi";
import { logout, setUser } from "./authSlice";
import { LoginRequest, SignupRequest } from "./authTypes";

export const useLogin = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();
  const [login, { isLoading, error, data }] = useLoginMutation();

  const handleLogin = async (payload: LoginRequest) => {
    const result = await login(payload).unwrap();

    dispatch(setUser(result.user));
    router.push(ROUTES.DASHBOARD);
    return result;
  };

  return {
    login: handleLogin,
    isLoading,
    error,
    data,
  };
};

export const useSignup = () => {
  const dispatch = useAppDispatch();
  const [signup, { isLoading, error, data }] = useSignupMutation();

  const handleSignup = async (payload: SignupRequest) => {
    const result = await signup(payload).unwrap();
    dispatch(setUser(result.user));
    return result;
  };

  return {
    signup: handleSignup,
    isLoading,
    error,
    data,
  };
};

export const useAuthProfile = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  return {
    user: data,
    isLoading,
    error,
  };
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const [logoutMutation, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    await logoutMutation().unwrap();
    dispatch(logout());
  };
  return {
    logout: handleLogout,
    isLoading,
  };
};
