import { type TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="tool-label mb-0">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={`w-full rounded-xl border border-[var(--border)] bg-[#0a0c10] px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/25 ${props.readOnly ? "text-emerald-400/90" : ""} ${error ? "border-red-500/50" : ""} ${className}`}
          {...props}
        />
        {error && <p className="text-xs font-medium text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
