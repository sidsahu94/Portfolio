// src/components/ui/Badge.jsx
export function StatusBadge({ status }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border-ui)] bg-[var(--card-bg)] shadow-[var(--shadow-base)] text-xs font-semibold text-[var(--text-body)]" role="status">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      {status}
    </div>
  );
}