export const buildQueryParams = (params: Record<string, any>) => {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) query.append(key, value.toString());
  });
  return query.toString();
};
