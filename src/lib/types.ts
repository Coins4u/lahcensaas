export type PlanTier = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface PlanConfig {
  id: PlanTier;
  name: string;
  slug: string;
  toolCount: number;
  price: string;
  priceAmount: number;
  description: string;
  checkoutUrl: string;
  highlight?: boolean;
}

export interface ToolConfig {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: string;
}

export interface AccessState {
  tier: PlanTier;
  redeemedCode: string | null;
  redeemedAt: string | null;
}

export interface InvoiceRequest {
  name: string;
  email: string;
  planId: number;
}
