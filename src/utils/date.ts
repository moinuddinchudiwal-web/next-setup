import dayjs from "dayjs";

// Format date: YYYY-MM-DD
export const formatDate = (date: string | Date): string => {
  return dayjs(date).format("YYYY-MM-DD");
};

// Format readable date: Jan 24, 2025
export const formatDateReadable = (date: string | Date): string => {
  return dayjs(date).format("MMM DD, YYYY");
};

// Format time: HH:mm A
export const formatTime = (date: string | Date): string => {
  return dayjs(date).format("hh:mm A");
};

// Format full date & time: Jan 24, 2025 03:45 PM
export const formatDateTime = (date: string | Date): string => {
  return dayjs(date).format("MMM DD, YYYY hh:mm A");
};

// Check if two dates are the same day
export const isSameDay = (date1: string | Date, date2: string | Date): boolean => {
  return dayjs(date1).isSame(dayjs(date2), "day");
};

// Add / subtract days, months, years
export const addDays = (date: string | Date, days: number): Date =>
  dayjs(date).add(days, "day").toDate();

export const subtractDays = (date: string | Date, days: number): Date =>
  dayjs(date).subtract(days, "day").toDate();
