import { apiEndpoints } from "@/store/apiEndpoints";
import { baseQuery } from "@/store/baseQuery";
import { handleErrorResponse, handleSuccessResponse } from "@/store/hooks";
import { DELETE, GET, POST, PUT } from "@/store/http";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Product } from "./productTypes";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query<Product[], void>({
      query: () => GET(apiEndpoints.product.getAll),
      providesTags: ["Product"],
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
    }),

    // Get single product by ID
    getProductById: builder.query<Product, string>({
      query: (id) => GET(`${apiEndpoints.product.getById}/${id}`),
      providesTags: ["Product"],
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
    }),

    // Create product
    createProduct: builder.mutation<Product, Partial<Product>>({
      query: (body) => POST({ url: apiEndpoints.product.create, body }),
      invalidatesTags: ["Product"],
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
    }),

    // Update product
    updateProduct: builder.mutation<Product, { id: string; data: Partial<Product> }>({
      query: ({ id, data }) =>
        PUT({ url: `${apiEndpoints.product.update}/${id}`, body: data }),
      invalidatesTags: ["Product"],
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
    }),

    // Delete product
    deleteProduct: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => DELETE(`${apiEndpoints.product.delete}/${id}`),
      invalidatesTags: ["Product"],
      transformResponse: handleSuccessResponse,
      transformErrorResponse: handleErrorResponse,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
