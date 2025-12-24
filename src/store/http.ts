interface RequestOptions {
  url: string;
  body?: any;
  headers?: Record<string, string>;
}

export const GET = (url: string, headers?: Record<string, string>) => ({
  url,
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

export const DELETE = (url: string, headers?: Record<string, string>) => ({
  url,
  method: "DELETE",
  headers,
});
