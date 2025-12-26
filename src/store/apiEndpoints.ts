export const apiEndpoints = {
  auth: {
    login: "/users/signin",
    signup: "/users/signup",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh",
    profile: "/auth/profile",
  },
  product: {
    getAll: "/products",
    getById: "/products",
    create: "/products",
    update: "/products",
    delete: "/products",
  },
};
