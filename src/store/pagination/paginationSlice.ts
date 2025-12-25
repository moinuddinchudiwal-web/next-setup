import { EntityKey } from "@/config/entityKeys";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  page: number;
  limit: number;
  total: number;
}

interface PaginationSliceState {
  [key: string]: PaginationState;
}

const initialState: PaginationSliceState = {};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<{ key: EntityKey; page: number }>) => {
      if (!state[action.payload.key])
        state[action.payload.key] = { page: 1, limit: 10, total: 0 };
      state[action.payload.key].page = action.payload.page;
    },
    setLimit: (state, action: PayloadAction<{ key: EntityKey; limit: number }>) => {
      if (!state[action.payload.key])
        state[action.payload.key] = { page: 1, limit: 10, total: 0 };
      state[action.payload.key].limit = action.payload.limit;
    },
    setTotal: (state, action: PayloadAction<{ key: EntityKey; total: number }>) => {
      if (!state[action.payload.key])
        state[action.payload.key] = { page: 1, limit: 10, total: 0 };
      state[action.payload.key].total = action.payload.total;
    },
  },
});

export const { setPage, setLimit, setTotal } = paginationSlice.actions;
export default paginationSlice.reducer;
