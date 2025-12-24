import { COOKIE_KEYS, CookieKey } from "@/config/cookies";
import Cookies from "js-cookie";

export const setCookieItem = (
  key: CookieKey,
  value: any,
  options?: Cookies.CookieAttributes
): void => {
  try {
    const val = typeof value === "string" ? value : JSON.stringify(value);
    Cookies.set(COOKIE_KEYS[key], val, options);
  } catch (error) {
    console.error("setCookieItem error:", error);
  }
};

export const getCookieItem = <T = any>(key: CookieKey): T | null => {
  try {
    const item = Cookies.get(COOKIE_KEYS[key]);
    if (!item) return null;
    try {
      return JSON.parse(item);
    } catch {
      return item as unknown as T;
    }
  } catch (error) {
    console.error("getCookieItem error:", error);
    return null;
  }
};

export const removeCookieItem = (
  key: CookieKey,
  options?: Cookies.CookieAttributes
): void => {
  try {
    Cookies.remove(COOKIE_KEYS[key], options);
  } catch (error) {
    console.error("removeCookieItem error:", error);
  }
};

export const clearAllCookies = (): void => {
  try {
    Object.values(COOKIE_KEYS).forEach((key) => Cookies.remove(key));
  } catch (error) {
    console.error("clearAllCookies error:", error);
  }
};
