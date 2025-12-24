import { STORAGE_KEYS, StorageKey } from "@/config/storage";

export const setLocalStorageItem = (key: StorageKey, value: any): void => {
  try {
    const val = typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(STORAGE_KEYS[key], val);
  } catch (error) {
    console.error("localStorage setLocalStorageItem error:", error);
  }
};

export const getLocalStorageItem = <T = any>(key: StorageKey): T | null => {
  try {
    const item = localStorage.getItem(STORAGE_KEYS[key]);
    if (!item) return null;

    try {
      return JSON.parse(item);
    } catch {
      return item as unknown as T;
    }
  } catch (error) {
    console.error("localStorage getLocalStorageItem error:", error);
    return null;
  }
};

export const removeLocalStorageItem = (key: StorageKey): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS[key]);
  } catch (error) {
    console.error("localStorage removeLocalStorageItem error:", error);
  }
};

export const clearAllLocalStorage = (): void => {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => localStorage.removeItem(key));
  } catch (error) {
    console.error("localStorage clearAllLocalStorage error:", error);
  }
};
