export const COOKIE_KEYS = {
  USER_TOKEN: "USER_TOKEN",
  USER_PREFERENCES: "USER_PREFERENCES",
} as const;

export type CookieKey = keyof typeof COOKIE_KEYS;
