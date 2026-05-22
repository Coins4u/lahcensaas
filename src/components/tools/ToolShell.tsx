import type { ReactNode } from "react";

interface ToolShellProps {
  children: ReactNode;
  actions?: ReactNode;
  hint?: string;
}

export function ToolShell({ children, actions, hint }: ToolShellProps) {
  return (
    <div className="space-y-4">
      {actions && <div className="tool-toolbar">{actions}</div>}
      {hint && (
        <p className="rounded-lg border border-violet-500/20 bg-violet-950/30 px-3 py-2 text-xs text-violet-200/90">
          {hint}
        </p>
      )}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function ToolPanel({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`tool-panel ${className}`}>
      {label && <span className="tool-label">{label}</span>}
      {children}
    </div>
  );
}

export function ToolOutput({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <ToolPanel label={label}>
      <pre className="tool-output whitespace-pre-wrap">{children}</pre>
    </ToolPanel>
  );
}
