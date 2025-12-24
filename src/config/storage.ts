export const STORAGE_KEYS = {
  USER_TOKEN: "user_token",
  USER_PROFILE: "user_profile",
  THEME: "theme",
};

export type StorageKey = keyof typeof STORAGE_KEYS;
