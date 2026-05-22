import type { PlanConfig, PlanTier } from "./types";

/** Tier 0 — no active access until contribution + code redemption. */
export const NO_ACCESS_PLAN: PlanConfig = {
  id: 0,
  name: "No active tier",
  slug: "none",
  toolCount: 0,
  price: "—",
  priceAmount: 0,
  description: "Choose an access tier to unlock my utilities.",
  checkoutUrl: "/pricing",
};

export const PLANS: PlanConfig[] = [
  {
    id: 1,
    name: "Supporter Tier",
    slug: "supporter",
    toolCount: 3,
    price: "€12.67",
    priceAmount: 12.67,
    description: "One-time contribution · 30 days access · 3 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Supporter-Tier",
  },
  {
    id: 2,
    name: "Contributor Tier",
    slug: "contributor",
    toolCount: 6,
    price: "€23.45",
    priceAmount: 23.45,
    description: "One-time contribution · 30 days access · 6 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Contributor-Tier",
  },
  {
    id: 3,
    name: "Builder Tier",
    slug: "builder",
    toolCount: 9,
    price: "€24.49",
    priceAmount: 24.49,
    description: "One-time contribution · 30 days access · 9 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Builder-Tier",
    highlight: true,
  },
  {
    id: 4,
    name: "Maker Tier",
    slug: "maker",
    toolCount: 12,
    price: "€34.53",
    priceAmount: 34.53,
    description: "One-time contribution · 30 days access · 12 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Maker-Tier",
  },
  {
    id: 5,
    name: "Studio Tier",
    slug: "studio",
    toolCount: 15,
    price: "€36.78",
    priceAmount: 36.78,
    description: "One-time contribution · 30 days access · 15 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Studio-Tier",
  },
  {
    id: 6,
    name: "Workshop Tier",
    slug: "workshop",
    toolCount: 18,
    price: "€44.79",
    priceAmount: 44.79,
    description: "One-time contribution · 30 days access · 18 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Workshop-Tier",
  },
  {
    id: 7,
    name: "Patron Tier",
    slug: "patron",
    toolCount: 21,
    price: "€48.56",
    priceAmount: 48.56,
    description: "One-time contribution · 30 days access · 21 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Patron-Tier",
  },
  {
    id: 8,
    name: "Ultimate Patron",
    slug: "ultimate-patron",
    toolCount: 25,
    price: "€65.48",
    priceAmount: 65.48,
    description: "One-time contribution · 30 days access · all 25 utilities.",
    checkoutUrl: "https://lahcenhub.bgng.io/product/Ultimate-Patron",
  },
];

export const PAID_PLANS = PLANS;

export function getPlanById(id: number): PlanConfig | undefined {
  return PLANS.find((p) => p.id === id);
}

export function getPlanByTier(tier: number): PlanConfig {
  if (tier === 0) return NO_ACCESS_PLAN;
  return PLANS.find((p) => p.id === tier) ?? NO_ACCESS_PLAN;
}

export function getMaxToolIdForTier(tier: number): number {
  if (tier === 0) return 0;
  const plan = PLANS.find((p) => p.id === tier);
  return plan?.toolCount ?? 0;
}

export function isToolUnlocked(toolId: number, tier: number): boolean {
  if (tier === 0) return false;
  return toolId <= getMaxToolIdForTier(tier);
}

export function isValidPlanTier(tier: number): tier is PlanTier {
  return Number.isInteger(tier) && tier >= 0 && tier <= 8;
}
