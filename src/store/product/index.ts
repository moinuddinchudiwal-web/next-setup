import { useAppDispatch } from "@/store/hooks";
import { setSelectedProduct } from "@/store/product/productSlice";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "./productApi";

// Custom hook for get all products
export const useGetProducts = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery();
  return { products: data, loading: isLoading, error, refetch };
};

// Custom hook for get single product by ID
export const useGetProductById = (id: string) => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetProductByIdQuery(id);

  // Optionally update slice with selected product
  // This is just refrence purpose
  if (data) dispatch(setSelectedProduct(data));

  return { product: data, loading: isLoading, error };
};

// Custom hook for creating a product
export const useCreateProduct = () => {
  const [createProduct, { data, error, isLoading }] = useCreateProductMutation();

  return {
    createProduct,
    createdProduct: data,
    loading: isLoading,
    error,
  };
};

// Custom hook for updating a product
export const useUpdateProduct = () => {
  const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();

  return {
    updateProduct,
    updatedProduct: data,
    loading: isLoading,
    error,
  };
};

// Custom hook for deleting a product
export const useDeleteProduct = () => {
  const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation();

  return {
    deleteProduct,
    deletedProduct: data,
    loading: isLoading,
    error,
  };
};
