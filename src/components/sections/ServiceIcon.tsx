const ICONS: Record<string, React.ReactNode> = {
  "apis-backend": (
    <>
      <path d="M8 9l-4 3 4 3" />
      <path d="M16 9l4 3-4 3" />
      <path d="M13 6l-2 12" />
    </>
  ),
  "arquitetura-modernizacao": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M17.5 14v3.5H14" />
      <path d="M21 17.5h-3.5V21" />
    </>
  ),
  "aplicacoes-web": (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 8h18" />
      <path d="M8 21h8" />
      <path d="M12 18v3" />
    </>
  ),
  "integracao-sistemas": (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M7.5 8l3.5 8" />
      <path d="M16.5 8L13 16" />
      <path d="M8.5 6h7" />
    </>
  ),
  "automacao-processos": (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.9 4.9l2.1 2.1" />
      <path d="M17 17l2.1 2.1" />
      <path d="M19.1 4.9L17 7" />
      <path d="M7 17l-2.1 2.1" />
    </>
  ),
  "seguranca-observabilidade": (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export function ServiceIcon({ id }: { id: string }) {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {ICONS[id] ?? null}
    </svg>
  );
}
