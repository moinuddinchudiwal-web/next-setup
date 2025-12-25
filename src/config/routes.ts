export const ROUTES = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  DASHBOARD: "/dashboard",
  SETTINGS: "/settings",
  ADMIN_DASHBOARD: "/admin",
  USER_DASHBOARD: "/dashboard",
};

export const PUBLIC_ROUTES = [ROUTES.LOGIN, ROUTES.REGISTER];

export const ROLE_ROUTES: Record<string, string[]> = {
  ADMIN: [ROUTES.ADMIN_DASHBOARD],
  USER: [ROUTES.DASHBOARD],
};
