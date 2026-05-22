"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { redeemAccessCode } from "@/lib/access-codes";
import { getPlanByTier, isToolUnlocked } from "@/lib/plans";
import {
  DEFAULT_ACCESS,
  loadAccessState,
  saveAccessState,
} from "@/lib/storage";
import type { AccessState, PlanTier } from "@/lib/types";

interface AccessContextValue {
  tier: PlanTier;
  planName: string;
  redeemedCode: string | null;
  isHydrated: boolean;
  redeemCode: (code: string) => { success: boolean; message: string };
  resetAccess: () => void;
  canAccessTool: (toolId: number) => boolean;
}

const AccessContext = createContext<AccessContextValue | null>(null);

export function AccessProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AccessState>(DEFAULT_ACCESS);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setState(loadAccessState());
    setIsHydrated(true);
  }, []);

  const persist = useCallback((next: AccessState) => {
    setState(next);
    saveAccessState(next);
  }, []);

  const redeemCode = useCallback(
    (code: string): { success: boolean; message: string } => {
      const trimmed = code.trim();
      if (!trimmed) {
        return { success: false, message: "Please enter an access code." };
      }

      const tier = redeemAccessCode(trimmed);
      if (tier === null) {
        return {
          success: false,
          message: "Invalid access code. Check your purchase email and try again.",
        };
      }

      const plan = getPlanByTier(tier);
      persist({
        tier,
        redeemedCode: trimmed.toUpperCase(),
        redeemedAt: new Date().toISOString(),
      });

      return {
        success: true,
        message: `${plan.name} plan activated. ${plan.toolCount} utilities unlocked.`,
      };
    },
    [persist]
  );

  const resetAccess = useCallback(() => {
    persist(DEFAULT_ACCESS);
  }, [persist]);

  const value = useMemo<AccessContextValue>(
    () => ({
      tier: state.tier,
      planName: getPlanByTier(state.tier).name,
      redeemedCode: state.redeemedCode,
      isHydrated,
      redeemCode,
      resetAccess,
      canAccessTool: (toolId: number) => isToolUnlocked(toolId, state.tier),
    }),
    [state, isHydrated, redeemCode, resetAccess]
  );

  return (
    <AccessContext.Provider value={value}>{children}</AccessContext.Provider>
  );
}

export function useAccess(): AccessContextValue {
  const ctx = useContext(AccessContext);
  if (!ctx) {
    throw new Error("useAccess must be used within AccessProvider");
  }
  return ctx;
}
