"use client";

import { Check, Copy } from "lucide-react";
import { useCopy } from "@/hooks/useCopy";
import { Button } from "@/components/ui/Button";

interface CopyButtonProps {
  text: string;
  label?: string;
  size?: "sm" | "md";
}

export function CopyButton({ text, label = "Copy", size = "sm" }: CopyButtonProps) {
  const { copy, copied } = useCopy();

  return (
    <Button
      size={size}
      variant="outline"
      onClick={() => copy(text)}
      disabled={!text}
    >
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied" : label}
    </Button>
  );
}
