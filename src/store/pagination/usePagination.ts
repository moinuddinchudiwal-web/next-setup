import { EntityKey } from "@/config/entityKeys";
import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setLimit, setPage, setTotal } from "./paginationSlice";

export const usePagination = (key: EntityKey) => {
  const dispatch = useAppDispatch();
  const pagination = useAppSelector(
    (state: RootState) => state.pagination[key] || { page: 1, limit: 10 }
  );

  return {
    page: pagination.page,
    limit: pagination.limit,
    total: pagination.total,
    setCurrentPage: (page: number) => dispatch(setPage({ key, page })),
    setPageLimit: (limit: number) => dispatch(setLimit({ key, limit })),
    setTotalItems: (total: number) => dispatch(setTotal({ key, total })),
  };
};
