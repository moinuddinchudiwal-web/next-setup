import { BaseQueryParams } from "@/store/http";

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProductQueryParams extends BaseQueryParams {
  categoryId?: string;
  minPrice?: number;
  maxPrice?: number;
}
