"use client";

import { AccessProvider } from "@/context/AccessProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AccessProvider>{children}</AccessProvider>;
}
