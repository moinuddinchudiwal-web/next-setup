import { AppDispatch, RootState } from "@/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const handleSuccessResponse = <T extends { data: any; message?: string }>(
  data: T
): T["data"] => {
  if (data?.message) {
    toast.success(data.message);
  }
  return data.data;
};

export const handleErrorResponse = (error: any) => {
  const message = error?.data?.message || error?.error || "Something went wrong";
  toast.error(message);
};
