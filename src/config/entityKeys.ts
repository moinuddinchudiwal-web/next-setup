export const ENTITY_KEYS = {
  PRODUCT: "product",
  USER: "user",
  ORDER: "order",
} as const;

export type EntityKey = (typeof ENTITY_KEYS)[keyof typeof ENTITY_KEYS];
