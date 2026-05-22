import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: "sm" | "md" | "lg";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 shadow-md shadow-violet-900/40 border border-violet-500/50",
  secondary: "bg-[var(--surface-elevated)] text-white hover:bg-[#252b38] border border-[var(--border)]",
  ghost: "text-slate-400 hover:bg-[var(--surface-elevated)] hover:text-white",
  outline:
    "border border-[var(--border)] text-slate-200 hover:border-violet-500/60 hover:text-violet-300 bg-transparent",
};

const sizes: Record<"sm" | "md" | "lg", string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:opacity-50 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
