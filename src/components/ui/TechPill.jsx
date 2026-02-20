// src/components/ui/TechPill.jsx
export function TechPill({ children }) {
  return (
    <span className="px-2.5 py-1 bg-[var(--bg-base)] border border-[var(--border-ui)] text-[var(--text-body)] text-xs rounded-md font-medium shadow-[var(--shadow-base)] hover:border-[var(--text-display)] hover:text-[var(--text-display)] transition-colors cursor-default">
      {children}
    </span>
  );
}