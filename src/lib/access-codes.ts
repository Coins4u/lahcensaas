import type { PlanTier } from "./types";

export const ACCESS_CODE_MAP: Record<string, PlanTier> = {
  STARTER30: 1,
  BASIC30: 2,
  PLUS30: 3,
  PRO30: 4,
  ADVANCED30: 5,
  ELITE30: 6,
  PREMIUM30: 7,
  ULTIMATE30: 8,
};

export function redeemAccessCode(code: string): PlanTier | null {
  const normalized = code.trim().toUpperCase();
  const tier = ACCESS_CODE_MAP[normalized];
  return tier ?? null;
}
