"use client";

import { CheckCircle2, XCircle, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      role="alert"
      className={`fixed bottom-6 right-6 z-[100] flex max-w-sm items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${
        type === "success"
          ? "border-emerald-200 bg-emerald-50 text-emerald-900"
          : "border-red-200 bg-red-50 text-red-900"
      }`}
    >
      {type === "success" ? (
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
      ) : (
        <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
      )}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button type="button" onClick={onClose} className="shrink-0 opacity-60 hover:opacity-100">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
