import { isValidPlanTier } from "./plans";
import type { AccessState } from "./types";

const STORAGE_KEY = "utilhub_access";

export const DEFAULT_ACCESS: AccessState = {
  tier: 0,
  redeemedCode: null,
  redeemedAt: null,
};

export function loadAccessState(): AccessState {
  if (typeof window === "undefined") return DEFAULT_ACCESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ACCESS;
    const parsed = JSON.parse(raw) as AccessState;
    if (!isValidPlanTier(parsed.tier)) {
      return DEFAULT_ACCESS;
    }
    return parsed;
  } catch {
    return DEFAULT_ACCESS;
  }
}

export function saveAccessState(state: AccessState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function clearAccessState(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
