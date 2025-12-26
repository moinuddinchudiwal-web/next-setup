export interface BaseQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  filters?: Record<string, any>;
}
export interface RequestOptions {
  url: string;
  params?: Record<string, any>;
  body?: any;
  headers?: Record<string, string>;
}

const buildQueryParams = (params?: Record<string, any>) => {
  if (!params) return "";
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  return `?${query.toString()}`;
};

export const GET = ({ url, params, headers }: RequestOptions) => ({
  url: `${url}${buildQueryParams(params)}`,
  method: "GET",
  headers,
});

export const POST = ({ url, body, headers }: RequestOptions) => ({
  url,
  method: "POST",
  body,
  headers,
});

export const PUT = ({ url, body, headers }: RequestOptions) => ({
  url,
  method: "PUT",
  body,
  headers,
});

export const PATCH = ({ url, body, headers }: RequestOptions) => ({
  url,
  method: "PATCH",
  body,
  headers,
});

export const DELETE = ({ url, headers }: RequestOptions) => ({
  url,
  method: "DELETE",
  headers,
});
