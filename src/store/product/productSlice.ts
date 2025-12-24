import { Product } from "@/store/product/productTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  selectedProduct: Product | null;
  isEditing: boolean;
}

const initialState: ProductState = {
  selectedProduct: null,
  isEditing: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
  },
});

export const { setSelectedProduct, setEditing } = productSlice.actions;
export default productSlice.reducer;
